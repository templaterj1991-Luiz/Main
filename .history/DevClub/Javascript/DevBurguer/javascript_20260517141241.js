console.log(menuOptions)

const button1 = document.querySelector("#botao1")
const menu = document.querySelector("#mostrartudo")

button1.addEventListener("click",()=>{
 menu.style.display = "block";
});

    const button2 = document.querySelector("#botao2")
    const menu1 = document.querySelector("#mostrartudo")

    button2.addEventListener("click", ()=>{
        de
    })



    const descount = menuOptions.map(dezporcentos => {
        const valor = dezporcentos.price - (dezporcentos.price*0.1)
        return {
        name: dezporcentos.name,
        price: valor,
        vegan: dezporcentos.vegan,
        src: dezporcentos.src
    }
    }

    )
    console.log(descount)

