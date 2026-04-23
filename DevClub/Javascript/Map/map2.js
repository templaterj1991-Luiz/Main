const list = [
    { nome: 'Luiz', vip: true },
    { nome: 'Camilla', vip: false },
    { nome: 'Denise', vip: true },
    { nome: 'Elinice', vip: false},
    { nome: 'luiz Carlos', vip: true },
    { nome: 'Deisi', vip: true },
    { nome: 'Gabriel', vip: false }
]

const NewList = list.map(user => {
const vip = { 
    name: user.nome,
    BraceletColor: user.vip ? 'Black' : 'Green'
 }

return vip

})

console.log(NewList)

const student = [
    { nome: 'Luiz', TestGrade: 9 },
    { nome: 'Camilla', TestGrade: 10 },
    { nome: 'Denise', TestGrade: 4},
    { nome: 'Elinice', TestGrade: 9},
    { nome: 'luiz Carlos', TestGrade: 7 },
    { nome: 'Deisi',TestGrade: 2 },
    { nome: 'Gabriel', TestGrade: 3 }
]

const aprovados = student.map(notas =>{
const Listaprovados = {
    nome:notas.nome,
    ResultadoFinal:notas.TestGrade  >= 5 ? 'aprovado!!' : 'Reprovado'
}
return Listaprovados

})

console.log(aprovados)