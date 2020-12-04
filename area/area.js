
var res= document.getElementById("res")
var menu=document.getElementById("menu")
function triangulo(){
    menu.innerHTML=`
    <div id="input">
        Fórmula: Base*Altura/2<br>
        Medida da base:<input type="number" id="base"><br>
        Medida da altura:<input type="number" id="altura"><br>
        Unidade de Medida:
        <select id="medida">
            <option value="mm" >mm</option>
            <option value="cm">cm</option>
            <option value="m">m</option>
            <option value="km">km</option>
        </select><br>
        <input type="button" value="Enviar" onclick="calcular_triangulo()" ><br>
        <span id="mensagem"><red><b>Atenção!</b></red>Informe os valores na mesma unidade de medida para não ocorrerem erros.</span>
    </div><br>`
    menu.style.visibility="visible"
}
function quadrado(){
    menu.innerHTML=` 
    <div id="input">
        Fórmula: Lado<sup>2</sup><br>
        Medida do lado:<input type="number" id="lado"><br>
        Unidade de Medida:
        <select id="medida">
            <option value="mm" >mm</option>
            <option value="cm">cm</option>
            <option value="m">m</option>
            <option value="km">km</option>
        </select><br>
        <input type="button" value="Enviar" onclick="calcular_quadrado()" ><br>
        <span id="mensagem"><red><b>Atenção!</b></red>Informe os valores na mesma unidade de medida para não ocorrerem erros.</span>
    </div><br>`
    menu.style.visibility="visible"
}
function retangulo(){
    menu.innerHTML=`
    <div id="input">
    Fórmula: Base*Altura<br>
        Medida da base:<input type="number" id="base"><br>
        Medida da altura:<input type="number" id="altura"><br>
        Unidade de Medida:
        <select id="medida">
            <option value="mm" >mm</option>
            <option value="cm">cm</option>
            <option value="m">m</option>
            <option value="km">km</option>
        </select><br>
        <input type="button" value="Enviar" onclick="calcular_retangulo()" ><br>
        <span id="mensagem"><red><b>Atenção!</b></red>Informe os valores na mesma unidade de medida para não ocorrerem erros.</span>
    </div><br>`
    menu.style.visibility="visible"
}
function circulo(){
    menu.innerHTML=`
    <div id="input">
            Fórmula: &pi;*raio<sup>2</sup><br>
            Medida do raio:<input type="number" id="raio"><br>
            Pi:<input type="number" id="pi" value="3.14"><br>
            Unidade de Medida:
            <select id="medida">
            <option value="mm" >mm</option>
            <option value="cm">cm</option>
            <option value="m">m</option>
            <option value="km">km</option>
            </select><br>
            <input type="button" value="Enviar" onclick="calcular_circulo()" ><br>
            <span id="mensagem"><red><b>Atenção!</b></red>Informe os valores na mesma unidade de medida para não ocorrerem erros.</span>
    </div><br>
    `
    menu.style.visibility="visible"
}
function losango(){
    menu.innerHTML=`
    <div id="input">
        Fórmula: D*d/2<br>
        Medida da diagonal maior:<input type="number" id="D"><br>
        Medida da diagonal menor:<input type="number" id="d"><br>
        Unidade de Medida:
        <select id="medida">
        <option value="mm" >mm</option>
        <option value="cm">cm</option>
        <option value="m">m</option>
        <option value="km">km</option>
        </select><br>
        <input type="button" value="Enviar" onclick="calcular_losango()" ><br>
        <span id="mensagem"><red><b>Atenção!</b></red>Informe os valores na mesma unidade de medida para não ocorrerem erros.</span>
    </div><br>
    `
    menu.style.visibility="visible"
}
/*
    let selecao = document.getElementById("medida")
    let medida = selecao.options[selecao.selectedIndex].value
    para descobrir qual elemento do select foi selecionado.
    */

function calcular_quadrado(){
    let lado, area
    let selecao = document.getElementById("medida")
    let medida = selecao.options[selecao.selectedIndex].value
    //Forma de adquirir o valor de uma tag select
    lado=Number(document.getElementById("lado").value)
    area=lado**2
    res.innerHTML +=
    (`<div class="res"><img src="img/quadrado.png" width="50px" heigth="50px"> <br> Lado: ${lado+medida}<br>Área: ${area+medida}<sup>2</sup><div>`)
    res.style.visibility="visible"
    zerar("quadrado")
}
function calcular_triangulo(){
    let base=Number(document.getElementById("base").value)
    let altura=Number(document.getElementById("altura").value)
    let area=base*altura/2
    let selecao = document.getElementById("medida")
    let medida = selecao.options[selecao.selectedIndex].value
    res.innerHTML +=
    (`<div class="res">
    <img src="img/triangulo.png" width="50px" heigth="50px"> <br>
    Base: ${base+medida}<br>Altura: ${altura+medida}<br>Área: ${area+medida}²<div>`)
    res.style.visibility="visible"
    zerar("triangulo")
}
function calcular_retangulo(){
    let base=Number(document.getElementById("base").value)
    let altura=Number(document.getElementById("altura").value)
    let area=base*altura
    let selecao = document.getElementById("medida")
    let medida = selecao.options[selecao.selectedIndex].value
    res.innerHTML +=
    (`<div class="res">
    <img src="img/retangulo.png" width="100px" heigth="50px"> <br>
    Base: ${base+medida}<br>Altura: ${altura+medida}<br>Área: ${area+medida}²<div>`)
    res.style.visibility="visible"
    zerar("retangulo")
}
function calcular_circulo(){
    let raio=Number(document.getElementById("raio").value)
    let pi=String(document.getElementById("pi").value)
    pi= pi.replace(",", ".")
    pi=Number(pi)
    let selecao = document.getElementById("medida")
    let medida = selecao.options[selecao.selectedIndex].value
    let area=pi*raio**2
    res.innerHTML +=
    (`<div class="res">
    <img src="img/circulo.png" width="50px" heigth="50px"><br>
    Pi: ${pi}<br>Raio: ${raio+medida}<br>Área: ${area+medida}²<div>`)
    res.style.visibility="visible"
    zerar("circulo")

}
function calcular_losango(){
    let d=Number(document.getElementById("d").value)
    let D=Number(document.getElementById("D").value)
    let area=d*D/2
    let selecao = document.getElementById("medida")
    let medida = selecao.options[selecao.selectedIndex].value
    res.innerHTML+=
    `<div class="res">
    <img src="img/losango.png" width="50px" heigth="50px"><br>
    D: ${D+medida}<br>d: ${d+medida}<br>Área: ${area+medida}²<div>`
    res.style.visibility="visible"
    zerar("losango")
}
function zerar(forma){
    if(forma=="quadrado"){
        document.getElementById("lado").value=""
    }
    if(forma=="triangulo" || forma=="retangulo"){
        document.getElementById("base").value=""
        document.getElementById("altura").value=""
    }
    if(forma=="circulo"){
        document.getElementById("raio").value=""
        document.getElementById("pi").value="3.14"
    }
    if(forma=="losango"){
        document.getElementById("d").value=""
        document.getElementById("D").value=""
    }
    
}