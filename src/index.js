import entries from './entries';

const titleCard = document.getElementById('title-card');
const introCard = document.getElementById('intro-card');
const startButton = document.getElementById('start-button');
const desktopRestart = document.getElementById('desktop-restart-button');
const mobileRestart = document.getElementById('mobile-restart-button');
const entrySlideTray = document.getElementById('entry-slidetray');
const dateSlideTray = document.getElementById('date-slidetray');
const dateWindowWrapper = document.getElementById('date-window-wrapper');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const mobileTimelineTrigger = document.getElementById('mobile-timeline-trigger');



entrySlideTray.innerHTML = entries.map((entry,index) => 
	`<div class="entry-slide" data-index="${index}">
        <div class="slide-image">
            <img src="img/${entry.image}">
        </div>
        <div class="entry-date">
            <h1>${entry.date}</h1>
        </div>     
        <div class="entry-text">
            <h3 class="entry-headline">${entry.title}</h3>
            <p>${entry.content}</p>
            <figcaption>Credit: ${entry.credit}</figcaption>
        </div>         
    </div>`
).join('');

dateSlideTray.innerHTML = entries.map(entry =>
	`<div class="date-wrapper">
        <h5 class="date">${entry.date}</h5>
    </div>`
).join('');



const entrySlides = [].slice.call(document.querySelectorAll('.entry-slide'));
const entryText = [].slice.call(document.querySelectorAll('.entry-text'));
const dateArray = [].slice.call(document.querySelectorAll('.date-wrapper'));
const date = document.querySelectorAll('.date');

let slideIndex = 0;
let windowWidth = window.innerWidth;


entrySlideTray.style.height = entries.length * 100 + '%';
entrySlides[slideIndex].classList.add('active-slide');
dateSlideTray.style.height = entries.length * 20 + '%';
dateSlideTray.style.top = dateSlideTray.firstElementChild.offsetHeight + 'px';
dateSlideTray.firstElementChild.children[0].classList.add('active-date');


function stageApp() {
	if (window.innerWidth < 769) {
		setMobile();
	} else if (window.innerWidth > 769) {
		setDesktop();
	}
}

stageApp();

// *****  DEBOUNCE FUNCTION as taken from Underscore.js  *****
// Delays the resize function from firing until after resize event has occurred

function debounce(func, wait, immediate) {
	let timeout;
	return function() {
		const context = this, args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const myResizeFn = debounce(function() {
	if (window.innerWidth < 769) {
		let setMobileSlide = document.querySelector('.active-slide');
		TweenMax.to(window, 1, {scrollTo:{y:setMobileSlide.offsetTop, autoKill:false}, ease:Expo.easeOut});
		entryText.forEach(entry => entry.style.marginTop = window.innerHeight - (entry.children[0].offsetTop + entry.children[0].offsetHeight) + 'px');
		entrySlides.forEach(slide => slide.style.marginBottom = slide.lastElementChild.children[0].offsetHeight + 'px');
		
		handleMobileScroll();

		for (let i = 0; i < date.length; i++) {
			date[i].addEventListener('click', mobileDateClick);
		}

		mobileRestart.addEventListener('click', handleMobileRestart);

	} else if (window.innerWidth > 769) {
		let setDesktopSlide = document.querySelector('.active-slide');
		TweenMax.to(window, 1, {scrollTo:{y:setDesktopSlide.offsetTop}, ease:Expo.easeOut});
		entryText.forEach(entry => entry.style.marginTop = '175px');

		handleScroll();
		
		for (let i = 0; i < date.length; i++) {
			date[i].addEventListener('click', dateClick);
		}

		window.addEventListener('keydown', function(e) {
			if (e.keyCode == 39 || e.keyCode == 40) {
				nextSlide();
			}
			if (e.keyCode == 37 || e.keyCode == 38) {
				previousSlide();
			}
		});

		desktopRestart.addEventListener('click', handleDesktopRestart);
	}
}, 250);


window.addEventListener('resize', function() {
	if (window.innerWidth > windowWidth + 150 || window.innerWidth < windowWidth - 150) {
		myResizeFn();
	}
});

// *****  DEBOUNCE FUNCTION end  *****


function firstSlide() {
	function removeTitle() {
		titleCard.style.display = 'none';
	}
	titleCard.style.opacity = '0';
	setTimeout(removeTitle, 1000);
}

setTimeout(firstSlide, 5000);

startButton.addEventListener('click', function(e) {
	e.preventDefault();
	introCard.classList.add('actify');
});


// ********** MOBILE FUNCTIONALITY **********

function setMobile() {
	entryText.forEach(entry => entry.style.marginTop = window.innerHeight - (entry.children[0].offsetTop + entry.children[0].offsetHeight) + 'px');
	entrySlides.forEach(slide => slide.style.marginBottom = slide.lastElementChild.children[0].offsetHeight + 'px');
	window.addEventListener('scroll', handleMobileScroll);
         
	for (let i = 0; i < date.length; i++) {
		date[i].addEventListener('click', mobileDateClick);
	}

	mobileRestart.addEventListener('click', handleMobileRestart);
}


// ********** DESKTOP FUNCTIONALITY **********

function setDesktop() {
	entryText.forEach(entry => entry.style.marginTop = '175px');
	window.addEventListener('scroll', handleScroll);
	
	for (let i = 0; i < date.length; i++) {
		date[i].addEventListener('click', dateClick);
	}

	desktopRestart.addEventListener('click', handleDesktopRestart);
}


// ********** ALL FUNCTIONS - MOBILE & DESKTOP **********

mobileTimelineTrigger.addEventListener('click', handleTrigger);

window.addEventListener('keydown', function(e) {
	if (e.keyCode == 39 || e.keyCode == 40) {
		nextSlide();
	}
	if (e.keyCode == 37 || e.keyCode == 38) {
		previousSlide();
	}
});

next.addEventListener('click', nextSlide);
previous.addEventListener('click', previousSlide);

function handleScroll() {
	let distanceScrolled = window.pageYOffset;
	let activeSlide = document.querySelector('.active-slide');
	let activeDate = document.querySelector('.active-date');

	if (slideIndex < entrySlides.length - 1 && distanceScrolled > activeSlide.nextElementSibling.offsetTop - (window.innerHeight - window.innerHeight/2)) {
		slideIndex = activeSlide.nextElementSibling.dataset.index;
		activeSlide.classList.remove('active-slide');
		entrySlides[slideIndex].classList.add('active-slide');
		dateSlideTray.style.top = -(dateSlideTray.children[slideIndex].offsetTop - dateSlideTray.children[slideIndex].offsetHeight) + 'px';
		activeDate.classList.remove('active-date');
		dateSlideTray.children[slideIndex].firstElementChild.classList.add('active-date');
	}

	if (slideIndex > 0 && distanceScrolled < activeSlide.offsetTop - (window.innerHeight - window.innerHeight/2)) {
		slideIndex = activeSlide.previousElementSibling.dataset.index;
		activeSlide.classList.remove('active-slide');
		entrySlides[slideIndex].classList.add('active-slide');
		dateSlideTray.style.top = -(dateSlideTray.children[slideIndex].offsetTop - dateSlideTray.children[slideIndex].offsetHeight) + 'px';
		activeDate.classList.remove('active-date');
		dateSlideTray.children[slideIndex].firstElementChild.classList.add('active-date');
	}
}

function handleMobileScroll() {
	let distanceScrolled = window.pageYOffset;
	let activeSlide = document.querySelector('.active-slide');
	let activeDate = document.querySelector('.active-date');

	if (slideIndex < entrySlides.length - 1 && distanceScrolled > activeSlide.nextElementSibling.offsetTop) {
		slideIndex = activeSlide.nextElementSibling.dataset.index;
		activeSlide.classList.remove('active-slide');
		entrySlides[slideIndex].classList.add('active-slide');
		dateSlideTray.style.top = -(dateSlideTray.children[slideIndex].offsetTop - dateSlideTray.children[slideIndex].offsetHeight) + 'px';
		activeDate.classList.remove('active-date');
		dateSlideTray.children[slideIndex].firstElementChild.classList.add('active-date');
	}

	if (slideIndex > 0 && distanceScrolled < activeSlide.offsetTop) {
		slideIndex = activeSlide.previousElementSibling.dataset.index;
		activeSlide.classList.remove('active-slide');
		entrySlides[slideIndex].classList.add('active-slide');
		dateSlideTray.style.top = -(dateSlideTray.children[slideIndex].offsetTop - dateSlideTray.children[slideIndex].offsetHeight) + 'px';
		activeDate.classList.remove('active-date');
		dateSlideTray.children[slideIndex].firstElementChild.classList.add('active-date');
	}
}

function handleTrigger(e) {
	e.preventDefault();
	dateWindowWrapper.classList.toggle('open-window');
}

function nextSlide() {
	let nextIndex = slideIndex;
	if (nextIndex < entrySlides.length - 1) {
		nextIndex++;
		TweenMax.to(window, 2.5, {scrollTo:{y:entrySlides[nextIndex].offsetTop, autoKill:false}, ease:Expo.easeOut});
	}
}

function previousSlide() {
	let previousIndex = slideIndex;
	if (previousIndex > 0) {
		previousIndex--;
		TweenMax.to(window, 2.5, {scrollTo:{y:entrySlides[previousIndex].offsetTop, autoKill:false}, ease:Expo.easeOut});
	}
}

function dateClick() {
	let deskDateIndex = dateArray.indexOf(this.parentElement);
	TweenMax.to(window, 2.5, {scrollTo:{y:entrySlides[deskDateIndex].offsetTop}, ease:Expo.easeOut});
}

function mobileDateClick() {
	let mobileDateIndex = dateArray.indexOf(this.parentElement);
	TweenMax.to(window, 4, {scrollTo:{y:entrySlides[mobileDateIndex].offsetTop + 12, autoKill:false}, ease:Expo.easeOut});
	function closeWindow() {
		dateWindowWrapper.classList.remove('open-window');
	}
	setTimeout(closeWindow, 500);
}

function handleDesktopRestart(e) {
	e.preventDefault();
	function closeWindow() {
		introCard.classList.remove('actify');
	}
	TweenMax.to(window, 4, {scrollTo:{y:0}, ease:Expo.easeOut});
	setTimeout(closeWindow, 2000);
}

function handleMobileRestart(e) {
	e.preventDefault();
	function closeWindow() {
		dateWindowWrapper.classList.remove('open-window');
		introCard.classList.remove('actify');
	}
	console.log('fired');
	TweenMax.to(window, 4, {scrollTo:{y:0, autoKill:false}, ease:Expo.easeOut});
	setTimeout(closeWindow, 2000);
}

