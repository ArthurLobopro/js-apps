import { addEvent,circle, id } from "../public/js/modules.js"
const res = document.getElementById("res")
const num = document.getElementById("num")
const inicio = document.getElementById("inicio")
const fim = document.getElementById("fim")
function verificar(){
    if(num.value.length == 0){
        alert("Por favor insira um número para continuar")
    }else if(inicio.value.length == 0 || fim.value.length == 0){
        alert("Por favor insira um início e fim para continuar")
    }else if(inicio.value<0 || fim.value<0){
        if(confirm("Por erros da linguagem usada no programa as potências negativas podem vir erradas (geralmente em multiplos de 10) realmente quer gerar as potências mesmo com possíveis erros?")){
            potencia(num.value)
        }
    }else{
        potencia(num.value)
    }
}
function potencia(num){
    let resposta=""
    num=Number(num)
    let ini = Number(inicio.value)
    let f=Number(fim.value)
    if(ini>f){
        [ini,f] = [f,ini]
    }
    resposta+=`<div class="res" id="div${id.id}">
    ${circle(id.id)}`
    for(let i=ini;i<=f;i++){
        resposta+=`${num}<sup>${i}</sup> = ${num**i}<br>`
    }
    resposta+=`<div>`
    res.innerHTML+=resposta
    res.style.display="flex"
    id.increase()
    addEvent()
    document.getElementById("num").value=""
}
const subimt_button = document.getElementById("submit-button")
const auto_submit = event => { if(event.key == "Enter"){ verificar() }}

subimt_button.onclick = verificar
num.onkeydown = auto_submit
inicio.onkeydown = auto_submit
fim.onkeydown = auto_submit