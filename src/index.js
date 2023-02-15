// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  let priceValue = price.innerHTML; 
  let quantityValue = product.querySelector('.quantity input').value;
  let subtotalValue = priceValue * quantityValue;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalValue;
  return subtotalValue;

}


function calculateAll() {
  
  let products = document.getElementsByClassName('product');
  
  for (let product of products) {
     updateSubtotal(product);
  }
  

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
