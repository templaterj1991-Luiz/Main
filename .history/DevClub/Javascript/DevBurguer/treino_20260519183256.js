const list = document.querySelector("ul")
const buttonshowall = document.querySelector("#botao1")

function Showscreen(arrayProduct) {
    let myLi = " "
    arrayProduct.array.forEach((product) => {
        myLi += `
        <li>

        <img src=${product.src}
        <p>${product.name}</p>
        
        
        
        
        
        
        
        </li>
        
        
        `
    });
}