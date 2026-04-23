const number = [1,2,3,4,5]

const double = number.map(item =>{
   const newitem = item * 2
    return newitem
    
})
console.log(double,number)

const numeros = [100,200,300,400,500]

const double2 = numeros.map(item =>{
    const novoitem = item * 5
    return novoitem
})

console.log(double2,numeros)

const apr = [30,40,50,60]

const apr2 = apr.map(item => {
    const apritn = item * 10
    return apritn
})

console.log(apr2,apr)

const num = [10,14,50,1200]

const num2 = num.map(item => {
    const num3 = item * 5
    return num3
})
console.log(num2,num)




const number1 = [1,2,3,4,5]
const double1 = number1.map((item, index, arrayOriginal ) =>{
  
  console.log(item + 'item')
  console.log(index + 'index')
  console.log(arrayOriginal + 'arrayOriginal')

  
    const newitem = item * 2
    return newitem
    
})

const full = [2,3,45,60]
const dobro = full.map(item => item * 2)
console.log(full,dobro)


