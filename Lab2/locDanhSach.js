const users = [
    {name: 'Nam', age: 16},
    {name: 'Dat', age: 18},
    {name: 'Phuc', age: 19}
]

const nguoiTren18 = users.filter(users => users.age > 18)

console.log(nguoiTren18)
//Output: [ { name: 'Phuc', age: 19 } ]