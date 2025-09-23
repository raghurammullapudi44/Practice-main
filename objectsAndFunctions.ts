type myObjectForIterationType = {
    firstName: string,
    lastName: string,
    [key: string]: any
}
var myObjectForIteration: myObjectForIterationType = {
    firstName: "raghu",
    lastName: "ram"
}

console.log(myObjectForIteration.firstName)
myObjectForIteration.firstName = "mullapudi"
console.log(myObjectForIteration.firstName)
myObjectForIteration["firstName"] = "ram"
console.log(myObjectForIteration.firstName)
myObjectForIteration["fullName"] = "raghu ram"
console.log(myObjectForIteration)


for (var member in myObjectForIteration) {
    if (myObjectForIteration.hasOwnProperty(member)) {
        console.log(myObjectForIteration[member])
    }
}

const greet = function (name: string) {
    return "Hello " + name
}
console.log(greet("Raghu"))

function greet1(name:string) {
    return "Hello " + name
}
console.log(greet1("Sudha"))

const greet3=((name:string)=>{
    return "Hello "+name
})
console.log(greet3("Ram"))