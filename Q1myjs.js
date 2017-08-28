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
      let trailName = trail.name
      let trailLocation = trail.geometry.coordinates
      let trailDistance = trail.distance_in_meters
      // console.log(trailName + ", " + trailLocation + ", " + trailDistance + " meters")
      renderTrail(trailName, trailLocation, trailDistance)
}
  }
})

  //
  // // add a trail to the result UL
  function renderTrail(trailName, trailLocation, trailDistance) {
    let ol = $('ol.results')
  console.log(trailName)
    let li = $('<li>').append(`Trail Name: ${trailName}<br>
           Location: ${trailLocation}<br>
          Length(in meters): ${trailDistance}`)
    ol.append(li)

  }

          // }

          // })
      })
