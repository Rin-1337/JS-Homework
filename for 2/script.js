function showMultical() {
    const output = document.getElementById("output");
    output.innerHTML = "";

    for (let i = 2; i <= 12; i++) {
        output.innerHTML += `<strong>แม่ ${i}</strong><br>`;
        for (let j = 1; j <= 12; j++) {
            output.innerHTML += `${j} x ${i} = ${i * j}<br>`;
        }
        output.innerHTML += "<br>";
    }
}