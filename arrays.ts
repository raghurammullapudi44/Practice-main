const arrayWithNumber:Number[]=[1,2,3,4,5]
console.log(arrayWithNumber)

const theSameArrayWithNumber:Number[]=new Array(6,7,8,9,10)
console.log(theSameArrayWithNumber)

arrayWithNumber.push(11)//inserts at last
console.log(arrayWithNumber)
arrayWithNumber.pop()//removed from last
console.log(arrayWithNumber)
arrayWithNumber.unshift(0)//inserts at first
console.log(arrayWithNumber)
arrayWithNumber.shift()//removes from first
console.log(arrayWithNumber)

arrayWithNumber[10]=12345//we can add in any arbitary locations and the other items i.e. the unallocated items will be undefined
console.log(arrayWithNumber)

const spileArray=arrayWithNumber.splice(1,3) //returns the new array from arrayWithNumber the three numbers starting with index 1
console.log(spileArray)
console.log(arrayWithNumber)