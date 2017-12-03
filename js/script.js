window.onload = function() {
	/*VARIABLES*/
	var sidebar = document.getElementsByClassName('sidebar')[0];
	var sidebarLinks = sidebar.children;
	var introLink = document.getElementsByClassName('intro-link')[0];
	var introLine = document.getElementsByClassName('line')[0];

	/*TOP OF SECTIONS TO SLIDE SIDEBAR AND SHOW ACTIVE TAB*/
	var portfolioTop = document.getElementById('portfolio').getBoundingClientRect().top + window.pageYOffset;
	var aboutTop = document.getElementById('about').getBoundingClientRect().top + window.pageYOffset;
	var skillsTop = document.getElementById('skills').getBoundingClientRect().top + window.pageYOffset;
	var contactTop = document.getElementById('contact').getBoundingClientRect().top + window.pageYOffset;
	
	/*DISPLAY SIDEBAR IF TOP OF WINDOW IS PAST TOP OF PORTFOLIO DIV*/
	if (window.pageYOffset >= portfolioTop) {
		sidebar.classList.add('sidebar-active');
	} else {
		sidebar.classList.remove('sidebar-active');
	}

	activeTabs();

	/*EXTENDS LINE ON LOAD AND WHEN HOVERING OVER LINK IN THE INTRO*/
	introLink.addEventListener('mouseover', function() {
		introLine.classList.add('extend');
	});
	introLink.addEventListener('mouseout', function() {
		introLine.classList.remove('extend');
	});

	/*** EVENT HANDLING ***/

	window.onscroll = function() {

		/*DISPLAY SIDEBAR WHEN TOP OF WINDOW SCROLLS PAST TOP OF PORTFOLIO DIV*/
		if (window.pageYOffset >= portfolioTop) {
			sidebar.classList.add('sidebar-active');
		} else {
			sidebar.classList.remove('sidebar-active');
		}

		activeTabs();
	}

	
	/***EXTERNAL FUNCTIONS ***/

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
}