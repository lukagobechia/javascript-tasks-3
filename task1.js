const nums = [3, 6, 10, , 20, 15, 12];
const indexArray = [];

nums.forEach((el) => el % 5 === 0 && indexArray.push(nums.indexOf(el)));

console.log(indexArray.toString());
