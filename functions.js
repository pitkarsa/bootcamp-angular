/* JS syntax:
function addition(n1,n2){
    return n1+n2;
}

addition();
addition(10,"hi");
addition(100,"hi",77);
*/
var val;
function addition(n1, n2) {
    return n1 + n2;
}
var answer = addition(30, 40);
// arrow functions
function square(num) {
    return Math.pow(num, 2);
}
// equivalent arrow function, stored in var
var sq = function (num) { return Math.pow(num, 2); };
console.log(sq(10));
