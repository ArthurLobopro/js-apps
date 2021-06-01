import { programsGets } from "./programs.js"

const nome_backup = {
    escreve: '',
    trava: ''
}

const get = id => document.getElementById(id)
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
        let iframes = document.querySelectorAll("iframe")
        for(let i of iframes){
            i.style.display="none"
        }
        if(get(nome) == undefined){
            const iframe = `<iframe src="programs/${caminho}" id="${nome}"></iframe>`
            content.innerHTML+= iframe
        }else{
            get(nome).style.display=""
        }
        msg.innerHTML=`Você está vendo <a href='programs/${caminho}'>${text}</a>`
        content.style.opacity='1'
        content.style.backgroundImage='none'
    }
}

export { escreve, trava }