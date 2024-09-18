const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function(event){
  event.preventDefault();
  const phoneNo = document.getElementById('phone-number').value;
  const pinNo = document.getElementById('user-pin').value;
  
  // not ideal but for now we'll go with this
  if (phoneNo === '01886318799' && pinNo === `1474`){
    window.location.href = 'home.html'
  }
  else {
    document.getElementById('error').innerHTML = "<span class='text-red-600'>wrong phone number or pin</span>";
  }
})