// Control Statement คำสั่งควบคุม มี 2 กลุ่มใหญ่
// กลุ่มที่ 2 : Loop/Repeat/Iteration Statement
// คือ การทำงานเดิมๆ ซ้ำ มีให้ใช้ 3 คำสั่ง
// 1. while
let x = 1
while( x <= 10 ){
    console.log(`${x}. DTI-SAU`)
    x = x + 1  //เขียนได้หลายแบบ เช่น ++x , x++ , x += 1
}
console.log('++++++++++++++++++++++++++++')
 
// 2. do-while
let y = 1
do{
    console.log(`${y}. DTI-SAU`)
    y = y + 1
}while( y <= 10 );
console.log('++++++++++++++++++++++++++++')
 
// 3. for
for(let z = 1 ; z <= 10 ; z = z + 1){
    console.log(`${z}. DTI-SAU`)
}
 