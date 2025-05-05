// 📌 Tuần 2: Hàm, Mảng, Object, DOM
// 1. Hàm truyền thống (Function Declaration):
function greet(name) {
    return "Hello " + name;
}
console.log(greet("Đạt"));

// 2. Arrow function(ES6)
const greet2 = name => `Hi ${name}`; // `
console.log(greet2("Đạt"))

// 3. Scope and Closure
// Duy trì trạng thái
function outer() {
    let count = 0;
    return function inner() {
        return ++count;
    }
}
let counter = outer() 
console.log(counter()) // Output: 1
console.log(counter()) // Output: 2
//Biến riêng tư
function createPerson(name) {
    let age = 22;
    return {
        getName: function() {
            return name;
        },
        getAge: function() {
            return age;
        }
    }
}
const person = createPerson("Nguyễn Xuân Đạt");
console.log(person.getName());
console.log(person.getAge());