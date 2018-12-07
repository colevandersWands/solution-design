{
	console.log('--- name of challenge ---');

	// plain english description

	/*
		specs
	*/

	const test_cases = [ 
	  {name: '4 -> 5', args: [4], expected: 5},
	  {name: '6 -> 10', args: [6], expected: 10},
	  {name: '9 -> 10', args: [9], expected: 10},
	  {name: '11 -> 10', args: [11], expected: 10},
	  {name: '12 -> 10', args: [12], expected: 10},
	  {name: '13 -> 23', args: [13], expected: 23},
	  {name: '1000 -> 1785', args: [1000], expected: 1785},
	  {name: '4000000 -> 4613732', args: [4000000], expected: 4613732},
	  {name: '75024 -> 60696', args: [75024], expected: 60696},
	  {name: '75025 -> 135721', args: [75025], expected: 135721},
	];

	console.log('--- manually solve cases ---');

	// find a good strategy by stepping through some examples by hand. 
	//	save your steps to revisit things you've tried

	const _4_5 = {
		arg: 4,
		find_fibs: [0,1,1,2,3],
		select_odds: [1,1,3],
		add_them: 5
	};

	const _6_10 = {
		arg: 6,
		find_fibs: [0,1,1,2,3,5,8],
		select_odds: [1,1,3,5],
		sum_them: 10
	};

	// ?  something's wrong
	const _9_10_a = {
		arg: 9,
		find_fibs: [0,1,1,2,3,5,8,13,21,34],
		select_odds: [1,1,3,5,13,21],
		sum_them: 43
	};

	// new strategy
	const _9_10_b = {
		arg: 9,
		find_fibs_lesseq_arg: [0,1,1,2,3,5,8],
		select_odds: [1,1,3,5],
		sum_them: 10
	};

	const _12_10 = {
		arg: 12,
		find_fibs_lesseq_arg: [0,1,1,2,3,5,8],
		select_odds: [1,1,3,5],
		sum_them: 10
	};

	const _13_23 = {
		arg: 13,
		find_fibs_lesseq_arg: [0,1,1,2,3,5,8,13],
		select_odds: [1,1,3,5,13],
		sum_them: 23
	};


	console.log('--- develop & test chunks ---');

		const find_fibs_lesseq_arg_tests = [
			{name: '1', args: [1], expected: [0,1,1]},
			{name: '2', args: [2], expected: [0,1,1,2]},
			{name: '4', args: [4], expected: [0,1,1,2,3]},
			{name: '5', args: [5], expected: [0,1,1,2,3,5]},
			{name: '12', args: [12], expected: [0,1,1,2,3,5,8]},
			{name: '13', args: [13], expected: [0,1,1,2,3,5,8,13]}
		];
		function find_fibs_lesseq_arg(_num) {
			let fibs = [0,1];
			let next = fibs[0] + fibs[1];
			let proceed = true;
			do { 
				next = fibs[fibs.length - 1] + fibs[fibs.length - 2];
				if (next <= _num) {
					fibs.push(next);
				} else {
					proceed = false;
				};
			} while (proceed);
			return fibs
		};
		run_tests(find_fibs_lesseq_arg, find_fibs_lesseq_arg_tests);
		/*function OFF_BY_ONE_find_fibs_lesseq_arg(_num) {
			let fibs = [0,1];
			let next = fibs[0] + fibs[1];
			while (next <= _num) {
				next = fibs[fibs.length - 1] + fibs[fibs.length - 2];
				fibs.push(next);
			};
			return fibs
		};*/

		const select_odds_tests = [
			{name: '[3, 5, 6, 9]', args: [[3,5,6,9]], expected: [3,5,9]},
			{name: '[0, 2, 2.5]', args: [[0,2,2.5]], expected: [2.5]},
			{name: '[0, 1, 1, 2]', args: [[0,1,1,2]], expected: [1,1]},
			{name: '[0, 1, 1, 2, 3]', args: [[0,1,1,2,3]], expected: [1,1,3]},
		];
		function select_odds(_arr) {
			const odds_only = [];
			for (let item of _arr) {
				if (item % 2 !== 0) {
					odds_only.push(item);
				};
			};
			return odds_only;
		};
		run_tests(select_odds, select_odds_tests);

		const sum_array_tests = [
			{name: '[1, 2, -2]', args: [[1,2,-2]], expected: 1},
			{name: '[1, 1, 2]', args: [[1,1,2]], expected: 4},
			{name: '[1, 1, 3]', args: [[1,1,3]], expected: 5},
			{name: '["1", true, 2]', args: [["1",true,2]], expected: "01true2"},
			{name: '[true, false, -true]', args: [[true, false, -true]], expected: 0}
		];
		function sum_array(_arr) {
			let sum = 0;
			for (let item of _arr) {
				sum += item;
			};
			return sum;
		};
		run_tests(sum_array, sum_array_tests);


	console.log('--- scaffold chunks ---');

		function sum_odd_fibs_lesseq_arg(_num) {
			const arr_o_fibs = find_fibs_lesseq_arg(_num);

			const odds_only = select_odds(arr_o_fibs);

			const sum = sum_array(odds_only);

			return sum;
		};
		run_tests(sum_odd_fibs_lesseq_arg, test_cases);


	console.log('--- closing notes ---');


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