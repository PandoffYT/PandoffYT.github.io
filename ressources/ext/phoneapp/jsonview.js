document.addEventListener('DOMContentLoaded', function() {
    const jsonFilePath = 'verhistory.json';
    const selectElement = document.getElementById('verSelect');
    const downloadbtn = document.getElementById('downloadbtn');
    
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            const ver = data.version;

            ata = JSON.parse(ver);
            ver.forEach(version => {
                const option = document.createElement('option');
                option.value = ver.link; // Use the image URL as the value
                option.textContent = ver.version + ver.vername;
                selectElement.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));

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