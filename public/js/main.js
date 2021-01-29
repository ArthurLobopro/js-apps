let id_button = `id="submit-button"`
function remove_div(num){
    let element= document.getElementById(`div${num}`)
    res.removeChild(element)
    let string = res.innerHTML
    let teste = string.indexOf("div")
    if(teste==-1){
        res.style.display="none"
        id=0
    }
}
function auto_submit(event){
    let tecla = event.key
    if(tecla=="Enter"){
        document.getElementById("submit-button").click()
    }
}