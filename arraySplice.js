let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

console.log( arr[1] ); // undefined

// now arr = ["I",  , "home"];
console.log( arr.length ); // 3