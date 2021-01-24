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

document.getElementById('radio1').addEventListener('click', stopSlider);
document.getElementById('radio2').addEventListener('click', stopSlider);
document.getElementById('radio3').addEventListener('click', stopSlider);
document.getElementById('radio4').addEventListener('click', stopSlider);
document.getElementById('radio5').addEventListener('click', stopSlider);


