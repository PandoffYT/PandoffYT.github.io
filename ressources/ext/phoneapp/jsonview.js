document.addEventListener("DOMContentLoaded", function () {
    fetch('version.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("dataDisplay");

            const versionElement = document.createElement("h3");
            versionElement.textContent ="version " + data.version;
            dataDisplay.appendChild(versionElement);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});