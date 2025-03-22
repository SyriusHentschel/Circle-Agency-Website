// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('Circle Agency website loaded successfully!');
    
    // Add form to CTA section if it doesn't exist
    const ctaInputGroup = document.getElementById('cta-input-group');
    if (ctaInputGroup && !document.getElementById('cta-form')) {
        // Get the elements
        const inputWrapper = ctaInputGroup.querySelector('.input-wrapper');
        const subscribeBtn = document.getElementById('cta-subscribe-btn');
        
        if (inputWrapper && subscribeBtn) {
            // Create a form element
            const form = document.createElement('form');
            form.id = 'cta-form';
            form.style.display = 'flex';
            form.style.gap = '20px';
            form.style.width = '100%';
            form.style.justifyContent = 'center';
            
            // Move the elements into the form
            ctaInputGroup.insertBefore(form, inputWrapper);
            form.appendChild(inputWrapper);
            form.appendChild(subscribeBtn);
        }
    }
});