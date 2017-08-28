$(document).ready(function() {
      $('#foo').on('submit', function(event) {
          event.preventDefault()

          $('#foo').on('submit', function() {
            let address = $('#address').val().trim()

            // console.log(address)

            $.get('https://api.outerspatial.com/v0/trailheads', {
              near_addr: address,
              distance: 5,
              per_page: 10
            }
      //       // success)
          ).done((response) => {
      // console.log("data is", response)
    // })
      parseTrail(response)
    // }).fail((err) => { console.log("a bad thing happened with getting trails", err) })
  })
})

  // extract albums from JSON AND add to DOM
  function parseTrail(response) {
    let trails = response.data
    console.log("parsing your trail, YO!", trails)
    //
    // // go through albums, extract the url, name and image, then render
    for (let trail of trails) {
      let trailName = trails.name
      let trailLocation = trails.location
      let trailDistance = trails.distance

      console.log(trailName, trailLocation, trailDistance);

      // renderAlbum(trailName, trailLocal, trailDistance)
    }
  }
})
})
  //
  // // add a trail to the result UL
  // function renderTrail(trailName, trailLocation, trailDistance) {
  //   let ul = $('ul.results')
  //
  //   let li = $('<li>').append(`<p>Trail Name:"${trailName}">
  //         Trail Location: ${trailLocation}">
  //         Trail Length(in meters): >${trailDistance}</p>
  //       </a>`)
  //   ul.append(li)
  // }

          //
          // function success(data) {
          //   console.log(data)
          //   // parseTrail(data)
          //   // add trail to the result UL
          //   let ul = $('ul.results')
          //   let li = $('<li>').append()
          //   ul.append(li)
          // }

          // })
      // })
