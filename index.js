var travado =false
var content = document.getElementById("content")
const nome= document.getElementById("nome")
const msg = document.getElementById("msg")
const functions= {
    area: function (){
            const caminho = "./area/"
            const text = 'Calculador de Área'
            this.escreve_res(caminho,text,955)
        },
    hip: function (){
            const caminho = "./hipotenusa/"
            const text = "Calculador de Hipotenusa"
            this.escreve_res(caminho,text)
    },
    media: function (){
            const caminho = "./media/"
            const text = "Calculadora de Média"
            this.escreve_res(caminho,text)
    },
    bases: function (){
            const caminho = "./bases/"
            const text = "Conversor de  Bases"
            this.escreve_res(caminho,text,955)
    },
    conversorImg: function (){
        const caminho = './conversor-img/'
        const text = 'Conversor de Imagens'
        this.escreve_res(caminho,text)
    },
    desconto: function() {
        const caminho = './desconto/'
        const text = 'Calculadora de Desconto'
        this.escreve_res(caminho,text)
    },
    distancia: function (){
            const caminho = "./distancia/"
            const text = "Conversor de Distância"
            this.escreve_res(caminho,text)
    },
    rgb_hex: function (){
            const caminho = "./hex_rgb/"
            const text = "Conversor HEX/RGB"
            this.escreve_res(caminho,text)
    },
    romano: function(){
        const caminho = "./romano/"
        const text = "Conversor Romano/Decimal"
        this.escreve_res(caminho,text)
    },
    velocidade: function (){
            const caminho = "./velocidade/"
            const text = "Conversor de Velocidade"
            this.escreve_res(caminho,text)
    },
    bascara: function (){
            const caminho = "./bascara/"
            const text = "Equação de 2° Grau"
            this.escreve_res(caminho,text)
    },
    potencia: function (){
            const caminho = "./potencias/"
            const text = "Gerador de Potências"
            this.escreve_res(caminho,text)
    },
    tabuada: function (){
            const caminho = "./tabuada/"
            const text = "Gerador de Tabuada"
            this.escreve_res(caminho,text)
    },
    picker: function () {
        const caminho = "./color-picker/"
            const text = "Seletor de cores"
            this.escreve_res(caminho,text)
    },
    escreve_res(caminho,texto,minWid=810){
        if (document.body.clientWidth>=1000) {
            const text = `<object data="${caminho}" type="text/html"></object>`
            content.innerHTML= text
            document.body.style.minWidth=`${minWid}px`
            msg.innerHTML=`Você está vendo <a href='${caminho}'>${texto}</a>`
            content.style.opacity='1'
            content.style.backgroundImage='none'
        }
    },
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