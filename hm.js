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

let presupuesto=9000;
if (presupuesto<9500) //Aqui, si el presupuesto es menor a 9500, se imprime eso.
{
    console.log("estas pobre maestro!");

}
else if(presupuesto>8000) //El else if es cuando la condicion dentro del if no es verdadera, y actua como un else pero con condicion.
{
    console.log('estamos bien che!');
}
else
{
    console.log("andas bien che"); //Si no es menor, (else), se imprime eso. si se cumple el else if este no actua.


}
//NOS QUEDAMOS EN SWITCH

let edad=20;
switch(edad)
{
    case 10:
        console.log("Que joven que sos!");
        break;
    case 20: 
        console.log("hay que agarrar la pala pibe");
        break;
    default: console.log("Cuantos años tenes?");    //esto es como en c++.

}
let name="MAXIMO";
switch(name)
{
    case 'maximo':
        console.log("Buen nombre");
        break;
    case 'MAXIMO':
        console.log('Buen nombre!');
        break;
}
switch(20)
{
    case 10 + 5:
        console.log("el resultado es 15"); //Tambien se pueden switchear operaciones.
        break;
    case 10 + 10:
        console.log("el resultado es 20");
        break;    
}
// EJ. 5:
/* A primary school is giving different rewards based on the student's grade:

Students that got an A will get a Chocolate

Students that got a B will get a Cookie

Students that got a C will get a Candy

For any other value, print "No reward to give."

Create a variable named grade that will store the student's grade.*/
let nota = "B";
switch(nota)
{
    case 'a': // Se pone doble case para que la letra pueda ser minuscula o mayuscula
    case 'A':
        console.log('felicidades! su nota es una A! bien hecho.');
        break;
    case 'b':
    case 'B':
        console.log("Bien hecho, hay que mejorar.");
        break;
    
    case 'c':
    case 'C':
        console.log("Hay querecuperar.");
        break;
        
     default: console.log("Intente nuevamente, la nota no ha sido cargada correctamente.");   

}
for (let x=0;x<10;x=x+1)
{
    console.log(x);
}
let i= 0;

while(i<6)
{
    console.log(`el valor de i es ${i}`);
    i++;

}

/*
Exercise #6
Write a program that prints a half pyramid using asterisks * as shown below:

*
**
***
****
*****
*/
/*for(i=0;i<6;i++)
{
    let linea="";
    for(let j=1;j<=i;j++)
    {
        linea=linea + "*";
    }
    console.log(linea);
} /*aca basicamente lo que se hace es: hago un for,
  con i, para repetir la linea 5 veces. yo tengo que imprimir la misma cantidad de asteriscos que el numero de la linea
entonces, hago otro for que imprima un asterisco hasta que la variable j sea igual a i, es decir, al numero de la linea. a la variable linea le voy sumando
un asterisco.*/

//AHORA AL REVES)
for(i=5;i>=0;i--)
{
      let linea="";
    for(j=0;j<=i;j++) 
  
    {
    linea=linea+"*";
    } 
    console.log(linea);  //aqui es lo mismo, basicamente j agrega un * cada vez que j sea menor o igual a i. como i empieza de 5, j imprimira
    //hasta 5. asi sucesivamente.
}
function maxi() //Creo una "funcion" que imprima hola mundo
{
    console.log("hola mundoo");
}
maxi(); //Una vez creada, debo "llamarla", para que finalmente se imprima el hola mundo o lo que hace la funcion.
function max(nombre,clima) //Ahora creo la funcion que este en funcion de la variable nombre y clima (sin declarar como let, etc.) al llamarla, tengo que especificar el valor de la variable nombre y clima.
{
    console.log(`buenos dias ${nombre}! hoy está ${clima}`);
}
max("Maxi","lluvioso");

//TAMBIEN SE PUEDE:
function mux(nombre = "maxi",clima)
{
    console.log(`buenos dias ${nombre}! hoy está ${clima}`);  
}
mux(undefined,"soleado"); //Se pasa como undefined en el primer lugar que es el de nombre, ya que lo especificamos antes. y luego ponemos lo que queremos en el segundo lugar que es el de clima.
//o si pongo null:
mux(null,"soleadisimo!"); //Null es como dejar a proposito el lugar "vacio", mientras que undefined pone lo default.
function suma(a,b)
{
    return a+b;// cuando llame a la funcion, me va a devolver la suma entre a y b.
}
let resultado= suma(4,6);//pongo que resultado sea la funcion suma con a=4 y b=6.
console.log(resultado);

function edadparaconducir(edad)
{
    if(edad<18)
    {
        return "sos muy joven para tener una licencia de conducir!"; //IMPORTANTE: LO QUE ESTA DETRAS DEL RETURN SE IGNORA
    }
    return "saca la licencia maestro!";
}
console.log(edadparaconducir(16));
console.log(edadparaconducir(20));
function print()
{
    console.log("Lindo dia!");
    return;
    console.log("Gran dia!");

}
print(); //Aqui se imprime el lindo dia, el gran dia se ignora.

let myString = "Hello World!";

function greet() {
  let myString = "Morning!";
  console.log(myString);
}

greet();  // Morning!//Esto se da porque en la funcion esta definida LOCALMETNE. entonces, desde afuera no podría acceder a este valor porque se accede unicamente a variables globales.
console.log(myString); // Hello World! //Esto se da porque mystring esta definida globalmente, y desde afuera de la funcion accedo unicamente a variables GLOBALES.
//NOS QUEDAMOS EN REST PARAMETER
function rest(...messi)
{
    console.log(messi);
}
rest("a","b","c","d"); // el rest parameter (...) es un dato que almacena cuantos datos yo quiera en forma de array.
// FUNCION "arrow" o "flecha":
const pepe=(a,b,c)=>{
console.log(a,b,c);  //Esta forma de escribir la funcion pepe supuestamete es mas facil.
}
pepe("maxi","pepe","juan");
const sumita = (num) => num + 2;//esta forma es mas facil de escribir, sin poner el return,{}, etc.
const greetings = () => console.log("Hello World!");//Puede hacerse de esta manera si necesito una sola linea
const pepeeto = () => {
  console.log("Hello World!");
  console.log("How are you?");    
}//si necesito mas de una linea debo poner llaves.

//EJERCICIO 7.
function areacuadrado(lado)
{
let area= lado*lado;
let perimetro= 4*lado;
    console.log(`el area es ${area}`);
    console.log(`el perimetro es ${perimetro}`);
}
areacuadrado(2);