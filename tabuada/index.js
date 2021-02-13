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
let id = 0
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
        resposta+=`<div class="res" id="div${id}">
        <div class="circle" onclick="remove_div(${id})"><img src="../public/midia/close-icon.png"></div>`
        for(i;i<=f;i++){
            resposta+=`${num} x ${i} = ${num*i}<br>`
        }
        resposta+=`<div>`
        res.innerHTML+=resposta
        res.style.display="inline-block"
        numero.value=""
        id++
    }
}