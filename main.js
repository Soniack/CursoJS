//Camel Case: JS trabaja asi: parseInt(), tambien es buena practica declarar de la misma forma variables: variableUno
// Tiene un alcance global
var numero = 15;
// Tiene un alcance regional
let numeroDos = 10;
// Tipo de dato que existe pero no tiene valor (undefined), solo en var y let::Temporalmente no tiene valor
let indefinido;
// Una constante no se puede modificar::Se debe inicializar cuando se declara
const pi = 3.1416;
// Se puede declarar multiples variables separas por comas
let a=1, b=2, c=3, d="3";
// null: La variable no tiene valor
let valor=null;
// NaN:Not at Number, no se puede realizar una operacion con numeros y textos
console.log(a*d);
// prompt: Pide una entra al usuario
prompt("Hola, escribe algo");
// Guardar la entrada en variable
let nombre = prompt("Hola!, escribe tu nombre");
console.log("Hola "+nombre);
// Operadores (Asignacion)
// x=y,x+=y,x-=y,x*=y,x/=y,x%=y,x**=y,x<<=y,x>>=y,x>>>=y,x&=y,x^=y,x|=y (Es igual a: x=x(operador)y)
a+=1
// document.write escribe en html o web
console.log(a);
// Operadores (Aritmeticos)
// +(Suma normal),--(Resta uno),/(Divicion normal),**(x**(valor)),++(Suma uno),*(Mult Normal),
// &(Resto de la operacion, x=a&b),-(Resta Normal),Unary negation(-)(-x, pasa a negativo el numero), Unary plus (+)
operador = 10;
operador--;
console.log(operador);
// Concatenacion (Unir)
cadenaUno = "!Hola¡";
cadenaDos = "¿Como estas?";
console.log(cadenaUno+cadenaDos);
//Forzar strings, concatenar numeros::Colocar un string antes
console.log(""+a+b);
//Concat(Metodo de cadena)::Igual concatena, pero debe tener un string
console.log(d.concat(b));
//Concatenar con ${} (Recomendada), se usan ``(CTRL+ALT+})
console.log(`Me llamo ${nombre} y soy Desarrollador`);
//Se puede incluir codigo HTML usando ``
incluir = `<h1>Bienvenido</h1>`
document.write(incluir);
//Escape de comillas simples y dobles
frase = 'Un carro "Rojo"';
console.log(frase);
frase = "Un carro 'Azul'";
console.log(frase);
frase = 'Un carro `Verde`';
console.log(frase);
//Operadores de comparacion
// ==,<,>,<=,>=,!=,===(estrictamente sean lo mismo, tipo de dato y valor),!==(estrictamente diferentes)::Devuleven un valor boolean
console.log(a>b);
let igualNum = 23;
let igual = "23"
console.log(igual!==igualNum);
// Operadores Logicos
//&& (AND), Se deben cumplir las dos, || (OR), Se debe cumplir una, ! (NOT), Niega
let valorUno = true;
let valorDos = false;
let resultadoLog = valorUno && valorDos;
console.log(resultadoLog);
resultadoLog = valorUno || valorDos;
console.log(resultadoLog);
resultadoLog = !valorUno;
console.log(resultadoLog);
//Condicionales
if (nombre == "Jorge"){ //Si es verdadero se ejecuta
    console.log(`Tu nombre es ${nombre}`);
}else if (nombre == "Luis") {
    console.log(`Tu nombre es ${nombre}`);
}else{
    console.log("Tu nombre es diferente")
}