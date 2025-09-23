function Person(this: { name: string; age: string }, name: string, age: string) {
    this.name = name
    this.age = age
}

Person.prototype.describe=function(){
    return this.name+" is years "+this.age+" old"
}

var p1=new Person("raghu","30")
console.log(p1.describe())
