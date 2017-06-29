$(document).ready(function() {

  $('.search-wrapper').on('click', '.fav-btn', function(e) {
    var gem = $(this).siblings('.result-link');
    var gemName = gem[0].innerText;

    if ( localStorage.getItem('favorites') ) {
      addFav(gem)
    } else {
      initFavs(gem);
    }
  });

  var initFavs = function(gem) {
    var gemName = gem[0].innerText;
    var gemLink = gem.attr('href');
    var favGems = [
      {name: gemName, link: gemLink}
    ]

    localStorage.setItem('favorites', JSON.stringify(favGems))
  }

  var addFav = function(gem) {
    var gemName = gem[0].innerText;
    var gemLink = gem.attr('href');
    var gemData = {name: gemName, link: gemLink};
    var favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites.push(gemData)

    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log(gemName, 'added')
    console.log( favorites )
  }

  var removeFav = function(gemName) {
    localStorage.removeItem(gemName);
    console.log(gemName, 'removed');
  }

});
