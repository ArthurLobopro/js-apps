import { addEvent,circle, id } from "../public/js/modules.js"
//Variáveis globais
let mediaNumbers = []
const num = document.getElementById("num")
const select = document.getElementById('numbers')
const res = document.getElementById('res')
const preview = document.getElementById('preview')
const preview_class = document.querySelector('#preview div .preview')
const add = document.getElementById('add')
const left = document.getElementById('left')
//Funções
function adiciona(){
    let number = Number(num.value)
    mediaNumbers.push(number)
    let option=document.createElement("option")
    option.innerText=number
    select.appendChild(option)
    num.value=""
    num.focus()
    left.style.display='block'
}
function calculaMedia(){
    let soma=0
    for(let i in mediaNumbers){
        soma+=mediaNumbers[i]
    }
    let media = soma/mediaNumbers.length
    let content = `
        Valores: ${String(mediaNumbers).replaceAll(',',' - ')}<br>
        Número de Valores: ${mediaNumbers.length}<br>
        Somatório dos Valores: ${soma}<br>
        Média: ${media}`
    preview_class.innerHTML=content
    preview.style.visibility='visible'
}
function addToHistory(){
    let string = document.querySelector('.preview').innerHTML
    let content = `<div class="res" id="div${id.id}">${circle(id.id)}${string}</div>`
    res.innerHTML+=content
    addEvent()
    res.style.display='inline-block'
    id.increase()
    preview_class.innerHTML=""
    preview.style.visibility='hidden'
    select.innerHTML=""
    mediaNumbers = []
    left.style.display='none'
}
function autoAdd(event){
    if(event.key == 'Enter'){ add.click() }
}
// Detecção de eventos
num.onkeydown = autoAdd
add.onclick = () => (num.value.length==0)? alert('Digite um número para adicionar!') : adiciona()
const calc_button = document.getElementById('calc')
const addMore = document.getElementById('add-more')
const ath = document.getElementById('ath')
calc_button.onclick = calculaMedia
addMore.onclick = () => {
    preview.style.visibility='hidden'
}
ath.onclick = addToHistory