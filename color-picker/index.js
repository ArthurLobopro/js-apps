const upimg = document.getElementById('upimg')
const canvasDiv= document.getElementById('canvasDiv')
const canvas = document.getElementById('mycanvas')
const ctx = canvas.getContext('2d')
const invi = document.getElementById('invi')
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
            canvas.width = (w<=500)? w : Math.ceil(w/3)
            canvas.height = (h<=500)? h : Math.ceil(h/3)
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
canvas.onclick = function(event){
    [r,g,b] = color(event)
}
canvas.onmousemove = function(event){
    [r,g,b] = color(event)
    document.querySelectorAll('.color')[0].style.backgroundColor=`rgb(${r}, ${g}, ${b})`
    document.getElementById('rgb').innerHTML=`rgb(${r}, ${g}, ${b})<br>#${acha_hex(r)}${acha_hex(g)}${acha_hex(b)}`
}
window.addEventListener('DOMContentLoaded',() => {
    document.querySelector('button').onclick = () => upimg.click()
    ctx.fillStyle='#FFFFFF'
    ctx.fillRect(0,0,100,100)
})
function acha_hex(num){
    const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    for(i=0;i<16;i++){
        for(j=0;j<16;j++){
            if((i*16+j*1)==num){
                i = hex[i]
                j = hex[j]
                return String(i+j)
            }
        }
    }
}