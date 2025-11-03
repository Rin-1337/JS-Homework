let expenses = [];
const expenseInput = document.getElementById('expenseInput');
const expenseList = document.getElementById('expenseList');
const totalExpenseSpan = document.getElementById('totalExpense');

document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const expense = parseFloat(expenseInput.value);

    if (!isNaN(expense) && expense > 0) {

        expenses.push(expense);
        updateExpenseList();
        updateTotalExpense();

        expenseInput.value = '';
    } else {
        alert('กรุณากรอกค่าใช้จ่ายที่ถูกต้อง');
    }
});

function updateExpenseList() {
    expenseList.innerHTML = '';

    for (let i = 0; i < expenses.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `ค่าใช้จ่าย ${i + 1}: ${expenses[i]} บาท`;
        expenseList.appendChild(listItem);
    }
}

function updateTotalExpense() {
    let total = 0;
    
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i];
    }
    
    totalExpenseSpan.textContent = total.toFixed(2);
}