function calcular(){
    let a=Number(document.getElementById("a").value)
    let b=Number(document.getElementById("b").value)
    let c=Number(document.getElementById("c").value)
    if(a==0){
        alert("Erro! O coeficiente A não pode ser considerado 0, por favor verifique as informações e tente novamente.")
    }else{
        let delta =(b*b)-4*a*c
        let raiz=Math.sqrt(delta)
        let res=document.getElementById("res")
        let x1,x2
        document.getElementById("mensagem").style="text-align: center;"
        document.getElementById("mensagem").innerText="Para limpar as respostas aperte F5 ou recarregue a página"
        document.getElementById("historico").style="background-color: white;box-shadow: 5px 5px 10px black;display: inherit;"
    
        if (raiz>0){
            x1=(-(b)-raiz)/(a*2)
            x2=(-(b)+raiz)/(a*2)
            res.innerHTML+=`<div class="res">A: ${a}<br>B: ${b}<br>C: ${c}<br>Δ= ${delta}<br>Raiz: ${raiz}<br>X: ${x1} ou ${x2} <div>`   
        }else if(raiz==0){
            x1=-(b)/(a*2)
            res.innerHTML+=`<div class="res">A: ${a}<br>B: ${b}<br>C: ${c}<br>Δ= ${delta}<br>Raiz: ${raiz}<br>X: ${x1}`
        }else{
            res.innerHTML+=`<div class="res">A: ${a}<br>B: ${b}<br>C: ${c}<br>Δ= ${delta}<br>Raiz:Inexistente<br>X: Inexistente <div>`
        }
        zerar()
    }
    
}
function zerar(){
    document.getElementById("a").value="0"
    document.getElementById("b").value="0"
    document.getElementById("c").value="0"
}