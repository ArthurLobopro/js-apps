var travado =false
var content = document.getElementById("content")
const nome= document.getElementById("nome")
const msg = document.getElementById("msg")
const functions= {
    area: () => {
            const caminho = "./area/"
            const text = 'Calculador de Área'
            escreve_res(caminho,text,955)
        },
    hip: () => {
            const caminho = "./hipotenusa/"
            const text = "Calculador de Hipotenusa"
            escreve_res(caminho,text)
    },
    media: () => {
            const caminho = "./media/"
            const text = "Calculadora de Média"
            escreve_res(caminho,text)
    },
    bases: () => {
            const caminho = "./bases/"
            const text = "Conversor de  Bases"
            escreve_res(caminho,text,955)
    },
    conversorImg: () => {
        const caminho = './conversor-img/'
        const text = 'Conversor de Imagens'
        escreve_res(caminho,text)
    },
    desconto: () => {
        const caminho = './desconto/'
        const text = 'Calculadora de Desconto'
        escreve_res(caminho,text)
    },
    distancia: () => {
            const caminho = "./distancia/"
            const text = "Conversor de Distância"
            escreve_res(caminho,text)
    },
    rgb_hex: () => {
            const caminho = "./hex_rgb/"
            const text = "Conversor HEX/RGB"
            escreve_res(caminho,text)
    },
    romano: () => {
        const caminho = "./romano/"
        const text = "Conversor Romano/Decimal"
        escreve_res(caminho,text)
    },
    velocidade: () => {
            const caminho = "./velocidade/"
            const text = "Conversor de Velocidade"
            escreve_res(caminho,text)
    },
    bascara: () => {
            const caminho = "./bascara/"
            const text = "Equação de 2° Grau"
            escreve_res(caminho,text)
    },
    potencia: () => {
            const caminho = "./potencias/"
            const text = "Gerador de Potências"
            escreve_res(caminho,text)
    },
    tabuada: () => {
            const caminho = "./tabuada/"
            const text = "Gerador de Tabuada"
            escreve_res(caminho,text)
    },
    picker: () => {
        const caminho = "./color-picker/"
        const text = "Seletor de cores"
        escreve_res(caminho,text)
    }
}
function escreve_res(caminho,texto,minWid=810){
    if (document.body.clientWidth>=1000) {
        const text = `<iframe src="${caminho}"></iframe>`
        content.innerHTML= text
        document.body.style.minWidth=`${minWid}px`
        msg.innerHTML=`Você está vendo <a href='${caminho}'>${texto}</a>`
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
            functions[nome]()
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