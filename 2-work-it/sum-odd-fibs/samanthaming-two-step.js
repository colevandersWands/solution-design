{
console.log('--- challenge-name ---');

  // plain english problem statement



  // copied from fcc 
  let test_cases = [ 
    {name: '1000 -> 1785', args: [1000], expected: 1785},
    {name: '4000000 -> 4613732', args: [4000000], expected: 4613732},
    {name: '4 -> 5', args: [4], expected: 5},
    {name: '75024 -> 60696', args: [75024], expected: 60696},
    {name: '75025 -> 135721', args: [75025], expected: 135721},
  ];

console.log('--- user-name\'s solution ---');
  // https://github.com/samanthaming/freecodecamp-my-solutions/blob/master/intermediate-algorithm/12-sum-all-odd-fibonacci-numbers.js

  function sumFibs(num) {
    const result = [0,1];
    while(result.length <= num) {
      const last = result[result.length - 1];
      const prevLast = result[result.length - 2];
      if((last + prevLast) > num) {
        break;
      }    
      result.push(last + prevLast);
    }
    return result.reduce((accum, cur) => {
      if(cur % 2 !== 0) {
        return accum + cur;
      }
      return accum;
    }, 0);
  }
  run_tests(sumFibs, test_cases);


  /*
  ARGS: 
  RETURN: 
  BEHAVIOR:
  IMPLEMENTATION:
  */

console.log('--- trace implementation ---');

  function sumFibs_traced(num) {
    const fibs = [0,1];

    while(fibs.length <= num) {
      const last = fibs[fibs.length - 1];
      const prevLast = fibs[fibs.length - 2];

      let condition; { // = (last + prevLast) > num
      	const step_1 = last + prevLast;
      	const step_2 = step_1 > num;
      	condition = Boolean(eval(step_2));
      }
      if(condition) {
        break;
      }    
      fibs.push(last + prevLast);
    }

    let result; // = fibs.reduce((accum, cur) => {
                  //   if(cur % 2 !== 0) {
                  //     return accum + cur;
                  //   }
                  //   return accum;
                  // }, 0);
    {
      const initial = 0;
      let accum = initial;
      for (let cur of fibs) {
        if (cur % 2 !== 0) {
          accum = accum + cur;
        }
        accum = accum
      }
      result = accum;
    }
    return result;
  }
  run_tests(sumFibs_traced, test_cases);


console.log('--- chunk strategy ---');

  function sumFibs_chunked(num) {
    const fibs_starter = [0,1];

    const fibs_below_num = find_fibs_below_num(num, fibs_starter);

    const sum_of_odds = sum_odds_in_arr(fibs_below_num);

    return sum_of_odds;
  }
  // run_tests(sumFibs_chunked, test_cases);

  const find_fibs_below_num_tests = [
    {name: '3 -> [0, 1, 1, 2]', args: [3, [0, 1]], expected: [0, 1, 1, 2]},
    {name: '4 -> [0, 1, 1, 2, 3]', args: [4, [0, 1]], expected: [0, 1, 1, 2, 3]},
    {name: '5 -> [0, 1, 1, 2, 3, 5]', args: [5, [0, 1]], expected: [0, 1, 1, 2, 3, 5]},
    {name: '6 -> [0, 1, 1, 2, 3, 5]', args: [6, [0, 1]], expected: [0, 1, 1, 2, 3, 5]},
    {name: '7 -> [0, 1, 1, 2, 3, 5]', args: [7, [0, 1]], expected: [0, 1, 1, 2, 3, 5]},
    {name: '18', args: [18, [0, 1]], expected: [0, 1, 1, 2, 3, 5, 8, 13]},
    {name: '20', args: [20, [0, 1]], expected: [0, 1, 1, 2, 3, 5, 8, 13]},
    {name: '21', args: [21, [0, 1]], expected: [0, 1, 1, 2, 3, 5, 8, 13, 21]},
    {name: '22', args: [22, [0, 1]], expected: [0, 1, 1, 2, 3, 5, 8, 13, 21]},
  ];
  function find_fibs_below_num(_num, _starter) {
    // console.log(_num)
    
    // don't modify args by pointer!
    const fibs = JSON.parse(JSON.stringify(_starter));

    while(fibs.length <= _num) {
      const last = fibs[fibs.length - 1];
      const prevLast = fibs[fibs.length - 2];
      if((last + prevLast) > _num) {
        break;
      }    
      fibs.push(last + prevLast);
      // console.log(fibs)
    }
    return fibs;
  };
  run_tests(find_fibs_below_num, find_fibs_below_num_tests);

  const sum_odds_in_arr_tests = [
    {name: '[3, 5, 7] -> 15', args: [[3, 5, 7]], expected: 15},
    {name: '[true, false] -> 1', args: [[true, false]], expected: 1},
    {name: '["2", "0", "-3"] -> "0-3"', args: [["2", "0", "-3"]], expected: "0-3"},
    {name: '[-1, 1, -1, 1] -> 0', args: [[-1, 1, -1, 1]], expected: 0},
  ];
  // if you're really ambitions, try logging your chunks too
  // it's simple here, but will be trickier to use in the next step
  function sum_odds_in_arr(_arr, _log) {
    const initial = 0;
    let accum = initial;

    for (let cur of _arr) {
      if (cur % 2 !== 0) {
        accum = accum + cur;
      }
      accum = accum
    }
    return accum;
  }
  run_tests(sum_odds_in_arr, sum_odds_in_arr_tests);


console.log('--- communicate strategy ---');

  test_cases.push({name: '4 -> 6', args: [4], expected: 6});
  test_cases.push({name: '23 -> 23', args: [23], expected: 32});

  function sumFibs_logged(num, _log) {
    let log;
    if (_log) {
      log = {};
      log.args = {num};
    };

    const fibs_starter = [0,1];
    // if (_log) log._0_fibs_starter = fibs_starter;

    const fibs_below_num = find_fibs_below_num(num, fibs_starter);
    if (_log) log._1_fibs_below_num = fibs_below_num;

    const sum_of_odds = sum_odds_in_arr(fibs_below_num);
    if (_log) log._2_summed_odds = sum_of_odds;

    if (_log) {
      log.result = sum_of_odds;
      return log;
    } else {
      return sum_of_odds;
    };
  }

  run_tests(sumFibs_logged, test_cases, true);


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