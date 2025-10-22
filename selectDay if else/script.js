function selectDay() {
    const day = parseInt(document.getElementById("day").value);
    const result = document.getElementById("result");

    if (isNaN(day) || day <= 0) {
        result.textContent = "กรุณาใส่ข้อมูลให้ถูกต้อง!";
        result.style.color = "red";
        return;
    }

    let nameDay;
    if (day == 1) {
        nameDay = "Monday";
    } else if (day == 2) {
        nameDay = "Tuesday";
    } else if (day == 3) {
        nameDay = "Wednesday";
    } else if (day == 4) {
        nameDay = "Thursday";
    } else if (day == 5) {
        nameDay = "Friday";
    } else if (day == 6) {
        nameDay = "Saturday";
    } else if (day == 7) {
        nameDay = "Sunday";
    } else {
        nameDay = "Wrong Day";
    }

    result.textContent = `วันที่ได้คือ: ${nameDay}`
    result.style.color = "green";
}