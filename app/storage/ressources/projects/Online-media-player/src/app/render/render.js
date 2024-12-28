function changeMedia() {
    var fileselect = document.getElementById('mediaSelect');

    var player = document.getElementById('player');

    var file = fileselect.files[0];

    if (file) {
        var blob = URL.createObjectURL(file);

        player.src = blob;

        player.onended = function() {
            URL.revokeObjectURL(blob);
        };
    }
}

$("#mediaSelect").change(function() {
    filename = this.mediaSelect[0].name;
    console.log(filename);
});