console.log(firstName) //hoisted i.e. can be used before declaration but will print undefined
var firstName="raghu"
var firstName="mullapudi" // var can be declared and updated 

//console.log(lastName) //not hoisted i.e. cannot be used before declaration i.e compilation error
let lastName="ram"

//console.log(fullName) //not hoisted i.e. cannot be used before declaration i.e compilation error
const fullName="raghu ram" //have to initialize with declaration and cannot be updated
//fullName="mullaudi raghh ram" // cannot be updated

console.log(firstName)
console.log(lastName)
console.log(fullName)

//var is function scoped
//let is block scoped
//const is block scoped

var nullVariable
console.log(nullVariable) //undefined will be the output

var isLoggedIn
isLoggedIn=true
console.log(isLoggedIn)

const myArray=[] //array
//const myObject={} //object and intialized as empty
const myArraysOfObjects=[{}] //arrays of objects
myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
console.log(myArray)

const myObject={
    firstName:"raghu",
    lastName:"ram",
    //fullName:((testParam):string=>{return firstName+lastName}) //arrow functions has no binding even though we use this.firstName+this.lastName it does not allow
    fullName: function(testParam:string){ //if we write functions like this we can use this binding
        return this.firstName+testParam+this.lastName
    }
}
myObject["uug"]='ugug' //typescript warning
console.log(myObject)
console.log(myObject.fullName("-"))

// below is the typescript syntax to avoid above warning

type myObjectTypeWithTS={
    firstName:string,
    lastName:string,
    fullName:()=> string,
    //fullName:{():string} // this is also valid
    [key:string]:any //this is required for typescript to define a key of string type and value of any type can be added later. if 
    //if we dont give this typescript will show warning if i try to add new member or fields later to this object
}
const myObjectWithTS: myObjectTypeWithTS = {
    firstName: "raghu",
    lastName: "ram",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
    //fullName:()=>{return "raghu ram"}// this is also valid but does not have this binding so we cannot use this
    // fullName(){// this is also valid
    //     return this.firstName+" "+this.lastName
    // }
};

console.log(myObjectWithTS.fullName())
myObjectWithTS["ggigse"]="ibhigh"
console.log(myObjectWithTS)

