console.log('--- factorial remix 1 ---');

/*
ARGS: 
RETURN: 
BEHAVIOR:
IMPLEMENTATION:
*/

// let factorialization_test_cases = [
//   {name: '5', args: [5], expected: 120},
//   {name: '10', args: [10], expected: 3628800},
//   {name: '20', args: [20], expected: 2432902008176640000},
//   {name: '0', args: [0], expected: 1},
//   {name: '3', args: [3], expected: 6},
//   {name: '4', args: [4], expected: 25},
// ];

console.log('--- remix description ---');

/*
  Strategy:
    I will combine samanthaming's strategy of creating an array from [1-x]
    with TheNewStyle's strategy of looping with a stepper & accumulator
    Instead of multiplying the accumulator by the stepper,
    I will multiply it consecutively by the numbers in the array
  Implementation:
    I will use the native for/of loop to iterate over the array
    it doesn't change anything in the strategy, 
    but it does remove the need for a stepper
*/

console.log('--- test raw material ---');

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

  function tns_factorialize_chunked(num) {
    let accumulator = 1;
    
    let stepper = 1;
    while(stepper <= num){
      accumulator = accumulator * stepper;
      stepper = stepper + 1;
    };
    
    return accumulator;
  };
  run_tests(tns_factorialize_chunked, factorialization_test_cases);


console.log('--- test remix ---');
  
  
  function factorialize_remix_1(num) {
    let accumulator = 1;
    let arr_o_range = determine_range(num);

    
    for (let next_num of arr_o_range) {
      accumulator = accumulator * next_num;
    };
    
    return accumulator;
  };
  run_tests(factorialize_remix_1, factorialization_test_cases);


console.log('--- log strategy ---');

  function factorialize_remix_1_logged(num, _log) {
    let accumulator = 1;
    let log;
      if (_log) {
        log = {args: { num }};
      };

    let arr_o_range = determine_range(num);
      if (_log) {
        log.arr_range = arr_o_range;
      };
    
    let step = 0;
    for (let next_num of arr_o_range) {
        if (_log) {
          log["step_" + step] = accumulator + " * " + next_num;
          step++;
        };
      accumulator = accumulator * next_num;
    };
    
    if (_log) {
      log.result = accumulator;
      return log;
    } else { 
      return accumulator;
    };
  };
  run_tests(factorialize_remix_1_logged, factorialization_test_cases, true);



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