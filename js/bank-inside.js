/* 
btn-withdraw
btn-deposit
deposit-total
withdraw-total
balance-total
withdraw
deposit
 */
document.getElementById("btn-deposit").addEventListener(`click`, function () {
  //   let deposit1 = document.getElementById("deposit");
  //   //   let deposit1 = parseFloat(document.getElementById("deposit"));
  //   if (deposit1.value === "NaN") {
  //     deposit1.value = "";
  //     alert("Invalid input!");
  //   } else {}
  let deposit = parseFloat(document.getElementById("deposit").value);
  //   console.log(deposit);
  //   console.log(typeof deposit);

  let depositTotalString = document.getElementById("deposit-total");
  let depositTotal = parseFloat(depositTotalString.innerText);
  //   console.log(depositTotal);
  //   console.log(typeof depositTotal);

  depositTotal += deposit;
  //   console.log(deposit);
  depositTotalString.innerText = depositTotal;

  let balance = document.getElementById("balance-total").innerText;
  let balanceNumber = parseFloat(balance);
  //   console.log(balanceNumber, typeof balanceNumber);
  document.getElementById("balance-total").innerText = balanceNumber + deposit;

  document.getElementById("deposit").value = "";
});

// Withdraw part
let balancE = document.getElementById("balance-total");
let withdraw = document.getElementById("withdraw");
let withdrawTotal = document.getElementById("withdraw-total");
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //   console.log(balancE.innerText, withdraw.value, withdrawTotal.innerText);
  let withdrawNumber = parseFloat(withdraw.value);
  let balancENumber = parseFloat(balancE.innerText);
  let withdrawTotalNumber = parseFloat(withdrawTotal.innerText);

  balancENumber -= withdrawNumber;
  balancE.innerText = balancENumber;

  withdrawTotalNumber += withdrawNumber;
  withdrawTotal.innerText = withdrawTotalNumber;

  withdraw.value = "";
});
