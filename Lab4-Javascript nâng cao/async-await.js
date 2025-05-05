function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Dữ liệu đã lấy xong!")
        }, 2000)
    })
}

async function showData() {
    try {
        const result = await getData()
        console.log("Dữ liệu nhận được:", result)
    } catch (err){
        console.log("Lỗi: " + err)
    }
}

showData()