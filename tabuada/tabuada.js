function gerar(){
    let num=document.getElementById("num")
    let res=document.getElementById("res")
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
        resposta+=`<div class="res">`
        for(let i=inicio;i<=fim;i++){
            resposta+=`${num} x ${i} = ${num*i}<br>`
        }
        resposta+=`<div>`
        res.innerHTML+=resposta
        res.style.display="inline-block"
    }
}