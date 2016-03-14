var selectElementsStartingWithA = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++){
    if (array[i].charAt(0) === 'a' || array[i].charAt(0) === 'A'){
      results.push(array[i]);
    }
  }
  return results;
};


var selectElementsStartingWithVowel = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++){
    if (array[i].charAt(0) === 'a' || array[i].charAt(0) === 'e' || array[i].charAt(0) === 'i' || array[i].charAt(0) === 'o' || array[i].charAt(0) === 'u'){
      results.push(array[i]);
    }
  }
  return results;
};

var removeNullElements = function(array) {
  return array.filter(function(n){ return n !== null; });
};

var removeNullAndFalseElements = function(array) {
  return array.filter(function(n){ return n !== null && n !== false; });
};

var reverseWordsInArray = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    results.push(array[i].split('').reverse().join(''));
  }
  return results;
};

var everyPossiblePair = function(array) {
  return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
  return 'Write your method here';
}

var addElementToBeginning = function(array, element) {
  return 'Write your method here';
}

var sortByLastLetter = function(array) {
  return 'Write your method here';
}

var getFirstHalf = function(string) {
  return 'Write your method here';
}

var makeNegative = function(number) {
  return 'Write your method here';
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
