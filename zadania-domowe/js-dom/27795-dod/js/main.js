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

//     // wyplata[0].innerText = czas[0].value * stawka[0].value;
//     // wyplata[1].innerText = czas[1].value * stawka[1].value;
//     // wyplata[2].innerText = czas[2].value * stawka[2].value;
//     // wyplata[3].innerText = czas[3].value * stawka[3].value;
//     // wyplata[4].innerText = czas[4].value * stawka[4].value; 
//     // wyplata[5].innerText = czas[5].value * stawka[5].value;
//     // wyplata[6].innerText = czas[6].value * stawka[6].value;
//     // wyplata[7].innerText = czas[7].value * stawka[7].value;
//     // wyplata[8].innerText = czas[8].value * stawka[8].value;
//     // wyplata[9].innerText = czas[9].value * stawka[9].value;
//     // wyplata[10].innerText = czas[10].value * stawka[10].value;
//     // wyplata[11].innerText = czas[11].value * stawka[11].value;
//     // wyplata[12].innerText = czas[12].value * stawka[12].value;
//     // wyplata[13].innerText = czas[13].value * stawka[13].value;
//     // wyplata[14].innerText = czas[14].value * stawka[14].value;
//     // wyplata[15].innerText = czas[15].value * stawka[15].value;
//     // wyplata[16].innerText = czas[16].value * stawka[16].value;
//     // wyplata[17].innerText = czas[17].value * stawka[17].value;
//     // wyplata[18].innerText = czas[18].value * stawka[18].value;
//     // wyplata[19].innerText = czas[19].value * stawka[19].value;
    

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


document.getElementById('oblicz').addEventListener('click', function() {

    let wyplata = document.getElementsByClassName('wyplata');
    let czas = document.getElementsByClassName('czas');
    let stawka = document.getElementsByClassName('stawka');
    let job = document.getElementsByClassName('job');
    let pracownik = document.querySelectorAll('.pracownik');
    console.log(pracownik);
    let podwyzka = 0;
    let arr = [];

    // wyplata[0].innerText = czas[0].value * stawka[0].value;
    // wyplata[1].innerText = czas[1].value * stawka[1].value;
    // wyplata[2].innerText = czas[2].value * stawka[2].value;
    // wyplata[3].innerText = czas[3].value * stawka[3].value;
    // wyplata[4].innerText = czas[4].value * stawka[4].value; 
    // wyplata[5].innerText = czas[5].value * stawka[5].value;
    // wyplata[6].innerText = czas[6].value * stawka[6].value;
    // wyplata[7].innerText = czas[7].value * stawka[7].value;
    // wyplata[8].innerText = czas[8].value * stawka[8].value;
    // wyplata[9].innerText = czas[9].value * stawka[9].value;
    // wyplata[10].innerText = czas[10].value * stawka[10].value;
    // wyplata[11].innerText = czas[11].value * stawka[11].value;
    // wyplata[12].innerText = czas[12].value * stawka[12].value;
    // wyplata[13].innerText = czas[13].value * stawka[13].value;
    // wyplata[14].innerText = czas[14].value * stawka[14].value;
    // wyplata[15].innerText = czas[15].value * stawka[15].value;
    // wyplata[16].innerText = czas[16].value * stawka[16].value;
    // wyplata[17].innerText = czas[17].value * stawka[17].value;
    // wyplata[18].innerText = czas[18].value * stawka[18].value;
    // wyplata[19].innerText = czas[19].value * stawka[19].value;
    

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

            /* nie wiem jak pobrac imiona pracowników zrobić je w tablicę, sort() i slice() pobrac 3 pierwsze elementy */
            document.getElementById('najlepsi-pracownicy').innerHTML = pracownik[i];

            console.log(pracownik[i]);

            // arr = pracownik[i].split();
            // console.log(pracownik[i]);
        }

    }
})