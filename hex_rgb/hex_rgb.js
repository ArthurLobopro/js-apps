var res = document.getElementById("res")
var id = 0
function convert_hex(){
    let hex_string = String(document.getElementById("hex").value)
    if (hex.length<6){
        alert("Insira um código hexadecimal inteiro (ffffff) para prosseguir!")
    }else{
        let hex = []
        hex_string=hex_string.toUpperCase()
        for(i=0;i<6;i++){
            hex[i]=hex_string[i]
            hex[i]=convert_hex_to_num(hex[i])
        }
        let r = hex[0]*16 + hex[1]*1
        let g = hex[2]*16 + hex[3]*1
        let b = hex[4]*16 + hex[5]*1
        let rgb = `${r}, ${g}, ${b}`
        let content = ` <div class="res" id="div${id}">
                            <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
                            <div class="color" style="background-color: rgb(${rgb});"></div><br>
                            HEX: #${hex_string}<br>
                            RGB: (${rgb})
                        <div>`
        id++
        res.innerHTML+=content
        res.style.display="inline-block"
        zerar(1)
    }
}
function convert_rgb(){
    let r = Number(document.getElementById("r").value)
    let g = Number(document.getElementById("g").value)
    let b = Number(document.getElementById("b").value)
   if((r>=0 && r<=255) && (g>=0 && g<=255) && (b>=0 && b<=255)){
        let hex =(`#${String(acha_hex(r)+acha_hex(g)+acha_hex(b)).toUpperCase()}`)
        let content = ` <div class="res" id="div${id}">
                            <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
                            <div class="color" style="background-color: ${hex};"></div><br>
                            RGB: (${r}, ${g}, ${b})<br>
                            HEX: ${hex}<br>
                        <div>`
        id++
        res.innerHTML+=content
        res.style.display="inline-block"
        zerar(2)
   }else{
       alert("Você informou algum número inválido, verifique as informações e tente novamente!")
   }
    
}
function acha_hex(num){
    for(i=0;i<16;i++){
        for(j=0;j<16;j++){
            if((i*16+j*1)==num){
                if(i>=0 && i<=9){
                    i=String(i)
                }else{
                    switch(i){
                        case 10:
                            i="a"
                            break
                        case 11:
                            i="b"
                            break
                        case 12:
                            i="c"
                            break
                        case 13: 
                            i="d"
                            break
                        case 14:
                            i="e"
                            break
                        case 15:
                            i="f"
                            break                           
                    }
                }
                if(j>=0 && j<=9){
                    j=String(j)
                }else{
                    switch(j){
                        case 10:
                            j="a"
                            break
                        case 11:
                            j="b"
                            break
                        case 12:
                            j="c"
                            break
                        case 13: 
                            j="d"
                            break
                        case 14:
                            j="e"
                            break
                        case 15:
                            j="f"
                            break                           
                    }
                }
                return String(i+j)
            }
        }
    }
}
function acha_nome(){
    let hex_string = document.getElementById("nome").value
    let hex = []
        hex_string=hex_string.toUpperCase()
        for(i=0;i<6;i++){
            hex[i]=hex_string[i]
            hex[i]=convert_hex_to_num(hex[i])
        }
        let r = hex[0]*16 + hex[1]*1
        let g = hex[2]*16 + hex[3]*1
        let b = hex[4]*16 + hex[5]*1
        let rgb = `${r}, ${g}, ${b}`
        let content = ` <div class="res" id="div${id}">
                            <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
                            <div class="color" style="background-color: rgb(${rgb});"></div><br>
                            HEX: #${hex_string}<br>
                            RGB: (${rgb})
                        <div>`
        id++
        res.innerHTML+=content
        res.style.display="inline-block"
}
//Converte hexadecimal para números
function convert_hex_to_num(a){
    switch(a){
        case 'A':
            a=10
            break
        case 'B':
            a=11
            break
        case 'C':
            a=12
            break
        case 'D':
            a=13
            break
        case 'E':
            a=14
            break
        case 'F':
            a=15
            break
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            a=Number(a)
            break
    }
    return a
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
function zerar(num){
    if(num==1){
        document.getElementById("hex").value=""
    }else{
        document.getElementById("r").value=""
        document.getElementById("g").value=""
        document.getElementById("b").value=""
    }
}