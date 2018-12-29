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

console.log('--- expand implementation ---');

  // function their_solution_expanded(a) {
  // 	let result; {
  // 		result = null
  // 	};
  //   return result;
  // };
  // run_tests(their_solution_expanded, test_cases);


console.log('--- refactor strategy ---');

  // function their_solution_refactored(a) {
  // 	let result = nulling(a);
  //   return result;
  // };
  // run_tests(their_solution_refactored, test_cases);

  // let nulling_tests = [
  //   {name: 'undefined', args: [undefined], expected: null},
  //   {name: 'four', args: ['four'], expected: null}
  // ];
  // function nulling() { return null };
  // run_tests(nulling, nulling_tests);


console.log('--- log strategy ---');

  // function their_solution_chunked(a) {   const log = [{arg: a}];
  //  let result = nulling(a);              log.push({result});
  //   return {result, log};
  // };
  // log_reports(their_solution_chunked, test_cases);


console.log('--- closing notes ---')

/*
  what did you learn, what was easy, what was hard
  what language features did you learn about
  what techniques did you learn
  helpful links
*/





// ------- testing utils ------- 


function run_tests(_target, _cases) {
  for (let t_case of _cases) {
    const expected = t_case.expected;
    const actual = _target(... t_case.args, false);

    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else {
      pass = actual === expected;
    };

    if (!pass) {
      console.log(`${t_case.name}: \n`);
      console.log(`   actual: ${typeof actual},`, actual);
      console.log(`   expected: ${typeof expected},`, expected);
    };
  };
};
function log_reports(_target, _cases) {
  const report = {}
  for (let t_case of _cases) {
     report[t_case.name] = _target(...t_case.args) 
  }
  console.log(report)
}
}