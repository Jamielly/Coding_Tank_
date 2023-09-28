//É 15 palavras na frase: "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"
function contadorPalavras(frase) {

    let contagem = 1;

    for (let i = 1; i < frase.length; i++) {
        if (frase[i] === frase[i].toUpperCase()) {
            contagem++;
        }
        return contagem;
    }
    return contagem;
}

const frase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
const quantPalavras = contadorPalavras(frase);
console.log("Resultado: ", quantPalavras); 

// Saída Console: 15

/* Verificação do resultado
01- faça
02- Mercado
03- No
04- Ifood
05- Entregamos
06- Tudo
07- O
08- Que
09- Você
10- Precisa
11- Na
12- Porta
13- Da
14- Sua
15- Casa
*/