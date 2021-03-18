import { addEvent,make_div,get } from "../../public/js/modules.js"
const res = get("res")
const num = get("num")
const inicio = get("inicio")
const fim = get("fim")
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
    let str=""
    num=Number(num)
    let ini = Number(inicio.value)
    let f=Number(fim.value)
    if(ini>f){
        [ini,f] = [f,ini]
    }
    for(let i=ini;i<=f;i++){
        str+=`${num}<sup>${i}</sup> = ${num**i}<br>`
    }
    res.innerHTML+=make_div(str)
    res.style.display="flex"
    addEvent()
    get("num").value=""
}
const subimt_button = get("submit-button")
const auto_submit = event => { if(event.key == "Enter"){ verificar() }}

subimt_button.onclick = verificar
num.onkeydown = auto_submit
inicio.onkeydown = auto_submit
fim.onkeydown = auto_submit