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
    {name: 'FCC', args: ["SERR PBQR PNZC"], expected: "FREE CODE CAMP"},
    {name: 'free pizza', args: ["SERR CVMMN!"], expected: "FREE PIZZA!"},
    {name: 'free love', args: ["SERR YBIR?"], expected: "FREE LOVE?"},
    {name: 'free pizza', args: ["GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."], expected: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."},
  ];


console.log('--- user-name\'s solution ---');
  // https://github.com/TheNewStyles/freecodecamp-algorithm-solutions/blob/master/JavaScriptAlgorithmsAndDataStructureProjects/rot13.js

  function rot13(str) {
    str = str.toUpperCase();  
    var charCodeAtIndexI = 0;
    var newString = "";
    
    for(var i=0; i<str.length; i++){
      if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
        newString += str.charAt(i);
      }
      else if (str.charCodeAt(i) > 77) {
        newString += String.fromCharCode(str.charCodeAt(i) - 13);
      }
      else {
        newString += String.fromCharCode(str.charCodeAt(i) + 13);
      }
    }
    
    return newString;
  }
  run_tests(rot13, test_cases);

console.log('--- trace implementation ---');

  function rot13_traced(str) {
    str = str.toUpperCase();  
    var charCodeAtIndexI = 0; // ?
    var newString = "";
    
    var i=0;
    while (i<str.length){
      const current_charCode = str.charCodeAt(i);
      const current_char = str.charAt(i);

      let condition_1;
      { // = str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90
        const step_1 = current_charCode < 65;
        const step_2 = current_charCode > 90;
        const step_3 = step_1 || step_2;
        condition_1 = step_3;
      }
      if (condition_1) { // is not a capital letter
        newString += current_char;
      }
      else if (str.charCodeAt(i) > 77) { // is in the second half of the alphabet
        const new_charCode = current_charCode - 13;
        newString += String.fromCharCode(new_charCode);
      }
      else { // is in the first half of the alphabet
        const new_charCode = current_charCode + 13;
        newString += String.fromCharCode(new_charCode);
      }
      i++;
    }
    
    return newString;
  }
  run_tests(rot13_traced, test_cases);


console.log('--- chunk strategy ---');

  function rot13_chunked(str) {
    str = str.toUpperCase();  
    var charCodeAtIndexI = 0; // ?
    var newString = "";
    
    var i = 0;
    while (i < str.length){
      const current_charCode = str.charCodeAt(i);

      // double negatives are difficult to trace & debug
      const not_capital_letter = is_not_capital_letter(current_charCode);

      newString += find_next_letter(not_capital_letter, current_charCode);

      i++;
    }
    
    return newString;
  }
  run_tests(rot13_chunked, test_cases);

  const find_next_letter_tests = [
    {name: 'true, 64', args: [true, 64], expected: '@'},
    {name: 'false, 64', args: [false, 64], expected: 'M'},
    {name: 'true, 66', args: [true, 66], expected: 'B'},
    {name: 'false, 66', args: [false, 66], expected: 'O'},
    {name: 'true, 89', args: [true, 89], expected: 'Y'},
    {name: 'false, 89', args: [false, 89], expected: 'L'},
    {name: 'true, 91', args: [true, 91], expected: '['},
    {name: 'false, 91', args: [false, 91], expected: 'N'},
  ];
  function find_next_letter(_is_a_cap, _charCode) {
    let result;

    if (_is_a_cap) { // is not a capital letter
      result = String.fromCharCode(_charCode);
    }
    else if (_charCode > 77) { // is in the second half of the alphabet
      const new_charCode = _charCode - 13;
      result = String.fromCharCode(new_charCode);
    }
    else { // is in the first half of the alphabet
      const new_charCode = _charCode + 13;
      result = String.fromCharCode(new_charCode);
    }

    return result;
  };
  run_tests(find_next_letter, find_next_letter_tests);

  const is_not_capital_letter_tests = [
    // oops. args are codes, not letters
    // {name: "!", args: ['!'], expected: true},
    // name: "4", args: [4], expected: true},
    {name: "23", args: [23], expected: true},
    {name: "91", args: [91], expected: true},
    {name: "70", args: [70], expected: false},
  ];
  function is_not_capital_letter(_charCode) {
    const step_1 = _charCode < 65;
    const step_2 = _charCode > 90;
    const step_3 = step_1 || step_2;
    result = step_3;
    return result;
  };
  run_tests(is_not_capital_letter, is_not_capital_letter_tests);

  { // a more complex chunking that needed much refactoring
    function rot13_chunked_complicated(str) {
      str = str.toUpperCase();  
      let charCodeAtIndexI = 0; // ?
      let newString = "";
      
      let i=0;
      while (i<str.length){
        const current_charCode = str.charCodeAt(i);
        const current_char = str.charAt(i);

        const not_capital_letter = is_not_capital_letter(current_charCode);

        if ( not_capital_letter ) {
          newString += current_char;
        } else {
          newString += decrypt_from_charCode( current_charCode );
        }

        i++;
      }
      
      return newString;
    }
    run_tests(rot13_chunked_complicated, test_cases);

    const decrypt_from_charCode_tests = [
      {name: '91', args: [91], expected: 'N'},
      {name: '80', args: [80], expected: 'C'},
      {name: '75', args: [75], expected: 'X'},
      {name: '64', args: [64], expected: 'M'},
    ];
    function decrypt_from_charCode(_charCode) {
      let new_charCode;
      if (_charCode > 77) {
        new_charCode = _charCode - 13;
      } else {
        new_charCode = _charCode + 13;
      };

      const result = String.fromCharCode(new_charCode);
      return result;
    };
    run_tests(decrypt_from_charCode, decrypt_from_charCode_tests);
  };

console.log('--- communicate strategy ---');

  test_cases.push({name: 'free pizza', args: ["STRR CVMMN?"], expected: "FREE PIZZA!"});
  test_cases.push({name: 'free love', args: ["SSERR YBR?"], expected: "FREE LOVE?"});

  function rot13_logged(str, _log) {
    let log;
    if (_log) log = {args: {str}};

    str = str.toUpperCase();  
    var charCodeAtIndexI = 0; // ?
    var newString = ""; 
    
    var i = 0;
    while (i < str.length){

      const current_charCode = str.charCodeAt(i);
      // double negatives are difficult to trace & debug
      const is_not_a_capital = is_not_capital_letter(current_charCode);
      newString += find_next_letter(is_not_a_capital, current_charCode);
      if (_log) {
        log["step_" + i] = {
            letter: str.charAt(i),
            charCode: current_charCode,
            decrypted: !is_not_a_capital,
            newString: newString
          };
      };

      i++;
    }
    
    if (_log) {
      log.result = newString;
      return log;
    } else {
      return newString;
    };
  }
  run_tests(rot13_logged, test_cases, true);



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