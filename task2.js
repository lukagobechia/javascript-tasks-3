const nums = [[1, -2], [3, -4], [5]];

const negativeNums = nums.flat(Infinity).filter((el) => el >= 0);

console.log(negativeNums);
