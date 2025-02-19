// Highlight active nav link
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Hero Button Alert
const heroButton = document.querySelector('.hero button');
if (heroButton) {
    heroButton.addEventListener('click', function() {
        alert('Thanks for your interest! We will get back to you soon.');
    });
}

// Image Hover Effect
const collegeImage = document.querySelector('.college-building img');
if (collegeImage) {
    collegeImage.addEventListener('mouseover', function() {
        collegeImage.style.transform = 'scale(1.05)';
        collegeImage.style.transition = 'transform 0.3s ease';
    });

    collegeImage.addEventListener('mouseout', function() {
        collegeImage.style.transform = 'scale(1)';
    });
}
