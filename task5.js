const array = [[2, 4], [6, 8]];

const sumOfSquares =  array.flat(Infinity).map((el) => el*el).reduce((tot,curr) => {return tot += curr},0)

console.log(sumOfSquares)