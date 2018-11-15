console.log('--- factorialization ---');

/*
ARGS: 1
  {num}: the number to be sam_factorialized
RETURN: {num}
  the argument, sam_factorialized
BEHAVIOR:
  factorialization is taking in a x, and multiplying it and all numbers y st. 0 < y <= x
IMPLEMENTATION:
  she first creates an array of all the numbers from 1 -> x
  then multiplies them all using .reduce()
*/

// let factorialization_test_cases = [
//   {name: '5', args: [5], expected: 120},
//   {name: '5', args: [10], expected: 3628800},
//   {name: '5', args: [20], expected: 2432902008176640000},
//   {name: '5', args: [0], expected: 1},
//   {name: '5', args: [3], expected: 6},
//   {name: '5', args: [4], expected: 25},
// ];


console.log('--- samanthaming\'s solution ---');
// https://github.com/samanthaming/freecodecamp-my-solutions/blob/master/basic-algorithm/3-factorialize-a-number.js

  function sam_factorialize(num) {
    const range = [...Array(num).keys()].map(n => n + 1);
    // console.log(range)
    return range.reduce((accum, cur) => accum * cur, 1);
  }
  run_tests(sam_factorialize, factorialization_test_cases);

console.log('--- trace-blocked ---');
  
  function sam_factorialize_traced(num) {
    let range; { // = [...Array(num).keys()].map(n => n + 1);
      const step_1 = Array(num);
      const step_2 = step_1.keys();
      const step_3 = [...step_2];
      const step_4 = n => n + 1;
      const step_5 = step_3.map(step_4);
      range = step_5;
    };
    // console.log(range)
    let result; { // = range.reduce((accum, cur) => accum * cur, 1);
      const step_1 = (accum, cur) => accum * cur;
      const step_2 = range.reduce(step_1, 1);
      result = step_2
    };
    return result;
  }
  run_tests(sam_factorialize_traced, factorialization_test_cases);


console.log('--- chunkified ---');

  function sam_factorialize_chunked(num) {
    let range = determine_range(num); 
    let result = calculate_result(range);
    return result;
  }
  run_tests(sam_factorialize_traced, factorialization_test_cases);

  const determine_range_tests = [
    {name: 'num 0', args: [0], expected: []},
    {name: 'num 3', args: [3], expected: [1, 2, 3]},
    {name: 'num 4', args: [4], expected: [1, 2, 3, 4]},
  ];
  function determine_range(_num) {
    const step_1 = Array(_num);
    const step_2 = step_1.keys();
    const step_3 = [...step_2];
    const step_4 = n => n + 1;
    const step_5 = step_3.map(step_4);
    return step_5;
  };
  run_tests(determine_range, determine_range_tests);

  const calculate_result_tests = [
    {name: '[]', args: [[]], expected: 1},
    {name: '[1, 2, 3]', args: [[1, 2, 3]], expected: 6},
    {name: '[1, 2, 3, 4]', args: [[1, 2, 3, 4]], expected: 24},
  ];
  function calculate_result(_range) {
      const step_1 = (accum, cur) => accum * cur;
      const step_2 = _range.reduce(step_1, 1);
      return step_2
  };
  run_tests(calculate_result, calculate_result_tests);

console.log('--- logged ---');

  function sam_factorialize_logged(num, _log) {
    let log;
  	if (_log) {
  		log = {args: {num}};
  	};

    let range = determine_range(num); 
  	if (_log) {
  		log._1_range = range;
  	};
    let result = calculate_result(range);
  	if (_log) {
  		log._2_sum = result;
  	};

    if (_log) {
      log.result = result;
      return log;
    } else { 
      return result;
    };
  };
  run_tests(sam_factorialize_logged, factorialization_test_cases, true);




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

