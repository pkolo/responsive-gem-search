$(document).ready(function() {

  $('.search-wrapper').on('click', '.fav-btn', function(e) {
    var gem = $(this).siblings('.result-link');
    var gemName = gem[0].innerText;
    if ( localStorage.getItem(gemName) ) {
      removeFav(gemName)
    } else {
      addFav(gem)
    }
  })


  var addFav = function(gem) {
    var gemName = gem[0].innerText;
    var gemLink = gem.attr('href');

    localStorage.setItem(gemName, gemLink);
    console.log(gemName, 'added')
  }

  var removeFav = function(gemName) {
    localStorage.removeItem(gemName);
    console.log(gemName, 'removed');
  }

});
