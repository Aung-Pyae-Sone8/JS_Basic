// do while loop 

let num = 0;
do{
    console.log('work'+num);
    num++;
}while(num<5)

// for loop 

let people3 = ['aung aung', 'kyaw kyaw', 'su su', 'aung pyae sone', 'john'];

for(let x=0; x<people3.length; x++){
    console.log(people3[x]);
}

// for of loop (array)

for(person of people3){
    console.log(person);
}

// for in loop (object) 

let person4 = {
    name : 'aung pyae sone',
    age : 22
}

for(key in person4){
    console.log(`${key} is ${person4[key]}`);
}