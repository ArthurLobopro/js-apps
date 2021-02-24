var id = 0
const hexn = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
import * as bases from "../public/js/bases.js"
//Conversão decimal para binário
function dec_to_bin(retorne, valor) {
    let teste = (retorne == true) ? true : verifica('dec')
    if(teste == true) {
        let decimal = [], bin = [], num, div
        let content = ""
        decimal[0] = (retorne == false) ? Number(document.getElementById("decimal").value) : valor
        if(decimal[0] == 0 || decimal[0] == 1) {
            //gambiarra funcional
            bin = [",", decimal[0]]
        } else {
            decimal[1] = decimal[0]
            let i = 0
            let num_encontrado = false
            do {
                if(decimal[0] >= 2 ** i && decimal[0] < 2 ** (i + 1)) {
                    num = i + 1
                    num_encontrado = true
                }
                i++
            } while (num_encontrado == false)
            for(let i = 0; i < num; i++) {
                div = Math.floor(decimal[1] / 2)
                bin[i] = decimal[1] % 2
                decimal[1] = div
            }
        }
        if(retorne == true) {
            return bin
        } else {
            bin.reverse()
            bin = String(bin).replaceAll(",", "")
            content = `Em Decimal:<br> ${decimal[0]}<br>Em Binário:<br>${bin}`
            escreve_res(content, 'dec')
        }
    }
}
//Conversão decimal para octal
function dec_to_oct(retorne, valor) {
    let teste = (retorne == true) ? true : verifica('dec')
    if(teste == true) {
        let decimal = []
        decimal[0] = (retorne == false) ? Number(document.getElementById("decimal").value) : valor
        decimal[1] = decimal[0]
        let i = 0
        let num_encontrado = false
        let oct = []
        if(decimal[0] == 0) {
            oct[0] = 0
        } else {
            do {
                if(decimal[0] >= 8 ** i && decimal[0] < 8 ** (i + 1)) {
                    num = i + 1
                    num_encontrado = true
                }
                i++
            } while (num_encontrado == false)
            for(let i = 0; i < num; i++) {
                div = Math.floor(decimal[1] / 8)
                oct[i] = decimal[1] % 8
                decimal[1] = div
            }
        }
        if(retorne == true) {
            return oct
        } else {
            oct.reverse()
            oct = String(oct).replaceAll(",", "")
            content = `Em Decimal:<br> ${decimal[0]}<br>Em Octal:<br>${oct}`
            escreve_res(content, 'dec')
        }
    }
}
function oct_to_dec(retorne) {
    let teste = (retorne == true) ? true : verifica('oct')
    if(teste == true) {
        let String_oct = document.getElementById("octal").value
        let oct = []
        for(let i in String_oct) {
            oct[i] = String_oct[(String_oct.length - 1) - i]
        }
        let decimal = 0
        for(i in oct) {
            oct[i] *= (8 ** i)
            decimal += oct[i]
        }
        if(retorne == false) {
            content = `Em Octal:<br> ${String_oct}<br>Em decimal:<br> ${decimal}`
            escreve_res(content, 'oct')
        } else {
            return decimal
        }
    }
}
//Conversão binário para decimal
function bin_to_dec(retorne) {
    let teste = (retorne == true) ? true : verifica('bin')
    if(teste == true) {
        let String_bin = document.getElementById("binario").value
        let bin = []
        for(let i in String_bin) {
            bin[i] = String_bin[(String_bin.length - 1) - i]
        }
        let decimal = 0
        for(i in bin) {
            bin[i] *= (2 ** i)
            decimal += bin[i]
        }
        if(retorne == false) {
            content = `Em binário:<br> ${String_bin}<br>Em decimal:<br> ${decimal}`
            escreve_res(content, 'bin')
        } else {
            return decimal
        }
    }
}
function hex_to_dec(retorne, valor) {
    let teste = (retorne == true) ? true : verifica('hex')
    if(teste == true) {
        let String_hex = String(document.getElementById("hexa").value).toUpperCase()
        let hex = []
        for(let i in String_hex) {
            hex[i] = String_hex[(String_hex.length - 1) - i]
            hex[i] = htn(hex[i])
        }
        function htn(n) {
            const numbers = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 }
            return (Number(n) >= 0 && Number(n) <= 9) ? Number(n) : numbers[n]
        }
        let decimal = 0
        for(let i in hex) {
            decimal += hex[i] * 16 ** i
        }
        if(retorne == false) {
            content = `Em hexadecimal:<br> ${String_hex}<br>Em decimal:<br> ${decimal}`
            escreve_res(content, 'hex')
        } else {
            return decimal
        }
    }
}
function bin_to_oct(retorne) {
    let teste = (retorne == true) ? true : verifica('bin')
    if(teste == true) {
        let decimal = bin_to_dec(true)
        let octal = dec_to_oct(true, decimal)
        let String_bin = document.getElementById("binario").value
        octal.reverse()
        octal = String(octal).replaceAll(",", "")
        content = `Em binário:<br> ${String_bin}<br>Em octal:<br>${octal}`
        escreve_res(content, 'bin')
    }
}
function oct_to_bin(retorne) {
    let teste = (retorne == true) ? true : verifica('oct')
    if(teste == true) {
        let decimal = oct_to_dec(true)
        let bin = dec_to_bin(true, decimal)
        let octal = document.getElementById("octal").value
        bin.reverse()
        bin = String(bin).replaceAll(",", "")
        content = `Em octal:<br> ${octal}<br>Em binário:<br>${bin}`
        escreve_res(content, 'oct')
    }
}
function hex_to_bin(retorne) {
    let teste = (retorne == true) ? true : verifica('hex')
    if(teste == true) {
        let hex = document.getElementById("hexa").value
        let decimal = hex_to_dec(true)
        let bin = dec_to_bin(true, decimal)
        bin.reverse()
        bin = String(bin).replaceAll(",", "")
        content = `Em hexadecimal:<br> ${hex}<br>Em binário:<br>${bin}`
        escreve_res(content, 'hex')
    }
}
function hex_to_oct(retorne) {
    let teste = (retorne == true) ? true : verifica('hex')
    if(teste == true) {
        let hex = String(document.getElementById("hexa").value).toLocaleUpperCase()
        let decimal = hex_to_dec(true)
        let oct = dec_to_oct(true, `${decimal}`)
        content = `Em hexadecimal:<br> ${hex}<br>Em octal:<br>`
        for(let i = oct.length - 1; i >= 0; i--) {
            content += oct[i]
            if(i != 0 && i % 8 == 0) {
                content += "<br>"
            }
        }
        escreve_res(content, 'hex')
    }
}
function dec_to_hex(retorne, valor) {
    let teste = (retorne == true) ? true : verifica('dec')
    if(teste == true) {
        let decimal = []
        decimal[0] = (retorne == false) ? Number(document.getElementById("decimal").value) : valor
        decimal[1] = decimal[0]
        let i = 0
        let num_encontrado = false
        let hex = []
        if(decimal[0] == 0) {
            hex[0] = 0
        } else {
            do {
                if(decimal[0] >= 16 ** i && decimal[0] < 16 ** (i + 1)) {
                    num = i + 1
                    num_encontrado = true
                }
                i++
            } while (num_encontrado == false)

            for(let i = 0; i < num; i++) {
                div = Math.floor(decimal[1] / 16)
                hex[i] = decimal[1] % 16
                decimal[1] = div
            }
            for(let i in hex) {
                hex[i] = hexn[hex[i]]
            }
        }
        if(retorne == true) {
            return hex
        } else {
            hex.reverse()
            hex = String(hex).replaceAll(",", "")
            content = `Em Decimal:<br> ${decimal[0]}<br>Em hexadecimal:<br>${hex}`
            escreve_res(content, 'dec')
        }
    }
}
function bin_to_hex(retorne) {
    let teste = (retorne == true) ? true : verifica('bin')
    if(teste == true) {
        let decimal = bin_to_dec(true)
        let hex = dec_to_hex(true, decimal)
        let bin = document.getElementById("binario").value
        hex.reverse()
        hex = String(hex).replaceAll(",", "")
        content = `Em Decimal:<br> ${bin}<br>Em hexadecimal:<br>${hex}`
        escreve_res(content, 'bin')
    }
}
function oct_to_hex(retorne) {
    let teste = (retorne == true) ? true : verifica('oct')
    if(teste == true) {
        let oct = document.getElementById("octal").value
        let decimal = oct_to_dec(true)
        let hex = dec_to_hex(true, decimal)
        hex.reverse()
        hex = String(hex).replaceAll(",", "")
        content = `Em octal:<br> ${oct}<br>Em hexadecimal:<br>${hex}`
        escreve_res(content, 'oct')
    }
}
function escreve_res(content, sigla) {
    let res = document.getElementById("res")
    res.style.display = "inline-block"
    res.innerHTML += `<div class="res" id="div${id}">
     <div class="circle" onclick="remove_div(${id})"><img src="../public/midia/close-icon.png"></div>
     ${content}</div>`
    zerar(sigla)
    id++
}
function verifica(valor) {
    let decimal = document.getElementById("decimal")
    let binario = document.getElementById("binario")
    let octal = document.getElementById("octal")
    let hexa = document.getElementById("hexa")
    switch (valor) {
        case 'dec':
            if(decimal.value.length == 0) {
                alert("Digite um número para converter")
                return false
            } else if(Number(decimal.value) != parseInt(decimal.value) || Number(decimal.value) < 0) {
                alert("Este programa não é capaz de converter números com casas decimais ou negativos :(")
                zerar('dec')
                return false
            } else {
                return true
            }
        case 'bin':
            if(binario.value.length == 0) {
                alert("Digite um número para converter")
                return false
            } else {
                let bin = binario.value
                let erro = false
                for(let i of bin) {
                    if(i != 0 && i != 1) {
                        erro = true
                        alert("Parece que você não digitou o código corretamente! Verifique as informações e tente novamente.")
                    }
                }
                return !erro
            }
        case 'oct':
            if(octal.value.length == 0) {
                alert("Digite um número para converter")
                return false
            } else {
                let oct = octal.value
                let erro = false
                for(let i of oct) {
                    if(Number(i) > 7 || Number(i) < 0) {
                        erro = true
                        alert("Parece que você não digitou o código corretamente! Verifique as informações e tente novamente.")
                    }
                }
                return !erro
            }
        case 'hex':
            if(hexa.value.length == 0) {
                alert("Digite um número para converter")
                return false
            } else {
                let hex = String(hexa.value).toUpperCase()
                let erro = false
                for(let i of hex) {
                    if(hexn.indexOf(i) == -1) {
                        erro = true
                        alert("Parece que você não digitou o código corretamente! Verifique as informações e tente novamente.")
                    }
                }
                return !erro
            }
    }
}
const texts = {
    decimal: "Decimal",
    binario: 'Binário',
    octal: 'Octal',
    hexa: 'Hexadecimal',
    null: ''
}
function escreve_de(valor) {
    let input_de = document.getElementById("input-de")
    let de = document.getElementById("de")
    const inputs = {
        decimal: `Decimal: <input type="number" min="0" id="decimal" onkeydown="auto_submit(event)">`,
        binario: `Binário: <input type="text" min="0" pattern="[0-1]{1,}" id="binario" onkeydown="auto_submit(event)">`,
        octal: `Octal: <input type="text" min="0" pattern="[0-7]{1,}" id="octal" onkeydown="auto_submit(event)">`,
        hexa: `Hexadecimal: <input type="text" min="0" pattern="[0-9a-fA-F]{1,}" id="hexa" onkeydown="auto_submit(event)">`
    }
    input_de.innerHTML = inputs[valor]
    de.innerText = texts[valor]
    escreve_convert()
    desmarca_para(valor)
}
function escreve_para(valor) {
    let para = document.getElementById("para")
    para.innerText = valor == 'null' ? '' : texts[valor]
    escreve_convert()
}
//Muda o botão de conversão conforme o que o usuário seleciona
function escreve_convert() {
    const strings = { decimal: "dec", binario: 'bin', octal: 'oct', hexa: 'hex' }
    let convert = document.getElementById("convert")
    let de = document.getElementsByName("de")
    let para = document.getElementsByName("para")
    let de_string
    let para_string
    for(let i of de) {
        for(let j of para) {
            if(i.checked && j.checked) {
                de_string = strings[i.value]
                para_string = strings[j.value]
            }
        }
    }
    convert.innerHTML = `<input type="button" id="submit-button" value="Converter" onclick="${de_string}_to_${para_string}(false)">`
}
function desmarca_para(valor) {
    let para = document.getElementsByName("para")
    let marcado = false
    for(let i of para) { i.disabled = false }
    for(let i of para) {
        if(i.value == valor) {
            if(i.checked) {
                marcado = true
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
        dec: 'decimal',
        bin: 'binario',
        oct: 'octal',
        hex: 'hexa'
    }
    document.getElementById(ids[valor]).value = ''
}
// Detecção de Eventos
const de_inputs = document.querySelectorAll('#divde input')
const para_inputs = document.querySelectorAll('#divpara input')
for(let i of de_inputs){ i.onclick = event => escreve_de(event.target.value) }
for(let i of para_inputs){ i.onclick = event => escreve_para(event.target.value) }
/*
 * Idéia, usando current function o botão terá a mesma função sendo ela a ser mudada
 */
let current_function = dec_to_bin