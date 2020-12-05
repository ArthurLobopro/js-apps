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
    }
}
function trava(nome){
    if(travado==false){
        switch(nome){
            case "area":
                escreve_area()
                break
            case "binario":
                escreve_binario()
                break
        }
        travado=true
    }else{
        travado=false
    }
    
}
function destrava(){
    travado=false
}
var nome= document.getElementById("nome")

function escreve_area(){
    let res=`<object data="./area/area.html" type="text/html" width="99%"  height="99%" ></object>`
    content.innerHTML=res
    document.body.style.minWidth="955px"
    nome.innerText="Calculador de Área"
    nome.href="./area/area.html"
    mostra_msg()
}
function escreve_binario(){
    let res = `<object data="./binario/binario.html" type="text/html" width="99%"  height="99%" ></object>`
    content.innerHTML=res
    document.body.style.minWidth="955px"
    nome.innerText="Conversor Binário"
    nome.href="./binario/binario.html"
    mostra_msg()
}
function mostra_msg(){
    let msg= document.getElementById("msg")
    msg.style.visibility="visible"
}