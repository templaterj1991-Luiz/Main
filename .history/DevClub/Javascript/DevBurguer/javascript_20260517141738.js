console.log(menuOptions)

const button1 = document.querySelector("#botao1")
const menu = document.querySelector("#mostrartudo")

button1.addEventListener("click",()=>{
 menu.style.display = "block";
});

    



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
    const button2 = document.querySelector("#botao2")

    button2.addEventListener("click", ()=>{
        document.querySelector.
      console.log(descount)
    })
    

