import { hex_to_dec, dec_to_hex} from "./bases.js"

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