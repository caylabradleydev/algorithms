function isVow(a){
  //NOTES
  //input: array of numbers
  //output: array where relevant character codes are converted to lowercase vowels
  //>> {97 : "a", 101: "e", 105: "i", 111: "o", 117: "u"}
  
  //SOLUTION
  //initialize hashmap containing charcodes of lowercase vowels
  let lowerVowelMap = {97 : "a", 101: "e", 105: "i", 111: "o", 117: "u"}
  
  //iterate through array
  for(let i = 0; i < a.length; i++){
    //if current element in hashmap
    if(a[i] in lowerVowelMap){
      //convert to lowercase vowel
      a[i] = lowerVowelMap[a[i]]
    }
  }
​
  return a  //return array
}