function xepLoai() {
    const score = parseFloat(document.getElementById("score").value);
    let resultText = "";
    if (isNaN(score) || score < 0 || score > 10) {
        resultText = "Vui lòng nhập điểm hợp lệ";
    } else if (score >= 8 ) {
        resultText = "Giỏi";
    } else if (score >= 6.5) {
        resultText = "Khá"; 
    } else if (score >= 5) {
        resultText = "Trung bình";
    } else {
        resultText = "Yếu"
    }

    document.getElementById("result").textContent = resultText
}