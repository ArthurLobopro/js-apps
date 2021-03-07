import { addEvent,make_div, get } from "../public/js/modules.js"
const unity_select = get("unity")
const num_input = get("num")
const res = get("res")
function calcular(){
    let num = num_input.value
    const functions = {
        km: () => resposta(num*1000),
        hm: () => resposta(num*100),
        dam: () => resposta(num*10),
        m: () => resposta(num),
        dm: () => resposta(num/10),
        cm: () => resposta(num/100),
        mm: () => resposta(num/1000)
    }
    if(num.length==0){
        alert("Digite um número para começar!")
    }else{
        num=Number(num)
        functions[unity_select.value]()
    }
}
function resposta(metro){
    let unidade=["km", "hm", "dam", "m", "dm", "cm", "mm"]
    let content=""
    content = `<table>`
    let num = 1000
    for(let i=0;i<7;i++){
        if(document.getElementById(unidade[i]).checked){
            content+=`<tr>
                    <td class="row">${unidade[i]}</td>
                    <td class="row">${metro/num}</td>
                  </tr>`
        }
        num/=10
    }
    content += `</table>`
    res.innerHTML+=make_div(content)
    res.style.display="flex"
    addEvent()
    id.increase()
}
function bloqueia(){
    let unidade=["km", "hm", "dam", "m", "dm", "cm", "mm"]
    let unity = String(unity_select.value)
    unity=unity.toLowerCase()
    for(let i=0;i<7;i++){
        get(unidade[i]).disabled=false
    }
    get(unity).checked=true
    get(unity).disabled=true
}
//Detecção de eventos
const submit_button = get("submit-button")
unity_select.onchange = bloqueia
submit_button.onclick = calcular
num_input.onkeydown = event => { if(event.key == 'Enter'){ calcular() } }