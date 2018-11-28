console.log('--- challenge-name ---');

// plain english problem statement



// copied from fcc 
let test_cases = [ 
  {name: '1000 -> 1785', args: [1000], expected: 1785},
  {name: '4000000 -> 4613732', args: [4000000], expected: 4613732},
  {name: '4 -> 5', args: [4], expected: 5},
  {name: '6 -> 10', args: [6], expected: 10},
  {name: '9 -> 10', args: [9], expected: 10},
  {name: '11 -> 10', args: [11], expected: 10},
  {name: '12 -> 23', args: [12], expected: 10},
  {name: '13 -> 23', args: [13], expected: 23},
  {name: '75024 -> 60696', args: [75024], expected: 60696},
  {name: '75025 -> 135721', args: [75025], expected: 135721},
];

console.log('--- user-name\'s solution ---');
// https://github.com/samanthaming/freecodecamp-my-solutions/blob/master/intermediate-algorithm/12-sum-all-odd-fibonacci-numbers.js

function sumFibs(num) {
  let prev = 0;
  let last = 1;
  let sum = 0;

  while (last <= num) {
    if (last % 2 !== 0) {
      sum += last;
    }
    last += prev;
    prev = last - prev;
  }

  return sum;
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
  let prev = 0;
  let last = 1;
  let sum = 0;

  while (last <= num) {
    let condition; 
    { // = last % 2 !== 0
      const step_1 = last % 2;
      const step_2 = step_1 !== 0;
      // the next two are behind the scenes
      const step_3 = eval(step_2)
      condition = Boolean(step_3);
    };
    if (condition) {
      sum += last;
    }
    last += prev;
    prev = last - prev;
  }

  return sum;
}
run_tests(sumFibs_traced, test_cases);


console.log('--- chunk strategy ---');

function sumFibs_chunked(num) {
  let prev = 0;
  let last = 1;
  let sum = 0;

  while (last <= num) {
    sum = update_sum(sum, last);
    last += prev;
    prev = last - prev;
  }

  return sum;
}
run_tests(sumFibs_chunked, test_cases);

let update_sum_tests = [ 
  {name: '0, 3 -> 3', args: [0, 3], expected: 3},
  {name: '0, 4 -> 0', args: [0, 4], expected: 0},
  {name: '1, 3 -> 4', args: [1, 3], expected: 4},
  {name: '1, 4 -> 1', args: [1, 4], expected: 1}
];
function update_sum(_sum, _last) {
  let condition; 
  { // = last % 2 !== 0
    const step_1 = _last % 2;
    const step_2 = step_1 !== 0;
    const step_3 = eval(step_2)
    condition = Boolean(step_3);
  };
  if (condition) {
    return _sum + _last;
  } else {
    return _sum;
  };
};
run_tests(update_sum, update_sum_tests);

console.log('--- communicate strategy ---');

test_cases.push({name: '4 -> 6', args: [4], expected: 6});
// test_cases.push({name: '5 -> 8', args: [5], expected: 8});
// test_cases.push({name: '10 -> 23', args: [10], expected: 32});
test_cases.push({name: '23 -> 23', args: [23], expected: 32});

function sumFibs_logged(num, _log) {
  let prev = 0;
  let last = 1;
  let sum = 0;
  let log;
  if (_log) {
    log = {args: {num}};
  };

  let step = 1;
  let msg;
  while (last <= num) {
    if (_log) (last % 2 !== 0) ? msg = `${sum} + ${last} = ${sum + last}` : msg = 'even';
    sum = update_sum(sum, last);
    if (_log) {
      log[last] = msg;
      step++;
    }
    last += prev;
    prev = last - prev;
  }

  if (_log) {
    log.result = sum
    return log;
  } else { 
    return sum;
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