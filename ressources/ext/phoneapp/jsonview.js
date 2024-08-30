document.addEventListener("DOMContentLoaded", function () {
    fetch('version.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("dataDisplay");

            // Create HTML elements to display the JSON data
            const versionElement = document.createElement("h2");
            versionElement.textContent = data.version;
            dataDisplay.appendChild(versionElement);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});