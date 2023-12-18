console.log("-----------------------------");
console.log("--------Callback Function----------");

function sayMyName(name, fun) {
    let result = fun(name);
    console.log(result);
}
sayMyName('aung pyae sone', function(word){ return word});

function twice(num, modifier) {
    let result = modifier(num) * 2;
    console.log(result);
}
twice(7, function(num) {
    return num + 6;
});