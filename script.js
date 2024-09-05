const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const pictures = document.querySelector('.slider__pictures')
const info = document.querySelector('.slider__info')
const slidesCount = info.querySelectorAll('.slide__info').length

const sliderContainer = document.querySelector('.slider__container')
let slideIndex = 0

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction){
    if(direction === 'up'){
        slideIndex++
        if(slideIndex === slidesCount){
            slideIndex = 0
        }
    }
    else if(direction === 'down'){
        slideIndex--
        if (slideIndex < 0){
            slideIndex = slidesCount -1
        }
    }

    const height = sliderContainer.clientHeight
    info.style.transform = `translateY(-${slideIndex * height}px)`
    pictures.style.transform = `translateY(-${slideIndex * height}px)`
}

const purposesImage = document.querySelectorAll('.purposes__image')
const purposesInfo = document.querySelectorAll('.purposes__info')
let purposeIndex = 1

for(purpose of purposesImage){
    const index = purpose.id
    purpose.addEventListener('click', () => selectPurpose(index))
}

function selectPurpose(index){
    purposesImage[index].children[0].classList.add('purposes__image_big')
    purposesImage[purposeIndex].children[0].classList.remove('purposes__image_big')
    purposesInfo[index].classList.add('purposes__info_visible')
    purposesInfo[purposeIndex].classList.remove('purposes__info_visible')
    purposeIndex = index
}
