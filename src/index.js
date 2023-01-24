// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value

let subtotal = product.querySelector(".subtotal span")

subtotal.innerText = price * quantity
}                        

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test
let productsVarios = document.getElementsByClassName("product")
  // ITERATION 2
  //... your code goes here
  let finalPrice = 100;
for (let i=0; i < productsVarios.length; i++){

  product1 = productsVarios[i]

updateSubtotal(product1)

}
  // ITERATION 3
  //... your code goes here
       
  
   document.querySelector('#total-value span').innerText = Number(finalPrice)
  
   
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
