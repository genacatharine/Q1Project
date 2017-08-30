$(document).ready(function() {
  $('#foo').on('submit', function(event) {
    event.preventDefault()


      let address = $('#address').val().trim()

// Get data from API
      $.get('https://api.outerspatial.com/v0/trailheads', {
          near_addr: address,
          distance: 5,
          per_page: 5
        }
 // success
      ).done((response) => {
        // console.log("done data is", response)
        // })
        parseTrail(response)

      })


    // extract albums from JSON AND add to DOM
    function parseTrail(response) {
      let trails = response.data
      // console.log("parsing your trail, YO!", trails)

      // // go through albums, extract the url, name and image, then render
      for (let trail of trails) {
        let trailName = trail.name
        let trailLocation = trail.geometry.coordinates.reverse()
        let trailDistance = trail.distance_in_meters
        // console.log(trailLocation.reverse());
        renderTrail(trailName, trailLocation, trailDistance)

      }
    }
  })

  //
  // // add a trail to the result UL
  function renderTrail(trailName, trailLocation, trailDistance) {
    // console.log("rendering trail", trailName);
    let ol = $('ol.results')
    // console.log(trailName)
    const $name = $('<li>').text(`Name: ${trailName}`);
    const $location = $('<h6>').html(`Location: <a href="http://maps.google.com/?q=${trailLocation}" target="_blank">Link to Map</a>`);
    const $distance = $('<h6>').text(`Length (meters): ${trailDistance}`);
    const $button = $('<button>').addClass('toHike').text('Add to To-Hike List!');

    $name.append($location, $distance, $button)
    $name.on('click', liClickHandler);
    ol.append($name)

    // let li = $('<li>').append(`Trail Name: ${trailName}<br>
    //        Location: <a href="http://maps.google.com/?q=${trailLocation}"  target="_blank">Link to Map</a><br>
    //       Length(in meters): ${trailDistance} <button type="button" onclick="myFunction()"
    //       class="toHike">Add to To-Hike List!</button>`)
    // ol.append(li)

  }

  function liClickHandler(event) {
    event.preventDefault();
    console.log('Hell yeah!');
  }
  
})
