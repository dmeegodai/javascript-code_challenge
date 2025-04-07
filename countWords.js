function countWords(str) {
  let splitWords = str.split(" ");
  let wordCount = splitWords.length;
  console.log(wordCount);
}

//countWords("JavaScript is awesome");

function countWordsExt(str) {
  str = str.trim();
  if (str === "") {
    return 0;
  }

  let splitWords = str.split(/\s+/);
  let wordCount = splitWords.length;

  console.log(wordCount);
}

//countWordsExt("  I love coding challenges");

function compressString(str) {
  let result = [];
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result.push(str[i - 1] + count);
      count = 1;
    }
  }
  let compressedString = result.join("");
  return compressedString.length < str.length ? compressedString : str;
}
//console.log(compressString("aaabccddddee"));
//console.log(compressString("abc"));

function findLongestWord(str) {
  let longestWord = "";
  let word = str.split(" ");

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }
  return {
    Word: longestWord,
    length: longestWord.length,
  };
}
console.log(findLongestWord("Last week we bought two iphones my wife got an iphone 16 pro and i got an iphone 16 plus"));

