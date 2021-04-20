var flipCard = document.querySelector('.card-body')

document.addEventListener('keypress', () => {
    flipCard.classList.remove('click-flip')
    flipCard.classList.toggle('key-flip')
    console.log('card flipped')
    
})

flipCard.addEventListener('click', () => {
    flipCard.classList.remove('key-flip')
    flipCard.classList.toggle('click-flip')
})