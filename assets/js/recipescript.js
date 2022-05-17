function showRecipe(results) {
  var recipeCard = results.recipes[0].title;
  console.log(recipeCard);
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
    .then((response) => showRecipe(response))
    .catch((err) => console.error(err));
}

$("#search-Btn").on("click", getRecipe);


