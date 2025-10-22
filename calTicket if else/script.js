function calculateTicket() {
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");

    if (isNaN(height) || height <= 0) {
        result.textContent = "กรุณากรอกส่วนสูงที่ถูกต้อง!";
        result.style.color = "red";
        return;
    }

    let price;
    if (height <= 130) {
        price = 50;
    } else {
        price = 100;
    }

    result.textContent = `ค่าบัตรผ่านประตู: ${price} บาท`
    result.style.color = "green";
}