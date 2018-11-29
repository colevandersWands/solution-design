{
  console.log('--- challenge-name ---');

  // plain english problem statement

  // copied from fcc 
  let test_cases = [ 
    {name: 'FCC', args: ["SERR PBQR PNZC"], expected: "FREE CODE CAMP"},
    {name: 'free pizza', args: ["SERR CVMMN!"], expected: "FREE PIZZA!"},
    {name: 'free love', args: ["SERR YBIR?"], expected: "FREE LOVE?"},
    {name: 'free pizza', args: ["GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."], expected: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."},
  ];


  console.log('--- user-name\'s solution ---');
  // https://github.com/jadonOrr/freeCodeCampAlgorithms/blob/master/algorithm-projects/caesarsCipher.js

    function rot13(str) {
      return str.replace(/[A-Z]/g, char => String.fromCharCode((char.charCodeAt(0) % 26) + 65));
    }
    run_tests(rot13, test_cases);

  /*
  ARGS: 
  RETURN: 
  BEHAVIOR:
  IMPLEMENTATION:
  */

  console.log('--- trace implementation ---');

    function rot13_traced(str) {
      let result; 
      { // = str.replace(/[A-Z]/g, String.fromCharCode((char.charCodeAt(0) % 26) + 65));
        const step_1 = (char) => {
              // String.fromCharCode((char.charCodeAt(0) % 26) + 65)
              const step_a = char.charCodeAt(0);
              const step_b = step_a % 26;
              const step_c = step_b + 65;
              const step_d = String.fromCharCode(step_c);
              return step_d;
            };
        const step_2 = str.replace(/[A-Z]/g, step_1);
        result = step_2;
      }; 
      return result;
    }
    run_tests(rot13_traced, test_cases);


  console.log('--- chunk strategy ---');

    function rot13_chunked(str) {
      let result;
      result = str.replace(/[A-Z]/g, rot13_decrypt_letter);
      return result;
    }
    run_tests(rot13_chunked, test_cases);

    const rot13_decrypt_letter_tests = [
      {name: 'A -> N', args: ['A'], expected: 'N'},
      {name: 'B -> O', args: ['B'], expected: 'O'},
      {name: 'C -> P', args: ['C'], expected: 'P'},
      {name: 'N -> A', args: ['N'], expected: 'A'},
      {name: 'O -> B', args: ['O'], expected: 'B'},
      {name: 'P -> C', args: ['P'], expected: 'C'},
    ];
    function rot13_decrypt_letter(char) {
      // String.fromCharCode((char.charCodeAt(0) % 26) + 65)
      const step_1 = char.charCodeAt(0);
      const step_2 = step_1 % 26;
      const step_3 = step_2 + 65;
      const step_4 = String.fromCharCode(step_3);
      return step_4;
    };
    run_tests(rot13_decrypt_letter, rot13_decrypt_letter_tests);

  console.log('--- communicate findings ---');

    test_cases.push({name: 'free pizza', args: ["SERR CVMMN!"], expected: "FREE PIZZA?"})

    // all the interesting stuff happens between JS's implementation 
    //  of the regex interpreter & native .replace implementation
    // there is nothing really to trace
    function rot13_logged(str, _log) {
      let log;
      if (_log) log = {args: {str}};

      const result = str.replace(/[A-Z]/g, rot13_decrypt_letter);
      if (_log) {
        log.result = result;
        return log;
      } else {
        return result;
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