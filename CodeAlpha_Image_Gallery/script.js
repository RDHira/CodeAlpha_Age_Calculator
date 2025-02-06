const images = [
    { main: '/img2/pic1.jpg', thumb: '/img2/pic1.jpg' },
    { main: '/img2/pic4.jpg', thumb: '/img2/pic4.png' },
    { main: '/img2/pic5.jpg', thumb: '/img2/pic5.png' },
    { main: '/img2/pic6.jpg', thumb: '/img2/pic6.png' },
    { main: '/img2/pic7.jpg', thumb: '/img2/pic7.png' },
    { main: '/img2/pic8.jpg', thumb: '/img2/pic8.png' },
    { main: '/img2/pic9.jpg', thumb: '/img2/pic9.png' },
    { main: '/img2/pic10.jpg', thumb: '/img2/pic10.png' },
    { main: '/img2/pic11.jpg', thumb: '/img2/pic11.png' },
    { main: '/img2/pic12.jpg', thumb: '/img2/pic12.png' }
];

let currentIndex = 0;
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

function updateMainImage(index) {
    currentIndex = index;
    mainImage.src = images[index].main;
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnails[index].classList.add('active');
}

function openModal() {
    modal.style.display = 'flex';
    modalImage.src = images[currentIndex].main;
}

function closeModal() {
    modal.style.display = 'none';
}

// Thumbnail click events
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        updateMainImage(index);
    });
    thumb.addEventListener('dblclick', openModal);
});

// Navigation buttons
document.getElementById('prevButton').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainImage(currentIndex);
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage(currentIndex);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            modalImage.src = images[currentIndex].main;
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            modalImage.src = images[currentIndex].main;
        } else if (e.key === 'Escape') {
            closeModal();
        }
    }
});

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};