//DESAFIO 4
let n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j);
    }
}

//Resposta correta letra e. 1 1 2 1 2 3 1 2 3 4
///////////////////////////////////////////////

//DESAFIO 5
let flag;

flag = (!(true && false) || (false && true));

console.log(flag);

//Resposta correta letra a. true
///////////////////////////////

//DESAFIO 6 
let x = 0;
let a = 0;
let b = -5;
if (a > 0) {
    if (b < 0) {
        x = x + 5;
    } else if (a > 5) {
        x = x + 4;
    } else {
        x = x + 3;
    }
} else {
    x = x + 2;
}
console.log(x);

//Resposta correta letra b) 2


/*
4) e.1 1 2 1 2 3 1 2 3 4
5) a. true
6) b.2
*/