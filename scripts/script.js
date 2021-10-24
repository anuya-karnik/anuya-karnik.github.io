



//FLIP CARDS
var card1 = document.getElementById('card-1')
var card2 = document.getElementById('card-2')
var card3 = document.getElementById('card-3')

//access by keyboard - any key

document.addEventListener('keypress', () => {
    card1.classList.remove('click-flip')
    card1.classList.toggle('key-flip')

    card2.classList.remove('click-flip')
    card2.classList.toggle('key-flip')

    card3.classList.remove('click-flip')
    card3.classList.toggle('key-flip')
    console.log('card flipped')
})


//access by click

card1.addEventListener('click', () => {
    card1.classList.remove('key-flip')
    card1.classList.toggle('click-flip')
})

card2.addEventListener('click', () => {
    card2.classList.remove('key-flip')
    card2.classList.toggle('click-flip')
})

card3.addEventListener('click', () => {
    card3.classList.remove('key-flip')
    card3.classList.toggle('click-flip')
})

