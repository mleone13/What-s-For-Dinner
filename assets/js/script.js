var cocktailContainer = document.getElementById('whole-drink');
var drinkName = document.getElementById('d-name');
var ingredients = document.getElementById('ingredients');
var directions = document.getElementById('how');
var drinkPic = document.getElementById('gram-pic');

fetch('https://thecocktaildb.com/api/json/v1/1/random.php')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    //    debug to make sure feth request was successful
        console.log(data);
        console.log(data.array);
        for (var i=0; i < data.drinks.length; i++){
            // debug tool to see if for loop is generating desired variables
            console.log(data.drinks[i].drink);
             console.log(data.drinks[i].strDrink)
             console.log(data.drinks[i].strGlass)

            var cName = document.createElement('h1');
            var cIng = document.createElement('li');
            var cDir = document.createElement('p');
            var cPic = document.createElement('img');


            cName.textContent = data.drinks[i].strDrink;
            cIng.textContent =data.drinks[i].strIngredient1 + ' ' +  data.drinks[i].strMeasure1;
            cDir.textContent= data.drinks[i].strInstructions;
            cPic.link= data.drinks[i].strDrinkThumb;
            

            drinkName.append(cName);
            ingredients.append(cIng);
            directions.append(cDir);
            drinkPic.append(cPic);
           }
    });

