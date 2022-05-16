var cocktailContainer = document.getElementById('whole-drink');
var drinkName = document.getElementById('d-name');
var ingredients = document.getElementById('ingredients');
var measurements = document.getElementById('measure');
var directions = document.getElementById('how');
// fetch(
//     'https://thecocktaildb.com/api/json/v1/1/random.php'
// )
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         for (var i=0; i < data.length; i++){
//             var drinkName = document.createElement('h1');
//             var ingredients = document.createElement('h3');
//             var instructions = document.createElement('h3');

//             drinkName.textContent = data[i].strDrink;
//             ingredients.textContent = data[i].strIngredient1;
//             instructions.textContent = data[i].strInstructions;

//             cocktailContainer.append(drinkName);
//             cocktailContainer.append(ingredients);
//             cocktailContainer.append (instructions);
//         }
//     });

// function getCocktail (){
//     var cocktailAPI = 'https://thecocktaildb.com/api/json/v1/1/random.php';
//     fetch(cocktailAPI)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);

//             drinkName.textContent = data[].strDrink;
//             ingredients.textContent = data[].strIngredient1;
//             directions.textContent = data[].strInstructions;
//     });
// }  

// getCocktail();
fetch('https://thecocktaildb.com/api/json/v1/1/random.php')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.array);
        for (var i=0; i < data.length; i++){
            console.log(data[i].drink);
            console.log(data[i].strDrink)
        }
    });

