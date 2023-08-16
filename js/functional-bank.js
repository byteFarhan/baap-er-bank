// all id names
/* 
btn-withdraw
btn-deposit
deposit-total
withdraw-total
balance-total
withdraw-fild
deposit-fild
 */

// utilitis functions
function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementTextNum = parseFloat(elementText);
  return elementTextNum;
}

function getInputValueById(inputId) {
  const input = document.getElementById(inputId);
  const inputValue = input.value;
  input.value = "";
  if (inputValue === "") {
    alert("Pleace put your amount first!");
    return 0;
  } else if (isNaN(inputValue)) {
    alert("Invalid input!");
    return 0;
  } else if (inputValue == 0 || inputValue < 0) {
    alert("Don't try to fun!");
    return 0;
  }
  const inputValueNum = parseFloat(inputValue);
  return inputValueNum;
}
function setNewAmount(newTotal, elementToSet) {
  const element = document.getElementById(elementToSet);
  element.innerText = newTotal;
}
// deposit part
document.getElementById("btn-deposit").addEventListener(`click`, function () {
  const depositTotal = getElementTextById("deposit-total");
  //   console.log(depositTotal);
  const depositInputValue = getInputValueById("deposit-fild");
  //   console.log(depositInputValue);
  const newDepositTotal = depositTotal + depositInputValue;
  setNewAmount(newDepositTotal, "deposit-total");

  const totalBalance = getElementTextById("balance-total");
  //   console.log(totalBalanceElement);
  //   const totalBalanceElement = document.getElementById("balance-total");
  const newBalance = totalBalance + depositInputValue;
  setNewAmount(newBalance, "balance-total");
});

// withdraw part
document.getElementById("btn-withdraw").addEventListener(`click`, function () {
  const withdrawTotal = getElementTextById("withdraw-total");
  const inputAmount = getInputValueById("withdraw-fild");
  const totalBalance = getElementTextById("balance-total");
  if (inputAmount > totalBalance) {
    alert("Baap er bank e ato taka nai!");
    return;
  }
  const newWithdrawTotal = withdrawTotal + inputAmount;
  setNewAmount(newWithdrawTotal, "withdraw-total");

  const newTotalBalance = totalBalance - inputAmount;
  setNewAmount(newTotalBalance, "balance-total");
});
