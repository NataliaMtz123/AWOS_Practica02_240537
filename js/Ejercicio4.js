//Estilización de la barra zona de pruebas en el DevTools en el navegador

console.log("%cEjercicio 04: Objetos", style_console);
//Esto no es un objeto son variables independientes que no se encuentran asociadas
console.warn("1. Propiedades de un objeto")

let propertyID=1;
let propertyName="Departemanto en el Centro de México";
let propertyDescription="Hermoso departamento de 3 recamaras, 1 baño y 1 cajon de estacionamiento ubicado en el centro de la ciudad de México, ubicado en el tercer piso";
let propertyType="D"; // H: House  D: Departament  T: Terrain  L: Locale  W: Warehouse  C: Cabain
let propertyIsSaleable=false; //Se vende?
let propertyIsRentable=true; //Se renta?
let propertyPrice=7500.00
let propertyLat=19.4283813;
let propertyLong=-99.1020177;
let propertyToken=Symbol("D-12558-CDMX-MX-S");
let propertyIncludedServices=["Agua","Luz","Gas"];
let propertyImage=null
let propertyOwnerID=32412
let propertyStatus="Good"

console.log(`Datos de la propiedad en RENTA:
    Nombre:${propertyName}
    Descripción:${propertyDescription}
    Tipo:${propertyType}
    Precio:${propertyPrice}
    Ubicación:  Latidus:${propertyLat} Longitud:${propertyLong}
    Servicios incluidos:${propertyIncludedServices}
    En renta:${propertyIsRentable}
    En venta:${propertyIsSaleable}
    Token: ${propertyToken.description}
    Dueño:${propertyOwnerID}
    Imagen:${propertyImage}`)

    //2. Declaración de un objeto
    /**
     * Para declarar un objeto en JS es necesario asignarale un nombre y todas sus 
     * propiedades irán entre {} y separadas por coma en el order clave - valor
     */
    console.warn("2. Declaracion de el objeto property")
    property1={
        id:1,
        name:"Departemanto en el Centro de México",
        description:"Hermoso departamento de 3 recamaras, 1 baño y 1 cajon de estacionamiento ubicado en el centro de la ciudad de México, ubicado en el tercer piso",
        type:"D",
        price:7500.00,
        isRentable:true,
        isSaleable:false,
        includeServices:["Agua","Luz","Gas"],
        lat:19.4283813,
        long:-99.1020177,
        status:"Good",
        token:Symbol("D-12558-CDMX-MX-S"),
        ownerID:32412
    };
     //Impresion del objeto en formato tabla
     console.table(property1)

     //3. Leyendo las propiedades de un objetos
     /**
      * un objeto es un conjunto de variables que abstraen una entidad fisica o conceptual 
      * de la que es significativo almacenar informacion para el programa o sistema que 
      * estamos desarrollando,
      * 
      * Para acceder a las propiedades individuales basta con poner el nombre del objeto 
      * un "." y el nombre de la propiedad
      */

     console.warn("3. Lectura de propiedades de un Objeto");
     console.log(`El usuario con id: ${property1.ownerID} esta rentando un: ${property1.name} el cual se describe como : 
        ${property1.description} por un precio de: ${property1.price} con los servicios incluidos de: ${property1.includeServices} 
        ${property1.isSaleable?", actualmente esta a la venta" : "que por el momento no esta a la venta"}.`) ;


    //4. Modificacion de los valores de las propiedades de un objeto
    /**
     * Para modificar los datos de una variable basta con acceder a la propiedad 
     * deseada a modificar y asignarle su nuevo valor a travez del signo =
     */
    property1.price=8200.00;
    property1.isSaleable=true;
    property1.includeServices=["Agua","Luz","Gas","Internet","Seguridad Privada"];

    console.warn("4. Modificacion de propiedades de un objeto");
     console.log(`El usuario con id: ${property1.ownerID} esta rentando un: ${property1.name} el cual se describe como : 
        ${property1.description} por un precio de: ${property1.price} con los servicios incluidos de: ${property1.includeServices} 
        ${property1.isSaleable?", actualmente esta a la venta" : "que por el momento no esta a la venta"}.`) ;


     //5. Destructuracion de Objetos (OBJECT DESTRUCTURING)
     /**
      * JavaScript es un lenguaje dinamico que permite que un objeto previamente
      * definido pueda ser descompuesto en pequeñas nuevas partes (variables) para
      * que estas puedan ser manipuladas segun sea la necesidad
      */

     user1={
        userID:32412,
        name:"Hohn Doe",
        email:"john.doe@gamil.com",
        createdAt: Date("2015/01/30T23:15:52"),
        lastLogin: Date("2026/01/20T00:00:05"),
        userRole:("Vendedor"),
        totalProperties:12,
        rating:9.4
     }

     user2={
        userID:48571,
        name:"Marco Ramirez",
        email:"marco@gamil.com",
        createdAt: Date("2024/08/20T15:08:58"),
        lastLogin: Date("2026/01/19T23:15:35"),
        userRole:("Comprador"),
        rating:8.5,
        lastOperation: "Buscando Departamento para renta"
     }

      user3={
        userID:12345,
        name:"Berenice Carrasco",
        email:"berenice.carr@gamil.com",
        createdAt: Date("2024/03/20T16:08:50"),
        lastLogin: Date("2026/01/20T10:10:10"),
        userRole:("Comprador"),
        rating:6.2,
        lastOperation: "Buscando Departamento para renta"
     }

      user4={
        userID:45968,
        name:"Edwin Yair",
        email:"edwin.yair@gamil.com",
        createdAt: new Date("2024/01/24T14:18:48"),
        lastLogin: new Date("2026/01/20T12:12:12"),
        userRole:("Comprador"),
        rating:9.0,
        lastOperation: "Buscando Departamento para renta"
     }

     console.warn("5. Desestructuracion de Objetos")

     const buyerBid = (seller, buyer, property, price_bidded) => {
  const { userID: sellerID, email: sellerEmail } = seller;
  const { userID: buyerID, email: buyerEmail } = buyer;
  const { price, id } = property;

  const fecha_oferta = new Date();

  console.log(`El usuario: ${buyerID} (${buyerEmail}) está realizando una oferta al usuario: ${sellerID} (${sellerEmail})
por la cantidad ofertada de: ${price_bidded} por la propiedad ${id}
Precio real: ${price}
Fecha: ${fecha_oferta.toLocaleString()}`);

  const bid_ocurrate = ((price_bidded / price) * 100).toFixed(2);

  return {
    bid_ocurrate
  };
};


   // Test 1
let bid1 = buyerBid(user1, user2, property1, 7500);
console.log(`La oferta tiene una exactitud del: ${bid1.bid_ocurrate}%`);

// Test 2
let bid2 = buyerBid(user1, user3, property1, 8200);
console.log(`La oferta tiene una exactitud del: ${bid2.bid_ocurrate}%`);

// Test 3
let bid3 = buyerBid(user1, user4, property1, 10000);
console.log(`La oferta tiene una exactitud del: ${bid3.bid_ocurrate}%`);
