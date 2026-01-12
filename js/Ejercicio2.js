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