// Function คือ การทำงานหนึ่งๆ จะไม่ทำงานหากไม่เรียกใช้ (call function) *****
// จะแบ่งเป็น 4 ประเภทใหญ่
// 1. no parameter no return
function showHelloHi( ){
    console.log('Hello...')
    console.log('Hi...')
}
 
// 2. have parameters no return
// parameter ถือว่าเป็นตัวแปรแบบหนึ่ง
function sumNumber(num1, num2){
    let sum = num1 + num2
    console.log(`${num1} + ${num2} = ${sum}`)
}
 
// call function แบบ no return คือ เขียนโดดๆ ได้เลย
showHelloHi()
showHelloHi()
 
sumNumber(100, 200)
sumNumber(111, 222)
 
showHelloHi()