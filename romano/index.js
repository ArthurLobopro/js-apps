let string = 'I'
const valores = { I: 1, V: 5, X:10, L:50, C: 100, D: 500, M: 1000 }
const algarismos = ['I','V','X','L','C','D','M']
const valida = (array) =>{
    for(i of array){
        if(algarismos.indexOf(i)==-1){ return [false,0] }
    }
    array=array.join('')
    console.log(array)
    for(i of algarismos){
        let char = i+i+i+i
        if(array.indexOf(char) !== -1){ return [false,1] }
    }
    return [true,null]
}
const soma = array => {
    array.push('end')
    let total = 0
    for(i in array){
        //for in retorna uma string e não um número, de modo que é preciso converte-lo
        i = Number(i)
        if(array[i+1] === 'end'){
            total +=  array[i]
            return total
        }
        if(array[i] >= array[i+1]){ total += array[i] }
        if(array[i]<array[i+1]){ total -= array[i] }
    }
}
function convert() {
    let numbers = string.split('')
    let teste,codeError
    [teste,codeError] = valida(numbers)
    if(teste){
        for(i in numbers){
            numbers[i]=valores[numbers[i]]
        }
        let total = soma(numbers)
        console.log(total)
    }else{
        switch (codeError) {
            case 0:
                alert('Você inseriu algum algarismo inexistente, verifique os dados e tente novamente.')
                break
            case 1:
                alert('Você inseriu algum caractere 4 ou mais vezes consecutivas, verifique os dados e tente novamente.')
                break
        }
    }
}
convert()