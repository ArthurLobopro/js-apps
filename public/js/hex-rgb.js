const dec_to =  (dec,base) => {
    let found = false
    let num = []
    do{
        num.push(dec%base)
        dec = Math.floor(dec/base)
        found = dec==0 ? true : false
    }while (!found)
    return base == 16 ? num : String(num.reverse().join(''))
}
const hex_to_dec = hex => {
    const numbers = { A: 10, B: 11, C: 12, D:13, E: 14, F: 15 }
    hex = String(hex).toUpperCase().split('').reverse()
    for(let i in hex){ 
        hex[i]= (Number( hex[i]) >=0 && Number(hex[i]) <=9 ) ? Number(hex[i]) : numbers[hex[i]]
    }
    let mult = 1, dec = 0
    for(let i of hex){
        dec+=mult*Number(i)
        mult*= 16
    }
    return dec
}
const dec_to_hex = dec => {
    const hexn = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    let hex = dec_to(dec,16)
    for(let i in hex){ hex[i] = hexn[ hex[i] ] }
    return String(hex.reverse().join(''))
}
/*Ou importar o meu módulo de conversão de bases*/
const rgb_to_hex = (r,g,b) => {
    const hex_push = n =>  dec_to_hex(n).length == 1 ? `0${dec_to_hex(n)}` : dec_to_hex(n)
    const hex = [hex_push(r),hex_push(g),hex_push(b)]
    return `#${hex.join('')}`
}
const hex_to_rgb = hex => {
    hex = String(hex).replace('#','').toUpperCase()
    let r = hex_to_dec( String(hex).substring(0,2) )
    let g = hex_to_dec( String(hex).substring(2,4) )
    let b = hex_to_dec( String(hex).substring(4,6) )
    return `(${r}, ${g}, ${b})`
}
export {rgb_to_hex, hex_to_rgb}