//Convertendo de 12h para 24h 
function conversorHorario(hora){

    const horario24h = Math.floor(hora[i].horario24h); //separando a hora em fraqmento
    
    let horas = parseInt(partehora[1]);
    const min = parseInt(partehora[2]);
    const seg = parseInt(partehora[3]);
    const tempo = partehora[4].toUpperCase();

    if (tempo === "pm" && horas !== 12) {
        horas += 12;
    } else if (tempo === "am" && horas === 12) {
        horas = 0;
    }

    const hora24h = horas.toString().padStart(2, '0')
    min.toString().padStart(2, '0') 
    seg.toString().padStart(2, '0');

    return hora24h;
}
/* Tem duas formas e essa é a mais fácil:

function conversorHorario(hora) {
    // Dividir a string da hora em partes
    const partesHora = hora.split(':');
    const horas = parseInt(partesHora[0]);
    const minutos = parseInt(partesHora[1]);

    // Extrair o período (am ou pm)
    const periodo = hora.slice(-2).toLowerCase();

    // Verificar se as horas precisam ser ajustadas para o formato de 24 horas
    if (periodo === "pm" && horas !== 12) {
        horas += 12;
    } else if (periodo === "am" && horas === 12) {
        horas = 0;
    }

    // Formatar as horas e minutos para o formato de 24 horas
    const hora24h = horas.toString().padStart(2, '0');
    const minuto24h = minutos.toString().padStart(2, '0');

    // Retornar a hora no formato de 24 horas
    return `${hora24h}:${minuto24h}`;
}
*/