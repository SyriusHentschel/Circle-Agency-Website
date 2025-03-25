// Fetch projects from API
const API_URL = 'https://raw.githubusercontent.com/ironhack-javaScript/mid-term-api/main/projects';

// Function to fetch all projects
async function fetchProjects() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const projects = await response.json();
        return projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

// Function to display the first three projects on the homepage
async function displayHomeProjects() {
    const projects = await fetchProjects();

    // Check if we have projects
    if (projects.length === 0) {
        console.error('No projects found');
        return;
    }

    // Get the first three projects (API returns them in descending order)
    const firstThreeProjects = projects.slice(0, 3);

    // Get the container where projects will be displayed
    const projectsContainer = document.getElementById('group-projects');

    // Clear any existing content
    if (projectsContainer) {
        projectsContainer.innerHTML = '';

        // Add each project to the container
        firstThreeProjects.forEach(project => {
            const projectElement = createProjectElement(project);
            projectsContainer.appendChild(projectElement);
        });
    }
}

// Function to get a specific project by UUID
async function getProjectByUuid(uuid) {
    const projects = await fetchProjects();
    return projects.find(project => project.uuid === uuid);
}

// Function to get random projects excluding a specific one
async function getRandomProjects(excludeUuid, count = 3) {
    const projects = await fetchProjects();

    // Filter out the excluded project
    const filteredProjects = projects.filter(project => project.uuid !== excludeUuid);

    // If we don't have enough projects, alert the user
    if (filteredProjects.length < count) {
        alert("Not enough projects available in the API.");
        return filteredProjects;
    }

    // Shuffle the array to get random projects
    const shuffled = [...filteredProjects].sort(() => 0.5 - Math.random());

    // Return the requested number of random projects
    return shuffled.slice(0, count);
}

// Function to create a project element
function createProjectElement(project) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    // Create project image
    const img = document.createElement('img');
    img.className = 'project-image';
    img.src = project.image;
    img.alt = project.name;

    // Create project name
    const name = document.createElement('h3');
    name.className = 'project-name';
    name.textContent = project.name;

    // Create project type
    const type = document.createElement('p');
    type.className = 'project-type';
    type.textContent = project.description;

    // Create project link
    const link = document.createElement('a');
    link.className = 'project-link';
    link.href = `projects/${project.uuid}.html`;
    link.textContent = 'Learn More';

    // Append all elements to the project div
    projectDiv.appendChild(img);
    projectDiv.appendChild(name);
    projectDiv.appendChild(type);
    projectDiv.appendChild(link); // Make sure the link is appended

    return projectDiv;
}

// Initialize home page projects when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the home page
    if (document.getElementById('group-projects')) {
        displayHomeProjects();
    }
});