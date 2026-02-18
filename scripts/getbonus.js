document.getElementById('bonusbtn').addEventListener('click', function(){
    const coupon = document.getElementById('couponcode')
    const balance = document.getElementById('balance')
    if(coupon.value === 'GALIB'){
        alert(`5% bonus is added successfully`);
        const newBalance = parseInt(balance.innerText) + parseInt(balance.innerText)*0.05
        balance.textContent = newBalance 
    }
    else{
        alert(`Invalid coupon code`)
        coupon.value = ''
        return
    }
    
    
})