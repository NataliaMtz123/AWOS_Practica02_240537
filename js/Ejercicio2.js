//Tipos de datos en Java Script

//Personalizacion de salidas a consola

//const bg="linear-gradient(45deg, rgba(52,152,219,1) 0% ,rgba(26,188,156,1) 50%)";
//const style_console=`background:${bg};color:white;border-radius:6px;padding:4px;font-size:1.0rem;font-weiggt:bold`

console.log("%c2.- Ejercicio 02: Tipos de Datos ", style_console);

//1. Undefined - valorpor defecto asignado a variables declaradas pero no inicializadas, no es igual a NULL
console.warn("1.- UNDEFINED (No definido)")
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso=undefined;

console.log("Valores actuales de las variables");
console.log(`usuarioLogeado=${usuarioLogeado}`);
console.log(`rolUsuario=${rolUsuario}`);
console.log(`ultimoAcceso=${ultimoAcceso}`);


/* En Java Script existe el método typeof() que nos devuelve el tipo de datos
de una variable declarada
*/

console.log("Tipos de dato de las variables declaradas:");
console.log(`usuarioLogeado=${typeof(usuarioLogeado)}`);
console.log(`rolUsuario=${typeof(rolUsuario)}`);
console.log(`ultimoAcceso=${typeof(ultimoAcceso)}`);

//Supongamos que un usuario denominado NataliaCarrasco se he logueado exitosamente, el valor de la variable debera actualizarse a su username
usuarioLogeado="NataliaCarrasco";

//pero no solo cambiará su valor, tambien cambiará su tipo
console.log(`El valor de la variable usuarioLogeado es: ${usuarioLogeado} y su nuevo tipo de datos es: ${typeof(usuarioLogeado)}`);

//2. BOOLENA (TRUE/FALSE) - Verdadero o Falso
console.warn("2.- BOOLEAN (TRUE/FALSE)")
var hayUsuarioLogeado=true;

/** 
 * Supongamos que nuetsra app tendra un menu especifico para los usuarios registrados,
 * en el podran visualizar sus mensajes o esatdos de sus publicaciones  de renta
 * o venta de propiedades, a diferencia de un usuario que entra de manera incognita a visualizar las propiedades
 */
function validacionUsuarioLogeado(){
console.log(`El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado}, que es de tipo: ${typeof(hayUsuarioLogeado)}`);

if(hayUsuarioLogeado===true)
{
    console.log("Dado que se ha logeado el usuario un usuario la app mostrara el menu de usuario");
}else if (!hayUsuarioLogeado)
{
console.log("Dado que no hay usuarios logeado la app no mostrara el menu de usuario");
}
else{
    console.log("No puedo procesar este tipo de datos, requiero de un booleano");
}
}

//test1: usuario logeado=true
hayUsuarioLogeado=true;
console.log("Test 1")
validacionUsuarioLogeado();

//test2: usuario logeado=false
console.log("Test 2")
hayUsuarioLogeado=false;
validacionUsuarioLogeado();

//test3: usuario logeado= a CUALQUIER OTRA COSA
console.log("Test 3")
hayUsuarioLogeado=52.5
validacionUsuarioLogeado();


//3. NUMBER (NúmericO)
console.warn("3.- NUMBER (NUMÉRICOS)")
/**
 * Es importante saber que Java Script a diferencia de otros lemguajes no diferencia los datos de tipo 
 * numérico, lo que para otros lenguajes de programación lo que un ENTERO (INT), FLOTANTE (FLOAT), DECIMAL
 * , DOBLE (DOUBLE), para el solo son números (NUMBER)
 */
let userID_Owner=225
let priceProperty=125000.50
let latGPS=20.240508
let longGPS=-97.95952881
let altGPS=1180

console.log(`Los valores de las variables declaradas para los datos de la propiedad son:
                    ID del Uusario propietario: ${userID_Owner}
                    Precio de la propiedad: ${priceProperty}
                    Latitud (GPS) : ${latGPS}
                    Longitud (GPS): ${longGPS}
                    Altitud (GPS): ${altGPS}`);

console.log(`Los TIPOS DE DATOS de las variables declaradas para los datos de la propiedad son:
                    ID del Uusario propietario: ${typeof(userID_Owner)}
                    Precio de la propiedad: ${typeof(priceProperty)}
                    Latitud (GPS) : ${typeof(latGPS)}
                    Longitud (GPS): ${typeof(longGPS)}
                    Altitud (GPS): ${typeof(altGPS)}`);


var fullnameOwner="Natalia Carrasco";
let namePropery="       Hermosa casa en la playa en Puerto Vallarta    ";
let descriptionProperty="Casa de 2 pisos, 4 habitaciones, 2 baños completos y estacionamiento para 2aqutomoviles a orilla del mar";
var statusProperty="Disponible";
const typeProperty="C";
var addresProperty;

/**
 * Los tipos de datos STRING  son una palabras, valores cualitativos de las entidadesde nuestra aplicacion
 * que no tienen un tamaño maximo y que estan conformadas de caracteres alfabeticos, caracteres especiales
 * como acentos o simbolos de algun idioma
 */

console.warn("4. STRING (CADENA DE  CARÁTERES, PALABRAS");
console.log(`El usuario: ${fullnameOwner},
        esta vendiendo o rentando : ${namePropery}
        que consiste en: ${descriptionProperty}
        actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`);


        console.log(`Las variables declradas son del tipo: 
            fullnameOwner: ${typeof(fullnameOwner)}
            nameProperty: ${typeof(namePropery)}
            descriptionProperty: ${typeof(descriptionProperty)}
            statusProperty: ${typeof(statusProperty)}
            typeProperty: ${typeof(typeProperty)}`);


/**
 * Manipulando String, los tipos de datos cualitativos tienen ciertos métodos
 * para manipular su valor por mencionar algunos:
 */

//Transformar a MAYUSCULAS
console.log(`Nombre del propietario ${fullnameOwner.toUpperCase()}`);
//Transformar a miniscula
console.log(`Descripcion de la propiedad: ${descriptionProperty.toLocaleLowerCase()}`);
//Numero de Caracteres
console.log(`Numero de letras en el tuipo de Propiedad: ${typeProperty.length}`);
//Subcadena
console.log(`Apellidos del propietario: ${fullnameOwner.slice(8,fullnameOwner.length)}`);
//Eliminar espacios
console.log(`Nombre del propietario: ${namePropery.trim()}`);
//Remplazar caracteres
console.log(`Descripcion modificada: ${descriptionProperty.replace("MAR", "RIO")}`);
//Remplazar todos
console.log(`Descripcion modificada: ${descriptionProperty.toLocaleUpperCase().replaceAll("A", "4")}`);

//5. BIGINT (Entero de Grandes dimensiones

/** 
 * Este tipo de dato permite almacenar numeros exageradamente amplios que usualmente
 * aplicaciones cientificas avanzadas requieren, esto para no perder presicion en los 
 * valores almacenados
*/

const numeroGrande=1234567890;
let numeroGrande2=12345678901234567890;
let numeroGrande3=123456789012345678901234567890;
let numeroGrande4=1234567890123456789012345678901234567890;

console.warn("5. BIGINT (Entero de gran precision")

console.log(`El valor de numeroGrande es: ${numeroGrande} y es soportado por: ${typeof(numeroGrande)}`);
console.log(`El valor de numeroGrande2 es: ${numeroGrande2} a pesar de ser soportado por:  ${typeof(numeroGrande)} comienza a tener problemas de precision`);
console.log(`El valor de numeroGrande3 es: ${numeroGrande3} ya no es soportado por NUMBER y adquiereunnuevo tuipo siendo: ${typeof(numeroGrande3)}`);
console.log(`El valor de numeroGrande4 es: ${numeroGrande4} ya no es soportado por NUMBER y adquiereunnuevo tuipo siendo: ${typeof(numeroGrande4)}`);

numeroGrande2=BigInt("12345678901234567890")
console.log(`Si declaramis la variable con Bigint el valor de numeroGrande2 es: ${numeroGrande2} con un tipo de dato: ${typeof(numeroGrande2)}`);
numeroGrande2=BigInt("123456789012345678901234567890")
console.log(`Si declaramis la variable con Bigint el valor de numeroGrande3 es: ${numeroGrande3} con un tipo de dato: ${typeof(numeroGrande3)}`);
numeroGrande2=BigInt("1234567890123456789012345678901234567890")
console.log(`Si declaramis la variable con Bigint el valor de numeroGrande4 es: ${numeroGrande4} con un tipo de dato: ${typeof(numeroGrande4)}`);

//6. SYMBOL (Simbolo)

/**
 * Es un tipo de dato que ademas de tener un tipo, un avlor, asocia la ubicacion del espacio
 * en memoria, por lo que todos los valores asignados a esta variable de este tipo siempre serán
 * ÚNICOS
 */

console.warn("6. SYMBOL (Simbolos)");

const numero1=4;
const numero2=4.0;
const numero3="4";
const numero4="4.0";
const numero5=Symbol(4);
const numero6=Symbol(4.0);
const numero7=Symbol("4");
const numero8=Symbol("4.0");

//Valores y tipos de datos
console.log(`Valores y tipos:
    numero1 - valor: ${numero1}, tipo: ${typeof(numero1)}
    numero2 - valor: ${numero2}, tipo: ${typeof(numero2)}
    numero3 - valor: ${numero3}, tipo: ${typeof(numero3)}
    numero4 - valor: ${numero4}, tipo: ${typeof(numero4)}
    numero5 - valor: ${numero5.description}, tipo: ${typeof(numero5)}
    numero6 - valor: ${numero6.description}, tipo: ${typeof(numero6)}
    numero7 - valor: ${numero7.description}, tipo: ${typeof(numero7)}
    numero8 - valor: ${numero8.description}, tipo: ${typeof(numero8)}`);

    //Pruebas comparativas

    if(numero1==numero2)
        console.log("Las variables numero1 y numero2 son iguasles en valor.")
    else
        console.log("Las variables numero1 y numero1 no son iguales en valor.")

     if(numero1==numero3)
        console.log("Las variables numero1 y numero3 son iguasles en valor.")
    else
        console.log("Las variables numero1 y numero3 no son iguales en valor.")

     if(numero1===numero3)
        console.log("Las variables numero1 y numero3 son iguasles en valor y en tipo.")
    else
        console.log("Las variables numero1 y numero3 no son iguales en valor, ni en tipo.")

     if(numero1==numero4)
        console.log("Las variables numero1 y numero4 son iguasles en valor.")
    else
        console.log("Las variables numero1 y numero4 no son iguales en valor.")

    if(numero1===numero4)
        console.log("Las variables numero1 y numero4 son iguasles en valor y en tipo.")
    else
        console.log("Las variables numero1 y numero4 no son iguales en valor, ni en tipo.")

    if(numero1==numero5)
        console.log("Las variables numero1 y numero5 son iguasles en valor y tipo de dato.")
    else
        console.log("Las variables numero1 y numero5 no son iguales en valor, ni en tipo de dato.")

    if(numero5==numero6)
        console.log("Las variables numero5 y numero6 son iguasles en valor y tipo de dato.")
    else
        console.log("Las variables numero5 y numero6 no son iguales en valor, ni en tipo de dato.")

    //7. NULL (NULO)

    /**
     * El tipo de dato nulo es similar a UNDEFINED, con la variacion de que hay un consentimiento 
     * del usuario o del sistema a que esta variable intencionalmente fue iniciada con este valor
     */

    var isPremiumUser;
    var isNewUser;
    let todayDate=new Date()
    var lastLogin=todayDate;

    console.warn("7. NULL (NULO)")
    console.log(`
        El usuario: ${usuarioLogeado}, tipo de dato: ${typeof(usuarioLogeado)}
        Fecha del ultimo Login: ${todayDate}, tipo de dato: ${typeof(todayDate)}
        Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof(isNewUser)}
        Es usuario  premium: ${isPremiumUser}, tipo de dato: ${typeof(isPremiumUser)}`);

        //Validacion del usuario

    if(todayDate==lastLogin)
        isNewUser=true;
    else
        isNewUser=false;

    /**
     * cOMO ES UN USUARIO NUEVO NO VE, NI PUBLICA NINGUNA PROPIEDAD POR DEFECTO
     * NO INTERESA POR EL MOMENTO QUE SEA PREMIUM HASTA QUE INTERACTUE CON LA PLATAFORMA
     */
    isPremiumUser=null;

    console.log(`
        El usuario: ${usuarioLogeado}, tipo de dato: ${typeof(usuarioLogeado)}
        Fecha del ultimo Login: ${todayDate}, tipo de dato: ${typeof(todayDate)}
        Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof(isNewUser)}
        Es usuario  premium: ${isPremiumUser}, tipo de dato: ${typeof(isPremiumUser)}`);
