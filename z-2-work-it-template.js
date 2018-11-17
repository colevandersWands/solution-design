console.log('--- name of challenge ---');

/*
	specs
*/

console.log('--- manually solve cases ---');

let case_name = [
	{a: 0, b: 3},
	{operation: 'state'},
	{operation: 'state'},
	{result: 5}
];

let case_name = [
	{a: 0, b: 3},
	{operation: 'state'},
	{operation: 'state'},
	{result: 5}
];

let case_name = [
	{a: 0, b: 3},
	{operation: 'state'},
	{operation: 'state'},
	{result: 5}
];



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

	function solution() {
		let step_1 = chunk_a();
		let step_2 = chunk_b();
		let step_3 = chunk_c();
		return step_3
	};
	test_it();


console.log('--- build/test strategy ---');

let test_cases = [{}];

{ // use this to develop your strategy manually
	let arg = null;
	let expected = null;

	let actual;
	{ // = challenge(arg);
		let chunk_1;
		{}
		let chunk_1;
		{}
		let chunk_1;
		{}
	};

	assert(actual === expected, `FAIL: ${actual} !== ${expected}`);
}


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
