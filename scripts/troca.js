import { programsGets } from "./programs.js"
import { $$, $ } from "../public/js/my-jquery/main.js"

const nome_backup = {
    escreve: '',
    trava: ''
}

let travado = false

const escreve = event =>{
    let nome  = event.target.dataset.name
    if(nome_backup.escreve != nome){
        if(travado===false){
            escreve_res(nome)
        }
    }
    nome_backup.escreve = nome
}

const trava = event => {
    let nome = event.target.dataset.name
    if(nome_backup.trava==nome){
        travado=(!travado)
    }else{
        if(travado==false){
            escreve_res(nome)
            travado=true
        }else{
            travado=false
            escreve_res(nome)
            travado=true
        }
    }
    nome_backup.trava=nome
}

function escreve_res(nome){
    let { caminho, text } = programsGets(nome)
    if (document.body.clientWidth>=1000) {
        const content = $('#content')
        let iframes = $("iframe")
        iframes.css('display','none')
        if($$(`#${nome}`) == undefined){
            const iframe = `<iframe src="programs/${caminho}" id="${nome}"></iframe>`
            content[0].innerHTML+= iframe
        }else{
            $(`#${nome}`).css('display', '')
        }
        msg.innerHTML=`Você está vendo <a href='programs/${caminho}'>${text}</a>`
        content.css({opacity: 1,backgroundImage: 'none'})
    }
}

export { escreve, trava }