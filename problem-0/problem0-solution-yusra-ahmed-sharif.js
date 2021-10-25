function whereIsMyFood(fridge,item) {
    let position = -1;
    for (let index = 0; index < fridge.length; index++) {
        if(fridge[index]==item){
            position=index;
            return position;
        }
    }
    return position;
}

let fridge = ['tomato','watermelon', 'banana', 'apple', 'onion', 'cucumber'];
let item = "banana";
let position= whereIsMyFood(fridge,item);
console.log("The position of "+item+" in the fridge is "+position);


//******************************** Optional Extra Credit Solution ********************************** */

// using command line 

let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(">>What do you want in the fridge ?   ", function(answer) {
    let position=whereIsMyFood(fridge,answer);
    console.log("\n The position of "+answer+" in the fridge is "+position);
    rl.close();
});


