import { addEvent,circle, id } from "../public/js/modules.js"
const res = document.getElementById('res')
const num = document.getElementById('num')
const desc = document.getElementById('desc')
function desconto(){
    if(num.value.length==0 || desc.value.length == 0){
        alert('Informe o valor e o desconto para prosseguir.')
    }else{
        let n = Number(num.value.replace(',','.'))
        let d = Number(desc.value)
        let total = n
        total-= n*d/100
        let content = `
        <div class='res' id='div${id.id}'>
            ${circle(id.id)}
            Preço: R$${n.toFixed(2)} <br>
            Desconto: ${d}% <br>
            Total: R$${total.toFixed(2)}
        </div>`
        res.innerHTML+=content
        res.style.display='flex'
        addEvent()
        num.value=''
        desc.value=''
        id.increase()
    }
}
const submit_button = document.getElementById("submit-button")
submit_button.onclick = desconto
num.onkeydown = event => { if(event.key == "Enter"){ desc.focus() } }
desc.onkeydown = event => { if(event.key == "Enter"){ desconto() } }
