function calcular(){
    let unity = document.getElementById("unity").value
    let num = document.getElementById("num").value
    let metro
    if(num.length==0){
        alert("Digite um número para começar!")
    }else{
        num=Number(num)
        switch(unity){
            case "km":
                metro=num*1000
                resposta(metro)
                break
            case "hm":
                metro=num*100
                resposta(metro)
                break
            case "dam":
                metro=num*10
                resposta(metro)
                break
            case "m":
                resposta(num)
                break
            case "dm":
                metro=num/10
                resposta(metro)
                break
            case "cm":
                metro=num/100
                resposta(metro)
                break
            case "mm":
                metro=num/1000
                resposta(metro)
                break
            default :
                alert("Parece que ocorreu um erro, nenhuma unidade detectada!")
                break
        }
    }
}
function resposta(metro){
    let unidade=["km", "hm", "dam", "m", "dm", "cm", "mm"]
    let res=""
    res = `<div class="res">
                <table>`
    let num = 1000
    for(i=0;i<7;i++){
        if(document.getElementById(unidade[i]).checked){
            res+=`<tr>
                    <td class="row">${unidade[i]}</td>
                    <td class="row">${metro/num}</td>
                  </tr>`
        }
        num/=10
    }
    res += `</table></div>`
    document.getElementById("res").innerHTML+=res
    document.getElementById("historico").style.display="block"
}
function bloqueia(){
    let unidade=["km", "hm", "dam", "m", "dm", "cm", "mm"]
    let unity = String(document.getElementById("unity").value)
    unity=unity.toLowerCase()
    for(i=0;i<7;i++){
        document.getElementById(unidade[i]).disabled=false
    }
    document.getElementById(unity).checked=true
    document.getElementById(unity).disabled=true
}