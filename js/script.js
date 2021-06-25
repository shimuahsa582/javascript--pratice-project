// login button even handler //
const loginButton = document.getElementById('login_button');
loginButton.addEventListener('click', function () {
    const loginArea = document.getElementById('login_area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction_area');
    transactionArea.style.display = 'block';
})

// deposit button even handler //
const addDepositBtn = document.getElementById('addDeposit');
addDepositBtn.addEventListener('click', function () {
    const addDepositNumber = getInputNumber('addDepositAmount');

    updateSpanText('currentDeposit', addDepositNumber);
    updateSpanText('currentBalance', addDepositNumber);

     document.getElementById('addDepositAmount').value = "";
})

// withdraw even handler // 

const addWithdrawBtn = document.getElementById('addWithdraw');
addWithdrawBtn.addEventListener('click', function () {
    const withdrawNumber = getInputNumber("addWithdrawAmount");

    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', -1 * withdrawNumber);
   
   document.getElementById('addWithdrawAmount').value = "";

})
// input button update //
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
// span element update //
function updateSpanText(id,addDepositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = addDepositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}