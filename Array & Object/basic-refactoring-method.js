//Array Methods
let nums1 = [1,2,3,4,5,6];

// map
let newArr1 = nums1.map(num =>  num + 100);
console.log(newArr1);

// filter 
let filteredNumbers = nums1.filter(num => num % 2 === 0);
console.log(filteredNumbers);

// reduce 
let result1 = nums1.reduce((prev,current) =>  prev*current);
console.log(result1);
