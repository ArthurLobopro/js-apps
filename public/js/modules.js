const addEvent = () => {
    let div = document.querySelectorAll('.res .circle')
    for(let i of div){
        i.onclick = event =>{
           let element = document.getElementById(`div${event.target.dataset.id}`)
           res.removeChild(element)
        }
    }
}
const circle = id => `<div class="circle" data-id="${id}"><img src="../public/midia/close-icon.png" data-id="${id}"></div>`
export { addEvent, circle }