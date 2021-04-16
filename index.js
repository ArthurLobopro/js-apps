import { programs } from "./scripts/programs.js"
import { escreve, trava } from "./scripts/troca.js"

const get = id => document.getElementById(id)
const content = get("content")
const nome= get("nome")
const msg = get("msg")

// Chamadas
const list = document.querySelectorAll("#lista li")
for(let i of list){
    i.onmouseenter = escreve
}
for(let i of list){
    i.ondblclick = trava
}

// Adição de elementos em segundo plano
setTimeout(() => {
    const itens = [
        "area","hip","media","bases","conversorImg","desconto","distancia","rgb_hex","romano","velocidade","bascara","potencia","tabuada","picker"
    ]
    itens.forEach((value) => {
        const iframe = document.createElement("iframe")
        iframe.src = `./programs/${programs[value].caminho}`
        iframe.id = value
        iframe.style.display="none"
        if(get(value) == undefined){
            content.appendChild(iframe)
        }
    })
}, 2000)