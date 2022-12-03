var changeOpc = function() {
    items = document.querySelectorAll('.nav-item .name')
    for (var i=0 ; i < items.length ; i++) {
        items[i].style.opacity = 1
    }
}

btn = document.querySelector('#btn-menu')
btn.addEventListener('click', function() {
    if (btn.firstChild.classList.contains('fa-arrow-left-long')) {
        document.querySelector('nav').removeEventListener('transitionend', changeOpc)
        btn.firstChild.classList.remove('fa-arrow-left-long')
        btn.firstChild.classList.add('fa-bars')
        items = document.querySelectorAll('.nav-item .name')
        for (var i=0 ; i < items.length ; i++) {
            items[i].style.opacity = 0
        }
    }
    else {
        btn.firstChild.classList.remove('fa-bars')
        btn.firstChild.classList.add('fa-arrow-left-long')
        document.querySelector('nav').addEventListener('transitionend', changeOpc)
    }
    btn.parentNode.classList.toggle('mini')
})

