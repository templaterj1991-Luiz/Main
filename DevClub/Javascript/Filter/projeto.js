const companies = [
    { name: "Sansung", marketvalue: 50, CEO: "kim Hyun Suk", FoundedOn: 1938 },
    { name: "Microsoft", marketvalue: 415, CEO: "Satya Nadella", FoundedOn: 1975 },
    { name: "intel", marketvalue: 117, CEO: "Bob Swan", FoundedOn: 1968 },
    { name: "Facebook", marketvalue: 383, CEO: "Mark Zuckerberg", FoundedOn: 2004 },
    { name: "spotify", marketvalue: 30, CEO: "Daniel Ek", FoundedOn: 2006 },
    { name: "Apple", marketvalue: 845, CEO: "Tim Cook", FoundedOn: 1976 },
]

const add10porecentos = company => {
    company.marketvalue = company.marketvalue + (company.marketvalue / 10)
    return company
}

const filterfunded = company => company.FoundedOn < 1990

const reducevalue = (acc,company) =>acc + company.marketvalue

const newCompanies = companies

.map(add10porecentos)
.filter(filterfunded)
.reduce(reducevalue,0)


console.log(newCompanies)