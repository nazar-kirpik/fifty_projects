const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(el => {
    el.addEventListener('click', () => {
        el.parentNode.classList.toggle('active')
    })
})
