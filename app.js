// function add(a,b){
//   return 3+5
// }
// var sum = add(3,5)
// console.log('function')

//Array Operations
const hobbies = ["sleeping", "eating", "making money", "having fun"];
//To add another element
hobbies.push("dancing");
//To delete an element
hobbies.pop();
//Removes the first element
hobbies.shift("baking");
//Adds a new one at the beginning
hobbies.unshift("singing")
//To identify the index value
hobbies.indexOf('making money')

//CONSTRUCTORS
/*Short note on constructors
The naming convention of a constructor uses Pascal Notation i.e the first letter of each function starts with capital letter.
Also, constructor doesn't use a return keyword we use the 'this' keyword. we also use the new operator
*/
class Perimeter {
  constructor() {
    this.name = 'Perimeter';
  }
}

const peri = new Perimeter();

console.log(peri.name);