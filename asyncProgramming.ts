function getServerStatus() {
    return fetch("http://cakeapiforvodafone.eu-4.evennode.com/api/allcakes")//Here fetch function returns the promise first before returning the actual response
}
getServerStatus().then((result: any) => {//here then method waits for actual response from promise
    //console.log(result)
}).catch((error) => {//here catch method executes if there is any error in fetch
    console.log("API Error")
})

//In above fetch returns the promsise directly but below we are custom defining the promise
const customGetServerStatus = (input: string) => {
    return new Promise((resolve, reject) => {
        if (input) {
            resolve(fetch(input))
        }
        else {
            reject("URL is null")
        }
    })
}

customGetServerStatus("http://cakeapiforvodafone.eu-4.evennode.com/api/allcakes")
    .then((response: any) => {
        //console.log(response)
        return response.json()
    }).then((data: any) => {
        //console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })

customGetServerStatus("")
    .then((response: any) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })


const customGetServerStatusWithTimeout = ((input: string) => {
    return new Promise((reoslve, reject) => {
        setTimeout(() => {
            if (input)
                reoslve(fetch(input))
            else
                reject("URL is null")
        }, 5000)
    })
})

const waitingMessage=setInterval(()=>{
    console.log("waiting...")
},10)

customGetServerStatusWithTimeout("http://cakeapiforvodafone.eu-4.evennode.com/api/allcakes")
    .then((response: any) => {
        clearInterval(waitingMessage)
        console.log(response)
        return response.json()
    }).then((data) => {
        //console.log(data)
    }).catch((error) => {
        clearInterval(waitingMessage)
        console.log(error)
    })