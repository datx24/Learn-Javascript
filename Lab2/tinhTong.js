function tinhTong(mang) {
    let tong = 0
    for(let so of mang) {
        tong += so
    }
    return tong
}

//Dùng reduce
const tinhTongReduce = (mang) => mang.reduce((sum,val) => sum + val, 0)

// Test
console.log(tinhTong([1,2,3,4]))
console.log(tinhTongReduce([1,2,3,4]))