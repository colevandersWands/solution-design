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



console.log('--- user-name\'s solution ---');
// https://github.com/TheNewStyles/freecodecamp-algorithm-solutions/blob/master/BasicAlgorithmScripting/largestOfFour.js

  function largestOfFour(arr) {  
    var largestNum = 0;
    var largestNumArray = [];
    
    for(var i=0; i<=arr.length-1; i++){
      for(var j=0; j<=arr[i].length-1; j++){
        if(arr[i][j] > largestNum){
          largestNum = arr[i][j];
        }
      }
      largestNumArray.push(largestNum);
      largestNum=0;
    }
    
    return largestNumArray;
  }
  run_tests(largestOfFour, test_cases);

console.log('--- trace implementation ---');

  // function their_solution_traced(a) {
  //  let result; {
  //    result = null
  //  };
  //   return result;
  // };
  // run_tests(their_solution_traced, test_cases);


console.log('--- chunk strategy ---');

  // function their_solution_chunked(a) {
  //  let result = nulling(a);
  //   return result;
  // };
  // run_tests(their_solution_chunked, test_cases);

  // let nulling_tests = [
  //   {name: 'undefined', args: [undefined], expected: null},
  //   {name: 'four', args: ['four'], expected: null}
  // ];
  // function nulling() { return null };
  // run_tests(nulling, nulling_tests);

console.log('--- communicate findings ---');

  // push some bad test cases to test out your logging

  // function their_solution_logged(a, _log) {
  //  let log;
  //  if (_log) {
  //    log = {args: {a}};
  //  };

  //  let step_1 = nulling(a);
  //  if (_log) {
  //    log.step_1 = step_1;
  //  }

  //   if (_log) {
  //     log.result = step_1
  //     return log;
  //   } else { 
  //     return step_1;
  //   };
  // };
  // run_tests(their_solution_logged, test_cases, true);



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