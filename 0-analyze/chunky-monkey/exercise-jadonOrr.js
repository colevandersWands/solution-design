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
    {name: 'a b c d, 2', args: [["a", "b", "c", "d"], 2], expected: [["a", "b"], ["c", "d"]]},
    {name: '0-5, 3', args: [[0, 1, 2, 3, 4, 5], 3], expected: [[0, 1, 2], [3, 4, 5]]},
    {name: '0-5, 2', args: [[0, 1, 2, 3, 4, 5], 2], expected: [[0, 1], [2, 3], [4, 5]]},
    {name: '0-5, 4', args: [[0, 1, 2, 3, 4, 5], 4], expected: [[0, 1, 2, 3], [4, 5]]},
    {name: '0-6, 3', args: [[0, 1, 2, 3, 4, 5, 6], 3], expected: [[0, 1, 2], [3, 4, 5], [6]]},
    {name: '0-8, 4', args: [[0, 1, 2, 3, 4, 5, 6, 7, 8], 4], expected: [[0, 1, 2, 3], [4, 5, 6, 7], [8]]},
    {name: '0-8, 2', args: [[0, 1, 2, 3, 4, 5, 6, 7, 8], 2], expected: [[0, 1], [2, 3], [4, 5], [6, 7], [8]]}
  ];



console.log('--- jadonOrr\'s solution ---');
// https://github.com/jadonOrr/freeCodeCampAlgorithms/blob/master/basic-algorithms/chunkyMonkey.js

  function chunky(arr, size) {
    const splitArr = [];
      
    for (let i = 0; i < arr.length; i += size) {
      splitArr.push(arr.slice(i, size + i));
    }
    
    return splitArr;
  }
  run_tests(chunky, test_cases);

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