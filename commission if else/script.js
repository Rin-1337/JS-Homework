function calculateProvidentFund() {
    const salary = parseInt(document.getElementById("salary").value) || 0;
    const commission = parseFloat(document.getElementById("commission").value) || 0;
    const income = salary + commission;

    let providentFund = 0;
    let message = "";

    if (income <= 10000) {
        providentFund = 0;
        message = "รายรับไม่เกิน 10,000 บาท - ยกเว้นไม่ต้องหักเงินสำรอง";
    } else if (income > 10000 && income <= 20000) {
        providentFund = income * 0.02;
        message = "รายรับมากกว่า 10,000 บาท แต่ไม่เกิน 20,000 บาท - หัก 2 % ของรายได้ทั้งหมด";
    } else {
        providentFund = income * 0.05;
        message = "รายรับมากกว่า 20,000 บาท - หัก 5 % ของรายได้ทั้งหมด";
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
    <strong>ผลการคำนวณ:</strong><br>
    เงินเดือน: ${salary.toLocaleString()} บาท<br>
    ค่าคอมมิชชัน: ${commission.toLocaleString()} บาท<br>
    รายรับรวม: ${income.toLocaleString()} บาท<br>
    ${message}<br><br>
    💰 <strong>เงินสำรองเลี้ยงชีพที่ต้องหัก:</strong> ${providentFund.toLocaleString(undefined, { minimumFractionDigits: 2 })} บาท
    `;
}