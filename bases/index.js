import { addEvent,make_div,get } from "../public/js/modules.js"
import * as convert from "../public/js/bases.js"
const hexn = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let current_function = 'dec_to_bin'

//Conversão decimal para binário
function dec_to_bin(){
    if(verifica('dec')){
        let dec = Number(get("decimal").value)
        let bin = convert.dec_to_bin(dec)
        let content = `Em decimal:<br> ${dec}<br>Em Binário:<br>${bin}`
        escreve_res(content, 'dec')
    }
}
//Conversão decimal para octal
function dec_to_oct(){
    if(verifica('dec')){
        let dec = Number(get("decimal").value)
        let oct = convert.dec_to_oct(dec)
        let content = `Em decimal:<br> ${dec}<br>Em Octal:<br>${oct}`
        escreve_res(content, 'dec')
    }
}
function dec_to_hex() { 
    if(verifica('dec')){
        let dec = Number(get("decimal").value)
        let hex = convert.dec_to_hex(dec)
        let content = `Em decimal:<br> ${dec}<br>Em Hexadecimal:<br>${hex}`
        escreve_res(content, 'dec')
    }
}
function oct_to_dec() {
    if(verifica('oct')) {
        let oct = get("octal").value
        let dec = convert.oct_to_dec(oct)
        let content = `Em Octal:<br> ${oct}<br>Em decimal:<br> ${dec}`
        escreve_res(content, 'oct')
    }
}
function bin_to_dec() {
    if(verifica('bin')) {
        let bin = get("binario").value
        let dec = convert.bin_to_dec(bin)
        let content = `Em binário:<br> ${bin}<br>Em decimal:<br> ${dec}`
        escreve_res(content, 'bin')
    }
}
function hex_to_dec() {
    if(verifica('hex')) {
        let hex = String(get("hexa").value).toUpperCase()
        let dec = convert.hex_to_dec(hex)
        let content = `Em hexadecimal:<br> ${hex}<br>Em decimal:<br> ${dec}`
        escreve_res(content, 'hex')
    }
}
function bin_to_oct() {
    if(verifica('bin')) {
        let bin = get("binario").value
        let oct = convert.bin_to_oct(bin)
        let content = `Em binário:<br> ${bin}<br>Em octal:<br>${oct}`
        escreve_res(content, 'bin')
    }
}
function oct_to_bin() {
    if(verifica('oct')) {
        let oct = get("octal").value
        let bin = convert.oct_to_bin(oct)
        let content = `Em octal:<br> ${oct}<br>Em binário:<br>${bin}`
        escreve_res(content, 'oct')
    }
}
function hex_to_bin() {
    if(verifica('hex')) {
        let hex = String(get("hexa").value).toUpperCase()
        let bin = convert.hex_to_bin(hex)
        let content = `Em hexadecimal:<br> ${hex}<br>Em binário:<br>${bin}`
        escreve_res(content, 'hex')
    }
}
function hex_to_oct() {
    if(verifica('hex')) {
        let hex = String(get("hexa").value).toUpperCase()
        let oct = convert.hex_to_oct(hex)
        let content = `Em hexadecimal:<br> ${hex}<br>Em octal:<br> ${oct}<br>`
        escreve_res(content, 'hex')
    }
}
function bin_to_hex() {
    if(verifica('bin')) {
        let bin = get("binario").value
        let hex = convert.bin_to_hex(bin)
        let content = `Em Decimal:<br> ${bin}<br>Em hexadecimal:<br>${hex}`
        escreve_res(content, 'bin')
    }
}
function oct_to_hex() {
    if(verifica('oct')) {
        let oct = get("octal").value
        let hex = convert.oct_to_hex(oct)
        let content = `Em octal:<br> ${oct}<br>Em hexadecimal:<br>${hex}`
        escreve_res(content, 'oct')
    }
}
function escreve_res(content, sigla) {
    let res = get("res")
    res.style.display = "flex"
    res.innerHTML += make_div(content)
    addEvent()
    zerar(sigla)
    id.increase()
}
function verifica(valor) {
    let decimal = get("decimal")
    let binario = get("binario")
    let octal = get("octal")
    let hexa = get("hexa")
    const erro_length = "Digite um número para converter"
    const erro_info = "Parece que você não digitou o código corretamente! Verifique as informações e tente novamente."
    const verify = {
        dec: () => {
            if(decimal.value.length == 0){
                alert(erro_length)
                return false
            }else if(Number(decimal.value) != parseInt(decimal.value) || Number(decimal.value) < 0) {
                alert("Este programa não é capaz de converter números com casas decimais ou negativos :(")
                zerar('dec')
                return false
            }else{
                return true
            }
        },
        bin: () => {
            if(binario.value.length == 0){
                alert(erro_length)
                return false
            }else{
                let bin = binario.value
                let erro = false
                for(let i of bin) {
                    if(i != 0 && i != 1) {
                        erro = true
                        alert(erro_info)
                    }
                }
                return !erro
            }
        },
        oct: () => {
            if(octal.value.length == 0){
                alert(erro_length)
                return false
            }else{
                let oct = octal.value
                let erro = false
                for(let i of oct) {
                    if(Number(i) > 7 || Number(i) < 0) {
                        erro = true
                        alert(erro_info)
                    }
                }
                return !erro
            }
        },
        hex: () => {
            if(hexa.value.length == 0) {
                alert(erro_length)
                return false
            }else{
                let hex = String(hexa.value).toUpperCase()
                let erro = false
                for(let i of hex) {
                    if(hexn.indexOf(i) == -1) {
                        erro = true
                        alert(erro_info)
                    }
                }
                return !erro
            }
        }
    }
    return verify[valor]()
}
const texts = {
    decimal: "Decimal",
    binario: 'Binário',
    octal: 'Octal',
    hexa: 'Hexadecimal',
    null: ''
}
function escreve_de(valor) {
    const input_de = get("input-de")
    const de = get("de")
    const type = get("type")
    let inputs = document.querySelectorAll("#input-de input")
    for(let i of inputs){ i.style.display='none' }
    get(valor).style.display=''
    de.innerText = texts[valor]
    type.innerText=`${texts[valor]}: `
    escreve_convert()
    desmarca_para(valor)
}
function escreve_para(valor) {
    let para = get("para")
    para.innerText = valor == 'null' ? '' : texts[valor]
    escreve_convert()
}
//Muda o botão de conversão conforme o que o usuário seleciona
function escreve_convert() {
    const strings = { decimal: "dec", binario: 'bin', octal: 'oct', hexa: 'hex' }
    let de = document.getElementsByName("de")
    let para = document.getElementsByName("para")
    let de_string = ''
    let para_string = ''
    for(let i of de) {
        if(i.checked){ de_string = strings[i.value] }
    }
    for(let j of para) {
        if(j.checked) { para_string = strings[j.value] }
    }
    current_function = `${de_string}_to_${para_string}`
    console.log(current_function)
    submit.onclick = () => functions[current_function]()
}
function desmarca_para(valor) {
    let para = document.getElementsByName("para")
    for(let i of para) { i.disabled = false }
    for(let i of para) {
        if(i.value == valor) {
            if(i.checked) {
                i.checked = false
                escreve_para("null")
            }
            i.disabled = true
        }
    }
}
//Apaga os valores fornecidos após a execução
function zerar(valor) {
    const ids = {
        dec: decimal,
        bin: binario,
        oct: octal,
        hex: hexa
    }
   ids[valor].value = ''
}
// Detecção de Eventos
const de_inputs = document.querySelectorAll('#divde input')
const para_inputs = document.querySelectorAll('#divpara input')
for(let i of de_inputs){ i.onclick = event => escreve_de(event.target.value) }
for(let i of para_inputs){ i.onclick = event => escreve_para(event.target.value) }

const erro = "Escolha uma base para converter."
const functions = {
    dec_to_bin, dec_to_hex, dec_to_oct,
    bin_to_dec, bin_to_hex, bin_to_oct,
    oct_to_bin, oct_to_dec, oct_to_hex,
    hex_to_bin, hex_to_dec, hex_to_oct,
    dec_to_: () => alert(erro),
    bin_to_: () => alert(erro),
    oct_to_: () => alert(erro),
    hex_to_: () => alert(erro)
}
// Detecção de Eventos
const submit_button = get("submit-button")
const decimal = get("decimal")
const binario = get("binario")
const octal = get("octal")
const hexa = get("hexa")
const submit = event => { if(event.key == 'Enter'){ submit_button.click() } }

submit_button.onclick = () => functions[current_function]()
decimal.onkeydown = submit
binario.onkeydown = submit
octal.onkeydown = submit
hexa.onkeydown = submit
hexa.onkeyup = () => hexa.value= String(hexa.value).toUpperCase()