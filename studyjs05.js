//Controel statements คำสั่งควบคุม มี 2 กลุ่มใหญ่
//กลุ่มที่1. Conditional statements
//คือการทำงานที่ต้องมีการพิสูจน์-ตวรจสอบ ก่อนที่จะทำงานใดๆ แยกเป็น 3 ประเภท
// 1. พิสูจน์-ตรวจสอบ จริงทำ เท็จไม่ทำ คำสั่งที่ใช้คือ if 
let data = 20

if (data > 5) {
    console.log("wow......");
    console.log("____________________");
}
// 2. พิสูจน์-ตรวจสอบ จริงทำ เท็จทำ คำสั่งที่ใช้คือ if else
let data2 = 100    
if (data2 < 99) {
    console.log("hello....");
    console.log("____________________");
}else{
    console.log("hi....");
    console.log("____________________");
}

//3.พิสูจน์หลายเงื่อนไข คำสั่งที่ใช้คือ if-else if-else , switch-case
let score = 65;
if (score >= 80) {
    console.log("Grade A");
}else if (score >= 70) {
    console.log("Grade B");
}else if (score >= 60) {
    console.log("Grade C");
}else if (score >= 50) {
    console.log("Grade D");
}else{
    console.log("Grade F");
}
console.log("____________________");

// switch-case ใช้ได้กับเงื่อนไขที่เป็นตรวจสอบว่าเท่ากันหรือไม่เท่านั้น
// ตัวอย่างสอบถามข้อมูลสายรถเมล์
let busNo = 99
switch( busNo ){
    case 3 : console.log('ไปสนามหลวง'); break;
    case 81 : console.log('ไปศิริราช'); break;
    case 84 : console.log('ไปไร่ขิง'); break;
    case 123 : console.log('ไปพาต้า'); break;
    default : console.log('ยังไม่มีข้อมูล') //ไม่มีก็ บ่ เป็นหยัง
}