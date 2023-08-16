/* 
btn-withdraw
btn-deposit
deposit-total
withdraw-total
balance-total
withdraw-fild
deposit-fild
 */
document.getElementById("btn-deposit").addEventListener(`click`, function () {
  let deposit1 = document.getElementById("deposit").value;
  //   //   let deposit1 = parseFloat(document.getElementById("deposit"));
  //   if (deposit1.value === "NaN") {
  //     deposit1.value = "";
  //     alert("Invalid input!");
  //   } else {}
  document.getElementById("deposit").value = "";

  if (isNaN(deposit1)) {
    alert("Invalid input!");
    return;
  }

  /*   
  else {
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
    document.getElementById("balance-total").innerText =
      balanceNumber + deposit;
  }

  //   document.getElementById("deposit").value = "";
   */
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
  withdraw.value = "";
  if (isNaN(withdraw.value)) {
    alert("Invalid input!");
    return;
  } else if (balancE.innerText < withdraw.value) {
    alert("Baap er bank e ate taka nai!");
    return;
  } else {
    balancENumber -= withdrawNumber;
    balancE.innerText = balancENumber;

    withdrawTotalNumber += withdrawNumber;
    withdrawTotal.innerText = withdrawTotalNumber;
  }
});
