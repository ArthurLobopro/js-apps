let min = 0 
let max = 100
const range = (min,max,pass=1) => {
    let array = []
    for(i = min;i<max;i+=pass){ array.push(i) }
    return array
}
const isPrimo = (n) => {
    divs = 0    
    for(i of range(1,n+1)){ divs+= (n % i == 0)? 1 : 0 }
    return divs == 2 ? true : false
}
function gerar() {
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    primos = []
    for( i of range(inicio,fim)){
        if(isPrimo(i)){ primos.push(i) }
    }
    console.log(primos)
}