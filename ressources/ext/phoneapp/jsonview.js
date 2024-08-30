document.addEventListener('DOMContentLoaded', function() {
    const jsonFilePath = 'verhistory.json';
    const selectElement = document.getElementById('verSelect');
    const downloadbtn = document.getElementById('downloadbtn');
    
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            const versions = data.version;

            versions.forEach(version => {
                const option = document.createElement('option');
                option.value = versions.link; // Use the image URL as the value
                option.textContent = versions.version;
                selectElement.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));

        if (!data.colors || !Array.isArray(data.colors)) {
            console.error('The colors property is missing or not an array.');
            return;
        }
        
    selectElement.addEventListener('change', function() {
        downloadbtn.innerHTML = '';

        const selectedver = selectElement.value;

        const downloadButton = document.createElement('a');
        downloadButton.href = selectedver;
        downloadButton.download = selectedver.split('/').pop();
        downloadButton.textContent = 'Download APK';
        downloadButton.style.display = 'inline-block';
        downloadButton.style.marginTop = '10px';
        downloadButton.style.padding = '10px';
        downloadButton.style.backgroundColor = '#007BFF';
        downloadButton.style.color = '#fff';
        downloadButton.style.textDecoration = 'none';
        downloadButton.style.borderRadius = '5px';

        downloadbtn.appendChild(downloadButton);
    });
});