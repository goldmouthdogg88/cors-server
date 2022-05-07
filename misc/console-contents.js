function ifTrueGetIndex(inputArray) {
    var indidicesTrue = [];
  
    for (var i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === true) {
        indidicesTrue.push(inputArray[i]);
      } else {
        console.log("index not greater than length three(3)");
      }
    }
  }
  undefined
  ifTrueGetIndex(greaterThanThree);
  619VM4525:8 index not greater than length three(3)
  undefined
  function ifTrueGetIndex(inputArray) {
    var indidicesTrue = [];
  
    for (var i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === true) {
        indidicesTrue.push(inputArray[i]);
      } else {
        console.log("index not greater than length three(3)");
      }
    }
    return indidicesTrue;
  }
  undefined
  var trueIndicies = ifTrueGetIndex(greaterThanThree);
  619VM4556:8 index not greater than length three(3)
  undefined
  trueIndicies
  (284) [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, …]
  function ifTrueGetIndex(inputArray) {
    var indidicesTrue = [];
  
    for (var i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === true) {
        indidicesTrue.push(i);
      } else {
        console.log("index not greater than length three(3)");
      }
    }
    return indidicesTrue;
  }
  undefined
  var trueIndicies = ifTrueGetIndex(greaterThanThree);
  619VM4641:8 index not greater than length three(3)
  undefined
  trueIndicies
  (284) [2, 3, 4, 6, 8, 10, 11, 17, 22, 23, 24, 26, 30, 40, 46, 47, 54, 60, 103, 117, 169, 182, 187, 201, 204, 207, 208, 213, 218, 220, 221, 226, 232, 233, 234, 235, 236, 239, 240, 243, 244, 248, 256, 258, 259, 261, 262, 263, 264, 265, 266, 267, 270, 272, 274, 275, 276, 279, 280, 281, 283, 284, 285, 288, 289, 290, 291, 294, 300, 301, 304, 305, 307, 308, 310, 312, 314, 315, 316, 317, 320, 322, 338, 342, 343, 352, 353, 354, 358, 360, 361, 362, 368, 370, 371, 374, 380, 381, 382, 383, …]