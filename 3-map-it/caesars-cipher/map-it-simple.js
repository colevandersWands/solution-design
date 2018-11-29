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
    strings will be split into arrays
    and the letters converted to charcodes
    then the problem can be solved by simple comparison and addition
    mapping strategy:
      string split into array
      charecters replaced with their charcodes
    solution in mapped space:
      if char is in capital range
        +/-13 depending on which side of 77
      else leave it
    demapping strategy
      convert chars to charecters in array
      join array


    ie:
      raw arg: "SERR PBQR PNZC"
      mapped arg: [ 83, 69, 82, 82, 32, 80, 66, 81, 82, 32, 80, 78, 90, 67 ]
      mapped solution: [ 70, 82, 69, 69, 32, 67, 79, 68, 69, 32, 67, 65, 75, 90 ]
      raw solution: "FREE CODE CAMP"
  */

  let map_tests = [
    {name: 'SERR', args: ['SERR'], expected: [83, 69, 82, 82]},
    {name: ' PBQR', args: [' PBQR'], expected: [32, 80, 66, 81, 82]},
    {name: ' CVMMN!', args: [' CVMMN!'], expected: [32, 67, 86, 77, 77, 78, 33]},
  ];
  function map(_str) {
    let split_str = _str.split('');

    let mapped_arg = [];
    for (let letter of split_str) {
      mapped_arg.push(letter.charCodeAt(0));
    };

    return mapped_arg;
  };
  run_tests(map, map_tests);

  let demap_tests = [
    {name: 'SERR', args: [[83, 69, 82, 82]], expected: 'SERR'},
    {name: ' PBQR', args: [[32, 80, 66, 81, 82]], expected: ' PBQR'},
    {name: ' CVMMN!', args: [[32, 67, 86, 77, 77, 78, 33]], expected: ' CVMMN!'},
  ];
  function demap(_arr) {
    let de_charred = [];
    for (let letter of _arr) {
      de_charred.push(String.fromCharCode(letter));
    };

    let de_mapped = de_charred.join('');

    return de_mapped;
  };
  run_tests(demap, demap_tests);

  let identity_tests = [
    {name: 'SERR', args: ['SERR'], expected: 'SERR'},
    {name: ' PBQR', args: [' PBQR'], expected: ' PBQR'},
    {name: ' CVMMN!', args: [' CVMMN!'], expected: ' CVMMN!'},
  ]; 
  function identity(str) {
    const mapped = map(str);
    const demapped = demap(mapped);
    return demapped;
  };
  run_tests(identity, identity_tests);

console.log('--- manually solve some cases ---');

  const SERR = {
    map: ['SERR', [83, 69, 82, 82]],
    solve_each_charCode: {
      step_1: [83, 70],
      step_2: [69, 82],
      step_3: [82, 69],
      step_4: [82, 69]
    },
    demap: [[70, 82, 69, 69], 'FREE']
  }

  const PBQR = {
    map: [' PBQR', [32, 80, 66, 81, 82]],
    solve_each_charCode: {
      step_1: [32, 32],
      step_2: [80, 66],
      step_3: [66, 79],
      step_4: [81, 68],
      step_5: [82, 69]
    },
    demap: [[32, 66, 79, 68, 69], ' CODE']
  }

  const CVMMN = {
    map: [' CVMMN!', [32, 67, 86, 77, 77, 78, 33]],
    solve_each_charCode: {
      step_1: [32, 32],
      step_2: [67, 80],
      step_3: [86, 73],
      step_4: [77, 90],
      step_5: [77, 90],
      step_6: [78, 65],
      step_7: [33, 33]
    },
    demap: [[32, 80, 73, 90, 90, 65, 33], ' PIZZA!']
  }


console.log('--- develop & test chunks ---');


    // for (let charecter of split_str) {
    //   if ((65 < charCode) || (charCode < 90)) {
    //     if (charCode < 77) {
          
    //     }
    //   } else {
    //     new_value.push(charCode);
    //   };
    // };



console.log('--- scaffold chunks ---');

  function solution(raw_arg) {
    let arg_mapped = map(raw_arg)
    let step_1 = chunk_a();
    let step_2 = chunk_b();
    let step_3 = chunk_c();
    let result_demapped = demap(step_3)
    return result_demapped
  };
  // test_it();


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
  // test_it();


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