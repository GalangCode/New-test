// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    const projectImages = document.querySelectorAll('aside img');
    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            alert(`Ini adalah gambar dari ${img.alt}`);
        });
    });
});
