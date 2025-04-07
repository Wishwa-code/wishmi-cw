document.addEventListener('DOMContentLoaded', function() {
	console.log('checkout js file connected');

		const form = document.querySelector(".checkout_form form");
		form.addEventListener("submit", function (event) {
		  event.preventDefault();
	  
		  let error = [];
	  
		  const name = document.getElementById("name").value.trim();
		  const address = document.getElementById("address").value.trim();
		  const tel = document.getElementById("tel").value.trim();
		  const email = document.getElementById("email").value.trim();
		  const shipping_method = document.querySelector(
			"input[name='shipping_method']:checked"
		  );
		  const terms_container = document.getElementById("terms").checked;
		  const cardType = document.getElementById("cardType").value;
		  const expDate = document.getElementById("expDate").value.trim();
		  const cvv = document.getElementById("cvv").value.trim();
		  const cardName = document.getElementById("cardName").value.trim();
	  
		  // Javascript Input Validation
		  if (name === "") error.push("Name is Required.");
		  if (address === "") error.push("Address is Required.");
		  if (email === "") error.push("Email is Required.");
		  if (!shipping_method)
			error.push("Please Select a Shipping Method to Continue.");
		  if (!terms_container)
			error.push("Please Agree with Terms and Continue to continue.");
		  if (cardType === "") error.push("Card Type is Required.");
		  if (expDate === "") error.push("Expiration Date is Required.");
		  if (cardName === "") error.push("Card Holder's Name is Required.");
	  
		  if (tel === "") {
			error.push("Phone Number is Required.");
		  } else if (!/^\d{10}$/.test(tel)) {
			error.push("Invalid Phone Number. Phone Number must be 10 digits.");
		  }
	  
		  if (cvv === "") {
			error.push("CVV Number is Required.");
		  } else if (!/^\d{3,4}$/.test(cvv)) {
			error.push("Invalid CVV Number. CVV Number must be 3 or 4 digits.");
		  }
	  
		  if (email !== "") {
			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailPattern.test(email)) {
			  error.push("Invalid Email Address.");
			}
		  }
	  
		  if (expDate !== "") {
			const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
			if (!expDatePattern.test(expDate)) {
			  error.push("Invalid Expiration Date. Use MM/YY format.");
			}
		  }
	  
		  if (error.length > 0) {
			alert("ERROR:" + error.join("\n"));
		  } else {
			alert("Order Placed Successfully. Thank You.");
		  }
		});

});
