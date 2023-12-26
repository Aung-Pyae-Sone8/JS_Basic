// Javascript Data Structure 

// wrong structure 

// let person5 = {name:'aung pyae sone',age:22,gender:'male'}
// let person6 = {name:'aung pyae sone',age:22,gender:'male'}
// let person7 = {name:'aung pyae sone',age:22,gender:'male'}

// correct structure

let people = [
    {name:'aung pyae sone',age:22,gender:'male'},
    {name:'su sandi soe',age:22,gender:'female'},
    {name:'ko ko',age:25,gender:'male'}
]

let names1 = people.map(person => {
    // console.log(person.name);  // object
    return person.name // return -> array format
})

// search 

let searchKeyword = prompt('search person :')

let filteredArray = people.filter(person => {
    return person.name.includes(searchKeyword);
})

console.log(names1);
console.log(filteredArray);