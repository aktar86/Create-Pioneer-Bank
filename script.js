// login button area 
const logIn = document.getElementById('login');
logIn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-Area');
    loginArea.style.display = 'none';

    const transectionArea =  document.getElementById('transection-Area');
    transectionArea.style.display = 'block'
})

// deposit button handler 
const depositButton = document.getElementById('deposit-button');
depositButton.addEventListener('click', function(){
    const depositAmount = document.getElementById('depositAmoutn').value;
    const depositNumber = parseFloat(depositAmount)
    

    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById('currentDeposit').innerText = totalDeposit;

    document.getElementById('depositAmoutn').value = "";
})