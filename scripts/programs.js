const programs = [
    //Calculadoras:
    {
        name: "area",
        caminho: "area/",
        text: 'Calculadora de Área',
        type: "calculadora"
    },
    {
        name: "desconto",
        caminho: 'desconto/',
        text: 'Calculadora de Desconto',
        type: "calculadora"
    },
    {
        name: "hip",
        caminho: "hipotenusa/",
        text: "Calculadora de Hipotenusa",
        type: "calculadora"
    },
    {
        name: "media",
        caminho: "media/",
        text: "Calculadora de Média",
        type: "calculadora"
    },
    //Conversores:
    {
        name: "bases",
        caminho: "bases/",
        text: "Conversor de  Bases",
        type: "conversor"
    },
    {
        name: "distancia",
        caminho: "distancia/",
        text: "Conversor de Distância",
        type: "conversor"
    },
    {
        name: "rgb_hex",
        caminho: "hex_rgb/",
        text: "Conversor HEX/RGB",
        type: "conversor"
    },
    {
        name: "conversorImg",
        caminho: 'conversor-img/',
        text: 'Conversor de Imagens',
        type: "conversor"
    },
    {
        name: "romano",
        caminho: "romano/",
        text: "Conversor Romano/Decimal",
        type: "conversor"
    },
    {
        name:"temperaturas",
        caminho: "temperaturas/",
        text: "Conversor de Temperaturas",
        type: "conversor"
    },
    {
        name: "velocidade",
        caminho: "velocidade/",
        text: "Conversor de Velocidade",
        type: "conversor"
    },
    //Outros
    {
        name: "bascara",
        caminho: "bascara/",
        text: "Equação de 2° Grau",
        type: "outros"
    },
    {
        name: "potencia",
        caminho: "potencias/",
        text: "Gerador de Potências",
        type: "outros"
    },
    {
        name: "tabuada",
        caminho: "tabuada/",
        text: "Gerador de Tabuada",
        type: "outros"
    },
    {
        name: "picker",
        caminho: "color-picker/",
        text: "Seletor de cores",
        type: "outros"
    },  
]

const programsGets = function(programName) {
    return programs.find( program => {
        const { name } = program
        if (programName == name) {
            return program
        }
    })
}

export { programsGets, programs }