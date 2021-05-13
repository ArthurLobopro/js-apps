import { programs } from "./programs.js";

function make_btn(prog){
    const { name, caminho, text} = prog
    return ` 
    <li data-name="${name}">
        ${text}
        <a href="./programs/${caminho}" target="_blank"><div class="link"></div></a>
    </li>`
}

function renderByType(type) {
    const elements = programs.reduce( (elements, program) => {
        if(program.type === type){
            elements.push(program)
        }
        return elements
    }, [])

    const html = elements.map( make_btn )
    return html.join('')
}


function renderBtns() {
    const get = id => document.getElementById(id)

    get('calculadoras').innerHTML += renderByType('calculadora')
    get('conversores').innerHTML += renderByType('conversor')
    get('lista').innerHTML += renderByType('outros')

}

export default renderBtns