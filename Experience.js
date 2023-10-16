import { experienciaLaboral } from "./constant";
import "./experience.css"

export const experience =() =>{
const divForContent = document.querySelector(".content")
const ulExperience = document.createElement('ul')
ulExperience.className = "ul_projects"

divForContent.appendChild(ulExperience)

const experienceTemplate =(company) =>{
     
 
    const template = `<li class="li_companies"><figure class="icon-companies"><img  src=${company.logo}></figure><div><ul class=" ul_data_companies"><li><h4>Empresa: </h4>${company.name}</li><li><h4>Puesto: </h4>${company.position}</li><li><h4>Fechas: </h4>${company.date}</li><li><h4>Descripcion: </h4>${company.description}</li><li><h4>Responsabilidades: </h4><ul>${company.responsabilties.map(responsabilidad => `<li>${responsabilidad}</li>`).join('')}</ul></li><li><h4>Web: <a href="${company.web}" class="links_companies">${company.web}</a></h4></li></ul></div></li>`
ulExperience.innerHTML += template}
    

 const printExperience= (company)=> {
    for (company of experienciaLaboral) {
        experienceTemplate(company)
    }
}

printExperience()

const links = document.querySelectorAll('.links_companies')
links.forEach(element => {
element.addEventListener('click', (ev) => {
    ev.preventDefault(); 
    const linkHref = element.href;
    console.log('El link apunta a:', linkHref );
   }) })
}