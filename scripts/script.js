document.addEventListener('DOMContentLoaded', function() {
	console.log('js file connected');

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
	  
			// Call loadProductsFromXML with the section name (id)
			loadProductsFromXML(section.id);
		  }
		});
		
	});





	function loadProductsFromXML(filename) {
		const section = document.getElementById(filename);  // Get the section by filename/id
		if (!section) return;  // Exit if section doesn't exist
	  
		fetch(`../xml/${filename}.xml`)
		  .then(response => response.text())
		  .then(data => {
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(data, "text/xml");
			const products = xmlDoc.getElementsByTagName("product");
	  
			console.log(products);
	  
			// Clear existing content in the section (optional)
			section.innerHTML = '';  // Clear any existing products if needed
	  
			// Iterate over each product and create HTML elements
			Array.from(products).forEach(product => {
			  const productIdElement = product.getElementsByTagName("product_id")[0];
			  const nameElement = product.getElementsByTagName("name")[0];
			  const priceElement = product.getElementsByTagName("price")[0];
			  const image1Element = product.getElementsByTagName("image1")[0];
			  const image2Element = product.getElementsByTagName("image2")[0];
	  
			  const productId = productIdElement ? productIdElement.textContent : 'Unknown ID';
			  const name = nameElement ? nameElement.textContent : 'Unknown Name';
			  const price = priceElement ? priceElement.textContent : 'Unknown Price';
			  const image1 = image1Element ? image1Element.textContent : 'default_image1.jpg';
			  const image2 = image2Element ? image2Element.textContent : 'default_image2.jpg';
	  
			  // Create product item HTML
			  const itemDiv = document.createElement('div');
			  itemDiv.className = 'item';
	  
			  const itemImgDiv = document.createElement('div');
			  itemImgDiv.className = 'item_img';
			  itemImgDiv.setAttribute('onclick', `loadProductDetailsPage('${productId}')`);
	  
			  const frontImg = document.createElement('img');
			  frontImg.className = 'front_img';
			  frontImg.src = image1;
			  frontImg.alt = 'Item';
	  
			  const backImg = document.createElement('img');
			  backImg.className = 'back_img';
			  backImg.src = image2;
			  backImg.alt = 'Item';
	  
			  itemImgDiv.appendChild(frontImg);
			  itemImgDiv.appendChild(backImg);
	  
			  const productDetailsDiv = document.createElement('div');
			  productDetailsDiv.className = 'product_details';
	  
			  const productName = document.createElement('p');
			  productName.className = 'product_name';
			  productName.textContent = name;
	  
			  const productPrice = document.createElement('p');
			  productPrice.className = 'product_price';
			  productPrice.textContent = price;
	  
			  const addToCartImg = document.createElement('img');
			  addToCartImg.src = '../assets/add_shopping_cart.svg';
			  addToCartImg.id = 'add_to_cart';
			  addToCartImg.alt = 'Add to Cart';
	  
			  productDetailsDiv.appendChild(productName);
			  productDetailsDiv.appendChild(productPrice);
			  productDetailsDiv.appendChild(addToCartImg);
	  
			  itemDiv.appendChild(itemImgDiv);
			  itemDiv.appendChild(productDetailsDiv);
	  
			  // Append the product item to the current section (filename)
			  section.appendChild(itemDiv);
			});
		  })
		  .catch(error => console.error('Error loading XML:', error));
	  }
	// loadProductsFromXML();
});
