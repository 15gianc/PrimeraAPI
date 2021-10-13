const API = "https://rickandmortyapi.com/api/character";


//Obteniendo los resultados de la API, es decir la URL
const getData = (api) =>{
    //Retorna el resultado de la API, ya que el fetch se encarga de consumir la API, es decir (api), que tiene la url
    return fetch(api)
    .then((response) => response.json())//guarda esos json(las fotos) en la palabra json <= hay 5000 fotos
    .then ((json) =>{
        fillData(json);//Se envian esas 5000 fotos a lafuncion fillData para ya dibujarlos en el html

    })
    .catch((error) =>{
        console.log("Error in the API", error);//En caso tal de que haya un error
    })

}


//Funcion para comenzar a dibujar las cards de las fotos

const fillData = (data) =>{ //data es el mismo json(recibe las 5k fotos)
    let html = ""; //Creamos la variable html en la cual agregaremos las cards
    //let limit = 20;//Creamos una variable limite de 20 fotos (Para no poner las 5k fotos porque podria colapsar el sistema)

    data.results.forEach(rm => {
        
    
        //utilizamos el for normal porque tiene limites con la condicion que le agregamos (el forEach es para cuando no tengamos que establecer un limite)
        html += '<div class="col">'; //Se recomienda comillas simples
        html += '<div class="card h-100">';
        html += `<img src="${rm.image}" class="card-img-top" alt="${rm.name}">`; //5k fotos en la posicion i, es decir 0 1 2 3...
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${rm.name}</h5>`;
        html += `<p class="card-text"> ${rm.status} </p>`;
        html += `<p class="card-text"> ${rm.species} </p>`;




        html += "</div>";
        html += "</div>";
        html += "</div>";

    });

    document.getElementById("dataAlbum").innerHTML = html;//Se toma la variable html y se le agrega al div contenedor de las 20 cards

}






//Se invoca la funcion automaticamente, ya que no tenemos el boton
//Se le envia la variable API
getData(API); 