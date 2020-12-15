
document.getElementById('oblicz').addEventListener('click', function() {

    let wyplata = document.getElementsByClassName('wyplata');
    let czas = document.getElementsByClassName('czas');
    let stawka = document.getElementsByClassName('stawka');
    let job = document.getElementsByClassName('job');
    let pracownik = document.querySelectorAll('.pracownik');
    console.log(pracownik);
    let podwyzka = 0;
    let arr = [];


    for(i = 0; i < czas.length && i < wyplata.length && i < stawka.length && i < pracownik.length; i++) {

        if(czas[i].value > 160) {
            
            podwyzka = (czas[i].value- 160)*stawka[i].value*2;
            wyplata[i].innerText = (czas[i].value * stawka[i].value)+podwyzka;

        } else {
            wyplata[i].innerText = czas[i].value * stawka[i].value;
        }

        if(czas[i].value < 100) {
            pracownik[i].classList.add('red');

        } else {

            pracownik[i].classList.add('green');

            /* nie wiem jak pobrac imiona pracowników zrobić je w tablicę, sort() i slice() pobrac 3 pierwsze elementy */
            // document.getElementById('najlepsi-pracownicy').innerHTML = pracownik[i];

            // console.log(pracownik[i]);

            // arr = pracownik[i].split();
            // console.log(pracownik[i]);
        }

    }
})


// $(document).ready(function(){

    
// document.getElementById('oblicz').addEventListener('click', function() {

//     let wyplata = document.getElementsByClassName('wyplata');
//     let czas = document.getElementsByClassName('czas');
//     let stawka = document.getElementsByClassName('stawka');
//     let job = document.getElementsByClassName('job');
//     let pracownik = document.querySelectorAll('.pracownik');
//     console.log(pracownik);
//     let podwyzka = 0;
//     let najCzas = [];
//     let arr = [];
    

//     for(i = 0; i < czas.length && i < wyplata.length && i < stawka.length && i < pracownik.length; i++) {

//         if(czas[i].value > 160) {
            
//             podwyzka = (czas[i].value- 160)*stawka[i].value*2;
//             wyplata[i].innerText = (czas[i].value * stawka[i].value)+podwyzka;

//         } else {
//             wyplata[i].innerText = czas[i].value * stawka[i].value;
//         }

//         if(czas[i].value < 100) {
//             pracownik[i].classList.add('red');

//         } else {

//             pracownik[i].classList.add('green');

//             // najCzas += czas[i];

//             // arr.sort();

//             /* nie wiem jak pobrac imiona pracowników zrobić je w tablicę, sort() i slice() pobrac 3 pierwsze elementy */
//             // document.getElementById('najlepsi-pracownicy').innerHTML = pracownik[i];

//         }
//         // arr = jQuery.makeArray(najCzas);

//         // arr = jQuery.makeArray( pracownik );

//         // arr.sort();
//         // console.log(najCzas)
//         // console.log(arr)
//     }
// })

// });
