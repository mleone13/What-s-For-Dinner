var recipeArray = [];

function showRecipe(results) {
  console.log(results);
  var recipeCard = $("<div>").addClass("card").attr("style", "width:250px");
  var imageDiv = $("<div>").addClass("card-image");
  var figureEl = $("<figure>").addClass("image is-4by3");
  var imageEl = $("<img>")
    .attr("src", results.recipes[0].image)
    .attr("alt", results.recipes[0].title);
  var recipeTitle = $("<h7>")
    .addClass("title is-4")
    .text(results.recipes[0].title);
  var saveBtn = $("<button>")
    .text("save")
    .addClass("saveBtn")
    .attr("data-id", results.recipes[0].id)
    .on("click", function () {
      localStorage.setItem("recipe", results.recipes[0].id);
      recipeArray.push("recipe", results.recipes[0].id);
    });
  $("#recipe-main").append(
    recipeCard.append(
      imageDiv.append(figureEl.append(imageEl)),
      recipeTitle.append(saveBtn)
    )
  );
  document.getElementById('getRecipe').innerHTML=add-recipe;
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
