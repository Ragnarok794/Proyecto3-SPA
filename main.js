import './style.css'
import './navbar.css'
import './footer.css'
import { home } from './components/home/Home'
import { projects } from './components/projects/Projects'
import { experience} from './components/experience/Experience'
import { ulRRSS } from "./functions"

const divForContent = document.querySelector(".content")

document.querySelector('.home').addEventListener('click', (ev) => {
    ev.preventDefault(); 
     divForContent.innerHTML = null
            home()
        const linkHref = element.href;
    console.log('El link apunta a:', linkHref );
   }
)
document.querySelector('.projects').addEventListener('click', (ev) => {
    ev.preventDefault(); 
     divForContent.innerHTML = null
            projects()
        const linkHref = element.href;
    console.log('El link apunta a:', linkHref );
   }
)
document.querySelector('.experience').addEventListener('click', (ev) => {
    ev.preventDefault(); 
     divForContent.innerHTML = null
            experience()
        const linkHref = element.href;
    console.log('El link apunta a:', linkHref );
   }
)


const footer = document.querySelector('footer')
const RRSS = `<div class="RRSS_container">${ulRRSS.join('')}</div>`

footer.innerHTML += RRSS
const linksOfRRSS = document.querySelectorAll('.li_RRSS > a')
linksOfRRSS.forEach(element=> {
  element.addEventListener('click', (ev) => {
   
   ev.preventDefault(); 
   const linkHref = element.href

   console.log('El link apunta a:', linkHref );
   })})

 




home()




// Esto es lo que intente hacer para reducir el codigo pero me daba error en netify
// const links = document.querySelectorAll('.navbarSection')
// links.forEach(element => {
// element.addEventListener('click', (ev) => {
//     ev.preventDefault(); 
//     const classes = [ 'home', 'projects', 'experience'];
//     for (let i = 0; i < classes.length; i++) {
//         if (ev.target.classList.contains(classes[i])) {
//             divForContent.innerHTML = null
//            const toRender =  eval(classes[i])
//            toRender()
//         }
//     const linkHref = element.href;
//     console.log('El link apunta a:', linkHref );
//    }
// }
// ) 
// }
// )




