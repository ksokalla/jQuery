jQuery(document).ready(function() {
    'use strict';
	
	var tekstParagrafuPierwszego = $('#paragraf').text();
	console.log(tekstParagrafuPierwszego);
	
//	dodawanie tekstu
	$(".paragraf").text(tekstParagrafuPierwszego);
	
//	 dodawanie htmla
	
	$('.paragrafnext').html("To jest <strong>paragraf</strong> z dodanym htmlem");
	
//	dodawanie treści na początku selectora
	
	$(".paragrafnext").append(" Treść na końcu selektora po spacji	");
	
//	dodawanie treści za selektorem
	
	$('.paragrafnext').after("Treść za selektorem");
	
//	usuwanie elementu i jego zawartości
	
	$("strong").remove();
	
//	usuwanie TYLKO jego zawartości
	
	$('.paragraf').empty();
	
//	dodawanie klasy
	
	$('h1').addClass('blue');
	
});
					   