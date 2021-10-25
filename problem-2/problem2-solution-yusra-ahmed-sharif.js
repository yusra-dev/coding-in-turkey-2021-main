 function validateRecipeWithQuantity(fridge, ingredients) {

    let counter=0;
    
    for (let fridgeKey in fridge) {
        for (let ingredientsKey in ingredients) {

            // first condition is for knowing if we have a certain ingredient in the fridge
            // the second condiion is for knowing if we have the required quantity 

            if(fridgeKey==ingredientsKey && fridge[fridgeKey] >= ingredients[ingredientsKey]){
                counter++;
            }
        }
    };
// checking if the counter is equal to ingredients items
  if (Object.keys(ingredients).length == counter ) {
      return true;
  } else {
      return false;
  }
}

let fridge = {'tomato': 1, 'onion': 1};
let ingredients = {'tomato': 1, 'onion': 2};
let result= validateRecipeWithQuantity(fridge, ingredients);

(result==true) ? console.log("The result is TRUE and we HAVE all the ingredients in the fridge") : console.log("The result is FALSE and we DON'T HAVE the ingredients in the fridge");

 
 