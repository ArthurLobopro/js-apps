const get = id => document.getElementById(id)
let travado =false
const content = get("content")
const nome= get("nome")
const msg = get("msg")
const functions= {
    area:{
        caminho: "area/",
        text: 'Calculador de Área'
    },
    hip:{
        caminho: "hipotenusa/",
        text: "Calculador de Hipotenusa"
    },
    media:{
        caminho: "media/",
        text: "Calculadora de Média"
    },
    bases:{
        caminho: "bases/",
        text: "Conversor de  Bases"
    },
    conversorImg:{
        caminho: 'conversor-img/',
        text: 'Conversor de Imagens'
    },
    desconto:{
        caminho: 'desconto/',
        text: 'Calculadora de Desconto'
    },
    distancia:{
        caminho: "distancia/",
        text: "Conversor de Distância"
    },
    rgb_hex:{
            caminho: "hex_rgb/",
            text: "Conversor HEX/RGB"
    },
    romano:{
        caminho: "romano/",
        text: "Conversor Romano/Decimal"
    },
    velocidade:{
            caminho: "velocidade/",
            text: "Conversor de Velocidade"
    },
    bascara:{
        caminho: "bascara/",
        text: "Equação de 2° Grau"
    },
    potencia:{
        caminho: "potencias/",
        text: "Gerador de Potências"
    },
    tabuada:{
        caminho: "tabuada/",
        text: "Gerador de Tabuada"
    },
    picker:{
        caminho: "color-picker/",
        text: "Seletor de cores"
    }
}
function escreve_res(nome){
    let caminho, text
    ( {caminho, text } =  functions[nome])
    if (document.body.clientWidth>=1000) {
        let iframes = document.querySelectorAll("iframe")
        caminho = `./programs/${caminho}`
        for(let i of iframes){
            i.style.display="none"
        }
        if(get(nome) == undefined){
            const iframe = `<iframe src="${caminho}" id="${nome}"></iframe>`
            content.innerHTML+= iframe
        }else{
            get(nome).style.display=""
        }
        msg.innerHTML=`Você está vendo <a href='${caminho}'>${text}</a>`
        content.style.opacity='1'
        content.style.backgroundImage='none'
    }
}
// Deteção de eventos
// Funções
const nome_backup = {
    escreve: '',
    trava: ''
}
const escreve = event =>{
    let nome  = event.target.dataset.name
    if(nome_backup.escreve != nome){
        if(travado===false){
            escreve_res(nome)
        }
    }
    nome_backup.escreve = nome
}
const trava = event => {
    let nome = event.target.dataset.name
    if(nome_backup.trava==nome){
        travado=(!travado)
    }else{
        if(travado==false){
            escreve_res(nome)
            travado=true
        }else{
            travado=false
            escreve_res(nome)
            travado=true
        }
    }
    nome_backup.trava=nome
}
// Chamadas
const list = document.querySelectorAll("#lista li")
for(let i of list){
    i.onmouseenter = escreve
}
for(let i of list){
    i.ondblclick = trava
}
// Adição de elementos em segundo plano
setTimeout(() => {
    const itens = [
        "area","hip","media","bases","conversorImg","desconto","distancia","rgb_hex","romano","velocidade","bascara","potencia","tabuada","picker"
    ]
    itens.forEach((value) => {
        const iframe = document.createElement("iframe")
        iframe.src = `./programs/${functions[value].caminho}`
        iframe.id = value
        iframe.style.display="none"
        if(get(value) == undefined){
            content.appendChild(iframe)
        }
    })
}, 2000)