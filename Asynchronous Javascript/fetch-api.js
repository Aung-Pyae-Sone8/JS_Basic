// Fetch api 

let userInput = prompt('Tell me user ID...')
fetch('https://jsonplaceholder.typicode.com/todos/'+userInput)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})