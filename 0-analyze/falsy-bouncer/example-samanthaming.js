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

  function bouncer(arr) {
    return arr.filter(a => !!a);
  };
  run_tests(bouncer, test_cases);

console.log('--- trace implementation ---');

  function bouncer_traced(arr) {
    const truthy_check = (a) => {
                            const step_1 = !a;
                            const step_2 = !step_1;
                            return step_2
                          };

    const result = arr.filter(truthy_check);

    return result
  };
  run_tests(bouncer_traced, test_cases);


console.log('--- chunk strategy ---');

  function bouncer_traced(arr) {

    const result = arr.filter(truthy_check);

    return result
  };
  run_tests(bouncer_traced, test_cases);

  const truthy_check_tests = [
    {name: '7', args: [7], expected: true},
    {name: '0', args: [0], expected: false},
    {name: 'null', args: [null], expected: false},
    {name: 'NaN', args: [NaN], expected: false},
    {name: 'undefined', args: [undefined], expected: false},
    {name: '"null"', args: ['null'], expected: true},
    {name: '"undefined"', args: ['undefined'], expected: true},
  ];
  function truthy_check(a) {
    const step_1 = !a;
    const step_2 = !step_1;
    return step_2;
  };
  run_tests(truthy_check, truthy_check_tests);

console.log('--- communicate findings ---');

  test_cases.push({name: '', args: [[7, "ate", "", false, 9]], expected: [7, "ate", '', 9]})
  test_cases.push({name: '', args: [["a", "b", "c"]], expected: ["a", "b"]})

  function bouncer_logged(arr, _log) {
    let log;
    if (_log)  log = {args: {arr}};
    
    const result = arr.filter(truthy_check)
    if (_log)  log.result = result;

    if (_log) {
      return log;
    } else {
      return result;
    };
  };
  run_tests(bouncer_logged, test_cases, true);



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