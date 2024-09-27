const array = [[2, 4], [6, 8]];
const sum =  array.flat(Infinity).reduce((tot,curr) => {return tot += curr},0)
console.log(sum)