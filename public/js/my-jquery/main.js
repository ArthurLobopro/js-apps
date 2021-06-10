import ElementsFunctions from "./ElementsFunctions.js"

const $$ = query => document.querySelector(query)

export default function $(query) {
    if(typeof query === "string" || query instanceof String){
        const elements = document.querySelectorAll(query)
        return new ElementsFunctions(...elements)
    }else{
        return new ElementsFunctions(...[query])
    }
    
}
export { $, $$ }