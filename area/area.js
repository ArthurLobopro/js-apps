const res= document.getElementById("res")
const menu=document.getElementById("menu") 
var  medida
var id = 0
function atualizaMedida(value='mm'){
    medida=value
}
const functions = {
    construtorInput(nome){
        let string = this.string(nome)
        return `<div id="input">
                    ${string}
                    Unidade de Medida:
                    <select id="medida" onchange="atualizaMedida(this.value)">
                        <option value="mm" >mm</option>
                        <option value="cm">cm</option>
                        <option value="m">m</option>
                        <option value="km">km</option>
                    </select><br>
                    <input type="button" value="Enviar" onclick="calcular_${nome}()"><br>
                    <span id="mensagem"><span class="red">Atenção!</span> Informe os valores na mesma unidade de medida para não ocorrerem erros.</span>
                </div><br>`
    },
    string(nome){
        switch(nome){
            case 'losango':
                return this.losango
            case 'circulo':
                return this.circulo
            case 'retangulo':
                return this.retangulo
            case 'quadrado':
                return this.quadrado
            case 'triangulo':
                return this.triangulo
        }
    },
    contrutorRes(nome,string,largura=50,infoAdImg=""){
        res.innerHTML+=`<div class="res" id="div${id}">
        <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
        <div class="ac"><img src="img/${nome}.png" width="${largura}px" heigth="50px" ${infoAdImg}></div>
        ${string}<sup>2</sup></div>`
        res.style.display='block'
        id++
        zerar(nome)
    },
    triangulo: `Fórmula: Base*Altura/2<br>
    Medida da base: <input type="number" id="base"><br>
    Medida da altura: <input type="number" id="altura"><br>`,
    quadrado: `Fórmula: Lado<sup>2</sup><br>
    Medida do lado: <input type="number" id="lado"><br>`,
    retangulo: `Fórmula: Base*Altura<br>
    Medida da base: <input type="number" id="base"><br>
    Medida da altura: <input type="number" id="altura"><br>`,
    circulo: `Fórmula: &pi;*raio<sup>2</sup><br>
    Medida do raio: <input type="number" id="raio"><br>
    Pi: <input type="number" id="pi" value="3.14"><br>`,
    losango: `Fórmula: D*d/2<br>
    Medida da diagonal maior: <input type="number" id="D"><br>
    Medida da diagonal menor: <input type="number" id="d"><br>`,
}
function formas(nome){
    menu.innerHTML=functions.construtorInput(nome)
    mostra_menu()
    atualizaMedida()
}
function mostra_menu(){
    menu.style.visibility="visible"
}
function calcular_quadrado(){
    let lado = Number(document.getElementById("lado").value)
    let string = `Lado: ${lado+medida}<br>Área: ${(lado**2)+medida}`
    functions.contrutorRes('quadrado',string)
}
function calcular_triangulo(){
    let base=Number(document.getElementById("base").value)
    let altura=Number(document.getElementById("altura").value)
    let string = `Base: ${base+medida}<br>Altura: ${altura+medida}<br>Área: ${(base*altura/2)+medida}`
    functions.contrutorRes('triangulo',string)
}
function calcular_retangulo(){
    let base=Number(document.getElementById("base").value)
    let altura=Number(document.getElementById("altura").value)
    let string = `Base: ${base+medida}<br>Altura: ${altura+medida}<br>Área: ${(base*altura)+medida}`
    functions.contrutorRes('retangulo',string,80,'style="margin: 2px 0 auto -18px;"')
}
function calcular_circulo(){
    let raio=Number(document.getElementById("raio").value)
    let pi=String(document.getElementById("pi").value).replace(",", ".")
    pi=Number(pi)
    let string = `Valor de Pi: ${pi}<br>Raio: ${raio+medida}<br>Área: ${(pi*raio**2)+medida}`
    functions.contrutorRes('circulo',string,50,'style="width:55px;"')
}
function calcular_losango(){
    let d=Number(document.getElementById("d").value)
    let D=Number(document.getElementById("D").value)
    let string = `D: ${D+medida}<br>d: ${d+medida}<br>Área: ${(d*D/2)+medida}`
    functions.contrutorRes('losango',string)
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