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
//else if: Si la primera condicion se ejecuta las siguientes ya no se ejecutan.
// if, if: No es buena forma de usarlo, ya que se siguen ejecuntado las condicionales
if (nombre == "Jorge"){ //Si es verdadero se ejecuta
    console.log(`Tu nombre es ${nombre}`);
}else if (nombre == "Luis") {
    console.log(`Tu nombre es ${nombre}`);
}else{
    console.log("Tu nombre es diferente")
}

//Practica 1
//Heladeria
let tamaño = {
    pequeño: 15,
    mediano: 25,
    grande: 30
}
let sabores = ["Fresa", "Mango", "Limon", "Rompope"];
let dineroDisponible = prompt(`¿Cuanto dinero tienes ${nombre}?`)
if (dineroDisponible>=15) {
    alert(`Bienvenido ${nombre}, somos heladerias Michoacana\n`);
    let tamañoElegido = prompt("Le mostramos los tamaños.\nEliga su tamaño\n1. Helado Pequeño: $15\n2. Helado Mediano: $25\n3. Helado Grande: $30");
    let saborElegido = prompt(`Tenemos los siguientes sabores:\n1. ${sabores[0]}\n2. ${sabores[1]}\n3. ${sabores[2]}\n4. ${sabores[3]}\nDigite un numero para seleccionarlo`);
    let sabor = sabores[saborElegido-1];
    if (tamañoElegido && saborElegido) {
        if (tamañoElegido == 1) {
            dineroDisponible-=tamaño["pequeño"]
            alert(`Eligio el pequeño de ${sabor}`);
        } else if (tamañoElegido == 2) {
            dineroDisponible-=tamaño["mediano"]
            alert(`Eligio el mediano de ${sabor}`);
        }else if (tamañoElegido == 3) {
            dineroDisponible-=tamaño["grande"]
            alert(`Eligio el grande de ${sabor}`);
        } if (tamañoElegido && saborElegido) {
            alert(`Gracias por tu compra ${nombre}, retire su cambio: $${dineroDisponible}`);
        } 
    } else {
        alert("Lo sentimos, no podemos atender su solicitud");
    }
} else {
    alert("Su dinero no es suficiente para comprar alguno de nuestros Helados");
}

//Arreglos: Contiene varios valores o datos: Son Objetos, no datos primitivos
//Todas las posiciones por encima estan declaradas, si no existe el valor sera indefinido
//Los elementos dentro del arreglo se cuentan desde 0
let frutas = ["Platano", "Manzana", "Pera"];
//Mostrar elementos
console.log(frutas); //Muestra todo el arreglo, todos los datos dentro de el
console.log(frutas[0]); //Muestra el valor segun la posicion
//Arreglos asociativos:
//Los valores se asocian a una variable, parecido a JSON
let pc = {
    nombre: "Soniack",
    cpu: "Xeon 1245v3",
    gpu: "RX 5500XT",
    ram: "16GB"
}
console.log(`La pc de ${pc["nombre"]} tiene un ${pc["cpu"]}, ${pc["ram"]} de ram y una ${pc["gpu"]}`);

//Bucles de iteracion
//While: Siempre pregunta hasta que la condicion sea false
let numeroWhile = 0;
while (numeroWhile < 1000) { //Hasta que el numero sea menor que 6 se ejecuta, si es igual ya no se ejecuta
    numeroWhile++
    console.log(numeroWhile);
    if (numeroWhile == 10) {
        break;//Break: Termina la sentencia While
    }
}
//Do while: hacer mientras, es un bucle indeterminado
let numeroDoWhile = 0;
do {
    numeroDoWhile++
    console.log(numeroDoWhile);
} while (numeroDoWhile > 6);//Cuando la condicion ya no se cumple DO ya no se ejecuta
//for: Bucle determinado
//Se conforma: declaramos e inicializamos, condicion e iteramos (incremento o decremento) (hacer lo mismo)
//La variable se puede declarar antes y usar en el ciclo
for (let i = 0; i < 10; i++){ //la variable i solo exite en este bloque
    if (i==3) {
        continue;//Se usa para saltar una iteracion
    }
    if (i==5) {
        break;//Tambien se puede usar break
    }
    console.log(i);
}
//for in:
let animales = ["gato", "perro", "ave"];
for (animal in animales) {//la variable animal en cada vuelta del bucle tomara el valor de cada uno de los indices, posiciones o numero
    console.log(animal);
    console.log(animales[animal]);//aqui devuelve el contenido de la posicion del array, ya que animal en for in solo toma el indice, como si fuera: animales[0]
}
//for of
for (animal of animales) {//la variable animal en cada vuelta del bucle tomara el valor del contenido
    console.log(animal);
}
//label: sentencias que permite asociar un bucle a un nombre, excepto froeach, para poder terminarlo cuando queramos
// Se usa para etiquetar un for, y poder terminarlo con break.
array1 = ["maria", "josefa", "roberta"];
array2 = ["jorge", "luis", array1, "pedro"];
forHombres:
for (let array in array2){
    if (array == 2) {
        for (let array of array1){
            continue forHombres; //Se puede usar brack y continue
            console.log(array);
        }
    }else{
        console.log(array2[array]);
    }
}
//Funciones: Se refiere a bloques de codigo que se pueden volver a llamar dentro del mismo codigo
//Hay varias formas de crear funciones
//Forma 1
function saludar() {
    let estado = prompt(`Hola ${nombre} como estas`);
    if (estado == "bien") {
        console.log("Me alegro mucho!")
    } else {
        console.log("Que mal que estes asi");
    }
}
saludar();
//Forma 2: Asignandolas en variables
let saludarDos = function() {
    let estado = prompt(`Hola ${nombre} como estas`);
    if (estado == "bien") {
        console.log("Me alegro mucho!")
    } else {
        console.log("Que mal que estes asi");
    }
}
//Return: Devulve un valor
function retorno() {
    return("Este valor");//Return tambien finaliza una funcion, por ello si esta antes solo devuelve el valor pero no ejecuta el bloque de codigo
    console.log("Return devuelve un valor");
}
let devuelve = retorno();//Esto solo ejecuta la funcion, si queremos que sea un valor, lo debemos de retornar, cuando la funcion finaliza se convierta en lo que se retorna
console.log(devuelve);
//Parametros en funciones: Estos se usan para las funciones, van despues del nombre de la funcion.
function suma(numero1, numero2) {//Aqui las variables o parametros se declaran
    return numero1 + numero2;
}
let fSuma = suma(10,11);//Aqui las variables o parametros de la funcion se definen
console.log(fSuma);
//
function saludoConParametros(nombreFuncion) {
    let frase = `Hola ${nombreFuncion}`;
    console.log(frase);
}
saludoConParametros("Jorge");
//El Scope de las variables que se declaran en las funciones es regional, las variables que declaran en los parametros solo se usan dentro de la funcion
//Las funciones tiene un Scope(Alcance) global o se pueden llamar en cualquier parte del codigo
//Funciones Flecha
const saludarFlecha = (parametro) => {
    let resFlecha = `Este es tu parametro: ${parametro}`;
    console.log(resFlecha);
}
saludarFlecha("Mi Parametro");
const unParametro = parametro => {//Un beneficio de usar esta forma, es que si solo declaramos un parametro, podemos quitar los parentesis
    let resFlecha = `Este es tu parametro: ${parametro}`;
    console.log(resFlecha);
}
unParametro("Mi Parametro");
//Si dentro de la funcion solo hay una linea de codigo podemos declararla enseguida de la felcha sin usar llaves
//Tambien si aplicamos lo anterior automaticamente se retorna el valor sin usar return
const unaLinea = numero => console.log(numero +1);
unaLinea(3);