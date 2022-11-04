// Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

const array = ["hello","world","kiddo"];
array[0] = 627;
//console.log(array);

const arrays = [[1,2,4],[5,6,7]];
arrays[0] = 627; 
arrays[1] = 627;
arrays[2] = 627;
arrays[3] = 627;
console.log(arrays);