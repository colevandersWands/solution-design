/*
given: test cases it should pass

given: snippet

test cases it does pass

*/
//	https://medium.com/northcoders/understanding-bugs-and-errors-in-javascript-675ebb0a109a
//	https://codeburst.io/5-common-mistakes-that-every-new-javascript-programmer-does-d0559770d345
{
console.log('--- debugging this code ---');

	// the raw code
	// copy-paste in the snippet that is causing you trouble

	// functionized for testing
	function buggy_code(_keys, _values) {
		// wrap the snippet in a function for easy testing
	}

console.log('--- tests it should pass ---');

	const expected_tests = [
		// write tests your code SHOULD pas but doesn't
		// you'll use these to validate your experiments
		// and know when you have succeeded
	];
	run_tests(buggy_code, expected_tests);

console.log('--- tests it does pass ---');

	const buggy_tests = [
		// write tests your buggy code DOES pass
		// do this with trial & error until you understand it's actual behavior
		// you will use these tests to validate all of your experiments
	];
	run_tests(buggy_code, buggy_tests);

console.log('--- traced: let nothing hide ---');

	// for refactor to while
	function buggy_code_traced(_keys, _values) {
		// trace-block your code to see it's implementation
	};
	run_tests(buggy_code_traced, expected_tests);
	run_tests(buggy_code_traced, buggy_tests);


console.log('--- logged: find the surprising steps ---');


console.log('--- experiment 1 ---')
	
	console.log('	describe what you changed in this experiment');
	function experiment_1(_keys, _values) {
		// new code with a small change
	};
	run_tests(experiment_1, expected_tests);
	run_tests(experiment_1, buggy_tests);

console.log('--- experiment n ---');
	// run as many of these little experiments as necessary
	console.log('	describe what you changed in this experiment');
	function experiment_n(_keys, _values) {
		// new code with a small change
	};
	run_tests(experiment_n, expected_tests);
	run_tests(experiment_n, buggy_tests);

console.log('--- final refactor ---');

	console.log('	describe what changed from the original code');
	function final_refactor(_keys, _values) {
		// code that passes the expected tests
		// and fails the buggy tests
	};
	run_tests(final_refactor, expected_tests);
	run_tests(final_refactor, buggy_tests);

	// // the raw code
	// original snippet, without a function wrap
	// undeclare any variables to avoid errors










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