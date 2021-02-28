const get = id => document.getElementById(id)
const res= get("res")
let medida = "mm"
var id = 0
const functions = {
    contrutorRes(nome,string,largura=50,infoAdImg=""){
        res.innerHTML+=`<div class="res" id="div${id}">
        <div class="circle" onclick="remove_div(${id})"><img src="../public/midia/close-icon.png"></div>
        <div class="ac"><img src="img/${nome}.png" width="${largura}px" heigth="50px" ${infoAdImg}></div>
        ${string}<sup>2</sup></div>`
        res.style.display='flex'
        id++
        zerar(nome)
    }
}
const construtorInput = nome =>{
    const inputs = document.querySelectorAll("#input-types > div")
    get("input").style.display=""
    for(let i of inputs){
        i.style.display="none"
    }
    get(`${nome}-input`).style.display=""
}
const setInput = event =>{
    let nome = event.target.dataset.forma
    construtorInput(nome)
    submit_button.onclick = calcular[nome]
}
const calcular = {
    quadrado: () => {
        let lado = Number(get("lado").value)
        let string = `Lado: ${lado+medida}<br>Área: ${(lado**2)+medida}`
        functions.contrutorRes('quadrado',string)
    },
    triangulo: () => {
        let base = Number(get("tri-base").value)
        let altura = Number(get("tri-altura").value)
        let string = `Base: ${base + medida}<br>Altura: ${altura + medida}<br>Área: ${(base*altura/2) + medida}`
        functions.contrutorRes('triangulo',string)
    },
    retangulo: () => {
        let base=Number(get("ret-base").value)
        let altura=Number(get("ret-altura").value)
        let string = `Base: ${base+medida}<br>Altura: ${altura+medida}<br>Área: ${(base*altura)+medida}`
        functions.contrutorRes('retangulo',string,80,'style="margin: 2px 0 auto -18px;"')
    },
    circulo: () =>{
        let raio=Number(get("raio").value)
        let pi=String(get("pi").value).replace(",", ".")
        pi=Number(pi)
        let string = `Valor de Pi: ${pi}<br>Raio: ${raio+medida}<br>Área: ${(pi*raio**2)+medida}`
        functions.contrutorRes('circulo',string,50,'style="width:55px;"')
    },
    losango: () => {
        let d=Number(get("d").value)
        let D=Number(get("D").value)
        let string = `D: ${D+medida}<br>d: ${d+medida}<br>Área: ${(d*D/2)+medida}`
        functions.contrutorRes('losango',string)
    },
}
function zerar(forma){
    if(forma=="quadrado"){
        lado.value=""
    }
    if(forma=="triangulo"){
        tri_altura.value=""
        tri_base.value=""
    }
    if(forma=="retangulo"){
        ret_altura.value=""
        ret_base.value=""
    }
    if(forma=="circulo"){
        raio.value=""
        get("pi").value="3.14"
    }
    if(forma=="losango"){
        d.value=""
        D.value=""
    }
}
// Detecção de eventos
const submit_button = get("submit-button")
const focus = id => get(id).focus()
const next = (event,id) => {
    if(event.key === "Enter"){ get(id).focus() }
}
const auto_submit = event => { if(event.key === "Enter"){ submit_button.click() } }
const formas = document.querySelectorAll('.formas')
for(let i of formas){
    i.onclick = setInput
}
const medida_input = get("medida")
medida_input.onchange = () => medida = medida_input.value

//triangulo
const tri_base = get("tri-base")
const tri_altura = get("tri-altura")
tri_base.onkeydown = event => next(event,"tri-altura")
tri_altura.onkeydown = auto_submit

//quadrado
const lado = get("lado")
lado.onkeydown = auto_submit

// retângulo
const ret_base = get("ret-base")
const ret_altura = get("ret-altura")
ret_base.onkeydown = event => next(event,"ret-altura")
ret_altura.onkeydown = auto_submit

// circulo
const raio = get("raio")
raio.onkeydown = auto_submit

//losango
const D = get("D")
const d = get("d")
D.onkeydown = event => next(event,"d")
d.onkeydown = auto_submit