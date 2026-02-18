document.getElementById('paybillbtn').addEventListener('click', function(){
    const payBillName = document.getElementById('paybillname')
    const payBillAcountNumber = document.getElementById('paybillacountnumber')
    const payBillamount = document.getElementById('paybillamount')
    const pin = document.getElementById('paybillpin')
    const balance = document.getElementById('balance')
    
    if (payBillName.value === 'Select biller') {
        alert('Please select your biller')
        payBillName.value = 'Select biller'
        payBillAcountNumber.value= ''
        payBillamount.value = ''
        pin.value = ''
        balance.value = ''
        return 
    }
      if (payBillAcountNumber.value === '') {
        alert('Please enter your biller account number')
        payBillName.value = 'Select biller'
        payBillAcountNumber.value= ''
        payBillamount.value = ''
        pin.value = ''
        balance.value = ''
        return 
    }
    if (payBillamount.value === '') {
        alert('Please enter amount to add')
        payBillName.value = 'Select biller'
        payBillAcountNumber.value= ''
        payBillamount.value = ''
        pin.value = ''
        balance.value = ''
        return  
    }

    if(payBillAcountNumber.value.length === 11 && pin.value === '1234'){
        const newBalance =  Number(balance.innerText) -Number(payBillamount.value)
        balance.textContent = newBalance
        alert(`${payBillamount.value} taka is paid succesfully for ${payBillName.value} at ${new Date().toLocaleString()}`)
       const newTrans = document.createElement('div')
    newTrans.innerHTML = `
    <div class="allTrans w-full h-[81px] bg-white mt-4 rounded-2xl shadow">
            <h1 class="font-bold text-[25px] ml-4 pt-2">${payBillName.value} Paid</h1>
            <p class="text-[12px] ml-4 mt-1"> ${new Date().toLocaleString()}</p>
        </div>
    `
    const trans = document.getElementById('transId')
    trans.appendChild(newTrans)
       
        payBillName.value = 'Select biller'
        payBillAcountNumber.value= ''
        payBillamount.value = ''
        pin.value = ''
        balance.value = ''
        return 
        
    }
    else if(payBillAcountNumber.value.length !== 11){
        alert("account number or Pin isn't valid")
         payBillName.value = 'Select biller'
        payBillAcountNumber.value= ''
        payBillamount.value = ''
        pin.value = ''
        balance.value = ''
        return 
    }
    else if(pin.value !== '1234'){
        alert("account number or Pin isn't valid")
        payBillName.value = 'Select biller'
        payBillAcountNumber.value= ''
        payBillamount.value = ''
        pin.value = ''
        balance.value = ''
        return 
    }

    
    
    

    
    

    
    
})