{
console.log('--- challenge-name ---');

// plain english problem statement


/*
ARGS: 
RETURN: 
BEHAVIOR:
IMPLEMENTATION:
*/

// copied from fcc 
const test_cases = [
  {name: 'first', args: [[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]], expected: [5, 27, 39, 1001]},
  {name: 'second', args: [[[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]], expected: [27, 5, 39, 1001]},
  {name: 'third', args: [[[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]], expected: [9, 35, 97, 1000000]},
  {name: 'fourth', args: [[[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]], expected: [25, 48, 21, -3]}
];


console.log('--- jadonOrr\'s solution ---');
// https://github.com/jadonOrr/freeCodeCampAlgorithms/blob/master/basic-algorithms/returnLargestNumbers.js

  function largestOfFour(arr) {
    return arr.map(nums => Math.max(...nums));
  }
  run_tests(largestOfFour, test_cases);

console.log('--- trace implementation ---');
 
  function largestOfFour_traced(arr) {
    const keep_largest_element = nums => Math.max(...nums);
    var result = arr.map(keep_largest_element);
    return result;
  };
  run_tests(largestOfFour_traced, test_cases);


console.log('--- chunk strategy ---');

  function largestOfFour_chunked(arr) {
    var result = arr.map(keep_largest_element);
    return result;
  };
  run_tests(largestOfFour_chunked, test_cases);

  const keep_largest_element_tests = [
    {name: '1, 2, 3', args: [[1,2,3]], expected: 3},
    {name: '-1, -2, -3', args: [[-1,-2,-3]], expected: -1},
    {name: '-1, 0, 1', args: [[-1,0,1]], expected: 1}
  ];
  function keep_largest_element(nums) {
    return Math.max(...nums);
  };
  run_tests(keep_largest_element, keep_largest_element_tests);

console.log('--- communicate strategy ---');

  test_cases.push({name: 'fifth', args: [[[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]], expected: [27, 6, 39, 1001]});
  test_cases.push({name: 'sixth', args: [[[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000001, 1001, 857, 1]]], expected: [9, 35, 97, 1000000]});

  function largestOfFour_logged(arr, _log) {
    let log;
    if (_log)  log = {args: {arr: JSON.stringify(arr) }};

    var result = arr.map(keep_largest_element);
    if (_log)  log.result = result;

    if (_log) {
      return log;
    } else {
      return result;
    }
  };
  run_tests(largestOfFour_logged, test_cases, true);



// testing utils
function run_tests(_target, _cases, _log) {
  for (let t_case of _cases) {
    let expected = t_case.expected;

    let actual;
    let msg;
    let log;
    if (_log) {
      log = _target(... t_case.args, true);
      actual = log.result;
    } else {
      actual = _target(... t_case.args, false);
    };

    let pass;
    if (typeof expected === 'object') {
      actual = JSON.stringify(actual);
      expected = JSON.stringify(expected);
      pass = actual === expected;
    } else {
      pass = actual === expected;
    };

    if (!pass && _log) {
      console.log(`    ${t_case.name}: \n` + 
          "actual: ", log, "\n" +
          `expected: {${typeof expected}, ${expected}}`);
    } else if (!pass) {
      console.log(`${t_case.name}: \n` + 
          `   actual: {${typeof actual}, ${actual}} \n` +
          `   expected: {${typeof expected}, ${expected}}`);
    };
  };
};
}