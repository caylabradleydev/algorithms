function multiTable(number) {
  let multiplicationTable = `1 * ${number} = ${1 * number}`;
  
  for(let i = 2; i <= 10; i++){
    multiplicationTable += `\n${i} * ${number} = ${i * number}`
  }
  
  return multiplicationTable
}