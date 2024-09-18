const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function(event){
  event.preventDefault();
  const phoneNo = document.getElementById('phone-number').value;
  // const pinNo = document.getElementById('user-pin').value;
  console.log(phoneNo);
})