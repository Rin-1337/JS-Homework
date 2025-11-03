function calculateSum() {
    const n= parseInt(document.getElementById("start").value);
    const m= parseInt(document.getElementById("end").value);

    if (isNaN(n) || isNaN(m)) {
        document.getElementById("result").textContent = "กรุณาใส่เลขให้ครบ";
        return;
    }
    if (n > m) {
        document.getElementById("result").textContent = "ค่าเริ่มต้นต้องน้อยกว่าหรือเท่ากับค่าจบ";
        return;
    }

    let sumEven = 0; // ผลรวมเลขหาร 2 ลงตัว
    let sumOdd = 0; // ผลรวมเลขหาร 2 ไม่ลงตัว

    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            sumEven += i;
        } else {
            sumOdd += i;
        }
    }

    document.getElementById("result").innerHTML =
    `ผลรวมเลขที่หารด้วย 2 ลงตัว: ${sumEven} <br>` +
    `ผลรวมเลขที่หารด้วย 2 ไม่ลงตัว: ${sumOdd}`;
}