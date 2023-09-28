 //REMOVER REPETIÇÃO DE NUEMROS
 function identNumSolitario(arr) {

    const frequencia = {};

    for (const num of arr) {
        if (frequencia[num]) {
            frequencia[num]++;
        } else {
            frequencia[num] = 1;
        }
    }
    
    const numSolitarios = [];

    for (const num in frequencia) {
        if (frequencia[num] === 1) {
            numSolitarios.push(parseInt(num)); 
        }
    }
    return numSolitarios;
}

  const numSolitarios = [
    12,
    17,
    15, 
    19, 
    22, 
    17,
    19,
    12,
  ];
  
  const solitarios = identNumSolitario(arr);
  console.log(solitarios);

  // Saida Console: [15, 22]