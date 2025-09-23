// type PersonType={
//     firstName:string,
//     lastName:string,
//     fullName:()=>string
// }
function Person(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + "," + this.lastName;
    };
}

var p1=new Person("Raghu","Ram")
console.log(p1.fullName())
var p2=new Person("Sudha","Harshini")
console.log(p2.fullName())