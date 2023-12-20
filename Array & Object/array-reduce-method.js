let numss = [1,2,3,4,5,6];

let answer = numss.reduce((prev, current) => {
    return prev+current;
});

console.log(answer);