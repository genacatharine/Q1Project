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
          parseTrail(response)
      })


    // extract albums from JSON AND add to DOM
    function parseTrail(response) {
      let trails = response.data
      // // go through trails, extract the name,distance, location then render
      for (let trail of trails) {
        let trailName = trail.name
        let trailLocation = trail.geometry.coordinates.reverse()
        let trailDistance = trail.distance_in_meters
        renderTrail(trailName, trailLocation, trailDistance)
      }
    }
  })

  // // add a trail to the result UL
  function renderTrail(trailName, trailLocation, trailDistance) {
    let ol = $('ol.results')
    const name = $('<li>').text(`Name: ${trailName}`);
    const location = $('<h6>').html(`Location: <a href="http://maps.google.com/?q=${trailLocation}" target="_blank">Link to Map</a>`);
    const distance = $('<h6>').text(`Length (meters): ${trailDistance}`);
    const button = $('<button>').addClass('toHike').text('Add to my To-Hike List!');
      button.on('click', btnClickHandler);
        name.append(location, distance, button)
          ol.append(name)

  }
// add trail to to-hike list
  function btnClickHandler(event) {
//     // event.preventDefault();
// $('.tohike').on('click', function(event) {
  // console.log(event.target)
var liFromOrigList=$(event.target).parent();//based on what was clicked, grab the containig li
// console.log(liFromOrigList)
console.log($(event.target))
$(liFromOrigList).clone().appendTo($('#todo'));//clone and append to to-hike list

})
