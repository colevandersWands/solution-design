const test_cases = [
  {name: '', args: ["I'm a little tea pot"], expected: "I'm A Little Tea Pot"},
  {name: '', args: ["sHoRt AnD sToUt"], expected: "Short And Stout"},
  {name: '', args: ["HERE IS MY HANDLE HERE IS MY SPOUT"], expected: "Here Is My Handle Here Is My Spout"}
];


// https://github.com/jadonOrr/freeCodeCampAlgorithms/blob/master/basic-algorithms/titleCaseASentence.js
//thine task
function titleCase(str) {
  return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
