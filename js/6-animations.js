$(function() {
    'use strict';
	var flagDisplayed = false;
	// efekt hide i show
	
	$('p').hide(1000).show(2000, function() {
		
// flaga zdefiniowana jako false, po pierwszej iteracji (a są trzy), zmienia się na true i tak zostaje. stąd negacja w warunku
		
	if (!flagDisplayed) {
		console.log('Dokonało się');
		flagDisplayed = true;
		}
	});
	
//	fadeiin i fadeout
	
	$('h1').fadeIn('slow').fadeOut('slow');
	
//	slideup slideDown
	
	$('h2').slideUp(3000).slideDown(3000);
	
	//funckja zwrotna animacji - callback
	function animacja () {
		console.log("Zakończono pierwszą animację, startuje druga");
		$('h3').animate({'font-size': '1em', 'margin-left': '0px', 'color': 'red'}, 2000);
	}
	
//	//efekt animacji z callbackiem
//	
//	$('h3').animate({'font-size': '3em', 'margin-left': '100px'}, 2000, animacja);
//	

// to samo po clicku
	
	$('h3').click(function() {
		$(this).animate({'font-size': '3em', 'margin-left': '100px', 'color': 'blue'}, 2000, animacja);
	});
	
}); 	