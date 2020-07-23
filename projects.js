"use strict";

const projects = [
    {
        title: "Pet Adoption", 
        screenshot: "project-images/pet-adoption.png", 
        description: "Single page application displaying cards with details for adoptable pets with buttons with filter functionality.",
        technologiesUsed: "HTML / CSS / JavaScript / Version Control with Github",
        available: true,
        url: "https://pet-adoption-michael-pfohl.netlify.app/", 
        githubUrl: "https://github.com/michaelpfohl/pet-adoption"
    },
    {
        title: "Monochromed Template", 
        screenshot: "project-images/monochromed-template.png", 
        description: "Reimagining of the Monochromed Template from Templated.co",
        technologiesUsed: "HTML / CSS / Version Control with Github",
        available: true,
        url: "https://monochromed-template.netlify.app/", 
        githubUrl: "https://github.com/michaelpfohl/monochromed-template"
    },
    {
        title: "Coffee Houses of Nashville", 
        screenshot: "project-images/coffee-houses.png", 
        description: "Simple webpage using flexbox to display cards for a variety of coffee houses in Nasvhille",
        technologiesUsed: "HTML / CSS / Version Control with Github",
        available: true,
        url: "https://pet-adoption-michael-pfohl.netlify.app/", 
        githubUrl: "https://github.com/michaelpfohl/pet-adoption"
    },
    {
        title: "Fork Product Cards", 
        screenshot: "project-images/fork-product-cards.png", 
        description: "Simple webpage using flexbox to display cards for forks using an overlayed image on sold out items.",
        technologiesUsed: "HTML / CSS / Version Control with Github",
        available: true,
        url: "https://github.com/michaelpfohl/coffee-houses", 
        githubUrl: "https://github.com/michaelpfohl/coffee-houses"
    }
]

const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
}
const buildProjects = () => {
    let domString = "";
    for(let i = 0; i < projects.length; i++){
        if (projects[i].available){
            domString+=`<div class="project--card">
                          <img src="${projects[i].screenshot}" alt="${projects[i].title}" class="project--image">
                          <div class="project--details">
                           <h1 class="project--details-title">${projects[i].title}</h1>
                           <p class="project--details-description">${projects[i].description}</p>
                           <p class="project--details-technologies">${projects[i].technologiesUsed}</p>
                           <a href="${projects[i].githubUrl}" class="project--details-link"><i class="fab fa-github"></i></a>
                           <a href="${projects[i].url}" class="project--details-link"><i class="fas fa-eye"></i></a>
                          </div>
                        </div>` 
        }
    }
    printToDom("main--container", domString);
}

buildProjects();