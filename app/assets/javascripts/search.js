$(document).ready(function() {

  $('.search-bar').on('click', '.search-btn', function(e) {
    e.preventDefault();

    var q = $(this).siblings('.search-field').val()

    $.ajax({
      url: '/search',
      method: 'POST',
      data: `q=${q}`
    }).done(function(res) {
      $('.result-wrapper').remove();
      $('.search-wrapper').append(res);

      if ($('.result-error').length) {
        $('.search-bar').addClass('error');
        $('input').addClass('error');

        $('input').on('focus', function(e) {
          $('.search-bar').removeClass('error');
          $(this).removeClass('error');
          $(this).val('')
        });
      }

      var results = $('.search-wrapper').find('.result');

      $.each(results, function(i, dependency) {
        var gemName = $.trim(dependency.innerText);
        var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        var isFav = favorites.find( fav => (fav.name == gemName) )

        if (isFav) {
          $(dependency).find('.fav-btn').attr('src', '/assets/star-blue.png')
        }

      });

    });

  });

});
