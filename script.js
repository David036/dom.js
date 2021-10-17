let joinClick = document.querySelector('.join-section > button')
let joinUs = document.querySelector('.join-us')
joinClick.onclick = function myFunc() {
    joinUs.style.transform = 'translateX(30%)'
}
let inputName = document.getElementById('name')
let inputPass = document.getElementById('password')
let joinBut = document.querySelector('.join-us > button')
let logFal = document.querySelector('.join-us > p')
let nameVal = ''
let passVal = ''
let mainBlocks = document.querySelector('.main-2')
let sucTex = document.querySelector('.nav-menu > h4')
let mainWe = document.querySelectorAll('.main-3-section')
let mainCards = document.querySelector('.main-4-section')
let emailSec = document.querySelector('.email-section')
let footerSec = document.querySelector('.footer')
joinBut.onclick = function valFunc() {
    nameVal = inputName.value;
    passVal = inputPass.value;
    if (nameVal.length >= 6 && passVal.length >=6 ) {
        mainBlocks.style.display = 'block'
        joinUs.style.display = 'none'
        sucTex.style.display = 'block'
        mainWe[0].style.display = 'flex'
        mainWe[1].style.display = 'flex'
        mainBlocks.style.display = 'block'
        mainCards.style.display = 'block'
        emailSec.style.display = 'block'
        footerSec.style.display = 'flex'
    }else {
        logFal.style.display = "block"
    }
} 
let backBut = document.querySelector('.learn-text > button')
let blockRel = document.querySelector('.main-blocks-1')
let blockBut = document.querySelectorAll('.block-1 > button')
let learnText = document.querySelector('.learn-text')
for (let i = 0; i < blockBut.length; i++) {
   blockBut[i].onclick = function (){
    learnText.style.display = 'block'
    }
    
}

backBut.onclick = function backFunc(){
    learnText.style.display = 'none'
}
let burgerMenu = document.querySelector('.burger-menu')
let burgerBut = document.querySelector('.burger')
burgerBut.onclick = function burger() {
burgerBut.style.display = 'none'
burgerMenu.style.display = 'block'   
}
let closeBut = document.querySelector('.burger-menu >li >button')

closeBut.onclick = function close(){
    burgerBut.style.display = 'block'
burgerMenu.style.display = 'none'
}