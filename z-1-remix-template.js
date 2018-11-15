console.log('--- name of challenge ---');

/*
ARGS: 
RETURN: 
BEHAVIOR:
IMPLEMENTATION:
*/

let test_cases = [
	{name: 'name', args: ['name'], expected: null}
];

console.log('--- scaffolded ---');
  // https://astexplorer.net
  
  function remix_1(a) {
  	// a 
  };
  run_tests(remix_1, test_cases);


console.log('--- logged ---');

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