const pullSymbolData = async (symbol: string) => {
    const response = await fetch("https://api.gold-api.com/price/" + symbol)
    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }
    return await response.json()
}

const pullAllSymbols = async () => {
    const response = await fetch("https://api.gold-api.com/symbols")
    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }
    return await response.json()
}

(async () => {
    const allSymbols = await pullAllSymbols().catch((error: any) => {
        console.log("pull All Symbols API Error", error)
        return []
    })
    if (allSymbols && allSymbols.length > 0) {
        const pollSymbols = async () => {
            // for (const eachSymbol of allSymbols) {
            //     if (eachSymbol.symbol) {
            //         const data = await pullSymbolData(eachSymbol.symbol).catch((error: any) => {
            //             console.log("pull symbol data API Error", error)
            //             return null
            //         })
            //         if (data) {
            //             console.log(data)
            //         }
            //     }
            // }
            console.log("----------------------------------------")
            await Promise.all(allSymbols.map(async (eachSymbol: any) => {
                if (eachSymbol.symbol) {
                    const data = await pullSymbolData(eachSymbol.symbol).catch((error: any) => {
                        console.log("pull symbol data API Error", error)
                        return null
                    })
                    if (data) {
                        console.log(data)
                    }
                }
            }))
        }
        await pollSymbols() // Run immediately
        const pollInterval = setInterval(pollSymbols, 1000)
        setTimeout(() => clearInterval(pollInterval), 5000)
    }
})()

