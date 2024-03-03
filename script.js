const buttonYes = document.querySelector('.button_yes');
const buttonNo = document.querySelector('.button_no');

let buttonYesFontSize = 2;
let buttonNoFontSize = 2;

buttonNo.addEventListener('click', function () {
    doYesMore();
});

buttonYes.addEventListener('click', function () {
    buttonYesPushed();
});

function doYesMore (){
    buttonYesFontSize += .3;
    buttonYes.style.fontSize = buttonYesFontSize + 'em';
    buttonNoFontSize -= .25;
    buttonNo.style.fontSize = buttonNoFontSize + 'em';
}

function buttonYesPushed(){
    location.href = './page2.html';

}
