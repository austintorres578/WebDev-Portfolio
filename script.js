let firstProject = document.querySelector(".first-project")
let secondProject = document.querySelector(".second-project")
let thirdProject = document.querySelector(".third-project")
let fourthProject = document.querySelector(".fourth-project")

let projectLink=document.querySelector(".project-link")
let projectRepo=document.querySelector(".project-repo")

let projectNameText = document.querySelector(".project-name-text")
let projectDescriptionText = document.querySelector(".project-description-text")

let projects = document.querySelector(".projects-container")

let currentlyClicked


firstProject.addEventListener("click",(event)=>{
    selectProject(event.target)
    projectNameText.innerHTML="XFinity Clone";
    projectDescriptionText.innerHTML="This project is a clone of a previous version of the Xfinity's homepage in June 2021. The goal was to recreate the exact site as closely as possible without using the official sites code."
    projectLink.href="https://austintorres578.github.io/Mock-Xfinity/"
    projectRepo.href="https://github.com/austintorres578/Mock-Xfinity"
    document.querySelector(".project-details-tech").children[3].style.display="none";
    document.querySelector(".project-details-tech").children[4].style.display="none";
})

secondProject.addEventListener("click",(event)=>{
    selectProject(event.target)
    projectNameText.innerHTML="Perfect Lighthouse Score";
    projectDescriptionText.innerHTML="This project was originally going to be used as updated version of a family friends coverband website. Now it has become a project with the goal to obtain a perfect score on Google Lighthouse";
    projectLink.href="https://austintorres578.github.io/ROCKHORSE-SITE/"
    projectRepo.href="https://github.com/austintorres578/ROCKHORSE-SITE"
    document.querySelector(".project-details-tech").children[3].style.display="none";
    document.querySelector(".project-details-tech").children[4].style.display="block";
})
thirdProject.addEventListener("click",(event)=>{
    selectProject(event.target)
    projectNameText.innerHTML="Weather Channel Clone";
    projectDescriptionText.innerHTML="This project was is an improvement on the basic weather app. The page is a clone of the weather channel but also works like the original because of API connectivity.";
    projectLink.href="https://bejewelled-unicorn-5837be.netlify.app/"
    projectRepo.href="https://github.com/austintorres578/React-weather-app"
    document.querySelector(".project-details-tech").children[4].style.display="none";
    document.querySelector(".project-details-tech").children[3].style.display="block";
})
fourthProject.addEventListener("click",(event)=>{
    selectProject(event.target)
    projectNameText.innerHTML="Game Database";
    projectDescriptionText.innerHTML="This project is a gaming database that allows users to search for games by name, console, and genre. The games are sorted by metacritic score and are selectable to view details like game description and more.";
    projectLink.href="https://poetic-rabanadas-1d8116.netlify.app/"
    projectRepo.href="https://github.com/austintorres578/react-game-database"
    document.querySelector(".project-details-tech").children[4].style.display="none";
    document.querySelector(".project-details-tech").children[3].style.display="block";
})

function selectProject(project){
    for (let index = 0; index < projects.children.length; index++) {
        if(projects.children[index].children[0]===project){
            projects.children[index].style.backgroundColor="#00e8b6"
        }else{
            projects.children[index].style.backgroundColor="#00252b"
        }
        
    }
}

