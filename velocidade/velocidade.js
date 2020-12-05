var res= document.getElementById("res")
var historico = document.getElementById("historico")
function troca_convert(num){
    let input = document.getElementById("input")
    switch(num){
        case 1:
            input.innerHTML=`Km/h: <input type="number" id="kmh"> <input type="button" onclick="km_para_ms()" value="Converter">`
            break
        case 2:
            input.innerHTML=`M/s: <input type="number" id="ms"> <input type="button" onclick="ms_para_km()" value="Converter">`
    }
}
function km_para_ms(){
    let kmh = document.getElementById("kmh")
    if(kmh.value.length==0){
        alert("Insira um número para continuar!")
    }else{
        kmh=Number(kmh.value)
        let ms=kmh/3.6
        res.innerHTML+=`
        <div class="res">
            Km/h: ${kmh} km/h<br>
            M/s: ${ms} m/s
        </div>
        `
        historico.style.display="inherit"
    }
}
function ms_para_km(){
    let ms = document.getElementById("ms")
    if(ms.value.length==0){
        alert("Insira um número para continuar!")
    }else{
        ms=Number(ms.value)
        let kmh=ms*3.6
        res.innerHTML+=`
        <div class="res">
            M/s: ${ms} m/s <br>
            Km/h: ${kmh} km/h
        </div>
        `
        historico.style.display="inherit"
    }
}