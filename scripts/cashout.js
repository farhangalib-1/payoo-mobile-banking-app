document.getElementById('cashoutbtn').addEventListener('click', function(){
    const accountNumber = document.getElementById('cashoutacountnumber')
    const amount = document.getElementById('cashoutamount')
    const pin = document.getElementById('cashoutpin')
    const balance = document.getElementById('balance')
    if(parseInt(amount.value) <= parseInt(balance.innerText)){
        if(accountNumber.value.length === 11 && pin.value === '1234'){
        const newBalance = parseInt(balance.innerText) - parseInt(amount.value)
        balance.textContent = newBalance
        alert(`৳${amount.value} is widthdraw successfully ${new Date().toLocaleString()}`)
            const newTrans = document.createElement('div')
    newTrans.innerHTML = `
    <div class="allTrans w-full h-[81px] bg-white mt-4 rounded-2xl shadow">
            <h1 class="font-bold text-[25px] ml-4 pt-2">Cash Out Successfully</h1>
            <p class="text-[12px] ml-4 mt-1"> ${new Date().toLocaleString()}</p>
        </div>
    `
    const trans = document.getElementById('transId')
    trans.appendChild(newTrans)
        accountNumber.value = ''
            amount.value = ''
            pin.value = ''
            return
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