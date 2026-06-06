const list = document.querySelector("ul")
const butt
let myLi = ''

menuOptions.forEach((product) => {
 myLi += `
     <li>
         <img src=${product.src}>
         <p>${product.name}</p>
         <p class="price"> R$ ${product.price}</p>
     </li>
  `
  
})
list.innerHTML = myLi
console.log(myLi)
function Showscreen(product) {
  
}
list.addEventListener(Showscreen)




    
    
   

