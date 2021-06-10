class ElementsFunctions extends Array{

    //#region eventos
    ready(callback){
        if(document.readyState !== "loading"){
            callback()
        }else{
            document.addEventListener('DOMContentLoaded', callback)
        }
    }

    on(event, callback){
        this.forEach( 
            e => {
                e.addEventListener(event, callback)
            }
        )
        return this
    }
    //#endregion

    parent(){
        return this.reduce( (arr,current) => {
            current = current.parentElement
            if(arr.indexOf(current) === -1){
                arr.push(current)
            }
            return arr
        }, new ElementsFunctions())
    }

    next(){
        return this.map( current => current.nextElementSibling )
    }
    //#region classes
    addClass(className){
        this.forEach( e => {
            e.classList.add(className)
        })
        return this
    }

    removeClass(className){
        this.forEach( e => {
            e.classList.remove(className)
        })
        return this
    }

    toggleClass(className){
        this.forEach( e => {
            e.classList.toggle(className)
        })
        return this
    }
 //#endregion
    css(propriedade, valor){
        const format = prop => prop.replaceAll(/(-[a-z])/g, s => s.replace('-','').toUpperCase())

        this.forEach( e => {
            e.style[format(propriedade)] = valor
        })
        return this
    }
}

export default ElementsFunctions