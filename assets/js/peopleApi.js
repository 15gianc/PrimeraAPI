//URL API - el http que vamos a consumir
const API = "https://jsonplaceholder.typicode.com/users"
const btnSearch = document.getElementById("btnSearch");//para que se cumpla la funcion


//La funcion para obtener los resultados de la API
//consumimos API - 
const getData = (api) =>{ //api (en minusculas) recibe la url que le envia API (en mayusculas)
    //fetch es ese request - es decir GET(que trae la informacion de la API)
    //el parametro (api) tiene la url "https://jsonplaceholder.typicode.com/users"
    //y esa url tiene el array con los 10 JSON(como tal la url trae Json)
    //return para que retorne lo que me respondio la peticion con el fetch
    //pedir (get) (get trae lo de la url) y responde
    //request
    return fetch(api)
    //promesas
    //nos promete traernos lo que tenga si o si la API si sale bien esa promesa
    //la promesa responde
    //La promesa responde algo(response), nos va a responder los siguiente => responda un objeto json
    .then((response) => response.json() )
    .then((json) => { //guardo en la palabra json los 10 json que me trajo la api
        // console.log(json);
        fillData(json);//le envio los datos con el parametro json que son los 10 json de la api para que los utilice la funcion fillData

    } ) 
    //Para que muestre el error que responda la api, en caso de que no sabemos porque se cayó
    .catch((error) =>{
        console.log("Error in the API", error);
    })

}


//Para tomar los datos de las personas, es decir de ese array json, los 10 json y dibujarlos en cards
//Llenar datos, recibiendo datos
const fillData = (json) =>{
   //Empezamos a crear codigo html dentro del js
    let html = "";

//el ForEach es más rapido a la hora de recorrer ese array
//pp = people - porque se va a guardar persona por persona en una card
    json.forEach((pp) => { //pp guarda cada item que recorre el forEach- recorre lo que haya
     //concatena los datos (strings) a la variable (+=)
        html += '<div class="col">'; //Se recomienda comillas simples
        html += '<div class="card h-100">';
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pp.name}</h5>`; //backtiks o interpolacion de cadenas (strings con variables)
        html += `<p class="card-text"> ${pp.email} </p>`;
        html += `<p class="card-text">Phone: ${pp.phone}</p>`;
        html += `<p class="card-text"> <a  href="${pp.website}" target="_blank">Web personal</a></p>`;
        html += '<div class="card-footer">';
        html += `<small class="text-muted">${pp.address.city}</small>`



        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";




    });

    //id de html, luego div, le mandamos desde el js (el div contenedor principal donde van las cards)
    document.getElementById("dataPeople").innerHTML = html;

}




btnSearch.onclick = function(){
//Um parametro recibe un valor - Variable
//Se ejecuta la API
    getData(API);
}

