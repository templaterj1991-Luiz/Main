console.log(menuOptions)

const button1 = document.querySelector("#botao1")
const menu = document.querySelector("#mostrartudo")

button1.addEventListener("click",()=>{
 menu.style.display = "block";
});

const descount = menuOptions.map(dezporcentos => {
    const valor = dezporcentos.price - (dezporcentos.price*0.1)
    return valor,price.valor
}
    
)
console.log(descount)

const discount = menuOptions.map(item => {
    const newPrice = item.price - (item.price * 0.1)

    return {
        ...item,
        price: newPrice
    }
})

console.log(discount)