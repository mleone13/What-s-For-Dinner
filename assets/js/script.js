var drinkName = document.getElementById('cocktail-name');
var ingredients = document.getElementById('cocktail-ingredients');
var drinkDirections = document.getElementById('cocktail-directions');
var drinkPic = document.getElementById('cocktail-image');
function fetchCocktail(){
fetch('https://thecocktaildb.com/api/json/v1/1/random.php')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //    debug to make sure feth request was successful
        console.log(data);
        // console.log(data.array);
        for (var i = 0; i < data.drinks.length; i++) {
            // debug tool to see if for loop is generating desired variables
            // console.log(data.drinks[i].drinks);
            console.log(data.drinks[i].strDrink)
            console.log(data.drinks[i].strGlass)
            console.log(data.drinks[i].strIngredient1);
            console.log(data.drinks[i].strInstructions);

            var cName = document.createElement('h1');
            var cIng = document.createElement('li');
            var cIng2 = document.createElement('li');
            var cIng3 = document.createElement('li');
            var cIng4 = document.createElement('li');
            var cIng5 = document.createElement('li');
            var cIng6 = document.createElement('li');
            var cIng7 = document.createElement('li');
            var cDir = document.createElement('p');
            var cPic = document.createElement('img');


            cName.textContent = data.drinks[i].strDrink;
            cIng.textContent = data.drinks[i].strIngredient1 + ' ' + data.drinks[i].strMeasure1;
            cIng2.textContent = data.drinks[i].strIngredient2 + ' ' + data.drinks[i].strMeasure2;
            cIng3.textContent = data.drinks[i].strIngredient3 + ' ' + data.drinks[i].strMeasure3;
            cIng4.textContent = data.drinks[i].strIngredient4 + ' ' + data.drinks[i].strMeasure4;
            cIng5.textContent = data.drinks[i].strIngredient5 + ' ' + data.drinks[i].strMeasure5;
            cIng6.textContent = data.drinks[i].strIngredient6 + ' ' + data.drinks[i].strMeasure6;
            cIng7.textContent = data.drinks[i].strIngredient7 + ' ' + data.drinks[i].strMeasure7;
            cDir.textContent = data.drinks[i].strInstructions;
            cPic.src = data.drinks[i].strDrinkThumb;

            // if (cIng2.textContent=('null')){
            //     cIng2.textContent='';
            // }
            // if (cIng3.textContent=('null')){
            //     cIng3.textContent='';
            // }
            // if (cIng4.textContent=('null')){
            //     cIng4.textContent='';
            // }
            // if (cIng5.textContent=('null')){
            //     cIng5.textContent='';
            // }
            // if (cIng6.textContent=('null')){
            //     cIng6.textContent='';
            // }
            // if (cIng7.textContent=('null')){
            //     cIng7.textContent='';
            // }
            // if (cIng8.textContent=('null')){
            //     cIng8.textContent='';
            // }

            drinkName.append(cName);
            ingredients.append(cIng, cIng2, cIng3, cIng4, cIng5, cIng6, cIng7);
            drinkDirections.append(cDir);
            drinkPic.appendChild(cPic);
        }
    });
}

var button = document.getElementById('button');
button.onclick = function () {
    // button debugging
    console.log("it's working");

    fetchCocktail();
    while (drinkName.hasChildNodes()){
        drinkName.removeChild(drinkName.firstChild);
    }
    while (ingredients.hasChildNodes()){
        ingredients.removeChild(ingredients.firstChild);
    }
    while (drinkDirections.hasChildNodes()){
        drinkDirections.removeChild(drinkDirections.firstChild);
    }
    while (drinkPic.hasChildNodes()){
        drinkPic.removeChild(drinkPic.firstChild);
    }
    
}





