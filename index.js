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
    escreve_res(caminho,texto,minWid=810){
        const text = `<object data="${caminho}" type="text/html"></object>`
        content.innerHTML= text
        document.body.style.minWidth=`${minWid}px`
        nome.innerText=texto
        nome.href=caminho
    },
}
var nome_backup_escreve
function escreve(nome){
    if(nome_backup_escreve!=nome){
        if(travado===false){
            functions[nome]()
        }
        // switch(nome){
        //     case "distancia":
        //         if(travado===false){
        //             escreve_distancia()
        //         }
        //         break
        //     case "rgb/hex":
        //         if(travado===false){
        //             escreve_hex_rgb()
        //         }
        //         break
        //     case "velocidade":
        //         if(travado===false){
        //             escreve_velocidade()
        //         }
        //         break
        //     case "bascara":
        //         if(travado===false){
        //             escreve_bascara()
        //         }
        //         break
        //     case "tabuada":
        //         if(travado==false){
        //             escreve_tabuada()
        //         }
        //         break
        //     case "potencia":
        //         if(travado==false){
        //             escreve_potencia()
        //         }
        //         break
        // }
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
// Funções que mostram os outros programas
function escreve_distancia(){
    let res = `<object data="./distancia/distancia.html" type="text/html"></object>`
    content.innerHTML=res
    document.body.style.minWidth="810px"
    nome.innerText="Conversor de Distância"
    nome.href="./distancia/distancia.html"
    mostra_msg()
}
function escreve_velocidade(){
    let res = `<object data="./velocidade/velocidade.html" type="text/html"></object>`
    content.innerHTML=res
    document.body.style.minWidth="810px"
    nome.innerText="Conversor de Velocidade"
    nome.href="./velocidade/velocidade.html"
    mostra_msg()
}
function escreve_bascara(){
    let res =`<object data="./bascara/bascara.html" type="text/html"></object>`
    content.innerHTML=res
    document.body.style.minWidth="810px"
    nome.innerText="Equação de 2° Grau"
    nome.href="./bascara/bascara.html"
    mostra_msg()
}
function escreve_tabuada(){
    let res = `<object data="./tabuada/tabuada.html" type="text/html"></object>`
    content.innerHTML=res
    document.body.style.minWidth="810px"
    nome.innerText="Gerador de Tabuada"
    nome.href="./tabuada/tabuada.html"
    mostra_msg()
}
function escreve_potencia(){
    let res = `<object data="./potencias/potencia.html" type="text/html"></object>`
    content.innerHTML=res
    document.body.style.minWidth="810px"
    nome.innerText="Gerador de Potências"
    nome.href="./potencias/potencia.html"
    mostra_msg()
}
function escreve_hex_rgb(){
    let res = `<object data="./hex_rgb/hex_rgb.html" type="text/html"></object>`
    content.innerHTML=res
    document.body.style.minWidth="810px"
    nome.innerText="Conversor HEX/RGB"
    nome.href="./hex_rgb/hex_rgb.html"
    mostra_msg()
}
function mostra_msg(){
    let msg= document.getElementById("msg")
    msg.style.visibility="visible"
}