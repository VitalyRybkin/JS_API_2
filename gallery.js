const galleryBlocks = Array.from(document.querySelectorAll('.main-gallery_block '))

let blockToStart = 0
const numOfBlocks = galleryBlocks.length - 1

const nextSlideEl = document.querySelector(".next")
const prevSlideEl = document.querySelector(".prev")
const dotElems = document.querySelectorAll(".main-gallery__dot")
const blockElems = document.querySelectorAll(".main-gallery_block")

const setDelay = 8000

function refreshGallery() {
    for (let i = 0; i < blockElems.length; i++) {
        blockElems[i].classList.remove('fade')
    }

    for (let i = 0; i < dotElems.length; i++) {
        dotElems[i].classList.remove("active")
    }

    blockElems[blockToStart].classList.add('fade')
    dotElems[blockToStart].classList.add('active')
}

function switchSlide() {
    blockToStart === numOfBlocks ? blockToStart = 0 : blockToStart++
    refreshGallery()
}

function resetGallery() {
    refreshGallery()
    clearInterval(interval)
    interval = setInterval(switchSlide, setDelay)
}

nextSlideEl.addEventListener("click", () => {
    blockToStart === numOfBlocks ? blockToStart = 0 : blockToStart++
    resetGallery()
})

prevSlideEl.addEventListener("click", () => {
    blockToStart === 0 ? blockToStart = numOfBlocks : blockToStart --
    resetGallery()
})

for (let i= 0; i < dotElems.length; i ++) {
    dotElems[i].addEventListener("click", () => {
        blockToStart = i
        resetGallery()
    })
}

let interval = setInterval(switchSlide, setDelay)



