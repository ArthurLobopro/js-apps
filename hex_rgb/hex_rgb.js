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
        zerar()
    }
}
function zerar(){
    document.getElementById("hex").value=""
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