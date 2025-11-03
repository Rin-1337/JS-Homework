let sum = 0;
let stop = false;

document.getElementById("addBtn").addEventListener("click", function () {
    let numInput = document.getElementById("numberInput");
    let number = parseFloat(numInput.value);

    if (isNaN(number)) return;

    while (!stop) {
        if (number === 0) {
            stop = true;
            document.getElementById("result").innerHTML =
                "ผลรวมของตัวเลขทั้งหมดคือ: " + sum;
            break;
        } else {
            sum += number;
            document.getElementById("result").innerHTML =
                "ผลรวมปัจจุบัน: " + sum;
            break;
        }
    }

    numInput.value = "";
    numInput.focus();
});
