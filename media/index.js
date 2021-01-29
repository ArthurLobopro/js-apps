let mediaNumbers = []
const num = document.getElementById("num")
const select = document.getElementById('numbers')
const res = document.getElementById('res')
const preview = document.getElementById('preview')
const add = document.getElementById('add')
const left = document.getElementById('left')
var id = 0
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
    <div>
        <div class="preview">
            Valores: ${String(mediaNumbers).replaceAll(',',' - ')}<br>
            Número de Valores: ${mediaNumbers.length}<br>
            Somatório dos Valores: ${soma}<br>
            Média: ${media}
        </div><br>
        <button onclick="preview.innerHTML=''">Adicionar mais valores.</button> <button onclick="addToHistory()">Adicionar ao Histórico.</button>
    </div>`
    preview.innerHTML=content
}
function addToHistory(){
    let string = document.querySelector('.preview').innerHTML
    let content = `<div class="res" id="div${id}">
    <div class="circle" onclick="remove_div(${id})"><img src="../public/midia/close-icon.png"></div>${string}</div>`
    res.innerHTML+=content
    res.style.display='inline-block'
    id++
    preview.innerHTML=""
    select.innerHTML=""
    mediaNumbers = []
    left.style.display='none'
}
function autoAdd(event){
    if(event.key == 'Enter'){
        add.click()
    }
}
function addMoreValues(){
    preview.innerHTML=""
}