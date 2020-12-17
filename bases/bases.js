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
          if(decimal[0]==0){
               oct[0]=0
          }else{
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
          }
          content=`<div class="res" id="div${id}">
          <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
          Em Decimal:<br> ${decimal[0]}<br>Em Octal:<br>`
          for(let i=oct.length-1;i>=0;i--){
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
               zerar('oct')
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
               zerar('bin')
               id++
          }else{
               return decimal
          }
     }
}
function hex_to_dec(retorne, valor){
     let teste = (retorne==true) ? true : verifica('hex')
     if(teste==true){
          let String_hex = String(document.getElementById("hexa").value).toUpperCase()
          let hex = []
          for(let i in String_hex){
               hex[i]=String_hex[(String_hex.length-1)-i]
               hex[i] = (Number(hex[i]>=0 && Number(hex[i]<=9))) ? Number(hex[i]) :
                    (hex[i]=='A') ? 10 : (hex[i]=='B') ? 11 :
                         (hex[i]=='C') ? 12 : (hex[i]=='D') ? 13 : 
                              (hex[i]=='E') ? 14 : 15
          }
          let decimal = 0
          for(let i in hex){
               decimal+= hex[i]*16**i
          }
          if(retorne==false){
               content=
               `<div class="res" id="div${id}">
                    <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
                    Em hexadecimal:<br> ${String_hex}<br>Em decimal:<br> ${decimal}
               </div>`
               res.style.display="inline-block"
               res.innerHTML+=content
               zerar('hex')
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
          zerar('bin')
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
          zerar('oct')
          id++
     }
}
function hex_to_bin(retorne){
     let teste = (retorne==true) ? true : verifica('hex')
     if(teste=true){
          let hex = document.getElementById("hexa").value
          let decimal = hex_to_dec(true)
          let bin = dec_to_bin(true, decimal)
          content=`<div class="res" id="div${id}">
          <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
          Em hexadecimal:<br> ${hex}<br>Em binário:<br>`
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
function hex_to_oct(retorne){
     let teste = (retorne==true) ? true : verifica('hex')
     if(teste==true){
          let hex = document.getElementById("hexa").value
          let decimal = hex_to_dec(true)
          let oct = dec_to_oct(true, `${decimal}`)
          content=`<div class="res" id="div${id}">
          <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
          Em hexadecimal:<br> ${hex}<br>Em octal:<br> `
          for(let i=oct.length-1;i>=0;i--){
               content+=oct[i]
               if(i%8==0){
                    content+="<br>"
               }
          }
          content+="</div>"
          res.style.display="inline-block"
          res.innerHTML+=content
          zerar('hex')
          id++
     }
}
function dec_to_hex(retorne, valor){
     let teste = (retorne==true) ? true : verifica('dec')
     if(teste==true){
          let decimal = []
          decimal [0] = (retorne==false)? Number(document.getElementById("decimal").value) : valor
          decimal [1] = decimal[0]
          let i = 0
          let num_encontrado =false
          let hex=[]
          if(decimal[0]==0){
               hex[0]=0
          }else{
               do{
                    if(decimal[0]>=16**i && decimal[0]<16**(i+1)){
                         num=i+1
                         num_encontrado=true
                    }
                    i++
               }while (num_encontrado==false)
               for(let i=0;i<num;i++){
                    div=Math.floor(decimal[1]/16)
                    hex[i]=decimal[1]%16
                    decimal[1]=div
               }
               for(let i in hex){
                    switch(Number(hex[i])){
                         case 10:
                              hex[i]="A"
                              break
                         case 11:
                              hex[i]="B"
                              break
                         case 12:
                              hex[i]="C"
                              break
                         case 13:
                              hex[i]="D"
                              break
                         case 14:
                              hex[i]="E"
                              break
                         case 15:
                              hex[i]="F"
                              break
                    }
               }
          }
          if(retorne==true){
               return hex
          }else{
               content=`<div class="res" id="div${id}">
               <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
               Em Decimal:<br> ${decimal[0]}<br>Em hexadecimal:<br>`
               for(let i=hex.length-1;i>=0;i--){
                    content+=hex[i]
                    if(i%8==0){
                         content+="<br>"
                    }
               }
               content+=`</div>`
               res.style.display="inline-block"
               res.innerHTML+=content
               zerar('dec')
               id++
          }
     }
}
function bin_to_hex(retorne){
     let teste = (retorne==true) ? true : verifica('bin')
     if(teste==true){
          let decimal = bin_to_dec(true)
          let hex = dec_to_hex(true, decimal)
          let bin = document.getElementById("binario").value
          content=`<div class="res" id="div${id}">
               <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
               Em Decimal:<br> ${bin}<br>Em hexadecimal:<br>`
          for(let i=hex.length-1;i>=0;i--){
               content+=hex[i]
               if(i%8==0){
                    content+="<br>"
               }
          }
          content+=`</div>`
          res.style.display="inline-block"
          res.innerHTML+=content
          zerar('bin')
          id++
     }
}
function oct_to_hex(retorne){
     let teste = (retorne==true) ? true : verifica('oct')
     if(teste==true){
          let oct = document.getElementById("octal").value
          let decimal = oct_to_dec(true)
          let hex = dec_to_hex(true, decimal)
          content=`<div class="res" id="div${id}">
          <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
          Em octal:<br> ${oct}<br>Em hexadecimal:<br>`
          for(let i=hex.length-1;i>=0;i--){
               content+=hex[i]
               if(i%8==0){
                    content+="<br>"
               }
          }
          content+=`</div>`
          res.style.display="inline-block"
          res.innerHTML+=content
          zerar('oct')
          id++
     }
}
function verifica(valor){
     let decimal = document.getElementById("decimal")
     let binario = document.getElementById("binario")
     let octal = document.getElementById("octal")
     let hexa = document.getElementById("hexa")
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
          case 'hex':
               if(hexa.value.length==0){
                    alert("Digite um número para converter")
                    return false
               }else{
                    let hex = String(hexa.value).toUpperCase()
                    let erro = false
                    let letras = ["A", "B", "C", "D", "E", "F","0", "1", "2", "3", "4","5","6","7","8","9"]
                    for(let i in hex){
                         if(letras.indexOf(hex[i])==-1){
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
          case 'hexa':
               input_de.innerHTML=
               `Hexadecimal: <input type="text" min="0" pattern="[0-9a-fA-F]{1,}" id="hexa" value="">`
               de.innerText="Hexadecimal"
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
          case 'hexa':
               para.innerText="Hexadecimal"
               break
          case "null":
               para.innerText=""
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
                         case 'hexa':
                              de_string= 'hex'
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
                         case 'hexa':
                              para_string= 'hex'
                              break
                    }
               }
          }
     }
     convert.innerHTML=`<input type="button" value="Converter" onclick="${de_string}_to_${para_string}(false)">`
}

function desmarca_para(valor){
     let para = document.getElementsByName("para")
     let marcado = false
     for(let i in para){
          para[i].disabled=false
     }
     for( i in para){
          if(para[i].value==valor){
               if(para[i].checked){
                    marcado = true
                    para[i].checked=false
                    escreve_para("null")
               }
               para[i].disabled=true
          }
     }
}
function zerar(valor){
     switch(valor){
          case 'dec':
               document.getElementById("decimal").value=""
               break
          case 'bin':
               document.getElementById("binario").value=""
               break
          case 'oct':
               document.getElementById("octal").value=""
               break
          case 'hex':
               document.getElementById("hexa").value=""
               break
     } 
}