$(document).ready(function () {
  $('#foo').on('submit', function (event) {
    event.preventDefault()

    $('#foo').on('submit', function () {
      let address = $('#address').val().trim()

      console.log(address)

      $.get('https://api.outerspatial.com/v0/trailheads', {
        near_addr: address,
        distance: 5,
        per_page: 10
      }, success)
    })

    function success(data) {
      console.log(data)
    }
  })
})
