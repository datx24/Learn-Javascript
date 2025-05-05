// Giải quyết callback hell. Một Promise có 3 trạng thái: pending, fulfilled, rejected.
const myPromise = new Promise((resolve, reject) => {
    let isSuccess = true

    if(!isSuccess) {
        resolve("Thành Công ! Dữ liệu đã được xử lý.")
    } else {
        reject("Thất bại! Có lỗi xảy ra !")
    }
})
// Xử lý kết quả
myPromise
    .then(result => {
        console.log("Kết quả: " +result)
    })
    .catch(error => {
        console.log("Kết quả: " +error)
    })

