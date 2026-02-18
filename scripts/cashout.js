document.getElementById('cashoutbtn').addEventListener('click', function(){
    const accountNumber = document.getElementById('cashoutacountnumber')
    const amount = document.getElementById('cashoutamount')
    const pin = document.getElementById('cashoutpin')
    const balance = document.getElementById('balance')
    
    if(parseInt(amount.value) <= parseInt(balance.innerText)){
        console.log('ammount is available');
    }
    else{
        console.log('amount is not available');
        
    }
    
})