import './style.css'
import './navbar.css'

import { home } from './components/home/Home'
import { projects } from './components/projects/Projects'
import { experience, experience } from './components/experience/Experience'


const divForContent = document.querySelector(".content")



const links = document.querySelectorAll('.navbarSection')
links.forEach(element => {
element.addEventListener('click', (ev) => {
    ev.preventDefault(); 
    const classes = [ 'home', 'projects', 'experience'];
    for (let i = 0; i < classes.length; i++) {
        if (ev.target.classList.contains(classes[i])) {
            divForContent.innerHTML = null
           const toRender =  eval(classes[i])
           toRender()
        }
    const linkHref = element.href;
    console.log('El link apunta a:', linkHref );
   }
}
) 
}
)
const home = home()
const projects = projects()
const experience = experience()

home()


