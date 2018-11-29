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
  {name: '', args: [[7, "ate", "", false, 9]], expected: [7, "ate", 9]},
  {name: '', args: [["a", "b", "c"]], expected: ["a", "b", "c"]},
  {name: '', args: [[false, null, 0, NaN, undefined, ""]], expected: []},
  {name: '', args: [[1, null, NaN, 2, undefined]], expected: [1, 2]}
];


console.log('--- user-name\'s solution ---');
// https://github.com/samanthaming/freecodecamp-my-solutions/blob/master/basic-algorithm/13-falsy-bouncer.js

  function bouncer2(arr) {
    return arr.filter(a => Boolean(a));
  }

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