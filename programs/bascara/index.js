import { addEvent,make_div, get } from "../../public/js/modules.js"
const res = get("res")

const situações = {
    ">0":{
        ">0": {
            ">0":"f(x)>0 para x < x1 ou x > x2" ,
            "=0":"f(x)=0 para x = x1 ou x = x2",
            "<0":"f(x)<0 para x1 < x < x2"
        },
        "<0": {
            ">0":"f(x)>0 para x1 < x < x2" ,
            "=0":"f(x)=0 para x = x1 ou x = x2",
            "<0":"f(x)<0 para x < x1 ou x > x2"
        }
    },
    "=0":{
        ">0":{
            ">0":"f(x)>0 para todo x &ne; x1" ,
            "=0":"f(x)=0 para todo x = x1 = x2",
            "<0":"Não existe x &isin; R tal que f(x)<0"
        },
        "<0":{
            ">0": "Não existe x &isin; R tal que f(x)>0",
            "=0":"f(x)=0 para todo x = x1 = x2",
            "<0":"f(x)<0 para todo x &ne; x1" 
        }
    },
    "<0":{
        ">0": {
            ">0": "f(x)>0 para todo x &isin; R",
            "=0": "Não existe x &isin; R tal que f(x)=0",
            "<0": "Não existe x &isin; R tal que f(x)<0"
        },
        "<0":{
            ">0": "Não existe x &isin; R tal que f(x)>0",
            "=0": "Não existe x &isin; R tal que f(x)=0",
            "<0": "f(x)<0 para todo x &isin; R"
        }
    }
}

function calcular(){
    let a=Number(a_input.value)
    let b=Number(b_input.value)
    let c=Number(c_input.value)
    if(a===0){
        alert("Erro! O coeficiente A não pode ser considerado 0, por favor verifique as informações e tente novamente.")
    }else{
        let delta =(b*b)-4*a*c
        let raiz=Math.sqrt(delta)
        let string
        let content
        let x1, x2
        if (raiz>0){
            x1=(-(b)-raiz)/(a*2)
            x2=(-(b)+raiz)/(a*2)
            string =`Raiz: ${raiz}<br>X: ${x1} ou ${x2}`   
        }else if(raiz==0){
            x1=-(b)/(a*2)
            x2 = x1
            string=`Raiz: ${raiz}<br>X: ${x1}`
        }else{
            string=`Raiz:Inexistente<br>X: Inexistente`
        }

        content = `A: ${a}<br>B: ${b}<br>C: ${c}<br>Δ= ${delta}<br>${string}<br>`
        
        if(get("fazer_analise").checked){
            let d_value = delta === 0 ? "=0" :
            delta > 0 ? ">0" : "<0"
            let a_value = a > 0 ? ">0" : "<0"
            const v = [">0","=0","<0"]
            for(let i of v){
                content+=`${
                    String(situações[d_value][a_value][i]).replace("x1",x1).replace("x2",x2)
                }<br>`
            }
        }
        res.innerHTML+=make_div(content)
        res.style="background-color: white;box-shadow: 5px 5px 10px black;display: flex;"
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