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
  } else {
    numbers.push(number);
    showToast(`Added ${text} to cart`);
  }

  writeJSONToLocalStorage(numbers);
}



function openComponent() {
  console.log("cart open called");
  const idsToFind = readJSONFromLocalStorage();
  findProductsByIDs(idsToFind);
  // Create the component
  const component = document.createElement("div");
  component.style.position = "absolute";
  component.style.width = "34vw";
  component.style.height = "100vh";
  component.style.top = "0";
  component.style.right = "0";
  component.style.backgroundColor = "white";
  component.style.zIndex = "1000";
  component.id = "customComponent";

  // Append the component to the body
  document.body.appendChild(component);
  
  // Debug log to confirm the component is added
  console.log("Component added to DOM");

  function handleClickOutside(event) {
    if (!component.contains(event.target)) {
      document.body.removeChild(component);
      document.removeEventListener("click", handleClickOutside);
      console.log("Component removed");
    }
  }

  // Add event listener to close the component when clicked outside after a brief delay to avoid registerring the click to open the cart
  setTimeout(() => {
    document.addEventListener("click", handleClickOutside);
  }, 0);
}




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
    // Fetch the directory listing of the data folder
    const response = await fetch('../data/');
    const text = await response.text();
    
    // Parse the text to extract XML filenames
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const links = Array.from(doc.querySelectorAll('a'));
    
    return links
      .map(link => link.getAttribute('href'))
      .filter(href => href.endsWith('.xml'));
  }
  
  function findProductsByIDs(ids) {
    fetchXMLFilenames().then(xmlFiles => {
      xmlFiles.forEach(filename => {
        fetch(`../${filename}`)
          .then(response => response.text())
          .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const products = xmlDoc.getElementsByTagName("product");
  
            Array.from(products).forEach(product => {
              const productIdElement = product.getElementsByTagName("product_id")[0];
              const productId = productIdElement ? productIdElement.textContent : null;
  
              if (productId && ids.includes(productId)) {
                console.log('found :', productId)
                const nameElement = product.getElementsByTagName("name")[0];
                const priceElement = product.getElementsByTagName("price")[0];
                const image1Element = product.getElementsByTagName("image1")[0];
                const image2Element = product.getElementsByTagName("image2")[0];
  
                const name = nameElement ? nameElement.textContent : 'Unknown Name';
                const price = priceElement ? priceElement.textContent : 'Unknown Price';
                const image1 = image1Element ? image1Element.textContent : 'default_image1.jpg';
                const image2 = image2Element ? image2Element.textContent : 'default_image2.jpg';
  
                // Create product item HTML
                const itemDiv = document.createElement('div');
                itemDiv.className = 'cart_item';
  
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
                  updateNumber(productIdElement.textContent, nameElement.textContent);
                });
  
                productDetailsleftSideDiv.appendChild(productName);
                productDetailsleftSideDiv.appendChild(productPrice);
                productDetailsrightSideDiv.appendChild(addToCartButton);
  
                productDetailsDiv.appendChild(productDetailsleftSideDiv);
                productDetailsDiv.appendChild(productDetailsrightSideDiv);
  
                itemDiv.appendChild(itemImgDiv);
                itemDiv.appendChild(productDetailsDiv);
  
                // Ensure the section exists before appending
                const section = document.getElementById('customComponent');
                if (section) {
                  section.appendChild(itemDiv);
                } else {
                  console.error('Section with ID "filtered-products-section" not found.');
                }
              }
            });
          })
          .catch(error => console.error('Error loading XML:', error));
      });
    }).catch(error => console.error('Error fetching XML filenames:', error));
  }
  
  // Example usage:
