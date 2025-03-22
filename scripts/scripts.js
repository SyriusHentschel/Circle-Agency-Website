document.addEventListener("DOMContentLoaded", () => {
    // Handle responsive navigation menu
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // This code is commented out as we're using static HTML for projects
    // If you want to dynamically generate projects in the future, uncomment and modify this code
    /*
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
        const projects = [
            {
                name: "Simplify",
                description: "UI Design & App Development",
                image: "file:///C:/Users/slyri/OneDrive/Documents/Mid-project%20files/projects-section/1.jpg",
                link: "projects.html"
            },
            {
                name: "Dashcoin",
                description: "Web Development",
                image: "file:///C:/Users/slyri/OneDrive/Documents/Mid-project%20files/projects-section/2.jpg",
                link: "#"
            },
            {
                name: "Vectorify",
                description: "User Experience Design",
                image: "file:///C:/Users/slyri/OneDrive/Documents/Mid-project%20files/projects-section/3.jpg",
                link: "#"
            }
        ];

        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.className = "project";

            projectCard.innerHTML = `
                <img class="project-image" src="${project.image}" alt="${project.name} Project Image">
                <h4 class="project-name">${project.name}</h4>
                <p class="project-type">${project.description}</p>
                <a class="project-link" href="${project.link}">Learn more</a>
            `;

            projectsContainer.appendChild(projectCard);
        });
    }
    */

    // Handle contact form validation with improved email validation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form submission for validation
            const name = document.getElementById("full-name").value.trim(); // Changed from "name" to "full-name"
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name.toLowerCase() === "ironhack") {
                alert("You cannot be Ironhack, because I am Ironhack!");
                return;
            }

            // Improved validation with specific error messages
            if (!name) {
                alert("Please enter your name.");
                return;
            }

            if (!email) {
                alert("Please enter your email address.");
                return;
            }

            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (!message) {
                alert("Please enter your message.");
                return;
            }

            // Success message with name personalization
            alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
            contactForm.reset();
        });
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to project cards on scroll
    const animateOnScroll = () => {
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (cardPosition < screenPosition) {
                card.classList.add('animate');
                // Add console log to verify animation is triggering
                console.log('Animation added to card:', card);
            }
        });
    };

    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Initial check for elements in view
    animateOnScroll();

    // Remove direct JS hover effect - we'll use CSS instead
    // This was causing the blinking issue when clicking

    // Add email subscription functionality
    const emailForm = document.getElementById('cta-input-group');
    if (emailForm) {
        emailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('email-input');
            const email = emailInput.value.trim();

            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!email || !emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
            emailInput.value = '';
        });
    }

    // Add direct click handler for subscribe button as a backup
    const subscribeBtn = document.getElementById('cta-subscribe-btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', (e) => {
            const emailForm = document.getElementById('cta-input-group');
            if (emailForm) {
                // If this is inside a form, let the form handler take care of it
                if (e.target.form) return;

                // Otherwise handle it directly
                e.preventDefault();
                const emailInput = document.getElementById('email-input');
                if (!emailInput) return;

                const email = emailInput.value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!email || !emailRegex.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }

                alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
                emailInput.value = '';
            }
        });
    }

    // Add current year to footer copyright if exists
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
});
