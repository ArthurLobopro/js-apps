function troca(num){
    let input1 = document.querySelector(".input1")
    let input2 = document.querySelector(".input2")
    let unity = document.getElementById("unity").value
    let content 
    if(num==1){
        content=`Cateto 1: <input type="number" id="cat1"><br>
             Cateto 2: <input type="number" id="cat2">`
        input1.innerHTML=content
        content=`Unidade de Medida:
            <select id="unity">
                <option value="m">m</option>
                <option value="cm">cm</option>
                <option value="cm">mm</option>
            </select><br>
            <input type="button" value="Calcular" onclick="calcula_hipotenusa()">`
        input2.innerHTML=content
    }
    if(num==2){
        content=`Hipotenusa: <input type="number" id="hip"><br>
            Cateto: <input type="number" id="cat">`
        input1.innerHTML=content
        content=`Unidade de Medida:
            <select id="unity">
                <option value="m">m</option>
                <option value="cm">cm</option>
                <option value="cm">mm</option>
            </select><br>
            <input type="button" value="Calcular" onclick="calcula_cateto()">` 
        input2.innerHTML=content
    }
    document.getElementById("unity").value=unity
}
var res= document.getElementById("res")
function calcula_hipotenusa() {
    let cateto1 = document.getElementById("cat1").value
    let cateto2 = document.getElementById("cat2").value
    if(cateto2.lenght==0 || cateto1.lenght==0){
        alert("Estão faltando informações, certifique-se de que forneceu os dois catetos.")
    }else if(Number(cateto1)<=0 || Number(cateto2)<=0){
        alert("As medidas dos catetos não podem ser 0 ou negativas! Verifique as informações e tente novamente.")
    }else{
        cateto1=Number(cateto1)
        cateto2=Number(cateto2)
        let unity = document.getElementById("unity").value
        let hipotenusa = Math.sqrt(cateto1**2 + cateto2**2)
        let content= `
                <div class="res">
                    Cateto 1: ${cateto1+unity}<br>
                    Cateto 2: ${cateto2+unity}<br>
                    Hipotenusa: ${hipotenusa+unity}
                </div>`
        res.innerHTML+=content
        res.style.display="inline-block"
    }
}
function calcula_cateto(){
    let cateto = document.getElementById("cat").value
    let hipotenusa = document.getElementById("hip").value
    if(cateto.lenght==0 || hipotenusa.lenght==0){
        alert("Estão faltando informações, certifique-se de que forneceu os dois catetos.")
    }else if(Number(cateto)<=0 || Number(hipotenusa)<=0){
        alert("As medidas do cateto não podem ser 0 ou negativas! Verifique as informações e tente novamente.")
    }else{
        cateto=Number(cateto)
        hipotenusa=Number(hipotenusa)
        let unity = document.getElementById("unity").value
        let cateto2 = Math.sqrt(hipotenusa**2 - cateto**2)
        let content= `
                <div class="res">
                    Cateto fornecido: ${cateto+unity}<br>
                    Hipotenusa: ${hipotenusa+unity}<br>
                    Cateto descoberto: ${cateto2+unity}<br>
                </div>`
        res.innerHTML+=content
        res.style.display="inline-block"
    }
}
function zerar(){
    document.getElementById("cat").value=""
    document.getElementById("cat1").value=""
    document.getElementById("cat2").value=""
    document.getElementById("hip").value=""
}