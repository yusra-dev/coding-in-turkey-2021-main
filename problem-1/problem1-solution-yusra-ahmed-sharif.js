function validateRecipe(fridge, ingredients) {

    let howManyExist = 0;

    // we check if we have all the ingredients in the fridge by using a counter (howManyExist)

    for (let FriIndex = 0; FriIndex < fridge.length; FriIndex++) {

        for (let IngIndex = 0; IngIndex < ingredients.length; IngIndex++) {

            // if we have this ingredients in the fridge add 1 to the counter 
            if (fridge[FriIndex] == ingredients[IngIndex]) {
                howManyExist++;
            }
        }
    }

    //Now we check if all of the ingredients was exist or not if the length of the ingrediance was equal to our counter 
    //that means all of the ingredients were exist in the fridge
     
    if (howManyExist == ingredients.length) {
        return true;
    } else {
        return false;
    }
}

let fridge = ['onion', 'banana', 'lettuce', 'olives']
let ingredients = ['olives', 'onion', 'lettuce']

let result=validateRecipe(fridge, ingredients);
(result==true) ? console.log("The result is TRUE and we HAVE the ingredients in the fridge") : console.log("The result is FALSE and we DON'T HAVE the ingredients in the fridge");

//******************************** Optional Extra Credit Solution ********************************** */

// using command line 

let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(">>What is your ingredients \nPlease enter the item name then a space ", function(answer) {
    items=answer.split(' ');
    let result=validateRecipe(fridge, items);
    (result==true) ? console.log("The result is TRUE and we HAVE the ingredients in the fridge") : console.log("The result is FALSE and we DON'T HAVE the ingredients in the fridge");
    rl.close();
});
