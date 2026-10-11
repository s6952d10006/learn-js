// Function คือ การทำงานหนึ่งๆ จะไม่ทำงานหากไม่เรียกใช้ (call function) *****
// จะแบ่งเป็น 4 ประเภทใหญ่
// 3. no parameter has return
function getByeBye( ){
    console.log('Wow wow wow ...')
    return "Bye Bye na ja....." //ค่าจะถูก return กลับไปที่จุด call function
}
 
// 4. have parameters has return
function calAvg4Number(n1, n2, n3, n4){
    console.log('Woo woo woo ...')
    return (n1 + n2 + n3 + n4) / 4 //ค่าจะถูก return กลับไปที่จุด call function
}
 
// call function แบบมี return
// คือ ควรเขียนปนอยู่กับอะไรสักอย่าง เพื่อเอาค่าที่ return ไปใช้งาน
 
console.log(`Sombat ${ getByeBye() }`)
 
let avg = calAvg4Number(10, 20, 30, 40) //ข้อมูลที่ส่งให้ parameter เราเรียกว่า agument
console.log(`Average of 10, 20, 30, 40 is ${avg}`)
 
console.log(`Somjai ${ getByeBye() }`)
console.log(`Somnuk ${ getByeBye() }`)
 