// Comentario de una sola linea

/* Comentarios
    ...
    multilinea
    */

    const bg="linear-gradient(45deg, rgba(52,152,219,1) 0% ,rgba(26,188,156,1) 50%)"
const style_console=`background:${bg};color:white;border-radius:6px;padding:4px;font-size:1.0rem;font-weiggt:bold`


    //EJERCICIO 01: DECLARACION DE VARIABLES EN JAVASCRIPT
    //1. Utilizando la palabra reservada VAR
console.log("%c1.- Ejercicio 01: Declracion de variables ", style_console);
    // Utilizaremos el método WARN para estilizar las respuestas de las pruebas realizadas a nuestro codigo y facilitar su revisión
    //WARN FRNAJA AMARILLA
    //ERROR FRANJA ROJA

    console.warn("-- Declaración de Variables utilizando el prefijo VAR--")

    var miNombre="Ingrid Natalia"
    console.log("El valor almacenado en la variable miNombre es:" ,miNombre);

    //Modificar el valor de la variable
    miNombre="Natalia"
    console.log("El valor almacenado en la variable miNombre es:" ,miNombre);

    var misApellidos;
     console.log("El valor almacenado en la variable misApellidos es:" ,misApellidos); //undefined

     // Una variable puede cambiar su valor durante la ejecución del programa


     console.warn("-- Declaración de una constante utilizando el prefijo CONST--")
    //2. Utilizando la palabra reservada CONST
     // Una constante a diferencia de una variable es que su valor no cambiará durante toda la ejecución del programa, y al momento de ser
     //declarada esta debera ser inicializada

     const miMatricula =240537;
     console.log("El valor de la constante miMatricula es:" ,miMatricula)

     // Intentando modificar el valor de la constante

     //miMatricula=240538;
     console.log("El valor de la constante miMatricula es:" ,miMatricula)


console.warn("-- Declaración de una constante utilizando el prefijo LET--")


     //3. Utilizando la palabra reservada LET
     // LET es el prefijo utilizado muy similar a VAR con la diferencia en su alcance (SCOPE), aquellas declaradas con VAR tienen un alcance global en el código 
     //no importando bloques o secciones, mientras que las variables declaradas con LET solo existiran dentro del bloque de la funcion

     var fechaNacimiento= new Date("2006-07-19");
    var miEdad=calcularEdad(fechaNacimiento);
    console.log ("Tu edad es de: ", miEdad, "años");

    // Varificamos si es mayot de edad
    if(miEdad>=18){
        var esMayorDeEdad=true
        let esMenorDeEdad=false;
    }
    if(esMayorDeEdad)
        console.log("Eres mayor de edad");
        else
            console.log("Eres menor de edad");

        //console.log("El valor esMenorDeEdad es: ", esMenorDeEdad);

        //La variable booleana no puede persistir 

     function calcularEdad(fechaNacimiento){

        //Para calcular la edad requerimos de la fecha del dia de hoy
        var fechaHoy=new Date();

        // Dado que los datos de fecha son almacenados en multisegundos por default en JavaScript, necesitamos una variable que nos permite saber el numero de multisegundos por dia
        let miltisegundosPorDia=24*60*60*1000;

        //Ya que tenemos los milisegundos por dia tenems que restar a la ferhca de hoy, la fecha en que nacimos para calcular los multisegundos que hemos vivido
        let diasVividos=(fechaHoy-fechaNacimiento)/miltisegundosPorDia;

        //Invocamos el método matematico de la funcion piso (FLOOR) (PARA DAR LA EDAD CUMPLIDA)
        var edad=diasVividos /365.25
        edad=Math.floor(edad);

        return edad
     }



     //Interpolacion de datos

     // $ {} `  (alt96)
     misApellidos="Martinez Carrasco"
     console.log(`Hola, ${miNombre} ${misApellidos} actualmente tienes ${miEdad} años.`)

    // Autor: Ingrid Natalia Martinez Carrasco