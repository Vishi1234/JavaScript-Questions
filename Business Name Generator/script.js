let random=Math.random();
let first, second, third;

console.log(random);

// Decididng the adjectives
if (random < 0.33) {
    first ="Crazy"
}
else if (random<0.66 && random>0.33) {
    first ="Amazing"
}
else  {
    first="Fire"
}

//Deciding the shop name
if (random < 0.33) {
    second ="Engine"
}
else if (random<0.66 && random>0.33) {
    second ="Foods"
}
else {
    second ="Garments"
}

//Deciding last word
if (random < 0.33) {
    third ="Bros"
}
else if (random<0.66 && random>0.33) {
    third ="Limited"
}
else {
    third ="Hub"
}

console.log(`${first} ${second} ${third}`)