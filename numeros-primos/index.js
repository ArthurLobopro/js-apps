import { addEvent, circle, id, range } from "../public/js/modules.js";
const res = document.getElementById('res')
const inicio = document.getElementById('inicio')
const fim = document.getElementById('fim')
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
    let content = `
    <div class='res' id="div${id.id}">
        ${circle(id.id)}
        Intervalo: ${start}-${end}<br>
        Sequência: ${primos.join(', ')}.
    </div>`
    res.innerHTML+=content
    res.style.display='flex'
    addEvent()
    id.increase()
}
const submit_button = document.getElementById("submit")
submit_button.onclick = gerar
const auto_submit = event => { if(event.key == "Enter"){ gerar() } }
inicio.onkeydown = auto_submit
fim.onkeydown = auto_submit