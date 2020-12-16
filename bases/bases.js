var id = 0
var res = document.getElementById("res")
//Conversão decimal para binário
function dec_to_bin(retorne, valor){
    let teste = (retorne==true) ? true : verifica('dec')
    if(teste==true){
          let decimal=[], bin=[],num,div
          let content = ""
          decimal[0] = (retorne==false) ? Number(document.getElementById("decimal").value) : valor
          if(decimal[0]==0 || decimal[0]==1){
               content=`<div class="res" id="div${id}">
               <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
               Em Decimal:<br> ${decimal[0]}<br><br>Em Binário: <br>${decimal[0]}</div>`
          }else{
               decimal[1]=decimal[0]
               let i = 0
               let num_encontrado =false
               do{
                    if(decimal[0]>=2**i && decimal[0]<2**(i+1)){
                         num=i+1
                         num_encontrado=true
                    }
                    i++
               }while (num_encontrado==false)
               for(let i=0;i<num;i++){
                    div=Math.floor(decimal[1]/2)
                    bin[i]=decimal[1]%2
                    decimal[1]=div
               }
               
               content=`<div class="res" id="div${id}">
               <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
               Em Decimal:<br> ${decimal[0]}<br>Em Binário:<br>`
               for(let i=num-1;i>=0;i--){
                    content+=bin[i]
                    if(i%8==0){
                         content+="<br>"
                    }
               }
               content+=`</div>`
          }
          if(retorne==true){
               return bin
          }else{
               res.style.display="inline-block"
               res.innerHTML+=content
               zerar('dec')
               id++
          }
    }
}
//Conversão decimal para octal
function dec_to_oct(retorne, valor){
     let teste = (retorne==true) ? true : verifica('dec')
     if (teste==true){
          let decimal = []
          decimal [0] = (retorne==false)? Number(document.getElementById("decimal").value) : valor
          decimal [1] = decimal[0]
          let i = 0
          let num_encontrado =false
          let oct=[]
          do{
               if(decimal[0]>=8**i && decimal[0]<8**(i+1)){
                    num=i+1
                    num_encontrado=true
               }
               i++
          }while (num_encontrado==false)
          for(let i=0;i<num;i++){
               div=Math.floor(decimal[1]/8)
               oct[i]=decimal[1]%8
               decimal[1]=div
          }
          content=`<div class="res" id="div${id}">
          <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
          Em Decimal:<br> ${decimal[0]}<br>Em Octal:<br>`
          for(let i=num-1;i>=0;i--){
               content+=oct[i]
               if(i%8==0){
                    content+="<br>"
               }
          }
          if(retorne==true){
               return oct
          }else{
               content+=`</div>`
               res.style.display="inline-block"
               res.innerHTML+=content
               zerar('dec')
               id++
          }
     }
}
function oct_to_dec(retorne){
     let teste = (retorne==true) ? true : verifica('oct')
     if(teste==true){
          let String_oct = document.getElementById("octal").value
          let oct = []
          for(let i in String_oct){
               oct[i]= String_oct[(String_oct.length-1)-i]
          }
          let decimal = 0
          for(i in oct){
               oct[i]*=(8**i)
               decimal+=oct[i]
          }
          if(retorne==false){
               content=
               `<div class="res" id="div${id}">
                    <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
                    Em Octal:<br> ${String_oct}<br>Em decimal:<br> ${decimal}
               </div>`
               res.style.display="inline-block"
               res.innerHTML+=content
               zerar()
               id++
          }else{
               return decimal
          }
     }
}
//Conversão binário para decimal
function bin_to_dec(retorne){
     let teste = (retorne==true) ? true : verifica('bin')
     if(teste==true){
          let String_bin = document.getElementById("binario").value
          let bin = []
          for(let i in String_bin){
               bin[i]= String_bin[(String_bin.length-1)-i]
          }
          let decimal = 0
          for(i in bin){
               bin[i]*=(2**i)
               decimal+=bin[i]
          }
          if(retorne==false){
               content=
               `<div class="res" id="div${id}">
                    <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
                    Em binário:<br> ${String_bin}<br>Em decimal:<br> ${decimal}
               </div>`
               res.style.display="inline-block"
               res.innerHTML+=content
               zerar()
               id++
          }else{
               return decimal
          }
     }
}
function bin_to_oct(retorne){
     let teste = (retorne==true) ? true : verifica('bin')
     if(teste==true){
          let decimal = bin_to_dec(true)
          let octal = dec_to_oct(true, decimal)
          let String_bin = document.getElementById("binario").value
          content=
          `<div class="res" id="div${id}">
                    <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
                    Em binário:<br> ${String_bin}<br>Em octal:<br> `
          for(let i=octal.length-1;i>=0;i--){
               content+=octal[i]
               if(i%8==0){
                    content+="<br>"
               }
          }
          content+="</div>"
          res.style.display="inline-block"
          res.innerHTML+=content
          zerar()
          id++
     }
}
function oct_to_bin(retorne){
     let teste = (retorne==true) ? true : verifica('oct')
     if(teste==true){
          let decimal = oct_to_dec(true)
          let bin = dec_to_bin(true, decimal)
          let octal = document.getElementById("octal").value
          content=`<div class="res" id="div${id}">
          <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
          Em octal:<br> ${octal}<br>Em binário:<br> `
          for(let i=bin.length-1;i>=0;i--){
               content+=bin[i]
               if(i%8==0){
                    content+="<br>"
               }
          }
          content+="</div>"
          res.style.display="inline-block"
          res.innerHTML+=content
          zerar()
          id++
     }
}
function verifica(valor){
     let decimal = document.getElementById("decimal")
     let binario = document.getElementById("binario")
     let octal = document.getElementById("octal")
     switch(valor){
          case 'dec':
               if(decimal.value.length==0){
                    alert("Digite um número para converter")
                    return false
               }else if(Number(decimal.value)!=parseInt(decimal.value) || Number(decimal.value)<0){
                    alert("Este programa não é capaz de converter números com casas decimais ou negativos :(")
                    zerar('dec')
                    return false
               }else{
                    return true
               }
          case 'bin':
               if(binario.value.length==0){
                    alert("Digite um número para converter")
                    return false
               }else{
                    let bin = binario.value
                    let erro = false
                    for(let i in bin){
                         if(bin[i]!=0 && bin[i] != 1){
                              erro = true
                              alert("Parece que você não digitou o código corretamente! Verifique as informações e tente novamente.")
                              
                         }
                    }
                    return !erro
               }
          case 'oct':
               if(octal.value.length==0){
                    alert("Digite um número para converter")
                    return false
               }else{
                    let oct = octal.value
                    let erro = false
                    for(let i in oct){
                         if(Number(oct[i]>7) || Number(oct[i]<0)){
                              erro = true
                              alert("Parece que você não digitou o código corretamente! Verifique as informações e tente novamente.")
                         }
                    }
                    return !erro
               }
     }
}
function escreve_de(valor){
     let input_de = document.getElementById("input-de")
     let de = document.getElementById("de")
     switch(valor){
          case "decimal":
               input_de.innerHTML=
               `Decimal: <input type="number" min="0" id="decimal" value="">`
               de.innerText="Decimal"
          break
          case "binario":
               input_de.innerHTML=
               `Binário: <input type="text" min="0" pattern="[0-1]{1,}" id="binario" value="">`
               de.innerText="Binário"
          break
          case "octal":
               input_de.innerHTML=
               `Octal: <input type="text" min="0" pattern="[0-7]{1,}" id="octal" value="">`
               de.innerText="Octal"
          break

     }
     escreve_convert()
     desmarca_para(valor)
}
function escreve_para(valor){
     let para = document.getElementById("para")
     switch(valor){
          case "decimal":
               para.innerText="Decimal"
               break
          case "binario":
               para.innerText="Binário"
               break
          case 'octal':
               para.innerText="Octal"
               break
     }
     escreve_convert()
}
function escreve_convert(){
     let convert = document.getElementById("convert")
     let de = document.getElementsByName("de")
     let para = document.getElementsByName("para")
     let de_string
     let para_string
     for(let i in de){
          for(let j in para){
               if(de[i].checked && para[j].checked){
                    switch (de[i].value){
                         case 'decimal':
                              de_string = "dec"
                              break
                         case 'binario':
                              de_string = 'bin'
                              break
                         case 'octal':
                              de_string= 'oct'
                              break
                    }
                    switch (para[j].value){
                         case 'decimal':
                              para_string = 'dec'
                              break
                         case 'binario':
                              para_string= 'bin'
                              break
                         case 'octal':
                              para_string='oct'
                              break
                    }
                    break
               }
          }
     }
     convert.innerHTML=`<input type="button" value="Converter" onclick="${de_string}_to_${para_string}(false)">`
}

function desmarca_para(valor){
     let para = document.getElementsByName("para")
     for(let i in para){
          para[i].disabled=false
     }
     for( i in para){
          if(para[i].value==valor){
               para[i].checked=false
               para[i].disabled=true
          }
     }
}
function zerar(valor){
     switch(valor){
          case 'dec':
               document.getElementById("decimal").value=""
               break
     } 
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