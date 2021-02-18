import { addEvent,circle, id } from "../public/js/modules.js";
//Variáveis globais
const res = document.getElementById('res')
const romano = document.getElementById('rom')
const dec = document.getElementById('dec')
const valores = { I: 1, V: 5, X:10, L:50, C: 100, D: 500, M: 1000 }
const algarismos = ['I','V','X','L','C','D','M']
const valida = array =>{
    for(let i of array){
        if(algarismos.indexOf(i)==-1){ return [false,0] }
    }
    array=array.join('')
    console.log(array)
    for(let i of algarismos){
        let char = i+i+i+i
        if(array.indexOf(char) !== -1){ return [false,1] }
    }
    return [true,null]
}
const soma = array => {
    array.push('end')
    let total = 0
    for(let i in array){
        //for in retorna uma string e não um número, de modo que é preciso converte-lo
        i = Number(i)
        if(array[i+1] === 'end'){
            total +=  array[i]
            return total
        }
        if(array[i] >= array[i+1]){ total += array[i] }
        if(array[i]<array[i+1]){ total -= array[i] }
    }
}
const escreve = (content,input)=>{
    res.innerHTML+=`
    <div class="res" id="div${id.id}">
        ${circle(id.id)}
        ${content}
    </div>`
    addEvent()
    res.style.display='flex'
    input.value=''
    id.increase()
}
function rom_to_dec() {
    const string = String(romano.value).toUpperCase()
    let numbers = string.split('')
    let teste,codeError
    [teste,codeError] = valida(numbers)
    if(teste){
        for(let i in numbers){
            numbers[i]=valores[numbers[i]]
        }
        let dec = soma(numbers)
        let content = `Romano:<br> ${string}<br>\nDecimal:<br> ${dec}`
        escreve(content,romano)
    }else{
        switch (codeError) {
            case 0:
                alert('Você inseriu algum algarismo inexistente, verifique os dados e tente novamente.')
                break
            case 1:
                alert('Você inseriu algum caractere 4 ou mais vezes consecutivas, verifique os dados e tente novamente.')
                break
        }
    }
}
const numeros = {
    '1':{ '0':'','1': 'I', '2': 'II', '3': 'III', '4':'IV', '5': 'V', '6': 'VI', '7': 'VII', '8': 'VIII', '9': 'IX' },
    '2':{ '1': 'X', '2': 'XX', '3': 'XXX', '4': 'XL', '5': 'L', '6': 'LX', '7': 'LXX', '8': 'LXXX', '9': 'XC' },
    '3':{ '1': 'C','2': 'CC', '3':'CCC', '4':'CD', '5':'D', '6':'DC', '7':'DCC', '8':'DCCC', '9':'CM' } ,
    '4':{ '1':'M', '2':'MM','3':'MMM' }
}
function dec_to_rom(){
    if (Number(dec.value)>0) {
        let rom = String(dec.value).split('')
        for(let i in rom){
            rom[i]=numeros[rom.length - Number(i)][rom[i]]
        }
        let content = `Decimal:<br> ${dec.value}<br>\nRomano:<br> ${rom.join('')}`
        escreve(content,dec)
    }
    else{
        alert('Não há como escrever 0 ou números negativos em algarismos romanos')
    }
}
// Detecção de Eventos
const radio = document.querySelectorAll('#selecao input')
const rom_data = document.getElementById('data-rom')
const dec_data = document.getElementById('data-dec')
const button_rom = document.getElementById('rom-button')
const button_dec = document.getElementById('dec-button')
const troca = () => {
    rom_data.classList.toggle('hidden')
    dec_data.classList.toggle('hidden')
}
for(let i of radio){ i.onclick = troca }
button_rom.onclick = rom_to_dec
button_dec.onclick = dec_to_rom
romano.onkeydown = event =>{
    if(event.key === 'Enter'){ rom_to_dec() }
}
dec.onkeydown = event =>{
    if(event.key === 'Enter'){ dec_to_rom() }
}
romano.onkeyup = () => romano.value = String(romano.value).toUpperCase()