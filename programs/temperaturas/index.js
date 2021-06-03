import { addEvent, make_div ,get } from "../../public/js/modules.js"

const res = get('res')

const captalize = str => {
    str = String(str).split('')
    str[0] = str[0].toUpperCase()
    return str.join('')
}

function desmarca_para(event) {
    const valor = event.target.value
    const para = document.getElementsByName("para")
    para.forEach( e => e.disabled = false )
    para.forEach( e => {
        if(e.value == valor) {
            if(e.checked) {
                e.checked = false
                get('para').innerText = ""
            }
            e.disabled = true
        }
    })
}

const getStrings = () => {
    let de = document.getElementsByName("de")
    let para = document.getElementsByName("para")
    let deString,paraString
    de.forEach( e => { if(e.checked){ deString = e.value } })
    para.forEach( e => { if(e.checked){ paraString = e.value } })
    paraString = paraString || ''
    return { deString, paraString }
}

function escreve_convert() {
    const { deString, paraString } = getStrings()
    get('para').innerText = paraString
    get('de').innerText = deString
    get("type").innerText = `${deString}: `
    // submit.onclick = () => functions[current_function]()
}

const converts = {
    "celcius_to_fahrenheit": cel => 1.8*cel+32 ,
    "fahrenheit_to_celcius": far => (far-32)/1.8
}

function calc() {
    const temperatura = Number(graus.value)
    let { deString, paraString } = getStrings()

    if(paraString === '') return alert("Escolha uma temperatura para converter.")

    const converted = converts[`${deString}_to_${paraString}`](temperatura)

    const content = `${captalize(deString)}:<br>${temperatura}<br>${captalize(paraString)}:<br>${converted}`
    res.innerHTML+= make_div(content)
    addEvent()
    res.style.display = 'flex'
}

const de_inputs = document.querySelectorAll('#divde input')
const para_inputs = document.querySelectorAll('#divpara input')
de_inputs.forEach( e => e.onclick = event =>{
    desmarca_para(event)
    escreve_convert()
})
para_inputs.forEach( e => e.onclick = escreve_convert )

const graus = get('graus')
const submit_button = get("submit-button")
graus.onkeydown = event => { if(event.key == 'Enter'){ submit_button.click() } }

submit_button.onclick = calc