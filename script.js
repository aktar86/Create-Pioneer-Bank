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
    const depositNumber = getInputText('depositAmoutn');
    
    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmoutn').value = "";
})

// withdraw button event handler 
const withdrawButton = document.getElementById('withdraw-button');
withdrawButton.addEventListener('click', function(){
    const withdrawNumber = getInputText('withdrawAmount');

    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', -1 * withdrawNumber);

    document.getElementById('withdrawAmount').value = "";
})
// 'withdrawAmount'
function getInputText(id){
    const getAmount = document.getElementById(id).value;
    const getAmountNumber = parseFloat(getAmount)
    return getAmountNumber; 
}

// 
function updateSpanText(id, depositNumber){
    const currentDeposit = document.getElementById(id).innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById(id).innerText = totalDeposit;
}