
const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');

    p1.classList.toggle('bg-red');
    p2.classList.toggle('bg-yellow');
}

let btnSetBg = document.getElementById('set-background');

btnSetBg.addEventListener('click', setBackground);