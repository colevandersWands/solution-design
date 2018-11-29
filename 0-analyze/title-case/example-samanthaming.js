
const test_cases = [
  {name: '', args: ["I'm a little tea pot"], expected: "I'm A Little Tea Pot"},
  {name: '', args: ["sHoRt AnD sToUt"], expected: "Short And Stout"},
  {name: '', args: ["HERE IS MY HANDLE HERE IS MY SPOUT"], expected: "Here Is My Handle Here Is My Spout"}
];

// https://github.com/samanthaming/freecodecamp-my-solutions/blob/master/basic-algorithm/11-title-case-a-sentence.js
//i
function titleCase(str) {
  let arr = str.split(' ');

  return arr.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}