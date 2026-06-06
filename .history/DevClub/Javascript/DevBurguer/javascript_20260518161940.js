const list = document.querySelector("ul")
let myLi = ''

menuOptions.forEach(product => {
  `<li>
  <img src=${product.src}>
  <p>${product.name}</p>
  <p class="price"> R$ ${product.price}</p>
  </li>
  `
  console.log(myLi) 
});







    
    
   

