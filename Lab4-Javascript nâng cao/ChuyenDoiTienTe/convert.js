async function convert() {
    const amount = parseFloat(document.getElementById("amount").value)
    const from = document.getElementById("from").value
    const to = document.getElementById("to").value

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerText = "Vui lòng nhập số tiền hợp lệ!";
        return;
    }

    try {
        const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const data = await res.json();
        const rate = data.rates[to];

        if (!rate) {
            document.getElementById("result").innerText = "Không tìm thấy tỷ giá.";
            return;
        }

        const converted = (amount * rate);

        // Định dạng tiền tệ theo chuẩn quốc tế
        const formattedFrom = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: from
        }).format(amount);

        const formattedTo = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: to
        }).format(converted);

        document.getElementById("result").innerText = `${formattedFrom} = ${formattedTo}`;
    } catch (error) {
        document.getElementById("result").innerText = "Có lỗi xảy ra khi gọi API.";
        console.error(error);
    }
}
