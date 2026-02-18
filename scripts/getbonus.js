document.getElementById('bonusbtn').addEventListener('click', function(){
    const coupon = document.getElementById('couponcode')
    const balance = document.getElementById('balance')
    if(coupon.value === 'GALIB'){
        alert(`5% bonus is added successfully`);
        const newBalance = parseInt(balance.innerText) + parseInt(balance.innerText)*0.05
        balance.textContent = newBalance
       
        const newTrans = document.createElement('div')
    newTrans.innerHTML = `
    <div class="allTrans w-full h-[81px] bg-white mt-4 rounded-2xl shadow">
            <h1 class="font-bold text-[25px] ml-4 pt-2">5% bonus added</h1>
            <p class="text-[12px] ml-4 mt-1"> ${new Date().toLocaleString()}</p>
        </div>
    `
    const trans = document.getElementById('transId')
    trans.appendChild(newTrans)
     coupon.value = ''
        return 
    }
    else{
        alert(`Invalid coupon code`)
        coupon.value = ''
        return
    }
    
    
})