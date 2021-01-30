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
        let string
        if (raiz>0){
            x1=(-(b)-raiz)/(a*2)
            x2=(-(b)+raiz)/(a*2)
            string =`Raiz: ${raiz}<br>X: ${x1} ou ${x2}`   
        }else if(raiz==0){
            x1=-(b)/(a*2)
            string=`Raiz: ${raiz}<br>X: ${x1}`
        }else{
            string=`Raiz:Inexistente<br>X: Inexistente`
        }
        res.innerHTML+=`<div class="res" id="div${id}">
            <div class="circle" onclick="remove_div(${id})"><img src="../public/midia/close-icon.png"></div>
            A: ${a}<br>B: ${b}<br>C: ${c}<br>Δ= ${delta}<br>${string}</div>`
        id++
        zerar()   
    }
}
function zerar(){
    document.getElementById("a").value="0"
    document.getElementById("b").value="0"
    document.getElementById("c").value="0"
}