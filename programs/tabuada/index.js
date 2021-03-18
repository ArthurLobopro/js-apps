import { addEvent,make_div } from "../../public/js/modules.js";
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
    let str=""
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
        for(i;i<=f;i++){
            str+=`${num} x ${i} = ${num*i}<br>`
        }
        res.innerHTML+=make_div(str)
        addEvent()
        res.style.display="flex"
        numero.value=""
    }
}