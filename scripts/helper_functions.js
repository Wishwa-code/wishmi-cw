function loadProductsFromXML(filename) {
  const section = document.getElementById(filename);  // Get the section by filename/id
  if (!section) return;  // Exit if section doesn't exist

  fetch(`../data/${filename}.xml`)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "text/xml");
      const products = xmlDoc.getElementsByTagName("product");

      console.log(products);

      // Clear existing content in the section (optional)
      section.innerHTML = '';  // Clear any existing products if needed

      const titleDiv = document.createElement('div');
      titleDiv.id = `collections-title-${filename}`;
      titleDiv.className = 'collections-title-inside';

      const titleText = document.createElement('p');
      titleText.textContent = filename;

      titleDiv.appendChild(titleText);
      section.appendChild(titleDiv);

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

        const productDetailsrightSideDiv = document.createElement('div');
        productDetailsrightSideDiv.className = 'product_details_right_side';

        const productDetailsleftSideDiv = document.createElement('div');
        productDetailsleftSideDiv.className = 'product_details_left_side';

        const productName = document.createElement('p');
        productName.className = 'product_name';
        productName.textContent = name;

        const productPrice = document.createElement('p');
        productPrice.className = 'product_price';
        productPrice.textContent = price;

        const addToCartButton = document.createElement('button');
        addToCartButton.className = 'add_to_cart_button';

        const addToCartImg = document.createElement('img');
        addToCartImg.src = '../assets/add_shopping_cart.svg';
        addToCartImg.id = 'add_to_cart';
        addToCartImg.alt = 'Add to Cart';
        addToCartButton.appendChild(addToCartImg);

        addToCartButton.addEventListener('click', () => {
          updateNumber(productIdElement.textContent,nameElement.textContent);
        });
        

        productDetailsleftSideDiv.appendChild(productName);
        productDetailsleftSideDiv.appendChild(productPrice);
        productDetailsrightSideDiv.appendChild(addToCartButton);

        productDetailsDiv.appendChild(productDetailsleftSideDiv);
        productDetailsDiv.appendChild(productDetailsrightSideDiv);

        itemDiv.appendChild(itemImgDiv);
        itemDiv.appendChild(productDetailsDiv);

        // Append the product item to the current section (filename)
        section.appendChild(itemDiv);
      });
    })
    .catch(error => console.error('Error loading XML:', error));


}


async function fetchXMLFilenames() {
  // Return the actual paths to your XML product files
  return [
    'data/beyond_basics.xml',
    'chick_office_cut.xml'
    //names of xml file names need do be added to updated the page with relevant data
  ];
}


function findProductsByIDs(ids) {
  const found_products = [];

  return fetchXMLFilenames().then(xmlFiles => {
    const fetches = xmlFiles.map(filename =>
      fetch(`../${filename}`)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data, "text/xml");
          const products = xmlDoc.getElementsByTagName("product");

          Array.from(products).forEach(product => {
            const productId = product.getElementsByTagName("product_id")[0]?.textContent;
            if (!productId || !ids.includes(productId)) return;

            const name = product.getElementsByTagName("name")[0]?.textContent || "Unknown Name";
            const price = product.getElementsByTagName("price")[0]?.textContent || "0";
            const image1 = product.getElementsByTagName("image1")[0]?.textContent || "default_image.jpg";

            found_products.push({
              id: productId,
              name,
              price,
              image: image1
            });
          });
        })
        .catch(err => {
          console.error(`Error loading or parsing ${filename}:`, err);
        })
    );

    return Promise.all(fetches).then(() => found_products);
  });
}

  function readJSONFromLocalStorage() {
    const json = localStorage.getItem('cart');
    if (!json) {
      return [];
    }
  
    try {
      return JSON.parse(json);
    } catch (e) {
      console.error('Error parsing JSON:', e);
      return [];
    }
  }
  
  // Function to write an array of numbers to localStorage as JSON
  function writeJSONToLocalStorage(numbers) {
    const jsonContent = JSON.stringify(numbers, null, 2);
    localStorage.setItem('cart', jsonContent);
  }
  
  function showToast(message) {
    // Create a div element for the toast
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
  
    // Append the toast to the body
    document.body.appendChild(toast);
  
    // Set timeout to remove the toast after 3 seconds
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
  
  // Function to add or remove a number from the JSON stored in localStorage
  function updateNumber(number,text) {
    let numbers = readJSONFromLocalStorage();
  
    if (numbers.includes(number)) {
      numbers = numbers.filter(num => num !== number);
      showToast(`Removed ${text} from cart`);
      console.log('added');
    } else {
      numbers.push(number);
      console.log('removed');
      showToast(`Added ${text} to cart`);
    }
  
    writeJSONToLocalStorage(numbers);
    openComponent();
  }
  

  
async function openComponent() {
  console.log("Loading cart items...");

  const idsToFind = readJSONFromLocalStorage();
  console.log('id s to find ', idsToFind)
  const products = await findProductsByIDs(idsToFind);
  console.log(products);

  const cartTable = document.querySelector("#cart");

console.log(cartTable)
if (!cartTable) {
  console.error("Cart table not found");
  return;
  }
  // Remove existing rows (but keep the header row)
  const existingRows = cartTable.querySelectorAll("tr");
  existingRows.forEach((row, index) => {
    if (index !== 0) row.remove();
  });

  let subtotal = 0;

  // Add each product as a row
  products.forEach(product => {
    const { id, name, image,price } = product;
    quantity = 1;
    let pricenum = price.replace(/Lkr\.\s*/i, "");
    let priceNumber = parseInt( pricenum, 10);
    const total = priceNumber * quantity;
    subtotal += total;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${image}" alt="${name}" title="${name}"></td>
      <td><p>Lkr. ${priceNumber}</p></td>
      <td><p>${quantity}</p></td>
      <td><p>Lkr. ${total}</p></td>
  <td>
    <button class="add_to_cart_button">
    <img src="../assets/add_shopping_cart.svg" id="add_to_cart" alt="Add to Cart">
    </button>
  </td>
  
    `;
    console.log(row);

  const addToCartButton = row.querySelector('.add_to_cart_button');
  addToCartButton.addEventListener('click', () => {
  updateNumber(id, name);
  });

    cartTable.appendChild(row);
  });

  // Update the summary
  const summaryTable = document.querySelector("#summary");
  const shippingFee = 350;
  const grandTotal = subtotal + shippingFee;

  summaryTable.innerHTML = `
    <tr><th colspan="2">Order Summary</th></tr>
    <tr><td>Subtotal</td><td>Lkr. ${subtotal}</td></tr>
    <tr><td>Shipping Fee</td><td>Lkr. ${shippingFee}</td></tr>
    <tr><td>Total</td><td>Lkr. ${grandTotal}</td></tr>
    <tr>
      <td colspan="2">
        <a href="checkoutForm.html"><button id="checkout_button" type="submit">Checkout</button></a>
      </td>
    </tr>
  `;

  console.log("Cart updated successfully.");
}