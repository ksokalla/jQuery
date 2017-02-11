$(function() {
    'use strict';
	
//	wyszukiwanie w dokumencie w body, paragrafów i odwoływaniu się do drugiego z nich
	
$("body").find("p").eq(1).css({'color': 'green'});
	
//	pętla dodająca do paragrafów klasę - this odnosi się do aktualnie iterowanego elementu - w tym przypadku 'p'
	
$('p').each(function(index) {
		$(this).addClass('paragrafik-' + index);
		console.log(jQuery(this));
	});
	
});
