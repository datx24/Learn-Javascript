// 📌 Tuần 1: Cú pháp, biến, hàm, vòng lặp
let age = 20
let name = 'Đạt';
var isStudent = true;

console.log(age);
console.log(name);
console.log(isStudent);

let score = 9
if (score >= 8) {
    console.log("Giỏi")
} else {
    console.log("Khá")
}

for(let i = 0; i <= 5; i++) {
    console.log("Lần" + i)
}

let tong = 0
for(let i = 0; i<=100; i++) {
    if(i % 2 == 0)
        tong += i
}
console.log(tong)