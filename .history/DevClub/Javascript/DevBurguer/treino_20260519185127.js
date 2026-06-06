const list = document.querySelector("ul")
const buttonshowall = document.querySelector("#botao1")
const buttonmap = document.querySelector("#botao2")
const reducebutton = document.querySelector"

function Showscreen(arrayProduct) {
    let myLi = " "
    arrayProduct.array.forEach((product) => {
        myLi += `
        <li>

           <img src=${product.src}
           <p>${product.name}</p>
           <p class="price">${product.price}</p>

        </li>
          
        `
    })
    list.innerHTML = myLi
}

function mapitens() {
    let = myLi = " "
    const newprices = menuOptions.map((product)=> ({
        ...product,
        price:product.price * 0.9
    }))
}

buttonshowall.addEventListener("click", ()=> Showscreen(menuOptions) )
buttonmap.addEventListener("click", mapitens)