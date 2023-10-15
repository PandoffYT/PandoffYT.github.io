document.getElementById('imageForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var formData = new FormData(this);
  fetch('upload.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      loadImages();
      alert('Image uploaded successfully!');
    } else {
      alert('Failed to upload image.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred during image upload.');
  });
});
  
function loadImages() {
  fetch('load_images.php')
  .then(response => response.json())
  .then(data => {
    var imageGallery = document.getElementById('imageGallery');
      imageGallery.innerHTML = '';
      data.forEach(imageName => {
        var imgItem = document.createElement('div');
        imgItem.className = 'img-item';
        var img = document.createElement('img');
        img.src = 'images/all/' + imageName;
        img.alt = imageName;
        var img_text = document.createElement('h3');
        img_text.innerText = img.alt;
        var img_view = document.createElement('h3');
        img_view.innerText = Math.round(Math.random() * 2000);
        imgItem.appendChild(img);
        imgItem.appendChild(img_text);
        imageGallery.appendChild(imgItem);
      });
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while loading images.');
    });
}
  
loadImages();