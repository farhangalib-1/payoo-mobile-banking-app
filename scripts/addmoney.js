document.getElementById('addmoneybtn').addEventListener('click', function(){
    const bankName = document.getElementById('bankname')
    const bankAcountNumber = document.getElementById('acountnumber')
    const amount = document.getElementById('amount')
    const pin = document.getElementById('pin')
    const balance = document.getElementById('balance')
    
    if (bankName.value === 'Select A Bank') {
        alert('Please select your bank name')
        bankName.value = 'Select A Bank'
        bankAcountNumber.value= ''
        amount.value = ''
        pin.value = ''
        balance.value = ''
        return 
    }
    if (amount.value === '') {
        alert('Please enter amount to add')
        bankName.value = 'Select A Bank'
        bankAcountNumber.value= ''
        amount.value = ''
        pin.value = ''
        balance.value = ''
        return 
    }
    if(bankAcountNumber.value.startsWith('01') === false){
        alert('Incorrect agent number')
        bankName.value = 'Select A Bank'
        bankAcountNumber.value= ''
        amount.value = ''
        pin.value = ''
        balance.value = ''
        return 
    }


    if(bankAcountNumber.value.length === 11 && pin.value === '1234'){
        const newBalance = Number(amount.value) + Number(balance.innerText)
        balance.textContent = newBalance
        alert(`${amount.value} taka is added succesfully from ${bankName.value} at ${new Date().toLocaleString()}`)
            const newTrans = document.createElement('div')
    newTrans.innerHTML = `
    <div class="allTrans w-full h-[81px] bg-white mt-4 rounded-2xl shadow">
            <h1 class="font-bold text-[25px] ml-4 pt-2">Money added Successfully</h1>
            <p class="text-[12px] ml-4 mt-1"> ${new Date().toLocaleString()}</p>
        </div>
    `
    const trans = document.getElementById('transId')
    trans.appendChild(newTrans)
        
        bankName.value = 'Select A Bank'
        bankAcountNumber.value= ''
        amount.value = ''
        pin.value = ''
        balance.value = ''

        
    }
    else if(bankAcountNumber.value.length !== 11){
        alert("Agent Number isn't valid")
        bankName.value = 'Select A Bank'
        bankAcountNumber.value= ''
        amount.value = ''
        pin.value = ''
        balance.value = ''
        return 
    }

    
    

    
    

    
    

    
    
})