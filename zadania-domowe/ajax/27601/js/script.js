$(document).ready(function() {

    $('#btn').click(function() {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function(data) {

                $('button').after('<div id="dane-programisty"></div>');

                let pName = $('<p></p>').text(`Imie: ${data.imie}`);
                let pNazwisko = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
                let pZawod = $('<p></p>').text(`Zawod: ${data.zawod}`);
                let pFirma = $('<p></p>').text(`Firma: ${data.firma}`);

                $('#dane-programisty').append(pName);
                $('#dane-programisty').append(pNazwisko);
                $('#dane-programisty').append(pZawod);
                $('#dane-programisty').append(pFirma);

                // console.log(data);
            })
            .fail(function(error) {
                console.error(error);
            })


    })

})