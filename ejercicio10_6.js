function cuentaVocales(str) {
    var str = prompt("escriba una frase");
    let vocales = 'aA';
    let vCounter = 0;

    for (let i = 0; i < str.length; i++) {
        if (vocales.indexOf(str[i]) !== -1) {
            vCounter += 1;
        }
    }
    document.getElementById('cont1').innerHTML += vCounter;
}

function cuentaVocales2(str) {
    var str = prompt("escriba una frase");
    let vocales = 'aeiouAEIOU';

    for (let i = 0; i < str.length; i++) {
        if (vocales.indexOf(str[i]) !== -1) {
            document.getElementById('cont2').innerHTML += str[i];
        }
    }
}

function cuentaVocales3(str) {
    var str = prompt("escriba una frase");
    let vocales = 'aeiouAEIOU';
    let vCounter = 0;

    for (let i = 0; i < str.length; i++) {
        if (vocales.indexOf(str[i]) !== -1) {
            vCounter += 1;
        }
    }
    document.getElementById('cont3').innerHTML += document.write("son " + vCounter + " vocales de " + str.length, " letras");

}

function cuantasVecesVocales(str) {
    var str = prompt("escriba una frase");
    let vocal_a = 'aA';
    let vCont_a = 0;
    let vocal_e = 'eE';
    let vCont_e = 0;
    let vocal_i = 'iI';
    let vCont_i = 0;
    let vocal_o = 'oO';
    let vCont_o = 0;
    let vocal_u = 'uU';
    let vCont_u = 0;

    for (let i = 0; i < str.length; i++) {
        if (vocal_a.indexOf(str[i]) !== -1) {
            vCont_a += 1;
        }
        else if (vocal_e.indexOf(str[i]) !== -1) {
            vCont_e += 1;
        } else if (vocal_i.indexOf(str[i]) !== -1) {
            vCont_i += 1;
        } else if (vocal_o.indexOf(str[i]) !== -1) {
            vCont_o += 1;
        } else if (vocal_u.indexOf(str[i]) !== -1) {
            vCont_u += 1;
        }
    }
    document.getElementById('cont3').innerHTML +=
        document.write("Vocal a son " + vCont_a +
            " Vocal e son " + vCont_e +
            " Vocal i son " + vCont_i +
            " Vocal o son " + vCont_o +
            " Vocal u son " + vCont_u);

}

function divisible(numero) {
    numero = prompt("Escriba un numero")
    if (numero % 2 || numero % 3 || numero % 5 || numero % 7) {
        document.write("es divisble por uno de los cuatro")
    }
}

function divisiblex(n1) {
    var n1 = prompt("Escribe un número");
    if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
        if (n1 % 2 === 0) {
            document.write("Es divisible por 2. ");
        }
        if (n1 % 3 === 0) {
            document.write("Es divisible por 3. ");
        }
        if (n1 % 5 === 0) {
            document.write("Es divisible por 5. ");
        }
        if (n1 % 7 === 0) {
            document.write("Es divisible por 7. ");
        }
    } else {
        document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
    }
}

function cualdivisor(num1) {
    var num1 = prompt("Escribe un número");
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0) {
            document.write("Es divisible por :" + i);
        }
    }
}


function divComun2Num() {
    var num1 = prompt("Escribe el primer numero a comparar divisor");
    var num2 = prompt("Escribe el segundo");
    let divisores1 = [];
    let divisores2 = [];
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0) {
            divisores1.push(i);
            console.log('Es divisible por :' + i);
        }
    }

    for (let i = 1; i <= num2; i++) {
        if (num2 % i === 0) {
            divisores2.push(i);
            console.log('Es divisible por :' + i);
        }
    }
    console.log('divisores2 array', divisores2);
    console.log('-----------------');

    const newArray = divisores1.concat(divisores2);
    const yourArrayWithoutDuplicates = [...new Set(newArray)];
    let duplicates = [...newArray];
    yourArrayWithoutDuplicates.forEach((item) => {
        const i = duplicates.indexOf(item);
        duplicates = duplicates.slice(0, i).concat(duplicates.slice(i + 1, duplicates.length));
    });
    console.log(duplicates);
}
divComun2Num();



function esPrimo() {
    let numero = prompt("Escribe un numero y averigüemos si es primo")
    if (numero == 0 || numero == 1 || numero == 4) return document.write("no es numero primo");
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return document.write("no es numero primo");

    }
    return document.write("es primo");

}


