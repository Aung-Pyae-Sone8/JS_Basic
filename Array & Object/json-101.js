// JSON 

// JSON rules 
// 1 object => ''
// 2 removeSpace
// 3 properties => "" 
// 4 values => "" (double quotes)

// JSON Datatypes 
// 1 string 
// 2 number 
// 3 boolean 
// 4 array 
// 5 object 
// 6 null 


let person11 = '{"name":"aung pyae sone"}'

let obj = JSON.parse(person11); // json string to object

console.log(obj);

let person12 = {
    name : 'aung pyae sone',
    age : 22
}

let json = JSON.stringify(person12); // js object to json

console.log(json);