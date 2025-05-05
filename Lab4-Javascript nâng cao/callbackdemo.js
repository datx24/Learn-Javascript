// Là hàm được truyền làm tham số để gọi lại 
// sau khi một công việc hoàn tất (thường dùng trong xử lý bất đồng bộ).
function downloadFile(url, callback) {
    console.log("Đang tải ..." + url)
    setTimeout(() => {
        console.log("Tải xong !")
        callback() // Gọi lại sau khi tải xong
    }, 2000)
}

downloadFile("https://example.com", () => {
    console.log("Xử lý sau khi tải xong")
})