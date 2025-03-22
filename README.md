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
- **CSS3**: Styling with flexbox for layout
- **JavaScript**:
  - DOM manipulation and form validation
  - Fetch API for retrieving project data
  - Dynamic content creation
- **External API**: Projects data from Ironhack API
- **Git**: Version control
- **Netlify**: Deployment platform

## Setup and Deployment

### Local Development
1. Clone the repository
2. Open any HTML file in your browser to view the site locally

### Deployment
The site is deployed on Netlify and can be accessed at [your-netlify-url].

## Project Structure

```
├── index.html          # Homepage
├── projects/
│   └── 1.html          # Project detail page for project with UUID 1
├── services.html       # Services page
├── contact.html        # Contact page
├── 404.html            # Custom 404 error page
├── Styles/
│   └── styles.css      # Main stylesheet
├── js/
│   ├── main.js         # Main JavaScript functionality
│   ├── projects.js     # Project fetching and display functionality
│   ├── form-validation.js # Form validation functionality
│   └── menu.js         # Responsive menu functionality
├── assets/
│   ├── logos/          # Logo images
│   └── images/         # Site images
└── README.md           # Project documentation
```

## Responsive Breakpoints

- Mobile: Up to 767px
- Tablet: 768px to 1023px
- Desktop: 1024px and above

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

## API Integration

The website integrates with the Ironhack Projects API to dynamically display project information:

- **API Endpoint**: `https://raw.githubusercontent.com/ironhack-javaScript/mid-term-api/main/projects`
- **Features**:
  - Fetches and displays the first three projects on the homepage
  - Loads detailed information for individual projects on their respective pages
  - Displays random related projects on the project detail pages
  - Handles API errors gracefully with user notifications

## Future Enhancements

- Blog section with articles
- Project filtering functionality
- Dark mode toggle
- Multi-language support
- Performance optimizations
- Additional project detail pages
- Contact form submission functionality

## Credits

- Design: Circle Agency
- Development: Victor Valerio
- Images: Ironhack resources and AI-generated images
- Fonts: Google Fonts (Roboto)