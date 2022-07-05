console.log("conditionals");

/* 
if (salyga){
    vygdom jei true
} else {
    vygdom jei false
}
*/

let isUserAdmin = false;

if (isUserAdmin === true) {
  console.log("useris yra adminas");
} else {
  console.log("useris nera adminas");
}

// sukuriam kintamji amzius

// priklausomai nuo amziau ispausdinam sugauges arba nesuauges

// gaunam amziu i prompt ir paziurim kad veiktu

// let amzius = prompt("iveskite savo amziu");
// let ivestasAzmius = Number(amzius);

// if (ivestasAzmius > 17) {
//   console.log("asmuo yra pilnametis");
// } else {
//   console.log("asmuo yra nepilnametis");
// }

let amzius = 0;

// jei amzius yra 0-17 vaikas
// jei amzius yra 18-70 suauges
// jei azmius yra 70-150 senjoras

// && AndAnd logine sandauga
// || Or logine sandauga

if (amzius > 0 && amzius < 18) {
  console.log("vaikas");
} else if (amzius < 70) {
  console.log("suauges");
} else if (amzius < 150) {
  console.log("senjoras");
} else {
  console.log("kazkas negerai", amzius);
}
