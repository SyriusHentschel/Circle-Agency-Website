// Responsive menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Create a menu toggle button for mobile
    const headerContainer = document.getElementById('header-container');
    const headerCenter = document.getElementById('header-center');
    
    if (headerContainer && headerCenter) {
        // Create the menu toggle button
        const menuToggle = document.createElement('button');
        menuToggle.id = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.style.display = 'none'; // Hide by default (will show in mobile view)
        
        // Add styles for the menu toggle
        const style = document.createElement('style');
        style.textContent = `
            #menu-toggle {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #072AC8;
                display: none;
            }
            
            @media (max-width: 768px) {
                #menu-toggle {
                    display: block;
                }
                
                #header-center {
                    width: 100%;
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                }
                
                #header-center.active {
                    max-height: 200px;
                }
                
                #header-center ul {
                    flex-direction: column;
                    align-items: center;
                    padding: 10px 0;
                }
                
                #header-container {
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
            }
        `;
        
        document.head.appendChild(style);
        
        // Insert the toggle button before the navigation
        headerContainer.insertBefore(menuToggle, headerCenter);
        
        // Add click event to toggle the menu
        menuToggle.addEventListener('click', function() {
            headerCenter.classList.toggle('active');
        });
    }
});