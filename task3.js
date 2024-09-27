function checkForArray(array) {
    const newArray = array.filter(Array.isArray); 
    newArray.forEach((el) => console.log(el , true)); 
    
    return newArray;
}

console.log(checkForArray([1, [2, 3], "hello", [4]]));
