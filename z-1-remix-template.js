{
  console.log('--- challenge remix x ---');

  /*
  ARGS: 
  RETURN: 
  BEHAVIOR:
  */

  // test cases

  console.log('--- remix description ---');

  /*
    Strategy:
      ...
    Implementation:
      ...
  */

  console.log('--- test raw material ---');

    /*
      copy-paste in the solutions and chunks you want to remix
      bring along their tests too
    */


  console.log('--- build the remix ---');
    
    
    function challenge_remix_x(num) {
      /*
        build your remix here
          call as functions any chunks you brought over
          and/or use the body of another solution as a starter
      */
    };
    run_tests(challenge_remix_x, challenge_test_cases);


console.log('--- closing notes ---')

/*
  what did you learn, what was easy, what was hard
  what language features did you learn about
  what techniques did you learn
  helpful links
*/




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