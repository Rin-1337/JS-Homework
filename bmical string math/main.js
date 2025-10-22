function calculateBMI() {
    const weight = document.getElementById('weight').value; // รับน้ำหนัก (kg)
    const heightCm = document.getElementById('height').value; // รับส่วนสูง (cm)
    const resultElement = document.getElementById('bmiResult');

    if (weight && heightCm) {
        const heightM = heightCm / 100; // แปลงจากเซนติเมตรเป็นเมตร
        const bmi = weight / (heightM * heightM); // คำนวณ BMI
        resultElement.textContent = `ค่า BMI ของคุณคือ: ${bmi.toFixed(2)}`;
    } else {
        resultElement.textContent = 'กรุณากรอกข้อมูลน้ำหนักและส่วนสูงให้ครบถ้วน';
    }
}
