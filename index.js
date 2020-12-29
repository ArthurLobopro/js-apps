var travado =false
var content = document.getElementById("content")
const nome= document.getElementById("nome")
const functions= {
    area: function escreve(){
            const caminho = "./area/area.html"
            const text = 'Calculador de Área'
            this.escreve_res(caminho,text,955)
        },
    hip: function escreve(){
            const caminho = "./hipotenusa/hipotenusa.html"
            const text = "Calculador de Hipotenusa"
            this.escreve_res(caminho,text)
    },
    media: function escreve(){
            const caminho = "./media/media.html"
            const text = "Calculadora de Média"
            this.escreve_res(caminho,text)
    },
    bases: function escreve(){
            const caminho = "./bases/bases.html"
            const text = "Conversor de  Bases"
            this.escreve_res(caminho,text,955)
    },
    distancia: function escreve(){
            const caminho = "./distancia/distancia.html"
            const text = "Conversor de Distância"
            this.escreve_res(caminho,text)
    },
    rgb_hex: function escreve(){
            const caminho = "./hex_rgb/hex_rgb.html"
            const text = "Conversor HEX/RGB"
            this.escreve_res(caminho,text)
    },
    velocidade: function escreve(){
            const caminho = "./velocidade/velocidade.html"
            const text = "Conversor de Velocidade"
            this.escreve_res(caminho,text)
    },
    bascara: function escreve(){
            const caminho = "./bascara/bascara.html"
            const text = "Equação de 2° Grau"
            this.escreve_res(caminho,text)
    },
    potencia: function escreve(){
            const caminho = "./potencias/potencia.html"
            const text = "Gerador de Potências"
            this.escreve_res(caminho,text)
    },
    tabuada: function escreve(){
            const caminho = "./tabuada/tabuada.html"
            const text = "Gerador de Tabuada"
            this.escreve_res(caminho,text)
    },
    escreve_res(caminho,texto,minWid=810){
        const text = `<object data="${caminho}" type="text/html"></object>`
        content.innerHTML= text
        document.body.style.minWidth=`${minWid}px`
        nome.innerText=texto
        nome.href=caminho
        mostra_msg()
    },
}
var nome_backup_escreve
function escreve(nome){
    if(nome_backup_escreve!=nome){
        if(travado===false){
            functions[nome]()
        }
    nome_backup_escreve=nome
    }
    
}
var nome_backup_trava
//Usada apenas na função trava
function trava(nome){
    if(nome_backup_trava==nome){
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
    nome_backup_trava=nome
}
function mostra_msg(){
    let msg= document.getElementById("msg")
    msg.style.visibility="visible"
}