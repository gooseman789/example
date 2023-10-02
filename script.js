var searchBTN = $('#search');
var inputEL = $('#showtitle');


searchBTN.on('click', function() {


fetch('https://api.watchmode.com/v1/search/?apiKey=kAkSWPYcQeHHMrCJU5ONXuwRIH85vNjxsRjumdtX&search_field=name&search_value=' + inputEL.val() + '&limit=1', {
    method: 'GET',
})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(inputEL.val())
    console.log(data);
})

})

var animeBTN = $('#searchanime');
var animeEL = $('#animetitle');

animeBTN.on('click', function () {
    fetch('https://api.jikan.moe/v4/anime?q=' + animeEL.val() + "&limit=1" , {
        method: 'GET',
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(animeEL.val())
        console.log(data);
    })
})