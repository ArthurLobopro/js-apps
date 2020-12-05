function verificar(){
    let num=document.getElementById("num")
    let inicio=document.getElementById("inicio")
    let fim=document.getElementById("fim")
    if(num.value.length == 0){
        alert("Por favor insira um número para continuar")
    }else if(inicio.value.length == 0 || fim.value.length == 0){
        alert("Por favor insira um início e fim para continuar")
    }else if(inicio.value<0 || fim.value<0){
        if(confirm("Por erros da linguagem usada no programa as potências negativas podem vir erradas (geralmente em multiplos de 10) realmente quer gerar as potências mesmo com possíveis erros?")){
            potencia(num, inicio, fim)
        }
    }else{
        potencia(num, inicio, fim)
    }
}
function potencia(num, inicio, fim){
    let res=document.getElementById("res")
    let resposta=""
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
        resposta+=`${num}<sup>${i}</sup> = ${num**i}<br>`
    }
    resposta+=`<div>`
    res.innerHTML+=resposta
    zerar()
}
function zerar(){
    num=document.getElementById("num")
    num.value=""
}