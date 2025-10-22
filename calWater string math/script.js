document.getElementById("calcBtn").addEventListener("click", calculate);

function calculate() {
    const bottles = parseInt(document.getElementById("bottleCount").value);
    const result = document.getElementById("result");

    if (isNaN(bottles) || bottles <= 0) {
        result.textContent = "กรุณากรอกข้อมูลให้ถูกต้อง!";
        result.style.color = "red";
        return;
    }

    const pricePerBottle = 10;
    const pricePerDozen = 100;
    const dozenCount = Math.floor(bottles / 12);
    const remain = bottles % 12;

    const totalBeforeTax = (dozenCount * pricePerDozen) + (remain * pricePerBottle);
    const tax = totalBeforeTax * 0.07;
    const total = totalBeforeTax + tax;

    document.getElementById("result").innerHTML = `
        <p><strong>จำนวนขวดทั้งหมด:</strong> ${bottles} ขวด</p>
        <p><strong>จำนวนโหล:</strong> ${dozenCount} โหล</p>
        <p><strong>ขวดที่เหลือ:</strong> ${remain} ขวด</p>
        <p><strong>ราคารวมก่อนภาษี:</strong> ${totalBeforeTax.toFixed(2)} บาท</p>
        <p><strong>ภาษี 7%:</strong> ${tax.toFixed(2)} บาท</p>
        <hr>
        <p><strong>ราคารวมสุทธิ:</strong> ${total.toFixed(2)} บาท</p>
    `;
}