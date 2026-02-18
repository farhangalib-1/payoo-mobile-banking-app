document.getElementById('cashoutbtn').addEventListener('click', function(){
    const accountNumber = document.getElementById('cashoutacountnumber')
    const amount = document.getElementById('cashoutamount')
    const pin = document.getElementById('cashoutpin')
    const balance = document.getElementById('balance')
    if(parseInt(amount.value) <= parseInt(balance.innerText)){
        if(accountNumber.value.length === 11 && pin.value === '1234'){
        const newBalance = parseInt(balance.innerText) - parseInt(amount.value)
        balance.textContent = newBalance
        alert(`৳${amount.value} is widthdraw successfully ${new Date().toDateString()}`)
        }
        else{
            alert('Mobile Number or Pin number is invalid')
            accountNumber.value = ''
            amount.value = ''
            pin.value = ''
            return
        }
        
    }
    if(amount.value === ''){
            alert('Please enter your amount')
             accountNumber.value = ''
            amount.value = ''
            pin.value = ''
            return
        }
    if(amount.value < 0 || parseInt(amount.value) > parseInt(balance.innerText)){
        alert('Insufficent Balance. Please Try again')
        pin.value = ''    
        return
    }
    
})