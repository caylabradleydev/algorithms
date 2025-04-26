function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  
  sum += arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  sum += arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  return sum;
}