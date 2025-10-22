function calculate() {
    const waterUnit = parseFloat(document.getElementById("water").value) || 0;
    const electUnit = parseFloat(document.getElementById("electric").value) || 0;
    const phoneMinute = parseFloat(document.getElementById("phone").value) || 0;

    const waterRate = 10;
    const electRate = 25;
    const phoneRate = 5;

    const waterCost = waterUnit * waterRate;
    const electCost = electUnit * electRate;
    const phoneCost = phoneMinute * phoneRate;
    const total = waterCost + electCost + phoneCost;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
    <p>ค่าน้ำ: ${waterCost.toFixed(2)} บาท</p>
    <p>ค่าไฟ: ${electCost.toFixed(2)} บาท</p>
    <p>ค่าโทรศัพท์: ${phoneCost.toFixed(2)} บาท</p>
    <hr>
    <p><strong>รวมทั้งหมด: ${total.toFixed(2)} บาท</strong></p>
    `;
}