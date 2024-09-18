document.getElementById('addmoney-btn').addEventListener('click', function(event){
  event.preventDefault();
  let currentBal = Number(document.getElementById('cashmoney').textContent);
  const userPin = document.getElementById('user-pin').value;
  const toAddMoney = Number(document.getElementById('cash-amount').value);
  if (userPin === '1474'){
    currentBal += toAddMoney;
    document.getElementById('cashmoney').textContent = currentBal;
  }
  else {
    document.getElementById('error').innerHTML = "<span class='text-red-600'>wrong phone number or pin</span>";
  }
})