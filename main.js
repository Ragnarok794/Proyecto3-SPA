import './style.css'
import './navbar.css'

import { home } from './home/Home'
import { projects } from './Projects/Projects'
import { experience } from './Experience/Experience'


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

home()


