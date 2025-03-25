// Responsive menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Get existing menu toggle button and navigation
    const menuToggle = document.getElementById('menu-toggle');
    const headerCenter = document.getElementById('header-center');
    const navLinks = document.querySelectorAll('#header-center a');

    if (menuToggle && headerCenter) {
        console.log("Menu elements found:", { menuToggle, headerCenter });

        // Toggle menu when hamburger is clicked
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            headerCenter.classList.toggle('active');
            menuToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            console.log("Menu toggled, active state:", headerCenter.classList.contains('active'));
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                headerCenter.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
                console.log("Menu closed via link click");
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (
                headerCenter.classList.contains('active') &&
                !headerCenter.contains(e.target) &&
                e.target !== menuToggle &&
                !menuToggle.contains(e.target)
            ) {
                headerCenter.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
                console.log("Menu closed via outside click");
            }
        });
    } else {
        console.error("Menu elements not found:", { menuToggle, headerCenter });
    }
});