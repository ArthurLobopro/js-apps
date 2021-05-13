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
    document.getElementById('calcs').innerHTML += html.join('')
}



export { renderCalculadoras }