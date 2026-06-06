const list = document.querySelector("ul")
const buttonshowall = document.querySelector("#botao1")
const buttonmap = document.querySelector("#botao2")
const reducebutton = document.querySelector("#botao3")

function Showscreen(arrayProduct) {
  let myLi = ''
  arrayProduct.forEach((product) => {
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
  const newprices = menuOptions.map( (product)=> ({
    ...product,
    price:product.price * 0.9
  }
))


 Showscreen(newprices)
}

function reducfunc() {
  const reduce = menuOptions.reduce((acc,curr)=> acc + curr.price),
}


buttonshowall.addEventListener("click", ()=> Showscreen (menuOptions))
buttonmap.addEventListener("click", mapitens)
reducebutton.addEventListener("click",reducfunc)








