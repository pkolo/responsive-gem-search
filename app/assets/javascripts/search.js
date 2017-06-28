$(document).ready(function() {

  $('.search-bar').on('click', '.search-btn', function(e) {
    e.preventDefault();

    $.ajax({
      url: '/search',
      method: 'POST',
      data: 'q=hello'
    }).done(function(res) {
      console.log(res)
    });
  });

});
