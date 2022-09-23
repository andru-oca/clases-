/*CONTROL DE DECISIONES*/

// calculo si es mayor de edad:

// let get_value = prompt('insertar tu edad');
//     set_top = prompt('insertar mayoria de edad');
//     resultado = '';

//     get_value = parseInt(get_value);
//     set_top = parseInt(set_top);

// if (get_value >set_top ){
//     resultado = 'Sos mayor de edad';
// } else {
//     resultado = 'No sos mayor de edad';
// }



// if(get_value>set_top){
//     resultado = 'sos mayor';
// }else if(get_value == 34){
//     resultado = 'EH! tenemos la misma edad!!';
// }else{
//     resultado = 'no sos mayor de edad';
// }

// if(get_value == 34){
//    resultado = 'EH! tenemos la misma edad!!';
// }else if(get_value>set_top){
//     resultado = 'sos mayor';
// }else{
//     resultado = 'no sos mayor de edad';
// }

// console.log(resultado);

// ternary conditional
// resultado = (get_value > set_top) ? 'sos mayor de edad':'no sos mayor de edad'
// console.log(resultado)


// fizzBuzz

// let value = parseInt( prompt("Inserta un valor") ),
//     resultado='' ;

// if (value%3 == 0){
//     resultado = 'Fizz';
// }

// if (value%5 == 0){
//     resultado += 'Buzz'
// }

// console.log( resultado || value)

// switch 

/*Te permite relizar bifurcaciones en las distintas decisiones.*/

/*
switch(expresion){
    case 1:
        console.log('opcion 1');
        break;
}*/


//CONOCER FALSY VALUES

// Valores que son falsy :: undefined , null , NaN , 0 ,'' y false 

// ejemplos
var string = ""; // <-- falsy

var filledString = "some string in here"; // <-- truthy

var zero = 0; // <-- falsy

var numberGreaterThanZero // <-- truthy

var emptyArray = []; // <-- truthy, 

var emptyObject = {}; // <-- truthy


/*Bucles*/
/*Todos los bucles son itereaciones que te permiten repetir decisiones o acciones que cumplan una condicion*/

// FOR LOOPS

for(let i = 0 ; i < 10 ; i++){
    console.log(i);
};

// WHILE LOOPS 
let i = 0,
    stopper = 10 ;
while (i < stopper){
    console.log(i);
    i++;
}

//sumador