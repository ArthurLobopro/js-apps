const upimg = document.getElementById('upimg')
const canvasDiv= document.getElementById('canvasDiv')
const canvas = document.getElementById('mycanvas')
const ctx = canvas.getContext('2d')
const invi = document.getElementById('invi')
const res = document.getElementById('res')
var id = 0
function drawImage(img,w,h){
    let image = new Image()
    image.src=img
    image.onload = function(){
        ctx.drawImage(image, 0, 0, w,h)
    }
}
function getImage() {
    let file = upimg.files.item(0)
    let reader = new FileReader()
    let img
    reader.readAsDataURL(file)
    reader.onprogress = function(event){
        console.log(`Carregados ${event.loaded} de ${event.total}`)
    }
    reader.onerror = function(){
        console.log('erro')
    }
    reader.onload = function (event){ 
        console.log('loaded')
        img = new Image()
        img.src=event.target.result
        let w
        let h
        img.onload = function () {
            w=this.width
            h=this.height
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
upimg.onchange = function(){
    getImage()
}
window.addEventListener('DOMContentLoaded',() => {
    document.querySelector('button').onclick = () => upimg.click()
    ctx.fillStyle='#FFFFFF'
    ctx.fillRect(0,0,100,100)
})