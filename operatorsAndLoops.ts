var testName = "John";
console.log("Hello " + testName + "!");
console.log("The meaning of life is " + 42);
console.log(42 + " is the meaning of life");

console.log(1 + "1")   // outputs "11"

console.log(3 - 5)    // outputs -2
console.log(3 * 5)    // outputs 15
console.log(3 / 5)    // outputs 0.6
console.log(5 % 3)    // outputs 2
console.log(5 / 3)    // outputs 1.6666666666666667

// JavaScript also has a Math module which contains more advanced functions:
// Math.abs calculates the absolute value of a number
// Math.exp calculates e to the power of a number
// Math.pow(x,y) calculates the result of x to the power of y
// Math.floor removes the fraction part from a number
// Math.random() will give a random number x where 0<=x<1

console.log(Math.abs(1.2))
console.log(Math.exp(2))
console.log(Math.pow(2, 3))
console.log(Math.floor(1.2456))
console.log(Math.random())

if (true) {
    console.log("Hello John, how are you?");
} else {
    console.log("Then what is your name?");
}
var rank: "Private" | "Sergeant" | "Commander" | "Captain" = "Commander"

switch (rank) {
    case "Private":
    case "Sergeant":
        console.log("You are not authorized.")
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?")
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.")
        break;
    default:
        console.log("I don't know what your rank is.")
        break
}

var i;
for (i = 0; i < 3; i = i + 1) {
    console.log(i)
}

for (var j = 0; j < 3; j++) {
    console.log(j)
}
console.log(j)

var myArrayWithLoops = ["A", "B", "C"];
for (var k = 0; k < myArrayWithLoops.length; k++) {
    console.log("The member of myArray in index " + k + " is " + myArrayWithLoops[i]);
}

var l = 9;
while (l > 0) {
    l -= 1
    if (l === 4) {
        break
    }
    else if (l === 7){
        continue
    }
    console.log(l + " bottles of beer on the wall");

}

