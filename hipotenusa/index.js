import { addEvent,make_div, get } from "../public/js/modules.js"
const res= get("res")
const cateto1 = get("cat1")
const cateto2 = get("cat2")
const cateto = get("cat")
const hipotenusa = get("hip")
const escreve = (content,input)=>{
    res.innerHTML+=make_div(content)
    addEvent()
    res.style.display='flex'
    for(let i of input){ i.value='' }
    id.increase()
}
function calc_hip(){
    let cat1 = cateto1.value
    let cat2 = cateto2.value
    if(cat1.lenght==0 || cat2.lenght==0){
        alert("Estão faltando informações, certifique-se de que forneceu os dois catetos.")
    }else if(Number(cat1)<=0 || Number(cat2)<=0){
        alert("As medidas dos catetos não podem ser 0 ou negativas! Verifique as informações e tente novamente.")
    }else{
        cat1=Number(cat1)
        cat2=Number(cat2)
        let unity = get("unity").value
        let hipotenusa = Math.sqrt(cat1**2 + cat2**2)
        let content= `Cateto 1: ${cat1+unity}<br>\nCateto 2: ${cat2+unity}<br>\nHipotenusa: ${hipotenusa+unity}`
        escreve(content,[cateto1,cateto2])
    }
}
function calc_cat(){
    let cat = cateto.value
    let hip = hipotenusa.value
    if(cat.lenght==0 || hip.lenght==0){
        alert("Estão faltando informações, certifique-se de que forneceu os dois catetos.")
    }else if(Number(cat)<=0 || Number(hip)<=0){
        alert("As medidas do cateto não podem ser 0 ou negativas! Verifique as informações e tente novamente.")
    }else{
        cat=Number(cat)
        hip=Number(hip)
        let unity = get("unity").value
        let cateto2 = Math.sqrt(hip**2 - cat**2)
        let content= `Cateto fornecido: ${cat+unity}<br>\nHipotenusa: ${hip+unity}<br>\nCateto descoberto: ${cateto2+unity}<br>`
        escreve(content,[cateto,hipotenusa])
    }
}
// Detecção de Eventos
const submit_button = get('submit-button')
const radio = document.querySelectorAll('.input3 input')
const troca = event => {
    const opt1 = get('opt1')
    const opt2 = get('opt2')
    const func = event.target.dataset.f
    if(func == 'hip' && opt1.classList.contains('hidden') == true){
        opt1.classList.toggle('hidden')
        opt2.classList.toggle('hidden')
        submit_button.onclick = calc_hip
    }
    if(func == 'cat' && opt2.classList.contains('hidden') == true){
        opt1.classList.toggle('hidden')
        opt2.classList.toggle('hidden')
        submit_button.onclick = calc_cat
    }
}
const call = event => {
    if(event.key === 'Enter'){ 
        (event.target.id == 'cat1') ? cateto2.focus() :  
            (event.target.id == 'hip')  ? cateto.focus()  : submit_button.click()
    }
} 
cateto1.onkeydown = call
cateto2.onkeydown = call
cateto.onkeydown = call
hipotenusa.onkeydown = call
submit_button.onclick = calc_hip
for(let i of radio){ i.onclick= troca }