import { ulSkill } from "./functions";
import { ulRRSS } from "./functions"
import './home.css'
export const home = ()=>{

const divForContent = document.querySelector(".content")
const divLeft = document.createElement("div")
divLeft.className = 'divleft'
divForContent.appendChild(divLeft)

const photoPerfil =` <div>
<div class="photo"><img src="./assets/perfil/foto_perfil.jpg"></div></div>`

 const information = 
`<div class="text">
  <p class="title"><h3> Desarrollador Full Stack Innovador Listo para Impulsar tu Equipo</h3></p>
  <p class="introduction">Hola! Soy Adrian, un apasionado Desarrollador Full Stack con una sólida experiencia en la creación de soluciones web robustas y escalables. Mi enfoque va más allá del código; me encanta construir experiencias digitales excepcionales que transformen ideas en realidades digitales impresionantes.

  </p>
  <h3>Fortalezas:</h3>
  <ul class="skills-list">${ulSkill.join('')}
  </ul>
</div>`;

const RRSS = `<div class="RRSS_container">${ulRRSS}</div>`




  divLeft.innerHTML += photoPerfil
  divLeft.innerHTML += RRSS 
  divForContent.innerHTML += information

 const linksOfRRSS = document.querySelectorAll('.li_RRSS > a')
 linksOfRRSS.forEach(element=> {
   element.addEventListener('click', (ev) => {
    
    ev.preventDefault(); 
    const linkHref = element.href

    console.log('El link apunta a:', linkHref );
    })})

  }