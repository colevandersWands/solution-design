{
console.log('--- name of challenge ---');

  // problem description

  /*
    specs
  */

  let test_cases = [ 
    {name: 'FCC', args: ["SERR PBQR PNZC"], expected: "FREE CODE CAMP"},
    {name: 'free pizza', args: ["SERR CVMMN!"], expected: "FREE PIZZA!"},
    {name: 'free love', args: ["SERR YBIR?"], expected: "FREE LOVE?"},
    {name: 'free pizza', args: ["GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."], expected: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."},
  ];

console.log('--- define mapping strategy ---')

  /*
    strings will be converted to an array of objects
    each object will have one key/value pair
    these objects will be constructed like this:
      (raw args -> problem space)
      one object represents one chunk of capital letters
      the preceding non-letters will be the key
      the letters split into an array and char-coded will be the values
    to decrypt in the problem space you can do like this:
      (solve challenge in problem space)
      for each object in the array, +/-13 for the elements in the array
      depending on their relationship to 77
    returning from arr of objects to a string is like this:
      (problem space -> solution space)
      concatenate each object's key with it's (concatenated value)
      then concatinate all strings

    ie:
      raw arg: "SERR PBQR PNZC"
      mapped arg: [
          {'': [83, 69, 82, 82]}, 
          {' ': [80, 66, 81, 82]}, 
          {'': [80, 78, 90, 67]}  ]
      mapped solution: [
          {'': [70, 82, 69, 69]}, 
          {' ': [67, 79, 68, 69]}, 
          {' ': [67, 65, 75, 90]}  ]
      raw solution: "FREE CODE CAMP"
  */

  function map(_str) {
    let mapped = [];

    let next_obj = {};
    let new_key = '';
    let new_value = [];
    let step = 0;
    for (let i = 0; i < _str.length; i++) {
      // http://wiki.c2.com/?FunctionsForLoops
      //  make recursive solution
      let charCode = _str.charCodeAt(i);

      if ((65 < charCode) || (charCode < 90)) {
        new_key += String.fromCharCode(charCode);
      } else {
        new_value.push(charCode);
      };

      next_obj = { [new_key]: new_value }
      mapped.push(next_obj);

      new_key = '';
      new_value = [];
      next_obj = {};
    };

    return mapped;
  }

  function demap(_arr) {
    
  }




console.log('--- manually solve mapped cases ---');

  const _4_5 = [
    { arg: 4, arg_mapped: 4}, {
      find_fibs: [0,1,1,2,3],
      select_odds: [1,1,3],
      add_them: 5  }, 
    {result_mapped: 5, result: 5}

console.log('--- develop & test chunks ---');

  let chunk_a_tests = [{}];
  function chunk_a() {};
  test_it();

  let chunk_b_tests = [{}];
  function chunk_b() {};
  test_it();

  let chunk_c_tests = [{}];
  function chunk_c() {};
  test_it();


console.log('--- scaffold chunks ---');

  function solution(raw_arg) {
    let arg_mapped = map(raw_arg)
    let step_1 = chunk_a();
    let step_2 = chunk_b();
    let step_3 = chunk_c();
    let result_demapped = demap(step_3)
    return result_demapped
  };
  test_it();


console.log('--- tracify solution ---');

  function tracified(_trace) {
    let step_1 = chunk_a();
    if(_trace);
    let step_2 = chunk_b();
    if(_trace);
    let step_3 = chunk_c();
    if(_trace);
    return step_3
  };
  test_it();


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