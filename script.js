document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.getElementById('imageOverlay');
        const overlayImg = document.getElementById('overlayImg');
        overlayImg.src = img.src;
        overlay.style.display = 'flex';
    });
});

document.getElementById('closeOverlay').addEventListener('click', () => {
    document.getElementById('imageOverlay').style.display = 'none';
});