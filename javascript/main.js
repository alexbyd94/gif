/* 1. Grab the input value */

//esta linea le da vida al boton de buscar con la clase .js-go
//investigar metodos de document, querySelectory, addEventListener
document.querySelector(".js-go").addEventListener('click' ,function(){
  var input = document.querySelector("input").value;
  console.log(input)
  pushToDOM(input);
});


var alex = new function (e) {
    console.
}

/* 2. do the data stuff with the API */

var url = "http://api.giphy.com/v1/gifs/search?q=dog&api_key=bZQSAXfn49usgmTftm3Z7UsG0hNYRNXB";
//clave api bZQSAXfn49usgmTftm3Z7UsG0hNYRNXB

var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET',url);

//.send envia la peticion al servidor
GiphyAJAXCall.send(null);
GiphyAJAXCall.addEventListener('load', function(e){

  var data = e.target.response;
  pushToDOM(data);
});





/* 3. Show me the GIFs */
function pushToDOM(input) {

  var response = JSON.parse(input);
//para mostrar los datos contenidos en la url segun sus parametros
//imageUrl es un objeto y el reto son sus propiedades
  var imageUrl = response.data;


//forEach itera sobre el array de objetos que envia JSON
  imageUrl.forEach(function(image){

     var src = image.images.fixed_height.url;

     var container = document.querySelector(".js-container");
     container.innerHTML += "<img src=\"" + src + "\">";
  });

}
