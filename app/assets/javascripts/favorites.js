$(document).ready(function() {

  var buildFavs = function(fav) {
    var favorites = JSON.parse(localStorage.getItem('favorites'));
    return(`
      <div class="favorite">
        <input alt="Star blue" type="image" src="/assets/star-blue.png" class="fav-btn" />
        <div class="favorite-link"><a href="${fav.link}">${fav.name}</a></div>
      </div>
    `)
  }

  var favorites = JSON.parse(localStorage.getItem('favorites'));
  var favList = favorites.map( f => buildFavs(f) );

  $('.favorites-list').append(favList);

  $('.favorites-list').on('click', '.fav-btn', function(e) {
    var gem = $(this).siblings('.favorite-link');
    removeFav(gem);
    $(this).parent().remove();
  })

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
    var btn = gem.siblings('.fav-btn');
    var favorites = JSON.parse(localStorage.getItem('favorites'));
    var match = favorites.find( fav => (fav.name == gemName) )

    if (match) {
      removeFav(gem);
      btn.attr('src', '/assets/star-gray.png')
    } else {
      addFav(gem);
      btn.attr('src', '/assets/star-blue.png')
    }
  }

  var addFav = function(gem) {
    var gemName = gem[0].innerText;
    var gemLink = gem.attr('href');
    var gemData = {name: gemName, link: gemLink};
    var favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites.push(gemData)

    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  var removeFav = function(gem) {
    var gemName = gem[0].innerText;
    var favorites = JSON.parse(localStorage.getItem('favorites'));
    var newFavorites = favorites.filter( fav => ( fav.name != gemName) );

    localStorage.setItem('favorites', JSON.stringify(newFavorites)) ;
  }

});
