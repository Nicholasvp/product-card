const button360 = document.querySelector(".active-360")
const buttonClose = document.querySelector(".close")
const imgSofa = document.querySelector(".img-sofa")
const gifSofa = document.querySelector(".gif-sofa")

button360.addEventListener('click', function(){
    button360.classList.add('hide')
    buttonClose.classList.remove('hide')
    gifSofa.classList.remove('hide')
    imgSofa.classList.add('hide')
})

buttonClose.addEventListener('click', function(){
    buttonClose.classList.add('hide')
    button360.classList.remove('hide')
    imgSofa.classList.remove('hide')
    gifSofa.classList.add('hide')
})

