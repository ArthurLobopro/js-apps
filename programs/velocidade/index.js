import { addEvent,make_div, get } from "../../public/js/modules.js";

//variaveis globais
const res= get("res")
const functions = {
    km_para_ms:()=>{
        let kmh = get("num")
        if(kmh.value.length==0){
            alert("Insira um número para continuar!")
        }else{
            kmh=Number(kmh.value)
            let ms=kmh/3.6
            let content = ` Km/h: ${kmh} km/h <br> M/s: ${ms} m/s`
            res.innerHTML += make_div(content)
            addEvent()
            res.style.display="flex"
            zerar()
        }
    },
    ms_para_km: ()=>{
        let ms = get("num")
        if(ms.value.length==0){
            alert("Insira um número para continuar!")
        }else{
            ms=Number(ms.value)
            let kmh=ms*3.6
            let content = ` M/s: ${ms} m/s <br> Km/h: ${kmh} km/h`
            res.innerHTML += make_div(content)
            addEvent()
            res.style.display="flex"
            zerar()
        }
    }
}
let current_function = functions.km_para_ms

function troca_convert(event){
    const value = event.target.dataset.func
    const text = event.target.dataset.text
    current_function = functions[value]
    submit_button.onclick = current_function
    get("input_type").innerText = text
}

function zerar(){
    get('num').value = ''
}

//Detecção de eventos
const num_input = get("num")
num_input.onkeydown = event => {
    if(event.key == "Enter"){ submit_button.click() }
}

const submit_button = get("submit-button")
submit_button.onclick = current_function

const troca_inputs = document.querySelectorAll(`input[type="radio"]`)
for(let e of troca_inputs){
    e.onclick = troca_convert
}