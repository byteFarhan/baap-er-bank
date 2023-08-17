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
  // console.log(depositInputValue);
  if (!depositInputValue) {
    return;
  }
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
  if (!inputAmount) {
    return;
  }
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

/* 
   what is meaning of this code ?
    if (!depositInputValue) {
      return;
    } 
  
  ans:
  This code snippet is a JavaScript conditional statement that checks whether the variable depositInputValue is falsy (evaluates to false, undefined, null, 0, NaN, or an empty string). If depositInputValue is falsy, the code block inside the if statement will be executed. If depositInputValue is truthy, meaning it has a non-falsy value, the code block inside the if statement will be skipped.
  
  Here's the breakdown of what's happening:
  
  if: This is the keyword that starts the conditional statement.
  
  (!depositInputValue): This is the condition being checked. The exclamation mark ! is a logical NOT operator, which inverts the truthiness of the value that follows. In this case, it's checking if depositInputValue is falsy.
  
  The code within the curly braces {} following the if condition is the code block that will be executed if the condition is true (if depositInputValue is falsy).
  
  return;: This statement is inside the code block. When executed, it immediately exits the current function and any subsequent code in it. If the condition is true (i.e., depositInputValue is falsy), the function will exit without performing any further actions.
  
  In essence, this code is checking if depositInputValue is falsy and if so, it will exit the current function (or block of code) without performing any additional actions. If depositInputValue has a truthy value, the code block will be skipped, and the program will continue executing the subsequent code.
   */
