document.addEventListener('DOMContentLoaded', function() {
    // Get all logos except the Circle logo
    const logos = [
        document.getElementById('airbnb-logo'),
        document.getElementById('google-logo'),
        document.getElementById('microsoft-logo'),
        document.getElementById('fedex-logo'),
        document.getElementById('amazon-logo')
    ];

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Apply initial styles to all logos
    logos.forEach(logo => {
        // Ensure logos are initially invisible and grayscale
        // (CSS has these set, but this is a fallback)
        logo.style.opacity = '0';
        logo.style.filter = 'grayscale(100%)';
        logo.style.webkitFilter = 'grayscale(100%)'; // For Safari support
        logo.style.transition = 'opacity 1s ease, filter 1s ease';
        logo.style.webkitTransition = 'opacity 1s ease, -webkit-filter 1s ease'; // For Safari support
    });

    // Function to animate logos sequentially
    function animateLogos() {
        if (isInViewport(document.getElementById('logos-section'))) {
            logos.forEach((logo, index) => {
                // Stagger the animations
                setTimeout(() => {
                    // First fade in as grayscale
                    logo.style.opacity = '1';
                    
                    // Then after a delay, turn to color with pulse animation
                    setTimeout(() => {
                        logo.style.filter = 'grayscale(0%)';
                        logo.style.webkitFilter = 'grayscale(0%)'; // For Safari support
                        logo.style.animation = 'logoPulse 0.8s ease';
                        logo.style.webkitAnimation = 'logoPulse 0.8s ease'; // For Safari support

                        // Remove animation after it completes
                        setTimeout(() => {
                            logo.style.animation = '';
                            logo.style.webkitAnimation = '';
                        }, 800);
                    }, 1000);
                }, index * 500); // 500ms delay between each logo
            });
            
            // Remove scroll listener once animation has started
            window.removeEventListener('scroll', animateLogos);
        }
    }

    // Check if logos section is already in viewport on page load
    if (isInViewport(document.getElementById('logos-section'))) {
        animateLogos();
    } else {
        // Add scroll event listener to check when logos come into view
        window.addEventListener('scroll', animateLogos);
    }
});