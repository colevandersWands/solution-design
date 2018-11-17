console.log('--- convert celcius to farenheit ---')
/*
ARGS: 1
  celcius {num}: to convert to farenheit
RETURN: {num}
  the farenheit equialent of the celcius argument
BEHAVIOR:
  converts degrees celcius to degrees farenheit
IMPLEMENTATION:
  he just plugged in the standard formula
*/

// let f_2_c_test_cases = [
//   {name: '-30', args: [-30], expected: -22},
//   {name: '-10', args: [-10], expected: 14},
//   {name: '0', args: [0], expected: 32},
//   {name: '20', args: [20], expected: 68},
//   {name: '30', args: [30], expected: 86}
// ];


console.log('--- jadonOrr\'s solution ---');
// https://github.com/jadonOrr/freeCodeCampAlgorithms/blob/master/basic-algorithms/convertCelsiusToFahrenheit.js

  function convertToF(celsius) {
    return celsius * 9/5 + 32;
  };
  run_tests(convertToF, f_2_c_test_cases);

console.log('--- traced ---');
  
  function convertToF_traced(celsius) {
    let result; { // = celsius * 9/5 + 32;
      const step_1 = celsius * 9;
      const step_2 = step_1 / 5;
      const step_3 = step_2 + 32;
      result = step_3;
    };
    return result;
  };
  run_tests(convertToF_traced, f_2_c_test_cases);


console.log('--- chunkified ---');

  function convertToF_chunked(celsius) {
    const step_1 = times_9(celsius);
    const step_2 = divided_by_5(step_1);
    const step_3 = plus_32(step_2);
    return step_3;
  };
  run_tests(convertToF_chunked, f_2_c_test_cases);

  let times_9_tests = [
    {name: 'num 3', args: [3], expected: 27},
    {name: 'str 3', args: ['3'], expected: 27},
    {name: 'Infinity', args: [Infinity], expected: Infinity},
    {name: 'inverse', args: [1/9], expected: 1}
  ];
  function times_9(_a) { return _a * 9 };
  run_tests(times_9, times_9_tests);
  
  let divided_by_5_tests = [
    {name: 'num 25', args: [25], expected: 5},
    {name: 'str 3', args: ['3'], expected: 0.6},
    {name: 'Infinity', args: [Infinity], expected: Infinity},
    {name: 'inverse', args: [5], expected: 1}
  ];
  function divided_by_5(_a) { return _a / 5 };
  run_tests(divided_by_5, divided_by_5_tests);

  let plus_32_tests = [
    {name: 'num 25', args: [25], expected: 57},
    {name: 'str 3', args: ['3'], expected: '332'},
    {name: 'Infinity', args: [Infinity], expected: Infinity},
    {name: 'inverse', args: [-32], expected: 0}
  ];
  function plus_32(_a) { return _a + 32 };
  run_tests(plus_32, plus_32_tests);

console.log('--- logged ---');

  function convertToF_logged(celcius, trace) {
    let log;
    if (trace) {
      log = {args: {celcius}};
    };
    const step_1 = times_9(celcius);
    if (trace) {
      log.step_1 = step_1;
    };
    const step_2 = divided_by_5(step_1);
    if (trace) {
      log.step_2 = step_2;
    };
    const step_3 = plus_32(step_2);
    if (trace) {
      log.step_3 = step_3;
    };

    if (trace) {
      log.result = step_3;
      return log;
    } else { 
      return step_3;
    };
  };
  run_tests(convertToF_logged, f_2_c_test_cases, true);





// // testing utils
// function run_tests(_target, _cases, _log) {
//   for (let t_case of _cases) {
//     let expected = t_case.expected;

//     let actual;
//     let msg;
//     let log;
//     if (_log) {
//       log = _target(... t_case.args, true);
//       actual = log.result;
//     } else {
//       actual = _target(... t_case.args, false);
//     };

//     let pass;
//     if (typeof expected === 'object') {
//       actual = JSON.stringify(actual);
//       expected = JSON.stringify(expected);
//       pass = actual === expected;
//     } else {
//       pass = actual === expected;
//     };

//     if (!pass && _log) {
//       console.log(`    ${t_case.name}: \n` + 
//           "actual: ", log, "\n" +
//           `expected: {${typeof expected}, ${expected}}`);
//     } else if (!pass) {
//       console.log(`${t_case.name}: \n` + 
//           `   actual: {${typeof actual}, ${actual}} \n` +
//           `   expected: {${typeof expected}, ${expected}}`);
//     };
//   };
// };

