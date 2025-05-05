// Destructuring (Phân rã cấu trúc)
const user = {name: "Đạt", age: 16}
const {name, age} = user;

// Spread Operator (...)
// Dùng để sao chép, nối mảng, object một cách an toàn mà không làm thay đổi dữ liệu gốc.
const arr1 = [1, 2]
const arr2 = [...arr1, 3, 4]
console.log(arr2)

// Module (Tách file)
import {add} from './math'
console.log(add(2,3))