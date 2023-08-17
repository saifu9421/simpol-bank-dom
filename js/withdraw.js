document.getElementById('btn-withdraw').addEventListener('click',function(){
    // get the withdraw amount 
    // step-2:
       const withdrawField =  document.getElementById('withdraw-field');
       const newWithdrawAmountString = withdrawField.value;
       const newWithdrawAmount =  parseFloat(newWithdrawAmountString);
    //  step-3:
        withdrawField.value='';
        // step-4:
        const withdrawTotalElement =  document.getElementById('withdraw-total');
        const previousWithdrawTotalString= withdrawTotalElement.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
          const withdrawTotal = previousWithdrawTotal + newWithdrawAmount;
          withdrawTotalElement.innerText = withdrawTotal;

        //   withdraw balance part
        const balanceTotalElement =  document.getElementById('balance-total');
        const previousBalanceTotalString =  balanceTotalElement.innerText;
        const previousBalanceTotalAmount =  parseFloat(previousBalanceTotalString);
       const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;
       balanceTotalElement.innerText = newBalanceTotal;

});