function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function uploadPhoto() {
  const input = document.getElementById('fileInput');
  const gallery = document.getElementById('gallery');

  const file = input.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function(e) {
    const img = document.createElement('img');
    img.src = e.target.result;
    gallery.appendChild(img);
  };

  reader.readAsDataURL(file);
}