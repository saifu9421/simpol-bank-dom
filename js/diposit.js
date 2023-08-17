
//  step-1 
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2
      const depositField =  document.getElementById('deposit-field');
      const newDepositAmountString  =  depositField.value;
      const newDepositAmount = parseFloat(newDepositAmountString);

       const depositTotalElement =  document.getElementById('deposit-total');
       const  previousDepositTotalString =  depositTotalElement.innerText;
        const previousDepositTotal =  parseFloat(previousDepositTotalString);
        const depositTotal =  previousDepositTotal + newDepositAmount;
        depositTotalElement.innerText =  depositTotal;

          //    Balance part 
              const balanceTotalElement =  document.getElementById('balance-total');
                const previousBalanceTotalString =  balanceTotalElement.innerText;
                const previousBalanceTotalAmount =  parseFloat(previousBalanceTotalString);
               const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
               balanceTotalElement.innerText = newBalanceTotal;
        //    withdraw Part 
               
            //    step-last:
       depositField.value='';
});