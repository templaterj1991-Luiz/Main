const companies = [
    { name: "Sansung", marketvalue: 50, CEO: "kim Hyun Suk", FoundedOn: 1938 },
    { name: "Microsoft", marketvalue: 415, CEO: "Satya Nadella", FoundedOn: 1975 },
    { name: "intel", marketvalue: 117, CEO: "Bob Swan", FoundedOn: 1968 },
    { name: "Facebook", marketvalue: 383, CEO: "Mark Zuckerberg", FoundedOn: 2004 },
    { name: "spotify", marketvalue: 30, CEO: "Daniel Ek", FoundedOn: 2006 },
    { name: "Apple", marketvalue: 845, CEO: "Tim Cook", FoundedOn: 1976 },
]

const newCompanies = companies.map(company => {
    company.marketvalue = company.marketvalue + (company.marketvalue / 10)
    return company
}).filter(company => company.FoundedOn < 1990)
  .reduce((acc, company) => acc + company.marketvalue, 0)


console.log(newCompanies)