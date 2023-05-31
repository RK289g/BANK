//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //console.log('deposit button clicked')
    //step-2: Get the deposit amount from numberField
    const depositField = document.getElementById('deposit');
    const newDepositAmountString = depositField.value;

    //step-3: Get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;

    //step-4: get the numbers from string
    const newDepositAmount = parseFloat(newDepositAmountString);
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-5: output the sub-total
    depositTotalElement.innerText = newDepositAmount + previousDepositTotal;

    //step-6: get balance current total
    const balanceTotalElement = document.getElementById('balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-7: calculate current total balance
    const currentTotalBalance = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentTotalBalance;

    //step-8: clear deposit input field
    depositField.value = '';
})

//step-1: add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //console.log('withdraw button clicked')
    //step-2: Get the withdraw amount from numberField
    const withdrawField = document.getElementById('withdraw');
    const newWithdrawAmountString = withdrawField.value;

    //step-3: Get the current withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    //step-4: get the numbers from string
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-6: get balance current total
    const balanceTotalElement = document.getElementById('balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-8: clear withdraw input field
    withdrawField.value = '';

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Not enough balance')
        return;
    }

    //step-5: output the sub-total
    withdrawTotalElement.innerText = previousWithdrawTotal + newWithdrawAmount;

    //step-7: calculate current total balance
    const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentTotalBalance;
})
