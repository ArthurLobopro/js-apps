var travado =false
var content = document.getElementById("content")
function escreve(nome){
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
    }
}
var nome_backup 
function trava(nome){
    
    if(nome_backup==nome){
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
            }
            travado=true
        }
    }
    nome_backup=nome
}
function destrava(){
    travado=false
}
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

    nome.innerText="Conversor de Distância"
    nome.href="./distancia/distancia.html"
    mostra_msg()
}
function mostra_msg(){
    let msg= document.getElementById("msg")
    msg.style.visibility="visible"
}