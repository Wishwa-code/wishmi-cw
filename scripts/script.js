document.addEventListener('DOMContentLoaded', function() {
	console.log('js file connected');

	document.querySelectorAll(".cart_open_button").forEach(button => {
		button.addEventListener("click", openComponent);
	  });

	// Create a new div element
	// const helloWorldDiv = document.createElement('div');
	// helloWorldDiv.textContent = 'Hello World';
	// helloWorldDiv.style.textAlign = 'center'; // Optional: Center the text

	// // Insert the new div at the top of the body
	// document.body.insertBefore(helloWorldDiv, document.body.firstChild);

	//! below code works as the slide
	const slideshow = document.querySelector('.slideshow');
	const totalSlides = document.querySelectorAll('.slideshow img').length;
	let index = 0;

	function slideNext() {
		index++;
		if (index >= totalSlides) {
		index = 0; // Loop back to first slide
		}
		slideshow.style.transform = `translateX(-${index * 100}vw)`;
	}

	setInterval(slideNext, 5000);

	//! this is code for scroll compoennet

	window.addEventListener('scroll', function () {
		const popup = document.getElementById('collections-popup');
		const collectionSection = document.querySelector('.collections');
		const rect = collectionSection.getBoundingClientRect();
		const windowHeight = window.innerHeight || document.documentElement.clientHeight;

		let currentVisibleSectionId = null;
		let sectionInView = false;

		// Check if any part of the collections section is in view
		if (rect.top < windowHeight && rect.bottom > 0) {
		popup.classList.add('show');
		} else {
		popup.classList.remove('show');
		}

		const productSections = document.querySelectorAll('.product-list-container > div');

		productSections.forEach((section) => {
		  const sectionRect = section.getBoundingClientRect();
	  
		  // Check if the section is in the viewport
		  if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
			console.log(`Scrolled to section: ${section.id}`);
			currentVisibleSectionId = section.id;
			sectionInView = true;
			// Call loadProductsFromXML with the section name (id)
			loadProductsFromXML(section.id);
		  }
		});

		if (sectionInView && currentVisibleSectionId) {
			popup.textContent = currentVisibleSectionId
				.replace(/_/g, ' ')
				.replace(/\b\w/g, (c) => c.toUpperCase());
			popup.classList.add('show');
		} else {
			currentVisibleSectionId = null;
			popup.classList.remove('show');
		}
		
	});
});
