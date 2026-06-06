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
function name(params) {
  
}


botao1.addEventListener("click", Showscreen)
botao2.addEventListener("click", mapitens)








