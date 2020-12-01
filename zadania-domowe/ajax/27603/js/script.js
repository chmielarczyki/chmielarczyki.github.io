$(document).ready(function() {

    $('#get-data').click(function() {

        // wariant 1
       $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data) {

                // console.log(data);

                let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let hr = $('<hr />');

                $('body').append(pId);
                $('body').append(pUserId);
                $('body').append(pBody);
                $('body').append(pTitle);
                $('body').append(hr);
            })
            .fail(function(error) {
                console.error(error);
            });


         // wariant 2
       $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
       .done(function(data) {

        //    console.log(data);

           let pId = $('<p></p>').text(`Post ID: ${data.id}`);
           let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
           let pBody = $('<p></p>').text(`Body: ${data.body}`);
           let pTitle = $('<p></p>').text(`Title: ${data.title}`);
           let hr = $('<hr />');

           $('body').append(pId);
           $('body').append(pUserId);
           $('body').append(pBody);
           $('body').append(pTitle);
           $('body').append(hr);
       })
       .fail(function(error) {
           console.error(error);
       });
    });

});