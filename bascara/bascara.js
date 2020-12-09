var res = document.getElementById("res")
var id=0
function calcular(){
    let a=Number(document.getElementById("a").value)
    let b=Number(document.getElementById("b").value)
    let c=Number(document.getElementById("c").value)
    if(a==0){
        alert("Erro! O coeficiente A não pode ser considerado 0, por favor verifique as informações e tente novamente.")
    }else{
        let delta =(b*b)-4*a*c
        let raiz=Math.sqrt(delta)
        let x1,x2
        res.style="background-color: white;box-shadow: 5px 5px 10px black;display: inline-block;"
        if (raiz>0){
            x1=(-(b)-raiz)/(a*2)
            x2=(-(b)+raiz)/(a*2)
            res.innerHTML+=`<div class="res" id="div${id}">
            <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
            A: ${a}<br>B: ${b}<br>C: ${c}<br>Δ= ${delta}<br>Raiz: ${raiz}<br>X: ${x1} ou ${x2} <div>`   
        }else if(raiz==0){
            x1=-(b)/(a*2)
            res.innerHTML+=`<div class="res" id="div${id}">
            <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
            A: ${a}<br>B: ${b}<br>C: ${c}<br>Δ= ${delta}<br>Raiz: ${raiz}<br>X: ${x1}`
        }else{
            res.innerHTML+=`<div class="res" id="div${id}">
            <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
            A: ${a}<br>B: ${b}<br>C: ${c}<br>Δ= ${delta}<br>Raiz:Inexistente<br>X: Inexistente <div>`
        }
        id++
        zerar()
    }
}
function zerar(){
    document.getElementById("a").value="0"
    document.getElementById("b").value="0"
    document.getElementById("c").value="0"
}
function remove_div(num){
    let element= document.getElementById(`div${num}`)
    res.removeChild(element)
    let string = res.innerHTML
    let teste = string.indexOf("div")
    if(teste==-1){
        res.style.display="none"
        id=0
    }
}