let random=Math.random();
let a = prompt("Input first number")
let c = prompt("Input the operation")
let b = prompt("Input the second number")

let obj = {
"+": "-",
"*": "+",
"-": "/",
"/": "**",
}
console.log(random)

if (random>0.1) {
//performs correct calculation
console.log(`The answer is: ${a} ${c} ${b}`)
alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
// performs wrong calculation
c= obj [c];
alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
