import { addEvent, make_div, range, get } from "../../public/js/modules.js"
import { hex_to_dec, dec_to_hex } from "../../public/js/bases.js"
const res = get("res")
const nome = get("nome")
const r = get("r")
const g = get("g")
const b = get("b")
const hex = get("hex")
const cores = {
    nomes: ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia (magenta)', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgreen', 'lightgray', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumvioletred', 'mediumturquoise', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'],
    hexadecimal: ['F0F8FF', 'FAEBD7', '00FFFF', '7FFFD4', 'F0FFFF', 'F5F5DC', 'FFE4C4', '000000', 'FFEBCD', '0000FF', '8A2BE2', 'A52A2A', 'DEB887', '5F9EA0', '7FFF00', 'D2691E', 'FF7F50', '6495ED', 'FFF8DC', 'DC143C', '00FFFF', '00008B', '008B8B', 'B8860B', 'A9A9A9', '006400', 'BDB76B', '8B008B', '556B2F', 'FF8C00', '9932CC', '8B0000', 'E9967A', '8FBC8F', '483D8B', '2F4F4F', '00CED1', '9400D3', 'FF1493', '00BFFF', '696969', '1E90FF', 'B22222', 'FFFAF0', '228B22', 'FF00FF', 'DCDCDC', 'F8F8FF', 'FFD700', 'DAA520', '808080', '008000', 'ADFF2F', 'F0FFF0', 'FF69B4', 'CD5C5C', '4B0082', 'FFFFF0', 'F0E68C', 'E6E6FA', 'FFF0F5', '7CFC00', 'FFFACD', 'ADD8E6', 'F08080', 'E0FFFF', 'FAFAD2', '90EE90', 'D3D3D3', 'FFB6C1', 'FFA07A', '20B2AA', '87CEFA', '778899', 'B0C4DE', 'FFFFE0', '00FF00', '32CD32', 'FAF0E6', '800000', '66CDAA', '0000CD', 'BA55D3', '9370DB', '3CB371', '7B68EE', '00FA9A', 'C71585', '48D1CC', '191970', 'F5FFFA', 'FFE4E1', 'FFE4B5', 'FFDEAD', '000080', 'FDF5E6', '808000', '6B8E23', 'FFA500', 'FF4500', 'DA70D6', 'EEE8AA', '98FB98', 'AFEEEE', 'DB7093', 'FFEFD5', 'FFDAB9', 'CD853F', 'FFC0CB', 'DDA0DD', 'B0E0E6', '800080', 'FF0000', 'BC8F8F', '4169E1', '8B4513', 'FA8072', 'F4A460', '2E8B57', 'FFF5EE', 'A0522D', 'C0C0C0', '87CEEB', '6A5ACD', '708090', 'FFFAFA', '00FF7F', '4682B4', 'D2B48C', '008080', 'D8BFD8', 'FF6347', '40E0D0', 'EE82EE', 'F5DEB3', 'FFFFFF', 'F5F5F5', 'FFFF00', '9ACD32'],
    procuraNome(hex) {
        hex = String(hex).toUpperCase()
        let index = this.hexadecimal.indexOf(hex)
        return this.nomes[index]
    },
}
const valid_hex = dec => {
    let hex = dec_to_hex(dec)
    return hex.length == 1 ? `0${hex}` : hex
}
const getRGB = string => {
    let hex = []
    for (let i of range(0, 6, 2)) { hex.push(string.substring(i, i + 2)) }
    let r = hex_to_dec(hex[0])
    let g = hex_to_dec(hex[1])
    let b = hex_to_dec(hex[2])
    let rgb = `${r}, ${g}, ${b}`
    return rgb
}
function convert_hex() {
    let hex_string = hex.value
    if (hex_string.length !== 6 && hex_string.length !== 3) {
        alert("Insira um código hexadecimal (ffffff) ou (fff) para prosseguir!")
    } else {
        hex_string = String(hex_string).toUpperCase()
        if (hex_string.length === 3) {
            hex_string = `${hex_string[0] + hex_string[0]}${hex_string[1] + hex_string[1]}${hex_string[2] + hex_string[2]}`
        }
        let rgb = getRGB(hex_string)
        let nome = cores.procuraNome(hex_string.replace('#', ''))
        nome = (nome == undefined) ? '' : `Cor HTML: ${nome}`
        let content = `HEX: #${hex_string}<br>RGB: (${rgb})<br>${nome}`
        escreve(rgb, content, 1)
    }
}
function convert_rgb() {
    let red = Number(r.value)
    let green = Number(g.value)
    let blue = Number(b.value)
    if ((red >= 0 && red <= 255) && (green >= 0 && green <= 255) && (blue >= 0 && blue <= 255)) {
        let hex = `#${valid_hex(red)}${valid_hex(green)}${valid_hex(blue)}`
        let nome = cores.procuraNome(hex.replace('#', ''))
        nome = (nome == undefined) ? '' : `Cor HTML: ${nome}`
        let content = `RGB: (${red}, ${green}, ${blue})<br>HEX: ${hex}<br>${nome}`
        escreve(hex, content, 2)
    } else {
        alert("Você informou algum número inválido, verifique as informações e tente novamente!")
    }
}
function acha_nome(cor) {
    let hex_string = cor ?? String(nome.value).toUpperCase()
    let rgb = getRGB(hex_string)
    let name = cores.procuraNome(hex_string.replace('#', ''))
    name = (name == undefined) ? '' : `Cor HTML: ${name}`
    let content = `HEX: #${hex_string}<br>RGB: (${rgb})<br>${name}`
    escreve(`#${hex_string}`, content, 3)
}
function escreve(cor, string, num) {
    string = `<div class="color" style="background-color: ${cor};"></div><br>\n${string}`
    res.innerHTML += make_div(string)
    addEvent()
    res.style.display = "flex"
    zerar(num)
}
function zerar(num) {
    if (num == 1) {
        get("hex").value = ""
    } else if (num == 2) {
        get("r").value = ""
        get("g").value = ""
        get("b").value = ""
    } else {
        document.getElementsByTagName("option")[0].selected = true
    }
}
// Detecção de Eventos
const rgb_button = get("rgb-button")
const hex_button = get("hex-button")
nome.onchange = acha_nome
r.onkeydown = event => { if (event.key === 'Enter') { g.focus() } }
g.onkeydown = event => { if (event.key === 'Enter') { b.focus() } }
b.onkeydown = event => { if (event.key === 'Enter') { convert_rgb() } }
rgb_button.onclick = convert_rgb
hex_button.onclick = convert_hex
hex.onkeydown = event => { if (event.key === 'Enter') { convert_hex() } }
hex.onkeyup = () => hex.value = String(hex.value).toUpperCase()

const tons = get("tons")
tons.onchange = () => {
    const group = get(tons.value)
    const childs = Array.from(group.children)
    childs.forEach( option => acha_nome(option.value))
    
}