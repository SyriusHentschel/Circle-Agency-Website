```
 ___                     _                _
|_ _| _ __   ___  _ __  | |__   __ _  ___| | __
 | | | '__| / _ \| '_ \ | '_ \ / _` |/ __| |/ /
 | | | |   | (_) | | | || | | | (_| | (__|   <
|___||_|    \___/|_| |_||_| |_|\__,_|\___|_|\_\

      Circle Agency Website Mid-Term Project
```

# Circle Agency Website

A fully responsive website for Circle, a digital design agency, built with HTML, CSS, and JavaScript.

## Project Overview

This project is a multi-page website for Circle, featuring:
- Homepage with featured projects and testimonials
- Projects page showcasing the agency's work
- Services page detailing the agency's offerings
- Contact page with a form for inquiries

## Features

### Responsive Design
- Fully responsive layout that works on mobile, tablet, and desktop
- Flexbox-based layout system
- Mobile-friendly navigation
- Optimized contact form for all screen sizes
- Consistent UI elements across devices

### Interactive Elements
- Contact form with validation
- Email subscription with validation
- Dynamic project cards
- Smooth scrolling for anchor links
- Animation effects on scroll

### Pages
- **Home**: Company introduction, featured projects, services overview, and testimonials
- **Projects**: Gallery of completed projects with descriptions
- **Services**: Detailed information about the agency's service offerings
- **Contact**: Contact form and company information
- **404**: Custom error page for better user experience

## Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**:
  - Styling with flexbox for layout
  - Modular CSS organization with separate files for components and pages
  - Media queries for responsive design
- **JavaScript**:
  - DOM manipulation and form validation
  - Fetch API for retrieving project data
  - Dynamic content creation
  - Animation effects
- **External API**: Projects data from Ironhack API
- **Git**: Version control
- **GitHub**: Repository hosting and collaboration
- **Netlify**: Deployment platform
- **Animated GIFs**: Custom animations for enhanced user experience

## Setup and Deployment

### Local Development
1. Clone the repository
2. Open any HTML file in your browser to view the site locally

### Deployment
The site is deployed on Netlify and can be accessed at [https://shcircle-agency.netlify.app](https://shcircle-agency.netlify.app/).

## Project Structure

```
├── index.html          # Homepage
├── projects.html       # Projects overview page
├── projects/
│   └── 1.html          # Project detail page for project with UUID 1
├── services.html       # Services page
├── contact.html        # Contact page
├── 404.html            # Custom 404 error page
├── styles/
│   ├── styles.css      # Main stylesheet
│   ├── projects.css    # Projects page styles
│   ├── services.css    # Services page styles
│   ├── contact.css     # Contact page styles
│   ├── footer.css      # Footer component styles
│   └── mobile.css      # Responsive design styles
├── js/
│   ├── main.js         # Main JavaScript functionality
│   ├── projects.js     # Project fetching and display functionality
│   ├── form-validation.js # Form validation functionality
│   └── menu.js         # Responsive menu functionality
├── scripts/
│   ├── scripts.js      # General site scripts
│   └── logo-animations.js # Logo animation functionality
├── images/
│   ├── logos/          # Logo images
│   ├── hero-section/   # Hero section images
│   ├── projects-section/ # Project images
│   ├── services-section/ # Services images
│   ├── testimonial-section/ # Testimonial images
│   ├── newsletter/     # Newsletter section images
│   ├── contact-section/ # Contact page images
│   └── 404-section/    # 404 page images including error animation
└── README.md           # Project documentation
```

## Responsive Breakpoints

- Extra Small Mobile: Up to 375px
- Mobile: 376px to 767px
- Tablet: 768px to 1023px
- Desktop: 1024px and above

Each breakpoint has specific optimizations for layout, typography, and interactive elements.

## JavaScript Functionality

- **API Integration**: Fetches and displays projects from an external API
- **Project Detail Page**: Dynamically loads project details from the API
- **Form Validation**:
  - Validates contact and subscription forms
  - Shows custom error message for emails containing "ironhack"
  - Checks for valid email format
- **Responsive Menu**: Toggles mobile navigation menu with hamburger icon
- **Random Project Selection**: Displays random related projects on the project detail page
- **Dynamic Form Creation**: Wraps CTA section elements in a form for proper validation
- **Logo Animations**: Custom animations for the agency logo using the logo-animations.js script
- **Dynamic Copyright Year**: Automatically updates the copyright year in the footer

## API Integration

The website integrates with the Ironhack Projects API to dynamically display project information:

- **API Endpoint**: `https://raw.githubusercontent.com/ironhack-javaScript/mid-term-api/main/projects`
- **Features**:
  - Fetches and displays the first three projects on the homepage
  - Loads detailed information for individual projects on their respective pages
  - Displays random related projects on the project detail pages
  - Handles API errors gracefully with user notifications

## Recent Updates

### 404 Page Enhancement (July 2024)
- Added animated GIF for a more engaging 404 error page
- Improved visual feedback for users who encounter missing pages
- Enhanced user experience with custom error animation

### Contact Page Improvements (June 2024)
- Enhanced mobile and tablet responsiveness for the contact form
- Fixed layout issues on smaller screens
- Improved form field spacing and sizing for better usability
- Added proper box-sizing to prevent overflow issues
- Optimized button styling for touch interfaces
- Created consistent styling across all device sizes
- Added subtle visual enhancements for better user experience

## Future Enhancements

- Blog section with articles
- Project filtering functionality
- Dark mode toggle
- Multi-language support
- Performance optimizations
- Additional project detail pages
- Contact form submission functionality with backend integration

## Credits

- Design: Circle Agency
- Development: Victor Valerio
- Images: Ironhack resources - AI-generated images and Giphy
- Fonts: Google Fonts (Roboto)
