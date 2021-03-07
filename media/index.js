import { addEvent,make_div, get } from "../public/js/modules.js"
//Variáveis globais
let mediaNumbers = []
const num = get("num")
const select = get('numbers')
const res = get('res')
const preview = get('preview')
const preview_class = document.querySelector('#preview div .preview')
const add = get('add')
const left = get('left')
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
    res.innerHTML+=make_div(string)
    addEvent()
    res.style.display='flex'
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
const calc_button = get('calc')
const addMore = get('add-more')
const ath = get('ath')
calc_button.onclick = calculaMedia
addMore.onclick = () => {
    preview.style.visibility='hidden'
}
ath.onclick = addToHistory