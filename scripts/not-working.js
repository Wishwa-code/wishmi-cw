<script>
				function redirectToProductDetailsPage(productId) {
					// Store the selected product ID in localStorage
					localStorage.setItem('selectedProduct', productId);
					
					// Redirect to the product page
					window.location.href = 'product_page.html';
				}
			
				// Function to handle add to cart clicks
				function setupAddToCartHandlers() {
					document.querySelectorAll('#add_to_cart').forEach(button => {
						button.addEventListener('click', function(event) {
							event.stopPropagation(); // Prevent triggering the product click
							const productItem = this.closest('.item');
							const productId = getProductIdFromItem(productItem);
							addToCart(productId);
						});
					});
				}
			
				// Helper function to get product ID from an item
				function getProductIdFromItem(item) {
					// Extract the ID from the onclick attribute of the item_img div
					const itemImg = item.querySelector('.item_img');
					if (itemImg && itemImg.getAttribute('onclick')) {
						const onclickContent = itemImg.getAttribute('onclick');
						const match = onclickContent.match(/redirectToProductDetailsPage\('(\d+)'\)/);
						if (match && match[1]) {
							return match[1];
						}
					}
					return null;
				}
			
				// Function to add product to cart
				function addToCart(productId) {
					if (!productId) {
						console.error('No product ID found');
						return;
					}
					
					// Here you would implement your cart logic
					console.log(`Adding product ${productId} to cart`);
					
					// You might want to store cart items in localStorage
					let cart = JSON.parse(localStorage.getItem('cart')) || [];
					
					// Check if product already exists in cart
					if (!cart.includes(productId)) {
						cart.push(productId);
						localStorage.setItem('cart', JSON.stringify(cart));
						
						// Optional: Show a confirmation message
						alert('Product added to cart!');
					} else {
						alert('This product is already in your cart!');
					}
				}
			
				// Initialize everything when DOM is loaded
				document.addEventListener('DOMContentLoaded', function() {
					setupAddToCartHandlers();
					
					// You can add other initialization code here
					// For example, search functionality or other event listeners
				});
			
				// Search functionality (if you want to implement it)
				function setupSearch() {
					const searchIcon = document.querySelector('.search_icon');
					const searchBar = document.querySelector('.search_bar');
			
					if (searchIcon && searchBar) {
						searchIcon.addEventListener('mouseenter', () => {
							searchBar.style.opacity = '1';
							searchBar.style.transform = 'scaleX(1)';
						});
			
						searchIcon.addEventListener('mouseleave', () => {
							setTimeout(() => {
								searchBar.style.opacity = '0';
								searchBar.style.transform = 'scaleX(0)';
							}, 500);
						});
			
						searchBar.addEventListener('mouseenter', () => {
							searchBar.style.opacity = '1';
							searchBar.style.transform = 'scaleX(1)';
						});
			
						searchBar.addEventListener('mouseleave', () => {
							searchBar.style.opacity = '0';
							searchBar.style.transform = 'scaleX(0)';
						});
					}
				}	
			</script>