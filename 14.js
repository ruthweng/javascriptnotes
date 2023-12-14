const Bernice = {
    name: "Bernice", //String
    age: 15, //Number
    isCool: false, //Boolean
};
/* //console.log(Bernice.name[0]);
for (let i = 0; i < Bernice.name.length; i++){
    console.log(Bernice.name[i]);
}
let i = 0
while (i < Bernice.name.length){
    console.log(Bernice.name[i]);
    i++;
}; */

//figure out if something is part of the String
function needle(name, search) {
    if(name.includes(search)){   //or if(name === search)
    return true;
} else {
    return false;
}
};

console.log(needle(Bernice.name, "Bernice")); //console.log(1 + "1")

function sortString(name){
    let x = [...Bernice.name];
}
// let x = [1,2,3];
// let y = [4,5,6];
// //let z = [...x, ...y];
// let z = [...x, ...y];
// console.log(z);

sortString(Bernice.name);

function remove(name){
    let x = [...name];
    x.splice(0);
    console.log(x);
}
remove(Bernice.name);