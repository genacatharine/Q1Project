$(document).ready(() => {
      // Submit button
      $("form").submit(function(event) {
        event.preventDefault();
        var searchTerm = $('#search-term').val().trim()
        console.log("searchTerm is", searchTerm)
      })
      // let trails = [];
      // // Start API
      $.ajax({
          url: 'https://api.outerspatial.com/v0',
          type: 'GET',
          dataType: 'json',
          data: datastring,
          success: function(data) {
          console.log(data)
          alert("Success!")
          {
            near_addr: near_addr,
            distance: distance
          },


            //
              // trails = data['Search'].map((obj) => {
              //   return {
              //     title: obj['Title'],
              //     poster: obj['Poster'],
              //     year: obj['Year'],
              //     id: obj['imdbID']
            // }


          // }
        // ).done();

      })
    })
