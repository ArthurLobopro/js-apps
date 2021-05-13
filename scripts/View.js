function make_btn(prog){
    const { name, caminho, text} = prog
    return ` 
    <li data-name="${name}">
        ${text}
        <a href="./programs/${caminho}" target="_blank"><div class="link"></div></a>
    </li>`
}
