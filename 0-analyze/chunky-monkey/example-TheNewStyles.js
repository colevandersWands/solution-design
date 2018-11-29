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
const test_cases = [
  {name: 'a b c d, 2', args: [["a", "b", "c", "d"], 2], expected: [["a", "b"], ["c", "d"]]},
  {name: '0-5, 3', args: [[0, 1, 2, 3, 4, 5], 3], expected: [[0, 1, 2], [3, 4, 5]]},
  {name: '0-5, 2', args: [[0, 1, 2, 3, 4, 5], 2], expected: [[0, 1], [2, 3], [4, 5]]},
  {name: '0-5, 4', args: [[0, 1, 2, 3, 4, 5], 4], expected: [[0, 1, 2, 3], [4, 5]]},
  {name: '0-6, 3', args: [[0, 1, 2, 3, 4, 5, 6], 3], expected: [[0, 1, 2], [3, 4, 5], [6]]},
  {name: '0-8, 4', args: [[0, 1, 2, 3, 4, 5, 6, 7, 8], 4], expected: [[0, 1, 2, 3], [4, 5, 6, 7], [8]]},
  {name: '0-8, 2', args: [[0, 1, 2, 3, 4, 5, 6, 7, 8], 2], expected: [[0, 1], [2, 3], [4, 5], [6, 7], [8]]}
];




console.log('--- TheNewStyle\'s solution ---');
// // https://github.com/TheNewStyles/freecodecamp-algorithm-solutions/blob/master/BasicAlgorithmScripting/chunkArrayInGroups.js

  function chunky(arr, size) {
    var chunkedArr = [];
    var multiChunkedArr = [];
    
    for(var i=0; i<arr.length; i+=size){    
        chunkedArr = arr.slice(i,i+size);
        multiChunkedArr.push(chunkedArr);
        chunkedArr = [];
    }    
    
    return multiChunkedArr;
  }
  run_tests(chunky, test_cases);

console.log('--- trace implementation ---');

  function chunky_traced(arr, size) {
    var chunkedArr = [];
    var multiChunkedArr = [];
    
    var i=0;
    while (i < arr.length){    
        const start = i;
        const end = start + size;
        chunkedArr = arr.slice(start, end);

        multiChunkedArr.push(chunkedArr);

        chunkedArr = [];

        i += size
    }    
    
    return multiChunkedArr;
  }
  run_tests(chunky_traced, test_cases);


console.log('--- chunk strategy ---');

  function chunky_chunked(arr, size) {
    var multiChunkedArr = [];
    
    var i=0;
    while (i < arr.length){    

        const start = i;
        const end = start + size;

        const copied_segment = copy_segment(arr, start, end)

        multiChunkedArr.push(copied_segment);

        i += size;
    }    
    
    return multiChunkedArr;
  }
  run_tests(chunky_chunked, test_cases);

  const copy_segment_tests = [
    {name: '[1,2,3], 0, 1', args: [[1,2,3], 0, 1], expected: [1]},
    {name: '[1,2,3], 1, 2', args: [[1,2,3], 1, 2], expected: [2]},
    {name: '[1,2,3], 2, 3', args: [[1,2,3], 2, 3], expected: [3]},
    {name: '[1,2,3], 0, 2', args: [[1,2,3], 0, 2], expected: [1,2]},
    {name: '[1,2,3], 1, 3', args: [[1,2,3], 1, 3], expected: [2,3]},
    {name: '[1,2,3], 0, 3', args: [[1,2,3], 0, 3], expected: [1,2,3]},
    {name: '[1,2,3], 2, 1', args: [[1,2,3], 2, 1], expected: []},
    {name: '[1,2,3], 1, 1', args: [[1,2,3], 1, 1], expected: []},
    {name: '[1,2,3], 2, 2', args: [[1,2,3], 2, 2], expected: []},
  ];
  function copy_segment(_arr, _start, _end) {
        const copied_segment = _arr.slice(_start, _end);
        return copied_segment
  };
  run_tests(copy_segment, copy_segment_tests);

console.log('--- communicate findings ---');

  test_cases.push({name: 'a b c d, 2', args: [["a", "b", "c", "d", "e"], 2], expected: [["a", "b"], ["c", "d"]]});
  test_cases.push({name: '0-5, 3', args: [[0, 1, 2, 3, 4, 5, 6], 3], expected: [[0, 1, 2], [3, 4, 5]]})
  test_cases.push({name: '0-8, 2', args: [[0, 1, 2, 3, 4, 5, 6, 7, 8], 3], expected: [[0, 1], [2, 3], [4, 5], [6, 7], [8]]})

  function chunky_logged(arr, size, _log) {
    let log;
    if (_log)  log = { args: {arr, size} };

    var multiChunkedArr = [];
    
    var i=0;
    while (i < arr.length){    

        const start = i;
        const end = start + size;

        const copied_segment = copy_segment(arr, start, end)

        multiChunkedArr.push(copied_segment);

        i += size;
        if (_log)  log['chunk_'+(i/size)] = copied_segment;
    }    
    
    if (_log) {
      log.result = multiChunkedArr;
      return log;
    } else {
      return multiChunkedArr;
    }
  }
  run_tests(chunky_logged, test_cases, true);



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