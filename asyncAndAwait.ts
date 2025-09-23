const myFirstAsyncFunction=async ()=>{//this will return promise implicitly because of async keyword 
    return await fetch("http://cakeapiforvodafone.eu-4.evennode.com/api/allcakes")
}

// myFirstAsyncFunction().then((response:any)=>{//using then to get the response from promise
//     console.log(response)
// })

// const testAsync=async ()=>{//async function to use await. Here we wrote another async function to use await instead of using then
//     const response=await myFirstAsyncFunction()
//     console.log(response)
// }
// testAsync()

(async ()=>{//using IIFE i.e. Immediately Invoked Function Expression by wrapping the function in parenthesis and calling it right away using another parenthesis and its another way instaed if explicitly defining a function and calling it i.e. like testAsync function above
    const response=await myFirstAsyncFunction()
    console.log(response)
})()
