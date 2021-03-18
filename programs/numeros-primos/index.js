import { addEvent, make_div, range, get } from "../../public/js/modules.js";
const res = get('res')
const inicio = get('inicio')
const fim = get('fim')
const isPrimo = (n) => {
    let divs = 0    
    for(let i of range(1,n+1)){ divs+= (n % i == 0)? 1 : 0 }
    return divs == 2 ? true : false
}
function gerar() {
    let start = Number(inicio.value)
    let end = Number(fim.value)
    let primos = []
    for(let i of range(start,end)){
        if(isPrimo(i)){ primos.push(i) }
    }
    let content = `Intervalo: ${start}-${end}<br> Sequência: ${primos.join(', ')}.`
    res.innerHTML+=make_div(content)
    res.style.display='flex'
    addEvent()
}
const submit_button = get("submit")
submit_button.onclick = gerar
const auto_submit = event => { if(event.key == "Enter"){ gerar() } }
inicio.onkeydown = auto_submit
fim.onkeydown = auto_submit