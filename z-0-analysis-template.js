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
let test_cases = [ 
  {name: 'name', args: ['name'], expected: null}
];



console.log('--- user-name\'s solution ---');
// link to user's code on github

  // function their_solution(a) {
  //   return null;
  // };
  // run_tests(their_solution, test_cases);

console.log('--- trace implementation ---');

  // function their_solution_traced(a) {
  // 	let result; {
  // 		result = null
  // 	};
  //   return result;
  // };
  // run_tests(their_solution_traced, test_cases);


console.log('--- chunk strategy ---');

  // function their_solution_chunked(a) {
  // 	let result = nulling(a);
  //   return result;
  // };
  // run_tests(their_solution_chunked, test_cases);

  // let nulling_tests = [
  //   {name: 'undefined', args: [undefined], expected: null},
  //   {name: 'four', args: ['four'], expected: null}
  // ];
  // function nulling() { return null };
  // run_tests(nulling, nulling_tests);


console.log('--- closing notes ---')

/*
  what did you learn, what was easy, what was hard
  what language features did you learn about
  what techniques did you learn
  helpful links
*/




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