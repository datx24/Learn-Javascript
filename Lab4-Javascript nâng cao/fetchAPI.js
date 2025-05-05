// Dùng fetch() để gọi API lấy dữ liệu từ Internet. Kết quả trả về thường là JSON.
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        users.forEach(user => {
            console.log(user.name, "-", user.email)
        })
    })