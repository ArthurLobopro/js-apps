var res=document.getElementById("res")
var id = 0
function gerar(){
    let num=document.getElementById("num")
    let inicio=document.getElementById("inicio")
    let fim=document.getElementById("fim")
    let resposta=""
    if(num.value.length == 0){
        alert("Por favor insira um número para continuar")
    }else if(inicio.value.length == 0 || fim.value.length == 0){
        alert("Por favor insira um início e fim para continuar")
    }else{
        num=Number(num.value)
        inicio=Number(inicio.value)
        fim=Number(fim.value)
        if(inicio>fim){
            let ajudante=fim
            fim=inicio
            inicio=ajudante
        }
        resposta+=`<div class="res" id="div${id}">
        <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>`
        for(let i=inicio;i<=fim;i++){
            resposta+=`${num} x ${i} = ${num*i}<br>`
        }
        resposta+=`<div>`
        res.innerHTML+=resposta
        res.style.display="inline-block"
        num=document.getElementById("num").value=""
        id++
    }
}