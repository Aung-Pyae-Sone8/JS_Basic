// conditions (if else) 

let tired = prompt("Are you tired? 'yes/no/");

if (tired === "yes")
    console.log('rest well');
else if(tired === 'no')
    console.log('go back to work');
else 
    console.log('Please enter yes or no!');

let product_prices = [100,500,100,300,700,200,100]

product_prices=product_prices.map(price=> {
    if(price==100)
        price-=30
    return price
});

console.log(product_prices);

let people = [
    {name:'john',age:22},
    {name:'jane',age:20,gender:'f'},
    {name:'jack',age:30,gender:'m'}
]

people=people.map(person=> {
    if(person.gender){
        if(person.gender==='m'){
            person.gender="male";
        }
        if(person.gender==='f'){
            person.gender="female";
        }
    }
    else{
        person.gender='unknown'
    }

    return person
})

console.log(people);