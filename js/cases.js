window.onload = function() {
	/*VARIABLES*/
	var caseBar = document.getElementsByClassName('cs-sidebar')[0];
	var container = document.getElementsByClassName('cs-container')[0];
	var back = document.getElementsByClassName('cs-back')[0];
	var cards = document.getElementsByClassName('card');

	var containerTop = container.getBoundingClientRect().top + window.pageYOffset;

	/*** EVENT HANDLING ***/

	/* SHOW SIDEBAR AFTER SCROLLING PAST HERO */
	window.onscroll = function() {
		if (window.pageYOffset >= containerTop) {
			caseBar.classList.add('sidebar-active');
			back.style.position = 'fixed';
			back.classList.add('visible');
		}
		else {
			caseBar.classList.remove('sidebar-active');
			back.style.position = 'absolute';
			back.classList.remove('visible');
		}
	}

	/* SHOWS INSTRUCTIONS ON CARD ON HOVER */
	for (var i = 0; i < cards.length; i++) {
		cards[i].addEventListener('mouseover', function() {
			var caption = this.children[0].children[1].children[2];
			caption.classList.add('hovered');
		});
		cards[i].addEventListener('mouseout', function() {
			var caption = this.children[0].children[1].children[2];
			caption.classList.remove('hovered');
		});
	}
}