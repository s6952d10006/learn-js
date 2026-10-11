// Function (EXTRA ^_^)
// Function แบบ Callback Function (ใช้ได้ทั้ง anonynus/arrow function)
 
function sauIeIe(data1, data2, wow, hi){
    let result = data1 + data2
    console.log(`Result of ${data1} + ${data2} = ${result}`)
 
    wow()  //callback function
 
    console.log(`Hi... ${ hi('Somjai', 'Rukdee') }`)  //callback function
}
 
// call function
sauIeIe(
    100,
    200,
    function(){
        console.log('Wow wow wow')
    },
    (fname, lname) => {
        return `${fname} ${lname} ^0^`
    }
)
 