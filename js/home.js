document.getElementById('add-money').addEventListener('click', function(){
  allHider('actionables', 'add-money-form');
})
document.getElementById('rmv-money').addEventListener('click', function(){
  allHider('actionables', 'rmv-money-form');
})


document.getElementById('addmoney-btn').addEventListener('click', function(event){
  event.preventDefault();
  let currentBal = Number(document.getElementById('cashmoney').textContent);
  const userPin = inputValById('user-pin-add');
  const toAddMoney = Number(inputValById('cash-amount-add'));
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
  const userPin = inputValById('user-pin-rmv');
  const toAddMoney = Number(inputValById('cash-amount-rmv'));
  if (userPin === '1474'){
    currentBal -= toAddMoney;
    document.getElementById('cashmoney').textContent = currentBal;
  }
  else {
    document.getElementById('error').innerHTML = "<span class='text-red-600'>wrong phone number or pin</span>";
  }
})