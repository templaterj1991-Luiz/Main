console.log(menuOptions)

const button1 = document.querySelector("#botao1")
const menu = document.querySelector("#mostrartudo")
const button2 = document.querySelector("#botao2")


button1.addEventListener("click",()=>{
 menu.style.display = "block";
});
function descount(){
    const newprices = menuOptions.map((product)=>({
      ...product,
      price:product.price*0.9,

    })) 
    innerhtml.pri
}




button2.addEventListener("click", descount)

    
    
   

