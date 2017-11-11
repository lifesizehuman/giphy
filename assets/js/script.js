function searchGifs() {

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=/"
  var searchQuery = $("#search").val();
  var apiKey = "&api_key=dc6zaTOxFJmzC"

  if (!searchQuery) {
    searchQuery = "matt%20damon"
  }

  $.ajax({
    url: queryURL + searchQuery + apiKey,
    method: 'GET'
  }).done(function (response) {
    var gifs = $('#gifs')
    for (var i = 0; response.data.length; i++) {
      var searchResults = $('<p>')
      var imageTag = response.data[i].images.downsized.url
      searchResults.append('<img src=' + imageTag + '>')
      gifs.append(searchResults)
    }
  })
}

$(document).on('click', '#submit', function(event) {
  searchGifs()
})
