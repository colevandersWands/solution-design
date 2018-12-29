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

  
  console.log('--- log strategy ---');
    
    
    function challenge_remix_x_logg(num) {                const log = [{arg: num}];
      /*
        build your remix here
          call as functions any chunks you brought over
          and/or use the body of another solution as a starter
      */

      return {result, log};
    };
    log_reports(challenge_remix_x_logg, challenge_test_cases);


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