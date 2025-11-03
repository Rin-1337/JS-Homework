function showName() {
    const name = document.getElementById("nameInput").value;
    const output = document.getElementById("output");
    output.innerHTML = "";

    for (let i = 0; i < name.length; i++) {
        output.innerHTML += name[i].toUpperCase() + "!<br>";
    }
}