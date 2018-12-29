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

  // tests & function to map from problem space to solution space
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

  // tests & function to map back from solution space to problem space
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

  // proof that mapping & demapping work as intended
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

  // work a solution manually like in work-it
  // the solution should operate on the mapped values

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
    demap: [[32, 67, 79, 68, 69], ' CODE']
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

  // develop the chunks you identified in the previous steps

  const decrypt_charCode_tests = [
    {name: '64', args: [64], expected: 64},
    {name: '65', args: [65], expected: 78},
    {name: '77', args: [77], expected: 90},
    {name: '78', args: [78], expected: 65},
    {name: '90', args: [90], expected: 77},
    {name: '91', args: [91], expected: 91}
  ];
  function decrypt_charCode(_charCode) {
    let decrypted;

    if ((65 <= _charCode) && (_charCode <= 90)) {
      if (_charCode > 77) {
        decrypted = _charCode - 13;
      } else {
        decrypted = _charCode + 13;
      };
    } else {
      decrypted = _charCode;
    };

    return decrypted;
  };
  run_tests(decrypt_charCode, decrypt_charCode_tests);


console.log('--- scaffold mapped solution ---');

  // scaffold your chunks into a solution within mapped values

  const rot13_mapped_tests = [
    {name: 'FREE', args: [[83, 69, 82, 82]], expected: [70, 82, 69, 69]},
    {name: ' CODE', args: [[32, 80, 66, 81, 82]], expected: [32, 67, 79, 68, 69]},
    {name: ' PIZZA!', args: [[32, 67, 86, 77, 77, 78, 33]], expected: [32, 80, 73, 90, 90, 65, 33]},
    {name: 'CAMP', args: [map('PNZC')], expected: map('CAMP')},
    {name: 'LOVE?', args: [map('YBIR?')], expected: map('LOVE?')},
  ];
  function rot13_mapped(mapped_arg) {
    const mapped_solution = [];

    for (let item of mapped_arg) {
      const decrypted_charCode = decrypt_charCode(item);
      mapped_solution.push(decrypted_charCode);
    };

    return mapped_solution;
  };
  run_tests(rot13_mapped, rot13_mapped_tests);

console.log('--- add in mapping & demapping ---')

  // wrap your mapped solution in map() & demap()
  // put that in a new function, and run it on the primary test cases

  function rot13(_str) {
    const mapped_arg = map(_str);

    const mapped_sol = rot13_mapped(mapped_arg);

    const raw_solution = demap(mapped_sol);

    return raw_solution;
  };
  run_tests(rot13, test_cases);


console.log('--- log strategy ---')

  function rot13_logg(_str) {                          const log = [{arg: _str}}];
    const mapped_arg = map(_str);                 log.push({mapped_arg});

    const mapped_sol = rot13_mapped(mapped_arg);  log.push({mapped_sol});

    const raw_solution = demap(mapped_sol);       log.push({raw_solution});

    return {result: raw_solution, log};
  };
  log_reports(rot13_logg, test_cases);


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