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
  
          const addToCartImg = document.createElement('img');
          addToCartImg.src = '../assets/add_shopping_cart.svg';
          addToCartImg.id = 'add_to_cart';
          addToCartImg.alt = 'Add to Cart';
  
          productDetailsleftSideDiv.appendChild(productName);
          productDetailsleftSideDiv.appendChild(productPrice);
          productDetailsrightSideDiv.appendChild(addToCartImg);

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