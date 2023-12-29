switch(2) {
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    default:
        console.log('this is default');
        break;
}

let people1 = [
    {name:'aung pyae sone', age:22, gender:'m'},
    {name:'su sandi soe', age:21, gender:'f'},
    {name:'hla hla', age:13}
]

people1 = people1.map((person)=>{
    switch(person.gender){
        case 'm':
            person.gender = "male";
            break;
        case 'f':
            person.gender = "female";
            break;
        default:
            person.gender = "unknown";
            break;
    }
    return person;
})

console.log(people1);