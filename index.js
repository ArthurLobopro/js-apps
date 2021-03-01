var travado =false
var content = document.getElementById("content")
const nome= document.getElementById("nome")
const msg = document.getElementById("msg")
const functions= {
    area:{
        caminho: "./area/",
        text: 'Calculador de Área'
    },
    hip:{
        caminho: "./hipotenusa/",
        text: "Calculador de Hipotenusa"
    },
    media:{
        caminho: "./media/",
        text: "Calculadora de Média"
    },
    bases:{
        caminho: "./bases/",
        text: "Conversor de  Bases"
    },
    conversorImg:{
        caminho: './conversor-img/',
        text: 'Conversor de Imagens'
    },
    desconto:{
        caminho: './desconto/',
        text: 'Calculadora de Desconto'
    },
    distancia:{
        caminho: "./distancia/",
        text: "Conversor de Distância"
    },
    rgb_hex:{
            caminho: "./hex_rgb/",
            text: "Conversor HEX/RGB"
    },
    romano:{
        caminho: "./romano/",
        text: "Conversor Romano/Decimal"
    },
    velocidade:{
            caminho: "./velocidade/",
            text: "Conversor de Velocidade"
    },
    bascara:{
        caminho: "./bascara/",
        text: "Equação de 2° Grau"
    },
    potencia:{
        caminho: "./potencias/",
        text: "Gerador de Potências"
    },
    tabuada:{
        caminho: "./tabuada/",
        text: "Gerador de Tabuada"
    },
    picker:{
        caminho: "./color-picker/",
        text: "Seletor de cores"
    }
}
function escreve_res(nome){
    let caminho, text
    ( {caminho, text } =  functions[nome])
    if (document.body.clientWidth>=1000) {
        const iframe = `<iframe src="${caminho}"></iframe>`
        content.innerHTML= iframe
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
            functions[nome]()
            travado=true
        }else{
            travado=false
            functions[nome]()
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