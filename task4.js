const array = [[2, 4], [6, 8]];
const sum =  array.flat(Infinity).reduce((tot,curr) => {return tot += curr})
console.log(sum)