document.getElementById('oblicz').addEventListener('click', function() {
 
 
    let studenci = document.getElementById('pracownicy').querySelectorAll('div[id^=u]');

    for (let student of studenci) {
        let sumaOcen = 0;
        let srednia = 0;

        let oceny = student.querySelectorAll('input[type=number]');
 
        let zajeciaDod = student.querySelector('.zajecia-dodatkowe');

 
        for (let ocena of oceny) {
            console.log(zajeciaDod.value );

            if (zajeciaDod.value.includes(ocena.className && ocena.value < 6.0)) {
                //nie wiem jak konkretnie odnieść sie do oceny z zajęć dodatowych

                sumaOcen += (+ocena.value) + 0.5 ;
            } else {
                sumaOcen += +ocena.value ;
            }
 
            (ocena.value == 1) ? student.classList.add('red') : -1 
        }
 
        srednia = (sumaOcen/oceny.length).toFixed(2) ;

        // let sr = srednia.toString();

        // console.log(sr);

         
        let sredniaUcznia = document.querySelectorAll('span[class=srednia]');
        // let sredniaUcznia = document.getElementsByClassName('srednia');
        // let sredniaUcznia = document.getElementsByTagName('span[class=srednia]');

        console.log(sredniaUcznia);

        sredniaUcznia.innerText = srednia;
        // sredniaUcznia.textContent = srednia;

        console.log(student.querySelector('span').innerHTML + ' ' + srednia);

        // if (srednia >= 4.75) {
        //     student.classList.add('green');
        //     // document.querySelectorAll('.uczen').classList.add('green'); 
        //     // czemu to nie dziła 
        // }

        (srednia >= 4.75) ? student.classList.add('green') : -1 
    }
 
})