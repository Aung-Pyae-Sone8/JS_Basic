// async await 

// fetch("https://jsonplaceholder.typicode.com/todos/")
// .then((response)=>{
//     return response.json();
// })
// .then((datas)=>{
//     console.log(datas);
// })
// .catch((error)=>{
//     console.log(error);
// })

async function fetchTodos(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    console.log('hi');
    let datas = await response.json();
    console.log(datas);
    }catch(error){
        console.log(error);
    }
}
fetchTodos();