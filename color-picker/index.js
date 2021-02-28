import { addEvent,circle, id, get } from "../public/js/modules.js"
import { rgb_to_hex } from "../public/js/hex-rgb.js"

const upimg = get('upimg')
const canvasDiv= get('canvasDiv')
const canvas = get('mycanvas')
const ctx = canvas.getContext('2d')
const invi = get('invi')
const res = get('res')
function drawImage(img,w,h){
    let image = new Image()
    image.src=img
    image.onload = function(){
        ctx.drawImage(image, 0, 0, w,h)
    }
}
function color(event) {
    let x = event.layerX
    let y = event.layerY
    let pix = ctx.getImageData(x,y,1,1)
    let data = pix.data
    return [ data[0], data[1], data[2]]
} 
function getImage() {
    let file = upimg.files.item(0)
    let reader = new FileReader()
    let img
    reader.readAsDataURL(file)
    reader.onprogress = () => {
        console.log(`Carregados ${event.loaded} de ${event.total}`)
    }
    reader.onerror = () => {
        console.log('erro')
    }
    reader.onload = function (event){ 
        console.log('loaded')
        img = new Image()
        img.src=event.target.result
        let w
        let h
        img.onload = function() {
            w= this.width
            h= this.height
            console.log(w + 'x' + h)
            if(w>500 || h>800){
                canvas.width = Math.ceil(w/2)
                canvas.height =  Math.ceil(h/2)
            }else{
                canvas.width = w
                canvas.height = h
            }
            ctx.fillStyle='#FFFFFF'
            ctx.fillRect(0,0,canvas.width,canvas.height)
            drawImage(img.src,canvas.width,canvas.height)
        }
        
    }
    canvas.style.display='block'
}
//Detecção de eventos

document.querySelector('button').onclick = () => upimg.click()
ctx.fillStyle='#FFFFFF'
ctx.fillRect(0,0,100,100)

upimg.onchange = getImage
canvas.onclick = event => {
    let r,g,b
    [r,g,b] = color(event)
    let rgb = `rgb(${r}, ${g}, ${b})`
    res.innerHTML+=`
    <div class="res" id="div${id.id}">
        ${circle(id.id)}
        <div class="color" style="background-color: ${rgb};"></div><br>
        RGB: ${rgb}<br>
        HEX: ${rgb_to_hex(r,g,b)}
    </div>`
    id.increase()
    addEvent()
    res.style.display="flex"
}
canvas.onmousemove = event => {
    let r,g,b
    [r,g,b] = color(event)
    let rgb = `rgb(${r}, ${g}, ${b})`
    const divcolor = get('color')
    divcolor.style.backgroundColor=rgb
    divcolor.style.border='1px solid black'
    get('rgb').innerHTML=`${rgb}<br>${rgb_to_hex(r,g,b)}`
}