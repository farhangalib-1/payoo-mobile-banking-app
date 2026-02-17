document.getElementById('submitbtn').addEventListener('click', function(){
        const mobileNumber = document.getElementById('mobilenumber')
        const pin = document.getElementById('pin')

        if(mobileNumber.value === '01338460110' && pin.value === '1234'){
            alert('Login Successfully')
            window.location.assign("/homepage.html")
            mobileNumber.value = ''
        }
        else{
            alert('Mobile Number or Pin is incorrect')
            mobileNumber.value = ''
            pin.value = ''
        }
})