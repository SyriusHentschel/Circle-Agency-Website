// Form validation
document.addEventListener('DOMContentLoaded', function() {
    // Get the form elements - handle both contact form and CTA form
    const contactForm = document.getElementById('contact-form');
    const ctaForm = document.getElementById('cta-form');
    const emailInput = document.getElementById('email-input');

    // Function to validate a form
    function validateForm(event, form, emailField) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the email value
        const email = emailField.value.trim();

        // Check if email is empty
        if (!email) {
            alert("Email address is required.");
            return false;
        }

        // Check if the email contains "ironhack"
        if (email.toLowerCase().includes('ironhack')) {
            alert("You cannot be Ironhack, because I am Ironhack.");
            return false;
        }

        // Check if the email is valid
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // If all validations pass, you can submit the form
        alert("Thank you for subscribing!");
        form.reset();
    }

    // Set up contact form validation if it exists
    if (contactForm) {
        const contactEmailInput = contactForm.querySelector('input[type="email"]');
        contactForm.addEventListener('submit', function(event) {
            validateForm(event, contactForm, contactEmailInput);
        });
    }

    // Set up CTA form validation if it exists
    if (ctaForm) {
        ctaForm.addEventListener('submit', function(event) {
            validateForm(event, ctaForm, emailInput);
        });
    }

    // If there's a subscribe button without a form, set it up
    const subscribeBtn = document.getElementById('cta-subscribe-btn');
    if (subscribeBtn && emailInput && !ctaForm) {
        subscribeBtn.addEventListener('click', function() {
            // Create a temporary form object
            const tempForm = { reset: function() { emailInput.value = ''; } };
            validateForm({ preventDefault: function() {} }, tempForm, emailInput);
        });
    }
});

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}