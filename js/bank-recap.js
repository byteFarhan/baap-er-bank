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

const btnWithdraw = document.getElementById("btn-withdraw");
const btnDeposit = document.getElementById("btn-deposit");
const depositTotal = document.getElementById("deposit-total");
const withdrawTotal = document.getElementById("withdraw-total");
const balanceTotal = document.getElementById("balance-total");
const withdrawFild = document.getElementById("withdraw-fild");
const depositFild = document.getElementById("deposit-fild");

// deposit part
btnDeposit.addEventListener(`click`, function () {
  let depositFildString = depositFild.value;
  const depositFildNum = parseFloat(depositFildString);
  let depositTotalString = depositTotal.innerText;
  //   const depositTotalString = depositTotal.innerText
  depositFild.value = "";
  if (isNaN(depositFildString)) {
    alert("Invalid input!");
    return;
  } else if (depositFildString === "") {
    alert("pleace fill the from!");
    return;
  } else if (depositFildString == 0 || depositFildNum < 0) {
    alert("Don't try to fun!");
    return;
  }
  const depositTotalNum = parseFloat(depositTotalString);
  const newDepositTotal = depositTotalNum + depositFildNum;
  depositTotal.innerText = newDepositTotal;

  const balanceTotalString = balanceTotal.innerText;
  const balanceTotalNum = parseFloat(balanceTotalString);
  const newBalanceTolal = balanceTotalNum + depositFildNum;
  balanceTotal.innerText = newBalanceTolal;
});

// withdraw part
btnWithdraw.addEventListener(`click`, function () {
  const withdrawFildString = withdrawFild.value;
  const withdrawFildNum = parseFloat(withdrawFildString);

  const balanceTotalString = balanceTotal.innerText;
  const balanceTotalNum = parseFloat(balanceTotalString);

  const withdrawTotalString = withdrawTotal.innerText;
  const withdrawTotalNum = parseFloat(withdrawTotalString);

  withdrawFild.value = "";
  if (isNaN(withdrawFildString)) {
    alert("Invalid input!");
    return;
  } else if (withdrawFildNum > balanceTotalNum) {
    alert("Baap er banke ato taka nai!");
    return;
  } else if (withdrawFildString === "") {
    alert("pleace fill the from!");
    return;
  } else if (withdrawFildString == 0 || withdrawFildNum < 0) {
    alert("Don't try to fun!");
    return;
  }

  const newWithdrawTotal = withdrawTotalNum + withdrawFildNum;
  withdrawTotal.innerText = newWithdrawTotal;

  const newBalanceTotal = balanceTotalNum - withdrawFildNum;
  balanceTotal.innerText = newBalanceTotal;
});
