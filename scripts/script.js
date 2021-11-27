//Animation for Home
ScrollReveal().reveal('.grid-item', {interval: 50, origin:'bottom', distance: '10px', easing: 'ease-in'});

//Animation for Project Images
ScrollReveal().reveal('img', {interval: 100, origin:'bottom', distance: '2px', easing: 'ease-in'})

/**********
IMAGE MODALS
***********/
var allImages = document.querySelectorAll('.pr-img')
for (var imgLayout of allImages) {
    var imgDisplay = imgLayout.querySelector('img')
    imgDisplay.onclick = function () {
        //add modal
        var imgModal = document.createElement('div')
        imgModal.classList.add('layout-modal')

        //close button
        var imgModalClose = document.createElement('span')
        imgModalClose.classList.add('modal-close')
        imgModalClose.innerHTML = "&times;"

        //close button config
        imgModalClose.onclick = function () {
            imgModal.style.display = "none"
        }

        imgModal.appendChild(imgModalClose)
        console.log('close button added')

        //add modal content - image
        var imgModalContent = document.createElement('img')
        imgModalContent.classList.add('modal-content')
        imgModalContent.src = this.src
        imgModal.appendChild(imgModalContent)
        console.log('image appended')

        //add image caption
        var imgModalCaption = document.createElement('div')
        imgModalCaption.classList.add('modal-caption')
        imgModalCaption.innerHTML = this.alt
        imgModal.appendChild(imgModalCaption)
        console.log('caption appended: ' + this.alt)

        imgModal.style.display = "block"

        // clicking the image also makes it disappear
        imgModal.onclick = function () {
            imgModal.style.display = "none"
        }
        imgLayout.append(imgModal)
    }
}

var openImages = document.getElementsByClassName('layout-modal')
for (var openImg of openImages) {
    console.log('looking at open image')
    openImg.onclick = function () {
        openImg.style.display = "none"
        console.log('image closed')
    }
}

/**********
FLIP CARDS
todo: add try-except here
***********/
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
