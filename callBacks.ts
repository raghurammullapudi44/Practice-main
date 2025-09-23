var callBack=function(){
    console.log("Callback triggered")
}
var testCallBack=function(callBackFunctionName:Function){
    console.log("Calling")
    callBackFunctionName()
}
testCallBack(callBack)//passing callBack as param and catching as callBackFunctionName and invoking the callBackFunctionName() executes callBack function
//it is synchronus way of using callbacks like passing functions as params and so that they execute after task finishes

setTimeout(callBack,5000)// passing callBack as param and to setTimeout function which is an async function so the callBack() gets exeuted after
//the timeout is finished i.e. function gets called post completion of the async task.
//if we see output execution does not stop for waiting as JS in async for every line so Hello! and Goodbye is printed and then 5 sec timeout is done
//the callBack() function is triggred
function greetCallBack(callBackFunctionName: () => void) {
  console.log("Hello!");
  callBackFunctionName()
}

greetCallBack(() => console.log("Goodbye!"))//this is also using the same logic of testCallBack(callBack) i.e. synchrounous way but using arrow functions
