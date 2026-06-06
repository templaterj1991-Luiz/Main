const list = document.querySelector("ul")
const buttonshowall = document.querySelector("#botao1")
const buttonmap = doc

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
botao1.addEventListener("click", Showscreen)








