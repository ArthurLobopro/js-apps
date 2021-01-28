const res = document.getElementById('res')
const num = document.getElementById('num')
const desc = document.getElementById('desc')
var id = 0
function desconto(){
    if(num.value.length==0 || desc.value.length == 0){
        alert('Informe o valor e o desconto para prosseguir.')
    }else{
        let n = Number(num.value.replace(',','.'))
        let d = Number(desc.value)
        let total = n
        total-= n*d/100
        let content = `
        <div class='res' id='div${id}'>
            <div class="circle" onclick="remove_div(${id})"><img src="../midia/close-icon.png"></div>
            Preço: R$${n.toFixed(2)} <br>
            Desconto: ${d}% <br>
            Total: R$${total.toFixed(2)}
        </div>`
        res.innerHTML+=content
        res.style.display='inline-block'
    }
}