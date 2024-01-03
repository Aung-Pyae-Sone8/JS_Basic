// promise 

function asynchronous(){
    return new Promise((resolve, reject)=>{
        let result = 0;
        for(let i=0;i<1000000000;i++){
            result+=i;
            result+=i+undefined;    // error
        }
        if(result){
            resolve(result);    // return data
        }else{
            reject("I've got some error!"); // if error
        }
    })
}

console.log('work');
asynchronous()
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
console.log('more important work');