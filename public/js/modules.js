import { $$, $ } from "./my-jquery/main.js"
const res = $$('#res')
//Funções usadas
const addCleanListener = () => {
    const removeAll = $$("#remove-All")
    removeAll.onclick = event => {
        const divs = document.querySelectorAll(".res")
        divs.forEach( e => res.removeChild(e))
        res.style.display='none'
    }
}



//Variáveis
const circle = `<div class="circle"><img src="../../public/midia/close-icon.png"></div>`
//Funções
const addEvent = () => {
    const divs = $('.res > .circle')
    divs.forEach( e => {
        e.onclick = event =>{
            let target = event.target
            target = target.tagName == "IMG" ? target.parentElement : target
            let element = target.parentElement
            res.removeChild(element)
            let divs = $$(".res")
            if(divs.length === 0){ 
                res.style.display='none'
            }
        }
    })
    addCleanListener()
}
const range = (min,max,pass = 1) => {
    let array = []
    for(let i = min;i<max;i+=pass){ array.push(i) }
    return array
}
const make_div = str => {
    return `
    <div class="res">
        ${circle}
        ${str}
    </div>`
}
const get = id => document.getElementById(id)
export { addEvent, make_div, range, get}