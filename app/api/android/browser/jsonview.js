document.addEventListener('DOMContentLoaded', function() {
    const jsonFilePath = 'verhistory.json';
    const selectElement = document.getElementById('verSelect');
    const downloadbtn = document.getElementById('downloadbtn');
    
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            const versions = data.version;

            if (Array.isArray(versions)) {
                versions.forEach(version => {
                    const option = document.createElement('option');
                    option.value = version.link; // Corrected to use version.link
                    option.textContent = version.version; // Corrected to use version.version
                    selectElement.appendChild(option);
                });
            } else {
                console.error('The "version" property is not an array or is missing.');
            }
        })

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