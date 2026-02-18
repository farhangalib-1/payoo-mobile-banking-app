document.getElementById('btn-1').addEventListener('click', function(){
    const addMoney = document.getElementById('AddMoney')
    const cashOut = document.getElementById('ClassOut')
    addMoney.classList.remove('hidden')
    cashOut.classList.add('hidden')
})

document.getElementById('btn-2').addEventListener('click', function(){
    const addMoney = document.getElementById('AddMoney')
    const cashOut = document.getElementById('ClassOut')
    addMoney.classList.add('hidden')
    cashOut.classList.remove('hidden')
})
