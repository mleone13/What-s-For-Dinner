localStorage.clear()
function getStoredRecipe() {
    var recentRecipe = localStorage.getItem('food')
    console.log(JSON.parse(recentRecipe))
    // console.log(recentRecipe)
}
function storeRecipe(recipe) {
   localStorage.setItem('food' , JSON.stringify(recipe.recipes[0]));
   getStoredRecipe()
}



function getRecipe() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "64cf370da4mshd702b86e12ef073p1f91a0jsn145f6b5ca991",
    },
  };
  fetch(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags&number=1",
    options
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => storeRecipe(response))
    .catch((err) => console.error(err));
}
getRecipe()

// localStorage.setItem('random' , 'mental help')





//local storage

// const apiCallData = [
//     {
//         name: 'Recipe',
//         description: 'saved recipe',
//         info: 'recipe info',
//     }
// ]

// var usefulResults = []

// function recipeClickListenerFired(clickedRecipe) {
// localStorage.clear()
// console.log(clickedRecipe)
// receive an event from click listener
// assign the value of the clicked div to clickedValue
// value of clicked div is = 'chicken thing 2'
// var clickedValue = 'Recipe'
// usefulResults.map((result) => {
//     if (result.name === clickedValue) {
//     var recipeForStorage = JSON.stringify(result)
//     console.log(result)
//     localStorage.setItem('JSON', recipeForStorage)
//     }
// }
// }

//   function filterUsefulData(data) {
//     for (let i = 0; i < data.length; i++) {
//       // console.log(data[i])
//       var usefulData = {
//         name: data[i].name,
//         description: data[i].description,
//       }
//       usefulResults.push(usefulData)
//       // console.log(usefulData)
//     }

//     recipeClickListenerFired(usefulResults[0])
//   }