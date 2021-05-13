const programs = [
    {
        name: "area",
        caminho: "area/",
        text: 'Calculador de Área'
    },
    {
        name: "hip",
        caminho: "hipotenusa/",
        text: "Calculador de Hipotenusa"
    },
    {
        name: "media",
        caminho: "media/",
        text: "Calculadora de Média"
    },
    {
        name: "bases",
        caminho: "bases/",
        text: "Conversor de  Bases"
    },
    {
        name: "conversorImg",
        caminho: 'conversor-img/',
        text: 'Conversor de Imagens'
    },
    {
        name: "desconto",
        caminho: 'desconto/',
        text: 'Calculadora de Desconto'
    },
    {
        name: "distancia",
        caminho: "distancia/",
        text: "Conversor de Distância"
    },
    {
        name: "rgb_hex",
        caminho: "hex_rgb/",
        text: "Conversor HEX/RGB"
    },
    romano:{
        caminho: "romano/",
        text: "Conversor Romano/Decimal"
    },
    {
        name: "velocidade",
        caminho: "velocidade/",
        text: "Conversor de Velocidade"
    },
    {
        name: "bascara",
        caminho: "bascara/",
        text: "Equação de 2° Grau"
    },
    {
        name: "potencia",
        caminho: "potencias/",
        text: "Gerador de Potências"
    },
    {
        name: "tabuada",
        caminho: "tabuada/",
        text: "Gerador de Tabuada"
    },
    {
        name: "picker",
        caminho: "color-picker/",
        text: "Seletor de cores"
    },
    gets(name){
        const caminho = `./programs/${this[name].caminho}`
        const text = this[name].text
        return { caminho, text }
    }
}
export { programs }