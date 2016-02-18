$('#vasen-nav li:first-child').click(function(evt){
	evt.preventDefault();
	$('#vasen-nav li:not(:first)').slideToggle(400);
});

$(window).scroll(ylaNavi);
$(window).resize(ylaNavi);

function ylaNavi(){
	if($('#yla-nav:visible').length != 0){
		if($(window).scrollTop() > 160){
			// console.log($(window).scrollTop());
			var mainWidth = $('main').width();
			var mainPos = $('main').position();
			var leveys = Number(mainWidth)+64;
			$('#yla-nav').attr('style', 'position:fixed;  bottom:0; left:'+mainPos.left+'px; width:'+leveys+'px');
		} else {
			$('#yla-nav').attr('style', 'position:static;');
		}
	}
}