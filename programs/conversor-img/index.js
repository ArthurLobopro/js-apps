const upimg = document.getElementById('upimg')
const canvasDiv= document.getElementById('canvasDiv')
const canvas = document.getElementById('mycanvas')
const ctx = canvas.getContext('2d')
const down = document.getElementById('download')
var id = 0
let filename
const download = () =>{
    let ischrome = navigator.userAgent.toLowerCase().indexOf('chrome') !=-1 ? true :false
    const webp = `<a href="${canvas.toDataURL('image/webp')}" download='${filename}.webp' type='image/webp'><button class="download">WEBP</button></a>`
    down.innerHTML=`
    <a href="${canvas.toDataURL('image/png')}" download='${filename}.png'><button class="download">PNG</button></a>
    <a href="${canvas.toDataURL('image/jpeg',1.0)}" download='${filename}.jpg' type='image/jpeg'><button class="download">JPG</button></a>
    <a href="${canvas.toDataURL('image/bmp')}" download='${filename}.bmp' type='image/bmp'><button class="download">BMP</button></a>
    ${ischrome == true ? webp : ''}
    `
    down.style.display='flex'
}
function drawImage(img,w,h){
    let image = new Image()
    image.src=img
    image.onload = function(){
        ctx.drawImage(image, 0, 0, w,h)
        download()
    }
}
function getImage() {
    let file = upimg.files.item(0)
    let reader = new FileReader()
    let img
    let points = 0
    let indice = 0
    filename = String(file.name)
    do {
        indice = filename.indexOf('.',indice+1)
        points = (indice!=-1)? indice : points
    } while (indice!=-1)
    filename = filename.substring(0,points)
    console.log(filename)
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
            if(w>1000 || h>1000){
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