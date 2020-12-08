var id = 0
var res = document.getElementById("res")
function binary(){
    let decimal=[], bin=[],num,div
    let content=""
    decimal[0]=document.getElementById("decimal")
    if(decimal[0].value.length==0){
         alert("Digite um número para continuar!")
    }else if(Number(decimal[0].value)!=parseInt(decimal[0].value) || Number(decimal[0].value)<0){
         alert("Este programa não é capaz de converter números com casas decimais ou negativos :(")
         zerar()
    }else{
          decimal[0]=decimal[0].value
          if(decimal[0]==0 || decimal[0]==1){
          content=`<div class="res" id="div${id}">
          <div class="circle"><img src="close-icon.png" onclick="remove_div(${id})"></div>
          Em Decimal:<br> ${decimal[0]}<br><br>Em Binário: <br>${decimal[0]}</div>`
          }else{
               decimal[1]=decimal[0]
               for(let i=1;i<=32;i++){
                    if(decimal[0]>=2**i && decimal[0]<2**(i+1)){
                    num=i+1
                    break
                    }
               }
               for(let i=0;i<num;i++){
                    div=Math.floor(decimal[1]/2)
                    bin[i]=decimal[1]%2
                    decimal[1]=div
               }
               content=`<div class="res" id="div${id}">
               <div class="circle"><img src="close-icon.png" onclick="remove_div(${id})"></div>
               Em Decimal:<br> ${decimal[0]}<br><br>Em Binário:<br>`
               for(let i=num-1;i>=0;i--){
                    content+=bin[i]
                    if(i!=0 && i%8==0){
                         content+="<br>"
                    }
               }
               content+=`</div>`
          }
          res.style.display="inline-block"
          res.innerHTML+=content
          zerar()
          id++
     }
}
function zerar(){
     document.getElementById("decimal").value=""
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