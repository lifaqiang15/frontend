const as = document.querySelectorAll('.tab-nav a')
const items = document.querySelectorAll('.tab-content .item')
for (let i = 0; i < as.length; i++) {
    as[i].addEventListener('mouseenter', function () {
        document.querySelector('.tab-nav .active').classList.remove('active')
        this.classList.add('active')
        document.querySelector('.tab-content .active').classList.remove('active')
        items[i].classList.add('active')
    })
}