const list = document.querySelector("ul")
const buttonshowall = document.querySelector("#botao1")
const buttonmap = document.querySelector("#botao2")

function Showscreen() {
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
}
function mapitens() {
  let = myLi
  const newprices = menuOptions.map( (product)=> ({
    ...product,
    price:product.price * 0.9
  }
))


 newprices.forEach((product) => {
    myLi += `
     <li>
         <img src=${product.src}>
         <p>${product.name}</p>
         <p class="price"> R$ ${product.price}</p>
     </li>
  `

  })
  list.innerHTML = myLi
}


buttonshowall.addEventListener("click", Showscreen)
buttonmap.addEventListener("click", mapitens)








