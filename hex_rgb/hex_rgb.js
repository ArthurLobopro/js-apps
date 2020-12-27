const res = document.getElementById("res")
var id = 0
const cores ={
    nomes: ['aliceblue','antiquewhite','aqua','aquamarine','azure','beige','bisque','black','blanchedalmond','blue','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dodgerblue','firebrick','floralwhite','forestgreen','fuchsia (magenta)','gainsboro','ghostwhite','gold','goldenrod','gray','green','greenyellow','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightsteelblue','lightyellow','lime','limegreen','linen','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumvioletred','mediumturquoise','midnightblue','mintcream','mistyrose','moccasin','navajowhite','navy','oldlace','olive','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple','red','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','snow','springgreen','steelblue','tan','teal','thistle','tomato','turquoise','violet','wheat','white','whitesmoke','yellow','yellowgreen'],
    hexadecimal: ['F0F8FF','FAEBD7','00FFFF','7FFFD4','F0FFFF','F5F5DC','FFE4C4','000000','FFEBCD','0000FF','8A2BE2','A52A2A','DEB887','5F9EA0','7FFF00','D2691E','FF7F50','6495ED','FFF8DC','DC143C','00FFFF','00008B','008B8B','B8860B','A9A9A9','006400','BDB76B','8B008B','556B2F','FF8C00','9932CC','8B0000','E9967A','8FBC8F','483D8B','2F4F4F','00CED1','9400D3','FF1493','00BFFF','696969','1E90FF','B22222','FFFAF0','228B22','FF00FF','DCDCDC','F8F8FF','FFD700','DAA520','808080','008000','ADFF2F','F0FFF0','FF69B4','CD5C5C','4B0082','FFFFF0','F0E68C','E6E6FA','FFF0F5','7CFC00','FFFACD','ADD8E6','F08080','E0FFFF','FAFAD2','90EE90','D3D3D3','FFB6C1','FFA07A','20B2AA','87CEFA','778899','B0C4DE','FFFFE0','00FF00','32CD32','FAF0E6','800000','66CDAA','0000CD','BA55D3','9370DB','3CB371','7B68EE','00FA9A','C71585','48D1CC','191970','F5FFFA','FFE4E1','FFE4B5','FFDEAD','000080','FDF5E6','808000','6B8E23','FFA500','FF4500','DA70D6','EEE8AA','98FB98','AFEEEE','DB7093','FFEFD5','FFDAB9','CD853F','FFC0CB','DDA0DD','B0E0E6','800080','FF0000','BC8F8F','4169E1','8B4513','FA8072','F4A460','2E8B57','FFF5EE','A0522D','C0C0C0','87CEEB','6A5ACD','708090','FFFAFA','00FF7F','4682B4','D2B48C','008080','D8BFD8','FF6347','40E0D0','EE82EE','F5DEB3','FFFFFF','F5F5F5','FFFF00','9ACD32'],
    procuraNome(hex){
        hex=String(hex).toUpperCase()
        let index = this.hexadecimal.indexOf(hex)
        return this.nomes[index]
    },
}
function convert_hex(){
    let hex_string = document.getElementById("hex")
    if (hex.value.length<6){
        alert("Insira um código hexadecimal inteiro (ffffff) para prosseguir!")
    }else{
        hex_string=String(hex_string.value)
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
        let nome = cores.procuraNome(hex_string.replace('#',''))
        nome = (nome==undefined)? '' : `Cor HTML: ${nome}`
        let content = `HEX: #${hex_string}<br>RGB: (${rgb})<br>${nome}`
        construtorRes(`#${hex_string}`,content,1)               
    }
}
function convert_rgb(){
    let r = Number(document.getElementById("r").value)
    let g = Number(document.getElementById("g").value)
    let b = Number(document.getElementById("b").value)
   if((r>=0 && r<=255) && (g>=0 && g<=255) && (b>=0 && b<=255)){
        let hex =(`#${String(acha_hex(r)+acha_hex(g)+acha_hex(b)).toUpperCase()}`)
        let nome = cores.procuraNome(hex.replace('#',''))
        nome = (nome==undefined)? '' : `Cor HTML: ${nome}`
        let content = `RGB: (${r}, ${g}, ${b})<br>HEX: ${hex}<br>${nome}`
        construtorRes(hex,content,2)
   }else{
       alert("Você informou algum número inválido, verifique as informações e tente novamente!")
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
        let nome = cores.procuraNome(hex_string.replace('#',''))
        nome = (nome==undefined)? '' : `Cor HTML: ${nome}`
        let content = `HEX: #${hex_string}<br>RGB: (${rgb})<br>${nome}`
        construtorRes(`#${hex_string}`,content,3)             
}
function construtorRes(cor,string,num){
    res.innerHTML+=`
    <div class="res" id="div${id}">
        <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
        <div class="color" style="background-color: ${cor};"></div><br>
        ${string}</div>`
    id++
    res.style.display="inline-block"
    zerar(num)
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
//Converte hexadecimal para números
function convert_hex_to_num(a){
    if(Number(a)>=0 && Number(a)<=9){
        a=Number(a)
    }else{
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
        }
    }
    return a
}
function zerar(num){
    if(num==1){
        document.getElementById("hex").value=""
    }else if(num==2){
        document.getElementById("r").value=""
        document.getElementById("g").value=""
        document.getElementById("b").value=""
    }else{
        document.getElementsByTagName("option")[0].selected=true
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
function auto_submit(event, num){
    let button = `submit-button${num}`
    let tecla = event.key
    if(tecla=="Enter"){
        document.getElementById(button).click()
    }
}