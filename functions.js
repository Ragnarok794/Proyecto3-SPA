import { RRSS } from "./constant"
import { skills } from "./constant"
 export const ulSkill = []

const skillTemplate =(skill) =>{
    const template = `<li><h4>${skill.skill}:</h4> ${skill.description}</li>`
    ulSkill.push(template)
}

 const printSkills= (skill)=> {
    for (skill of skills) {
        skillTemplate(skill)
    }
}

printSkills()

export const ulRRSS = []

const RRSStemplate = (data) =>{
const template = `<li class="li_RRSS"><a href="${data.link}" class="links_RRSS"><img class="icon" src=${data.icon}><h4>${data.text}</h4></a></li>`
 ulRRSS.push(template)
}

const printRRSS = (data)=>{
    for(data of RRSS){
        RRSStemplate(data)
    }
}
printRRSS()