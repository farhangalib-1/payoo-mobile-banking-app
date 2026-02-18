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