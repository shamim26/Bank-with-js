/* Deposit */

document.getElementById("btn-deposit").addEventListener("click", function () {
  // getting money value from deposit
  const inputDeposit = document.getElementById("input-deposit");
  const InputMoneyString = inputDeposit.value;
  const newInputMoney = parseFloat(InputMoneyString);

  // adding deposit money to deposit card
  const totalDeposit = document.getElementById("deposit-balance");
  const DepositBalanceString = totalDeposit.innerText;
  const previousDepositBalance = parseFloat(DepositBalanceString);

  // deposit card balance
  const newDepositBalance = previousDepositBalance + newInputMoney;
 

  // adding deposit money to Balance card
  const totalBalance = document.getElementById("total-balance");
  const totalBalanceString = totalBalance.innerText;
  const previousTotalBalance = parseFloat(totalBalanceString);
  const newTotalBalance = newInputMoney + previousTotalBalance;
  
  // clearing deposit field
  inputDeposit.value = "";

  // alert
  if (isNaN(newInputMoney)) {
    alert('Please enter an amount!')
    return;
  }

  // adding
  totalDeposit.innerText = newDepositBalance;
  totalBalance.innerText = newTotalBalance;
});

/* Withdraw */

document.getElementById("btn-withdraw").addEventListener("click", function () {
  // getting value from withdraw input
  const inputWithdraw = document.getElementById("input-withdraw");
  const inputWithdrawString = inputWithdraw.value;
  const inputWithdrawBalance = parseFloat(inputWithdrawString);

  // adding money to withdraw card
  const withdrawBalance = document.getElementById("withdraw-balance");
  const withdrawBalanceString = withdrawBalance.innerText;
  const previousWithdrawBalance = parseFloat(withdrawBalanceString);
  const newWithdrawMoney = inputWithdrawBalance + previousWithdrawBalance;

  // decreasing money from total balance
  const totalBalance = document.getElementById("total-balance");
  const totalBalanceString = totalBalance.innerText;
  const previousTotalBalance = parseFloat(totalBalanceString);
  const totalBalanceWithdraw = previousTotalBalance - inputWithdrawBalance;

  // alert
  if (inputWithdrawBalance > totalBalanceWithdraw) {
    alert("Not enough balance in your account!");
    return;
  }
  // clearing withdraw field
  inputWithdraw.value = "";
  // alert
  if (isNaN(inputWithdrawBalance)) {
    alert("Please enter a amount!");
    return;
  }
  // adding
  withdrawBalance.innerText = newWithdrawMoney;
  totalBalance.innerText = totalBalanceWithdraw;
});
