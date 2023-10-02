//function is input output machine
//we declare, define, and run functions
//functions can accept mutiple arguments using commas
/* function test(message) {
    console.log(message);
}
test("bernice stop"); */

/* 
//String "" sentences, word etc.
test("Ugh Jane");
//Numbers/integers
test(45);
//Booleans true or false
test(true);
 */

/* const num1 = Number(prompt ("enter a number")); 
const num2 = Number(prompt ("enter a number"));
 */

/* add(num1, num2) */

x = 7;
y = 8;
function add(x,y){
    console.log(x + y);
}
function test() {
    //Local scope or function scope
    const x = 15;
    const y = 20;
    add (x, y);
}

