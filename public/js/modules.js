class ID {
    id = 0
    increase(){ this.id+=1 }
    reset(){ this.id=0 }
}
const addEvent = () => {
    let div = document.querySelectorAll('.res .circle')
    for(let i of div){
        i.onclick = event =>{
           let element = document.getElementById(`div${event.target.dataset.id}`)
           res.removeChild(element)
           let a = res.innerHTML
            if(a.indexOf('</div>')==-1){ id.reset()}
        }
    }
}
const circle = id => `<div class="circle" data-id="${id}"><img src="../public/midia/close-icon.png" data-id="${id}"></div>`
const id = new ID()
export { addEvent, circle, id }