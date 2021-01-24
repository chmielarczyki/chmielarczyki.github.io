// let counter = 1;

// document.getElementById('radio' + counter).checked = true;

// setInterval(function() {

//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if(counter > 5){
//         counter = 1;
//     }
// }, 3000);


let counter = 1;
let interval;
document.getElementById('radio' + counter).checked = true;

const startSlider = () => {
    interval = setInterval(function() {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 5){
            counter = 1;
        }
    }, 3000);
} 

const stopSlider = () => {
    clearInterval(interval);

    startSlider()
}

startSlider()

// document.addEventListener('click', stopSlider);

// document.querySelectorAll('.manual-btn').addEventListener('click', stopSlider);
// document.querySelector('.auto-btn2').addEventListener('click', stopSlider);
// document.querySelector('.auto-btn3').addEventListener('click', stopSlider);
// document.querySelector('.auto-btn4').addEventListener('click', stopSlider);
// document.querySelector('.auto-btn5').addEventListener('click', stopSlider);


document.getElementById('radio1').addEventListener('click', stopSlider);
document.getElementById('radio2').addEventListener('click', stopSlider);
document.getElementById('radio3').addEventListener('click', stopSlider);
document.getElementById('radio4').addEventListener('click', stopSlider);
document.getElementById('radio5').addEventListener('click', stopSlider);

// document.getElementById('radio1').addEventListener('mouseleave', startSlider);
// document.getElementById('radio2').addEventListener('mouseleave', startSlider);
// document.getElementById('radio3').addEventListener('mouseleavet', startSlider);
// document.getElementById('radio4').addEventListener('mouseleave', startSlider);
// document.getElementById('radio5').addEventListener('mouseleave', startSlider);

// let btn = document.querySelectorAll('.stop-input')

// let btn = document.getElementsByTagName('input');
// console.log(btn);

// btn.addEventListener('click', stopSlider);

// btn.addEventListener("click", stopSlider);

// document.addEventListener("click", stopSlider);

// if( document.getElementById('radio' + counter).click) {
//     clearInterval(interval);
// } else {
//     startSlider()
// }

