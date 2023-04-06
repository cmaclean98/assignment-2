$(document).ready(function () {
    $('#boroughs-list a').click(function (e) {
        e.preventDefault();
        var imageUrl = $(this).data('image');
        $('#image-container').html('<img src="' + imageUrl + '">').show();
    })
})
