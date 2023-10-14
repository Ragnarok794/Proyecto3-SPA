import './proyectos.css'
import { proyectos } from './constant'

export const projects = () =>{
const divForContent = document.querySelector(".content")
const ulProjects = document.createElement('ul')
ulProjects.className = "ul_projects"

divForContent.appendChild(ulProjects)

const proyectTemplate =(project) =>{
    const template = `<li class="li_projects"><figure class="icon-project"><img  src=${project.icon}></figure><div><h4 class="text">${project.text}</h4><a href="${project.link}" class="links_projects">${project.link}</a></div></li>`
    ulProjects.innerHTML += template
}

 const printProjects= (project)=> {
    for (project of proyectos) {
        proyectTemplate(project)
    }
}

printProjects()
const links = document.querySelectorAll('.links_projects')
links.forEach(element => {
element.addEventListener('click', (ev) => {
    ev.preventDefault(); 
    const linkHref = element.href;
    console.log('El link apunta a:', linkHref );
   }) })

}