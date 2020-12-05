var travado =false
var content = document.getElementById("content")

var nome_backup_escreve
function escreve(nome){
    if(nome_backup_escreve!=nome){
        switch(nome){
            case "area":
                if(travado===false){
                    escreve_area()
                }
                break
            case "binario":
                if(travado===false){
                    escreve_binario()
                }
                break
            case "distancia":
                if(travado===false){
                    escreve_distancia()
                }
                break
            case "velocidade":
                if(travado===false){
                    escreve_velocidade()
                }
                break
            case "bascara":
                if(travado===false){
                    escreve_bascara()
                }
                break
            case "tabuada":
                if(travado==false){
                    escreve_tabuada()
                }
                break
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
            switch(nome){
                case "area":
                    escreve_area()
                    break
                case "binario":
                    escreve_binario()
                    break
                case "distancia":
                    escreve_distancia()
                    break
                case "velocidade":
                    escreve_velocidade()
                    break
                case "bascara":
                    escreve_bascara()
                    break
                case "tabuada":
                    escreve_tabuada()
                    break
            }
            travado=true
        }else{
            travado=false
            switch(nome){
                case "area":
                    escreve_area()
                    break
                case "binario":
                    escreve_binario()
                    break
                case "distancia":
                    escreve_distancia()
                    break
                case "velocidade":
                    escreve_velocidade()
                    break
                case "bascara":
                    escreve_bascara()
                    break
                case "tabuada":
                    escreve_tabuada()
                    break
            }
            travado=true
        }
    }
    nome_backup_trava=nome
}
// Funções que mostram os outros programas
var nome= document.getElementById("nome")
function escreve_area(){
    let res=`<object data="./area/area.html" type="text/html" width="100%"  height="100%" ></object>`
    content.innerHTML=res
    document.body.style.minWidth="955px"
    nome.innerText="Calculador de Área"
    nome.href="./area/area.html"
    mostra_msg()
}
function escreve_binario(){
    let res = `<object data="./binario/binario.html" type="text/html" width="100%"  height="100%" ></object>`
    content.innerHTML=res
    document.body.style.minWidth="955px"
    nome.innerText="Conversor Binário"
    nome.href="./binario/binario.html"
    mostra_msg()
}
function escreve_distancia(){
    let res = `<object data="./distancia/distancia.html" type="text/html" width="100%"  height="100%" ></object>`
    content.innerHTML=res
    document.body.style.minWidth="810px"
    nome.innerText="Conversor de Distância"
    nome.href="./distancia/distancia.html"
    mostra_msg()
}
function escreve_velocidade(){
    let res = `<object data="./velocidade/velocidade.html" type="text/html" width="100%"  height="100%" ></object>`
    content.innerHTML=res
    document.body.style.minWidth="810px"
    nome.innerText="Conversor de Velocidade"
    nome.href="./velocidade/velocidade.html"
    mostra_msg()
}
function escreve_bascara(){
    let res =`<object data="./bascara/bascara.html" type="text/html" width="100%"  height="100%" ></object>`
    content.innerHTML=res
    document.body.style.minWidth="810px"
    nome.innerText="Equação de 2° Grau"
    nome.href="./bascara/bascara.html"
    mostra_msg()
}
function escreve_tabuada(){
    let res = `<object data="./tabuada/tabuada.html" type="text/html" width="100%"  height="100%" ></object>`
    content.innerHTML=res

    nome.innerText="Gerador de Tabuada"
    nome.href="./tabuada/tabuada.html"
    mostra_msg()
}
function mostra_msg(){
    let msg= document.getElementById("msg")
    msg.style.visibility="visible"
}