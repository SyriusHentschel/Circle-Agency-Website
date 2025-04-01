// This script ensures consistent header behavior across all pages

document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation link based on current page
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    // Remove any existing active classes first
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Set the active class based on current page
    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        // Check if the current page matches the link's href
        if (currentPage.endsWith(href)) {
            link.classList.add('active');
        } else if (currentPage.includes('/projects/') && href === 'projects.html') {
            // Special case for project detail pages
            link.classList.add('active');
        }
    });

    // Handle Contact Us button active state
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        // Remove active class first
        contactButton.classList.remove('active');

        // Add active class if on contact page
        if (currentPage.endsWith('contact.html')) {
            contactButton.classList.add('active');
        }
    }
});