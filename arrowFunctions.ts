const justGreet=()=>console.log("Hi...") //arrow functions with witout params

const greetWithParam=((name:string)=>console.log("Hi..."+name))//arrow fuction with params

const greetWithMoreParams=((firstName:string,lastName:string)=>console.log("Hi..."+firstName+","+lastName))//arrow functions with more params

const greetWithMoreParamsMultiLine=((firstName:string,lastName:string)=>{ //arrow functions with more params and multiline code wrapped in {}
    let fullname=firstName+","+lastName
    return console.log("Hi..."+fullname)
})

justGreet()
greetWithParam("Raghu")
greetWithMoreParams("Raghu","Ram")
greetWithMoreParamsMultiLine("Raghu","Ram")


const multiplyByTwo=((num:number)=>num*2)
let numbers = [3, 5, 8, 9, 2]
let multipliedNumbers = numbers.map(multiplyByTwo)//map function passes each item in numbers to funciton caled multiplyByTwo
console.log(multipliedNumbers)

//above is equal to
function multiplyByTwoOldWay(num:number){
    return num*2
}
console.log(numbers.map(multiplyByTwoOldWay))

//arrow functions are introduced in ES6

