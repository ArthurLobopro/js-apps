import { addEvent,circle, id, get } from "../public/js/modules.js"
const res = get("res")
function calcular(){
    let a=Number(a_input.value)
    let b=Number(b_input.value)
    let c=Number(c_input.value)
    if(a===0){
        alert("Erro! O coeficiente A não pode ser considerado 0, por favor verifique as informações e tente novamente.")
    }else{
        let delta =(b*b)-4*a*c
        let raiz=Math.sqrt(delta)
        let x1,x2
        let string
        if (raiz>0){
            x1=(-(b)-raiz)/(a*2)
            x2=(-(b)+raiz)/(a*2)
            string =`Raiz: ${raiz}<br>X: ${x1} ou ${x2}`   
        }else if(raiz==0){
            x1=-(b)/(a*2)
            string=`Raiz: ${raiz}<br>X: ${x1}`
        }else{
            string=`Raiz:Inexistente<br>X: Inexistente`
        }
        res.innerHTML+=`
        <div class="res" id="div${id.id}">
            ${circle(id.id)}
            A: ${a}<br>B: ${b}<br>C: ${c}<br>Δ= ${delta}<br>${string}
        </div>`
        res.style="background-color: white;box-shadow: 5px 5px 10px black;display: flex;"
        id.increase()
        addEvent()
        zerar()   
    }
}
const zerar = () => {
    a_input.value=""
    b_input.value=""
    c_input.value=""
}
// Detecção de eventos
const a_input = get("a")
const b_input = get("b")
const c_input = get("c")
const submit_button = get("submit-button")
submit_button.onclick = calcular
a_input.onkeydown = event => { if(event.key == "Enter"){ b_input.focus() } }
b_input.onkeydown = event => { if(event.key == "Enter"){ c_input.focus() } }
c_input.onkeydown = event => { if(event.key == "Enter"){ submit_button.click() } }