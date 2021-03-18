import { addEvent,make_div, get } from "../../public/js/modules.js"
const res = get('res')
const num = get('num')
const desc = get('desc')
function desconto(){
    if(num.value.length==0 || desc.value.length == 0){
        alert('Informe o valor e o desconto para prosseguir.')
    }else{
        let n = Number(num.value.replace(',','.'))
        let d = Number(desc.value)
        let total = n
        total-= n*d/100
        let content = `Preço: R$${n.toFixed(2)} <br>\nDesconto: ${d}% <br> \nTotal: R$${total.toFixed(2)}`
        res.innerHTML+=make_div(content)
        res.style.display='flex'
        addEvent()
        num.value=''
        desc.value=''
    }
}
const submit_button = get("submit-button")
submit_button.onclick = desconto
num.onkeydown = event => { if(event.key == "Enter"){ desc.focus() } }
desc.onkeydown = event => { if(event.key == "Enter"){ desconto() } }
