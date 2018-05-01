/*VARIABLES*/
var sidebar = document.getElementsByClassName('sidebar')[0];
var sidebarLinks = sidebar.children;
var hamburger = document.getElementsByClassName('hamburger')[0];
var mobileNav = document.getElementsByClassName('mobile-nav')[0];
var mobileList = document.getElementsByClassName('mobile-list')[0];
var mobileLinks = document.getElementsByClassName('m-link');
var cross = document.getElementsByClassName('cross')[0];
var introText = document.getElementsByClassName('intro-text')[0];
var introLink = document.getElementsByClassName('intro-link')[0];
var introLine = document.getElementsByClassName('line')[0];
var cards = document.getElementsByClassName('card');
var beReal = document.getElementsByClassName('about-text')[0].children[0];
var aboutText = document.getElementsByClassName('about-text')[0].children[1];
var aboutPic = document.getElementById('about').children[1];
var skillsHeader = document.getElementById('skills').children[0];
var skillsList = document.getElementsByClassName('skills-list');
var contactHeader = document.getElementById('contact').children[0];
var form = document.getElementById('ajax-form');
var inputs = document.getElementsByClassName('input-line');
var overlay = document.getElementsByClassName('index-overlay')[0];
var honeypot = document.getElementById('phone');



/*TOP OF SECTIONS TO SLIDE SIDEBAR AND SHOW ACTIVE TAB*/
var portfolioTop = document.getElementById('portfolio').getBoundingClientRect().top + window.pageYOffset;
var aboutTop = document.getElementById('about').getBoundingClientRect().top + window.pageYOffset;
var skillsTop = document.getElementById('skills').getBoundingClientRect().top + window.pageYOffset;
var contactTop = document.getElementById('contact').getBoundingClientRect().top + window.pageYOffset;

window.onload = function() {
	
	/*DISPLAY SIDEBAR IF TOP OF WINDOW IS PAST TOP OF PORTFOLIO DIV*/
	if (window.pageYOffset >= portfolioTop) {
		sidebar.classList.add('sidebar-active');
	} else {
		sidebar.classList.remove('sidebar-active');
	}

	activeTabs();

	/* MAKE CARDS FADEIN IF THEY ARE VISIBLE IN WINDOW */
	for (var i = 0; i < cards.length; i++) {
		var card = cards[i];
		fadeCard(card);
	}

	aboutEffects();

	skillsEffects();

	for (var i = 0; i < skillsList.length; i++) {
		var list = skillsList[i];
		listSlide(list);
	}

	contactEffects();

	for (var i = 0; i < inputs.length; i++) {
		var line = inputs[i];
		drawOut(line);
	}

	/*EXTENDS LINE ON LOAD AND WHEN HOVERING OVER LINK IN THE INTRO*/
	introLink.addEventListener('mouseover', function() {
		introLine.classList.add('extend');
	});
	introLink.addEventListener('mouseout', function() {
		introLine.classList.remove('extend');
	});

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

		/*ADD A CLICK EVENT LISTENER TO EACH CARD, 
		THEN MAKE THE OVERLAY CHANGE COLOR AND ANIMATE BEFORE GOING TO PAGE*/
		
		switch(i) {
			case 0:
				cards[0].onclick = function(e) {
					e.preventDefault(); 
					overlay.style.backgroundColor = '#EC8A32'; 
					overlay.classList.add('overlay-open'); 
					window.setTimeout(function() {
						window.location.href = '/elbuen.html';	
					}, 500);
				};
				break;
			case 1:
				cards[1].onclick = function(e) {
					e.preventDefault(); 
					overlay.style.backgroundColor = '#F5AF2D'; 
					overlay.classList.add('overlay-open');
					window.setTimeout(function() {
						window.location.href = '/electric.html';	
					}, 500);
				};
				break;
			case 2:
				cards[2].onclick = function(e) {
					e.preventDefault(); 
					overlay.style.backgroundColor = '#424242'; 
					overlay.classList.add('overlay-open');
					window.setTimeout(function() {
						window.location.href = '/cycle.html';	
					}, 500);
				};
				break;
			case 3:
				cards[3].onclick = function(e) {
					e.preventDefault(); 
					overlay.style.backgroundColor = '#FFFF00'; 
					overlay.classList.add('overlay-open');
					window.setTimeout(function() {
						window.location.href = '/snapchat.html';	
					}, 500);
				};
				break;
			case 4:
				cards[4].onclick = function(e) {
					e.preventDefault(); 
					overlay.style.backgroundColor = '#51A4DB'; 
					overlay.classList.add('overlay-open');
					window.setTimeout(function() {
						window.location.href = '/ordinary.html';	
					}, 500);
				};
				break;
			case 5:
				cards[5].onclick = function(e) {
					e.preventDefault(); 
					overlay.style.backgroundColor = '#003777'; 
					overlay.classList.add('overlay-open');
					window.setTimeout(function() {
						window.location.href = '/madisondrinks.html';	
					}, 500);
				};
				break;
			case 6:
				cards[6].onclick = function(e) {
					e.preventDefault(); 
					overlay.style.backgroundColor = '#78431B'; 
					overlay.classList.add('overlay-open');
					window.setTimeout(function() {
						window.location.href = '/lambdas.html';	
					}, 500);
				};
				break;
			default:
				break;
		}
	}

	/*** EVENT HANDLING ***/

	window.onscroll = function() {

		/*DISPLAY SIDEBAR WHEN TOP OF WINDOW SCROLLS PAST TOP OF PORTFOLIO DIV*/
		if (window.pageYOffset >= portfolioTop) {
			sidebar.classList.add('sidebar-active');
		} else {
			sidebar.classList.remove('sidebar-active');
		}

		activeTabs();

		/* FADE IN CARD AFTER BOTTOM OF WINDOW PASSES THE CARD'S TOP THIRD */
		for (var i = 0; i < cards.length; i++) {
			var card = cards[i];
			fadeCard(card);
		}

		aboutEffects();

		skillsEffects();

		for (var i = 0; i < skillsList.length; i++) {
			var list = skillsList[i];
			listSlide(list);
		}

		contactEffects();

		for (var i = 0; i < inputs.length; i++) {
			var line = inputs[i];
			drawOut(line);
		}
	}


	/* DISPLAY MOBILE NAVIGATION WHEN CLICKING HAMBURGER */
	hamburger.addEventListener('click', function() {
		mobileNav.style.display = 'block';
		window.setTimeout(function() {
			mobileNav.classList.add('opened');
		}, 50);
		window.setTimeout(function() {
			mobileList.classList.add('list-slide');
		}, 350);

	});

	/* HIDE MOBILE NAVIGATION WHEN CLICKING CROSS*/
	cross.addEventListener('click', function() {
		mobileNav.classList.remove('opened');
		window.setTimeout(function() {
			mobileList.classList.remove('list-slide');
			mobileNav.style.display = 'none';
		}, 300);
	});

	for (var i = 0; i < mobileLinks.length; i++) {
		/* HIDE MOBILE NAVIGATION WHEN CLICKING MOBILE LINK */
		mobileLinks[i].addEventListener('click', function() {
			if (mobileNav.classList.contains('opened')) {
				mobileNav.classList.remove('opened');
				mobileList.classList.remove('list-slide');
				window.setTimeout(function() {
					mobileNav.style.display = 'none';
				}, 300);
			}
		});

		/* SMOOTHSCROLL WHEN CLICKING MOBILE LINK AND SIDEBAR LINK*/
		switch (i) {
			case 0:
				mobileLinks[0].onclick = function() { scrollIt(portfolioTop, 600, 'easeOutQuad'); };
				sidebarLinks[0].onclick = function() { scrollIt(contactTop+150, 600, 'easeOutQuad'); };
				break;
			case 1:
				mobileLinks[1].onclick = function() { scrollIt(aboutTop, 600, 'easeOutQuad'); };
				sidebarLinks[1].onclick = function() { scrollIt(skillsTop+125, 600, 'easeOutQuad'); };
				break;
			case 2:
				mobileLinks[2].onclick = function() { scrollIt(skillsTop, 600, 'easeOutQuad'); };
				sidebarLinks[2].onclick = function() { scrollIt(aboutTop+150, 600, 'easeOutQuad'); };
				break;
			case 3:
				mobileLinks[3].onclick = function() { scrollIt(contactTop, 600, 'easeOutQuad'); };
				sidebarLinks[3].onclick = function() { scrollIt(portfolioTop+100, 600, 'easeOutQuad'); };
				break;
			default:
				break;
		}
	}

	/* INTRO LINK SMOOTHSCROLL */
	introLink.addEventListener('click', function() {
		scrollIt(portfolioTop+100, 600, 'easeOutQuad');
	});

	/* HIDE THE HONEYPOT THROUGH JS*/
	honeypot.style.display = 'none';

	/*** AJAX CONTACT FORM HANDLING ***/
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'mailer.php', true);
	xhr.setRequestHeader('accept', 'application/json');

	
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		var data = new FormData(form);
		xhr.send(data);

		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				for (var i = 0; i < inputs.length; i++) {
					inputs[i].value = '';
				}
				alert(xhr.responseText);
			}
		}
	});
}

/*** EXTERNAL FUNCTIONS ***/

/*ONCE USER WINDOW REACHES DIV, SIDEBAR CHANGES ACTIVE TAB TO WHICHEVER TAB USER IS CURRENTLY ON*/
function activeTabs() {
	var removeActive = function() {
		for (var i = 0; i < sidebarLinks.length; i++) {
			sidebarLinks[i].classList.remove('link-active');
		}	
	}

	switch (true) {
		case (window.pageYOffset >= portfolioTop && window.pageYOffset < aboutTop):
			removeActive();
			sidebarLinks[3].classList.add('link-active');
			break;
		case (window.pageYOffset >= aboutTop && window.pageYOffset < skillsTop):
			removeActive();
			sidebarLinks[2].classList.add('link-active');
			break;
		case (window.pageYOffset >= skillsTop && window.pageYOffset < contactTop):
			removeActive();
			sidebarLinks[1].classList.add('link-active');
			break;
		case (window.pageYOffset >= contactTop):
			removeActive();
			sidebarLinks[0].classList.add('link-active');
			break;
		default:
			break;
	}
}

/*GET THE FIRST THIRD AND BOTTOM OF CARD, THEN ADD FADE IN CLASS */
function fadeCard(card) {
	var third = card.getBoundingClientRect().top + window.pageYOffset + (card.clientHeight / 3);
	var bottom = card.getBoundingClientRect().bottom + window.pageYOffset;

	if (window.pageYOffset + window.innerHeight >= third && window.pageYOffset < bottom - (card.clientHeight / 3)) {
		card.classList.add('card-fade');
	}
	else {
		card.classList.remove('card-fade');
	}
}

function fadeIn(el) {
	if (el.style.opacity = 0) {
		return;
	}
	else {
		el.style.opacity = 0;

		var last = +new Date();
		var tick = function() {
			el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
			last = +new Date();

			if (+el.style.opacity < 1) {
			  (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
			}
		};
		tick();
	}
}

function aboutEffects() {
	/* SLIDE UP TEXT WHEN BOTTOM OF SCREEN REACHES BOTTOM OF 'LETS BE REAL' */
	if (window.pageYOffset + (window.innerHeight / 1.5) >= beReal.getBoundingClientRect().top + window.pageYOffset) {
		beReal.classList.add('slide-text');
	}
	else {
		beReal.classList.remove('slide-text');
	}

	/* FADE IN ABOUT TEXT AFTER BOTTOM OF WINDOW REACHES HALF THE TEXT HEIGHT */
	if (window.pageYOffset + (window.innerHeight / 1.5) >= aboutText.getBoundingClientRect().top + window.pageYOffset) {
		aboutText.classList.add('fade-text');
	}
	else {
		aboutText.classList.remove('fade-text');
	}

	/* FADE IN ABOUT TEXT AFTER BOTTOM OF WINDOW REACHES HALF THE TEXT HEIGHT */
	if (window.pageYOffset + (window.innerHeight / 1.5) >= aboutPic.getBoundingClientRect().top + window.pageYOffset ) {
		aboutPic.classList.add('fade-img');
	}
	else {
		aboutPic.classList.remove('fade-img');
	}
}

function skillsEffects() {
	if (window.pageYOffset + (window.innerHeight / 1.5) >= skillsHeader.getBoundingClientRect().top + window.pageYOffset) {
		skillsHeader.classList.add('skills-slide');
	}
	else {
		skillsHeader.classList.remove('skills-slide');
	}
}

function listSlide(list) {
	if (window.pageYOffset + (window.innerHeight / 1.5) >= list.getBoundingClientRect().top + window.pageYOffset) {
		list.classList.add('slide-from-left');
	}
	else {
		list.classList.remove('slide-from-left');
	}
}

function contactEffects() {
	if (window.pageYOffset + (window.innerHeight / 1.5) >= contactHeader.getBoundingClientRect().top + window.pageYOffset) {
		contactHeader.classList.add('contact-slide');
	}
	else {
		contactHeader.classList.remove('contact-slide');
	}
}

function drawOut(line) {
	if (window.pageYOffset + (window.innerHeight / 1.5) >= contactHeader.getBoundingClientRect().top + window.pageYOffset) {
		line.classList.add('draw-out');
	}
	else {
		line.classList.remove('draw-out');
	}
}