$(document).ready(function() {

  $('.search-wrapper').on('click', '.fav-btn', function(e) {
    var gem = $(this).siblings('.result-link');

    if ( localStorage.getItem('favorites') ) {
      toggleFav(gem);
    } else {
      initFavs(gem);
    }
  });

  var initFavs = function(gem) {
    var favGems = [];
    localStorage.setItem('favorites', JSON.stringify(favGems));
    addFav(gem);
  }

  var toggleFav = function(gem) {
    var gemName = gem[0].innerText;
    var favorites = JSON.parse(localStorage.getItem('favorites'));
    var match = favorites.find( fav => (fav.name == gemName) )

    if (match) {
      removeFav(gem);
    } else {
      addFav(gem);
    }
  }

  var addFav = function(gem) {
    var gemName = gem[0].innerText;
    var gemLink = gem.attr('href');
    var gemData = {name: gemName, link: gemLink};
    var favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites.push(gemData)

    localStorage.setItem('favorites', JSON.stringify(favorites));
    var btn = gem.siblings('.fav-btn');
    btn.attr('src', '/assets/star-blue.png')

    console.log(gemName, 'added');
    console.log( favorites );
  }

  var removeFav = function(gem) {
    var gemName = gem[0].innerText;
    var favorites = JSON.parse(localStorage.getItem('favorites'));
    var newFavorites = favorites.filter( fav => ( fav.name != gemName) );

    localStorage.setItem('favorites', JSON.stringify(newFavorites)) ;
    var btn = gem.siblings('.fav-btn');
    btn.attr('src', '/assets/star-gray.png')

    console.log(gemName, 'removed');
    console.log( newFavorites );
  }

});
