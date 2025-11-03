document.getElementById("showBtn").addEventListener("click", function () {
    const num = parseInt(document.getElementById("numberInput").value);
    const resultDiv = document.getElementById("result");
    let text = "";

    if (isNaN(num) || num < 1 || num > 12) {
        resultDiv.innerHTML = "❌ กรุณากรอกตัวเลขระหว่าง 1 - 12";
        return;
    }

    let i = 1;
    do {
        text += `${num} × ${i} = ${num * i}\n`;
        i++;
    } while (i <= 12);

    resultDiv.textContent = text;
});
