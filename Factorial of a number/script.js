function factorial(n) {
if (n<0)  {
    return 'Factorial is not defined for negative numbers';
} 
 let fact = 1
 for (let i=n; i>1; i-- ) {
    fact= fact * i
}
return fact
}
let num = prompt("enter the number");
console.log(`the factorial of ${num} is ${factorial(num)}`)
