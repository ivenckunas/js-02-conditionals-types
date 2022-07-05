let userName = "James";
let age = 50;
let town = "London";

// Student James is 22 yo and he lives in London.

// ES6 Template Literals
let sentence = "Student " + userName + " is " + age + " yo and he lives in " + town + "" + ".";

sentence = `Student ${userName} is ${age} yo and he lives in ${town}.`;
console.log("sentence ===", sentence);

// multi line
let str = `
cia yra pirma eilute
cia yra antra eilute
cia yra paskutine eilute
`;

console.log("str ===", str);

// galima atlikti matematines operacijas
// suzinoti kiek metu bus userName po 5 metu

let afterAge = `${userName} will be ${age + 5} in 5 years`;
console.log("afterAge ===", afterAge);

// gauti is vartotojo amziaus pokyti ir atspausdinti kiek bus meto po to pokycio
let ivestasSkaicius = prompt("iveskite metus nuo 1-10");
// jei norim paziureti tipa tai galima pamatyti su typeof
console.log(typeof ivestasSkaicius);
let ivestasSkaiciusNumber = Number(ivestasSkaicius);
afterAge = `${userName} will be ${age + ivestasSkaiciusNumber} in ${ivestasSkaicius} years `;
console.log("afterAge ===", afterAge);
