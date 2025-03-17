/* JS syntax:
function addition(n1,n2){
    return n1+n2;
}

addition();
addition(10,"hi");
addition(100,"hi",77);
*/
let val : number ;

function addition(n1:number,n2:number): number {
    return n1+n2;
}

const answer: number = addition(30,40);

// arrow functions
function square(num:number): number{
    return num**2;
}
// equivalent arrow function, stored in var
const sq = (num:number):number => num**2 ;
console.log(sq(10));






