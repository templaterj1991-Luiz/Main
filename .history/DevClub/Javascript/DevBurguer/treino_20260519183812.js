const list = document.querySelector("ul")
const buttonshowall = document.querySelector("#botao1")
const buttonmap = document.querySelector("#botao2")

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
    const newprices = menuOptions.map()
}

buttonshowall.addEventListener("click", ()=> Showscreen(menuOptions) )
buttonmap.addEventListener("click", )