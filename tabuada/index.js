import { addEvent,circle, id } from "../public/js/modules.js";
const numero=document.getElementById("num")
const inicio=document.getElementById("inicio")
const fim=document.getElementById("fim")
const res=document.getElementById("res")
const button = document.getElementById('submit-button')
const call = (event)=>{
    if(event.key == 'Enter'){ gerar() }
}
numero.onkeydown = call
inicio.onkeydown = call
fim.onkeydown = call
button.onclick = () => gerar()
function gerar(){
    let resposta=""
    if(numero.value.length == 0){
        alert("Por favor insira um número para continuar")
    }else if(inicio.value.length == 0 || fim.value.length == 0){
        alert("Por favor insira um início e fim para continuar")
    }else{
        let num=Number(numero.value)
        let i=Number(inicio.value)
        let f=Number(fim.value)
        if(inicio>fim){
            let ajudante=fim
            fim=inicio
            inicio=ajudante
        }
        resposta+=`<div class="res" id="div${id.id}">
        ${circle(id.id)}`
        for(i;i<=f;i++){
            resposta+=`${num} x ${i} = ${num*i}<br>`
        }
        resposta+=`</div>`
        res.innerHTML+=resposta
        addEvent()
        res.style.display="inline-block"
        numero.value=""
        id.increase()
    }
}