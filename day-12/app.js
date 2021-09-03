const buttons = document.querySelectorAll('.faq-toggle')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.parentElement);
        button.parentElement.classList.toggle('active')
    })
})