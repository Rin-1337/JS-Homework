function calculateSum() {
    const n = parseInt(document.getElementById("numInput").value);
    if (isNaN(n) || n < 0) {
        document.getElementById("result").innerText = "กรุณากรอกตัวเลขที่มากกว่าหรือเท่ากับ 0";
        return;
    }

    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i * 2;
    }

    document.getElementById("result").innerText = `ผลรวมของเลขคู่ตั้งแต่ 0 ถึง ${n * 2} คือ ${sum}`;
}