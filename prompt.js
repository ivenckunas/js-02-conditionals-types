"use strict";

console.log("prompt.js is loaded");

// apskaiciuoti apskritimo plota

let r = 25;
let pi = 3.14;

// pi * (r*r)

let plotas = pi * (r * r);
let resultString = "Jei spindulys yra " + r + " tai apskritimo plotas yra " + plotas + ".";

console.log(resultString);

// ivedam kita spinduli

r = 4.5;
plotas = pi * (r * r);
resultString = "Jei spindulys yra " + r + " tai apskritimo plotas yra " + plotas + ".";
console.log(resultString);

// iskviesti ivedimo dialoga
// prompt("kiek dabar valandu");
// ekstra pranesimas vartotojui
// alert("kazkas kazkaip");
// ok/cancel patvirtinimas
// confirm("ar tikrai norite istrinti faila?");
