// ข้อ 1
function getEvenNumbers() {
    let input = document.getElementById("arrayInput").value;
    let numbers = input.split(",").map(Number);
    let evens = [];
    for (let i = 0; i <numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            evens.push(numbers[i]);
        }
    }
    document.getElementById("evenResult").textContent = "เลขคู่ : ["+ evens.join(", ") + "]";
}

// ข้อ 2
function sumUpToN() {
    let N = parseInt(document.getElementById("sumInput").value);
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    document.getElementById("sumResult").textContent = "ผลรวม : " + sum;
}

// ข้อ 3
function calculateFactorial() {
    let n = parseInt(document.getElementById("factorialInput").value);
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    document.getElementById("factorialResult").textContent = n + "! = " + result;
}