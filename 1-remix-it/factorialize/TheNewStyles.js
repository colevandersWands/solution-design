{
  console.log('--- factorialization ---');

  /*
  ARGS: 1
    {num}: the number to be tns_factorialized
  RETURN: {num}
    the argument, tns_factorialized
  BEHAVIOR:
    factorialization is taking in a x, and multiplying it and all numbers y st. 0 < y <= x
  IMPLEMENTATION:
    loop through all the numbers from 1 -> num, multiplying each new number by the 
    accumulated result up to this point
  */

  let factorialization_test_cases = [
    {name: '5', args: [5], expected: 120},
    {name: '5', args: [10], expected: 3628800},
    {name: '5', args: [20], expected: 2432902008176640000},
    {name: '5', args: [0], expected: 1},
    {name: '5', args: [3], expected: 6},
    {name: '5', args: [4], expected: 25},
  ];

  console.log('--- TheNewStyles\'s solution ---');
  // https://github.com/TheNewStyles/freecodecamp-algorithm-solutions/blob/master/BasicAlgorithmScripting/factorialize.js

    function tns_factorialize(num) {
      factorial = 1;
      
      for(i=1; i<=num; i++){
        factorial *= i;
      }
      
      return factorial;
    };
    run_tests(tns_factorialize, factorialization_test_cases);

  console.log('--- traced ---');
    // https://astexplorer.net
    
    function tns_factorialize_traced(num) {
      factorial = 1;
      
      let i = 1;
      while(i <= num){
        factorial = factorial * i;
        i = i + 1;
      };
      
      return factorial;
    };
    run_tests(tns_factorialize_traced, factorialization_test_cases);


  console.log('--- chunked ---');

    // take 2
    // not much to chunk, just going to rename variables
    //  according to their roles
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

    // take 1
    // this worked, but isn't the best way to chunk this code
    //   because: a trace of tns_factorialize_chunked is not helpful

    function tns_factorialize_chunked(num) {
      let initial_value = 1;
      
      let factorial = multiply_a_range(initial_value, num);
      
      return factorial;
    };
    run_tests(tns_factorialize_chunked, factorialization_test_cases);

    let multiply_a_range_tests = [
      {name: 'factorial 3', args: [1, 3], expected: 6},
      {name: 'factorial 0', args: [1, 1], expected: 1},
      {name: '3 -> 4', args: [3, 4], expected: 12},
      {name: '3 -> 5', args: [3, 5], expected: 60},
      {name: '-2 -> 1', args: [-2, 1], expected: 0},
    ];
    function multiply_a_range(_initial, _final) {
      let accumulator = _initial;
      let i = _initial + 1;
      while(i <= _final){
        accumulator = accumulator * i;
        i = i + 1;
      };
      return accumulator;
    };
    run_tests(multiply_a_range, multiply_a_range_tests);

  console.log('--- logged ---');

    function tns_factorialize_logged(num, _log) {
      let log;
      if (_log) {
        log = {args: { num }};
      };

      let accumulator = 1;
      
      let stepper = 1;
      while(stepper <= num){
        if (_log) { 
          log['' + (stepper)] = accumulator + ' * ' + stepper; 
        };
        accumulator = accumulator * stepper;
        stepper = stepper + 1;
      };

      if (_log) {
        log.result = accumulator
        return log;
      } else { 
        return accumulator;
      };
    };
    run_tests(tns_factorialize_logged, factorialization_test_cases, true);



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