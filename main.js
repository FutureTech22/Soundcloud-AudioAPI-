jQuery(function() {

    $.ajax({
        url: `https://api.soundcloud.com/tracks/?q=$lennykravitz&client_id=03e4633e2d85874a921380e47cac705d`,
        success: function(response) {
            console.log(response);

            response.forEach(function(song) {
                $('.songs').append(`
					<div class='artist col-md-4'>
					<img src=${song.artwork_url}>
					<h1>${song.title}</h1>
					</div>`)
            })
        }

    })
})
$('#enter').click(function() {
    var content = $('#searchArtist').val();
    $('.songs').html('');
    $.ajax({
        url: `https://api.soundcloud.com/tracks/?q=${content}&client_id=03e4633e2d85874a921380e47cac705d`,
        success: function(response) {
            console.log(response);

            response.forEach(function(song) {
                $('.songs').append(`
					<div class='artist col-md-4'>
					<img src="${song.artwork_url}">
					<h1>${song.title}</h1>
					<button data-id="${song.id}">Play song</button>
					</div>`)
            })
        }
    })
});


$("body").on("click","button",function(){
	var id = $(this).data('id');
	$("audio").attr("src",`http://api.soundcloud.com/tracks/${id}/stream?client_id=03e4633e2d85874a921380e47cac705d`)
})



