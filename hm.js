console.log("hola mundo"); // esto es un STATEMENT.
console.log("Estoy aprendiendo JS! :D");

//EJ. 1
/*
console.log("Maximo Mac Gaw"); //esto es un string, una concatenacion de caracteres.
console.log(21);
console.log("universitario y Trabajador");
// Variables: 
let msj="Maximo Mac Gaw" //declaro msj, para luego mediante el console.log se lea msj.
console.log(msj);
msj="soy el mejor"; //le cambio el valor a msj.
console.log(msj);
let m_s_j_1="buen clima che";//Puede, ponerse guiones bajos y numeros. los numeros no pueden estar como primer digito. ej: 1msj.
console.log(m_s_j_1);
const EDAD_MAXI=21; // esta variable es constante. Convencionalmente se declaran en MAYUSCULAS
console.log(EDAD_MAXI);

var msj2="crack"; //var tiene practicamente la misma utilidad, solo cambia la accesibilidad al valor de la variable (SCOPE)
console.log(msj2);
/* 
Exercise #2
Write a program with three variables, each with the following value:

The first variable contains your name

The second variable contains your age

The third variable contains your occupation

Then print the variables using the console.log() method. Here's the example output:*/
/*
let nombre="Maximo";
const EDAD=21;
var ocupacion= "ingeniero";
console.log(nombre);
console.log(EDAD);
console.log(ocupacion);

// 7- JS BASIC DADA TYPES
let msj3="hola!";
console.log("el mensaje es:" + msj3);
console.log("mi nombre es: "+ nombre + " mi edad es: " + EDAD);
console.log(` ${nombre} esta aprendiendo JS a sus ${EDAD} años `);// estas comillas son alt gr y cerrar llave.

*/
let x=1;
let y=2; //Numeros tipo INTEGERS
console.log(x+y);
let f=2.1;
let g=3.06;//Numeros tipo FLOAT
console.log(f+g); 
console.log(g*f);
console.log(g/x);
console.log(x-y);

let on=true;
let primernombre; //undefined. "sin intencion" se pone sin valor la variable
let vacio=null; //null, con intencion se declara la variable sin valor
let b="5"; //aqui b se declaro como un string.
let a=3;
console.log(b+a); //los junta como 53, no los suma como 5+3.
b = Number(b);// ahora cambio b al tipo de variable NUMERO, y luego la sumo.
console.log(b+a);
a= String(a);
console.log(b+a); //cambio a al tipo string, y las junto, quedando 53. TAMBIEN EXISTE EL Boolean().
/*
1 + "1" // "11"
[1 ,2] + "1" // "1,21"
true + "1" // "true1"
*/
let precio="1";
let agenda=5;
let tru=true
let fal=false
numero= Number(agenda) + Number(precio); //se recomienda hacer esto en lugar de juntar variables con distinto tipo.
console.log(numero<2 && 3>2);        // && es un "Y" logico. devuelve true si los dos son verdaderos.
console.log(numero<3 ||5<6);  // || es un "O" logico. devuelve true si uno solo es verdadero.
console.log(true && false);
console.log(false || false);
console.log(!true);
console.log(typeof agenda); //el typeof te permite "chequear" que tipos de datos estas usando, asi como en este caso es un numero, al ponerlo en el console log, devuelve "number".

//EJERCICIO 3:
console.log(19 % 3); // % devuelve el resto de la division 19/3. =1.
console.log(10 == 3);//False
console.log(10 !== "10");// True, porque !== considera igualdad entre el tipo de la variable y los digitos. los digitos son iguales pero una es number y la otra string.
console.log(2 < "10"); //true
console.log("5" > 2); //true
console.log((false && true) || false);//False

let arreglo=['messi','yamal','maxi','jordan',"10"]; //Posiciones 0,1,2,3. cada una se guarda en un "casillero"
arreglo[0]//Accedo al contenido del casillero 0, que en este caso es messi.

console.log(arreglo[0]);// Para imprimir el casillero 0, debe primero acceder a el como se vio y luego ponerlo en la consola.
arreglo[3]='Maximo mac gaw'; //Aqui cambio el contenedor 3, anteriormente jordan, por "maximo mac gaw"
console.log(arreglo); //Imprimo el arreglo completo.
arreglo.push('lamine'); //Push agrega un item en el final del array
arreglo.pop();//pop elimina el ultimo casillero del array, basicamente agregué un casillero y lo elimine.
arreglo.unshift('boca'); //unshift agrega en el casillero 0 un item. y desplaza a los demas un lugar.
arreglo.shift(); //shift elimina el casillero 0.
let posicion=arreglo.indexOf('maxi');  //declaro la variable posicion, para que con el index0f, rescate despues el numero del casillero de la palabra especificada.
console.log(posicion);//Imprimo posicion

console.log(arreglo.length);//La funcion lenght te da el tamaño del arreglo, osea, cuantos casilleros tiene.
//Ejercicio 4
let colores=['red','green','blue'];
colores.push('black');//Agrego black al final
console.log(colores);
colores.shift();
colores[0]='blue';//Elimino red y swapeo blue y green
colores[1]='green';
console.log(colores);
colores.unshift('yellow');////Añado yellow al principio
console.log(colores);






