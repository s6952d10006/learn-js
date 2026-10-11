// Function (EXTRA ^_^)
// Function แบบ Expression Function : Anonymous Function
const wow = function ( ){
    console.log('Wow wow wow')
}
 
var hello = function (fname, lname){
    console.log(`Hello ${fname} ${lname}`)
}
 
let sum = function (n1, n2){
    return n1 + n2
}
 
let dti = wow
 
wow()
dti()
hello('Sombat', 'Jaidee')
 
console.log( sum(10, 20) )