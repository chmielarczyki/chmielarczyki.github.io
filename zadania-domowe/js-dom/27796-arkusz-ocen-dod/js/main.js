document.getElementById('oblicz').addEventListener('click', function() {


    let studenci = document.getElementById('pracownicy').querySelectorAll('div[id^=u]');
    
    for (let student of studenci) {
        let sumaOcen = 0;
        let srednia = 0;

        let oceny = student.querySelectorAll('input[type=number]');

        let zajeciaDod = document.querySelectorAll('.zajecia-dodatkowe');

        let sredniaUcznia = document.getElementsByClassName('srednia');

        for (let ocena of oceny) {

            for (let zajecia of zajeciaDod) {

                 if (zajecia.value == '') {

                    sumaOcen += +ocena.value;
                    srednia = sumaOcen/oceny.length;
                    let sr = srednia.toFixed(2) 

                    console.log(sr);

                    sredniaUcznia.textContent = sr;

                    } else {
                        console.log('jfgjdfngjd');
                    }

                console.log(zajecia.value)
                
            }

           

        }

        // console.log(sumaOcen/oceny.length);
        // console.log(sredniaUcznia);
    }

  
    // console.log(studenci);

  


})

