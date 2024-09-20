document.getElementById('add-money').addEventListener('click', function(){
  document.getElementById('add-money-form').classList.remove("hidden");
  document.getElementById('rmv-money-form').classList.add("hidden");
})
document.getElementById('rmv-money').addEventListener('click', function(){
  document.getElementById('rmv-money-form').classList.remove("hidden");
  document.getElementById('add-money-form').classList.add("hidden");
})


document.getElementById('addmoney-btn').addEventListener('click', function(event){
  event.preventDefault();
  let currentBal = Number(document.getElementById('cashmoney').textContent);
  const userPin = document.getElementById('user-pin-add').value;
  const toAddMoney = Number(document.getElementById('cash-amount-add').value);
  if (userPin === '1474'){
    currentBal += toAddMoney;
    document.getElementById('cashmoney').textContent = currentBal;
  }
  else {
    document.getElementById('error').innerHTML = "<span class='text-red-600'>wrong phone number or pin</span>";
  }
})
document.getElementById('rmvmoney-btn').addEventListener('click', function(event){
  event.preventDefault();
  let currentBal = Number(document.getElementById('cashmoney').textContent);
  const userPin = document.getElementById('user-pin-rmv').value;
  const toAddMoney = Number(document.getElementById('cash-amount-rmv').value);
  if (userPin === '1474'){
    currentBal -= toAddMoney;
    document.getElementById('cashmoney').textContent = currentBal;
  }
  else {
    document.getElementById('error').innerHTML = "<span class='text-red-600'>wrong phone number or pin</span>";
  }
})