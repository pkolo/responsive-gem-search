$(document).ready(function() {

  $('.search-bar').on('click', '.search-btn', function(e) {
    e.preventDefault();

    var q = $(this).siblings('.search-field').val()

    $.ajax({
      url: '/search',
      method: 'POST',
      data: `q=${q}`
    }).done(function(res) {
      console.log(res)
    });
  });

});
