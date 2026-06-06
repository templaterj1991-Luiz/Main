const list = document.querySelector("ul")
const buttonshowall = document.querySelector("#botao1")
const buttonmap = document.querySelector("#botao2")
const reducebutton = document.querySelector("#botao3")
const filtervegan = document.querySelector("#botao4")

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
  
  const reduce = menuOptions.reduce((acc,curr)=> acc + curr.price*0.9,0)
  

 list.innerHTML =  
  
  `
     <li>
         
         <p>O preço total é R$${reduce}</p>
     </li>
  `

}

function filtrovegano() {
  const filter = menuOptions.filter(vegani => {
  })

 Showscreen(filter)
}



buttonshowall.addEventListener("click", ()=> Showscreen (menuOptions))
buttonmap.addEventListener("click", mapitens)
reducebutton.addEventListener("click",reducfunc)
filtervegan.addEventListener("click",filtrovegano)







