import { programs } from "./programs.js";

function make_btn(prog){
    const { name, caminho, text} = prog
    return ` 
    <li data-name="${name}">
        ${text}
        <a href="./programs/${caminho}" target="_blank"><div class="link"></div></a>
    </li>`
}

function renderCalculadoras() {

    const calculadoras = programs.reduce( (calculadoras,program) => {
        if(program.type == "calculadora"){
            calculadoras.push(program)
        }
        return calculadoras
    }, [])
    
    const html = calculadoras.map( make_btn )
    return html.join('')
}

function renderConversores() {
    
    const conversores = programs.reduce( (conversores, program) => {
        if(program.type == "conversor"){
            conversores.push(program)
        }
        return conversores
    }, [] )

    const html = conversores.map( make_btn )
    return html.join('')
}

function renderOutros() {
    
    const outros = programs.reduce( (outros, program) => {
        if(program.type == "outros"){
            outros.push(program)
        }
        return outros
    }, [] )

    const html = outros.map( make_btn )
    return html.join('')
}


function renderBtns() {
    const get = id => document.getElementById(id)

    get('calculadoras').innerHTML += renderCalculadoras()
    get('conversores').innerHTML += renderConversores()

}

export default renderBtns