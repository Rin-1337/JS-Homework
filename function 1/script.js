// ฟังก์ชันคำนวณส่วนลด
function calcDiscount(qty, totalPrice) {
    let discount = 0;

    if (qty > 3 && totalPrice > 500) {
        discount = totalPrice * 0.10; // ลด 10%
    }

    let finalPrice = totalPrice - discount;
    return { discount, finalPrice };
}

// จับปุ่มคำนวณ
document.getElementById("calcBtn").addEventListener("click", () => {
    const qty = Number(document.getElementById("qty").value);
    const total = Number(document.getElementById("total").value);
    const resultDiv = document.getElementById("result");

    if (qty <= 0 || total <= 0) {
        resultDiv.innerHTML = "❌ กรุณากรอกข้อมูลให้ถูกต้อง";
        return;
    }

    const { discount, finalPrice } = calcDiscount(qty, total);

    let message = `
    จำนวนหนังสือ: ${qty} เล่ม<br>
    ราคารวมก่อนลด: ${total.toFixed(2)} บาท<br>
    ส่วนลด: ${discount.toFixed(2)} บาท<br>
    <b>ราคาที่ต้องจ่ายจริง: ${finalPrice.toFixed(2)} บาท</b>
  `;

    resultDiv.innerHTML = message;
});
