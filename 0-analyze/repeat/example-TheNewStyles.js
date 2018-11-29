const test_cases = [
  {name: '*, 3', args: ["*", 3], expected: "***"},
  {name: 'abc, 3', args: ["abc", 3], expected: "abcabcabc"},
  {name: 'abc, 4', args: ["abc", 4], expected: "abcabcabcabc"},
  {name: 'abc, 1', args: ["abc", 1], expected: "abc"},
  {name: '*, 8', args: ["*", 8], expected: "********"},
  {name: 'abc, -2', args: ["abc", -2], expected: ""}
];

// https://github.com/TheNewStyles/freecodecamp-algorithm-solutions/blob/master/BasicAlgorithmScripting/repeatStringNumTimes.js
//i
function repeatStringNumTimes(str, num) {
 var i=0;
 var repeat = '';
  
 while(i < num){
   repeat += str;
   i++; 
 }
  
  return repeat;
}