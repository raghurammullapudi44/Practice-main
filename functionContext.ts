var PersonFunctionContext={
    firstName:"raghu",
    lastName:"ram"
}

function printPersonFunctionContext(){
    console.log(this.firstName+","+this.lastName)
}

printPersonFunctionContext()//here object is not binded so it prints undefined
var bindPrintPersonFunctionContext=printPersonFunctionContext.bind(PersonFunctionContext)//here we are binding storing that binded function in bindPrintPersonFunctionContext
printPersonFunctionContext()//prints undefined still as we are calling unbinded function
bindPrintPersonFunctionContext()//prints correctly as we are calling binded function

printPersonFunctionContext.call(PersonFunctionContext)// prints the same as binded function
//the difference between call and bind is bind returns a new function which is identical to the old function by binding the object to the function
//call does not return a new function 
//we can use apply as well like below and call and apply work the same but difference is call passes this as first argument and afterthat argumnets of the fucntion
//apply takes teh this as first argument but array of arguments of function as second argument
printPersonFunctionContext.apply(PersonFunctionContext)

//syntax for call with arguments to function
//printPersonFunctionContext.call(PersonFunctionContext, arg1, arg2)

//syntax for apply with argumens to function
//printPersonFunctionContext.apply(PersonFunctionContext, [arg1, arg2]);