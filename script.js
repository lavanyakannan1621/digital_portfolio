// Sample project data
const projects = [
    {
        title: "Project 1",
        description: "Description of project 1.",
        link: "https://project1link.com",
    },
    {
        title: "Project 2",
        description: "Description of project 2.",
        link: "https://project2link.com",
    },
    // Add more projects here
];

// Function to populate the projects section
function populateProjects() {
    const projectList = document.getElementById("project-list");

    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectList.appendChild(projectDiv);
    });
}

// Call the function to populate the projects
populateProjects();



