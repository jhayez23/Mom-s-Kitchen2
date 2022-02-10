function getRecipeByIngredients(ingredient) {
    var apiKey="5ebfc61359704b5c905090a0a4deaea6";

  var requestUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey="+ apiKey+"&ingredients=" + ingredient;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
       console.log(data[i])
      }
      function showRecipe(info){
        var info = getRecipeByIngredients(ingredient);
        return showRecipe();
      }


      //prepare info to show on screen 
      //invoke function showRecipe(info)

    });
}
function getInput(ingredient){
    let queryUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + apiKey+ ingredient;
}
function searchBtn(){
    
}


//getRecipeByIngredients("cornstarch");

function getGif(searchItem){
  var apiKey="lIe0211YliRO5OdTCc2iU1UJ5PoFlL6h";
  var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key="+ apiKey+"&q=" + searchItem + "&limit=5&offset=0&rating=pg&lang=en";
console.log(requestUrl);
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
       console.log("data from giphy api")
       console.log(data[i])
      }
      console.log(data);

      function showGif(gifUrl){
        var gifUrl = getGif(searchItem);
        return showGif();
      }

      //prepare gifUrl
      //invoke function showGif(gifUrl)
      return data;
    });
}
//getGif("cornstarch");


document.querySelector("#searchBtn").addEventListener("click",function(event){


  var userInput= document.querySelector("#search").value;


  //getRecipeByIngredients(userInput);
  getGif(userInput);
  var gif = getGif(userInput);
  console.log(gif);
})

function showRecipe(recipeInfo){
 
  fetch(recipeInfo)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    for(var i=0; i< data.length; i++){

    }
    return showRecipe();
  });
//function takes in recipe info from api response and templates info into html to show on page
}
function showGif(gifInfo){
  fetch(showGif)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    for(var i=0; i < data.length; i++){

    }
    return showGif();
  });
  //function takes in gif url info from api response and templates info into img tag to show on page
  }