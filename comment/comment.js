const tx = document.querySelector('#tx')
const total = document.querySelector('.total')
const item = document.querySelector('.item')
const text = document.querySelector('.text')
tx.addEventListener('focus', function () {
    total.style.opacity = 1
})
tx.addEventListener('blur', function () {
    total.style.opacity = 0
})
tx.addEventListener('input', function () {
    total.innerHTML = `${tx.value.length}/200字`
})
tx.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        if (tx.value.trim()) {
            item.style.display = 'block'
            text.innerHTML = tx.value
        }
        tx.value = ''
        total.innerHTML = '0/200字'
    }
})