$('#main-menu li:first-child').click(function(evt) {
    evt.preventDefault();
    $('#main-menu li:not(:first)').slideToggle(400);
});