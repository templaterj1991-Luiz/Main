console.log(menuOptions)

const button1 = document.querySelector("#botao1")
const menu = document.querySelector("#mostrartudo")

button1.addEventListener("click",()=>{
 menu.style.display = "block";
});

const descount = menuOptions.map(dezporcentos => {
    const valor = dezporcentos.price + (menuOptions.price / 10)
    return valor
}
    
)
console.log(valor,descount)