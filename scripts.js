// Scroll to top button
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerText = '↑';
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show the scroll-to-top button when scrolled down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });
}); 