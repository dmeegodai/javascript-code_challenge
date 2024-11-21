function countWords(str) {
    let splitWords =  str.split(" ");
    let wordCount = splitWords.length;
    console.log(wordCount);
}

countWords("JavaScript is awesome");

function countWordsExt(str) {
    str = str.trim();
    if (str === ""){
        return 0;
    }

    let splitWords = str.split(/\s+/);
    let wordCount = splitWords.length;

    console.log(wordCount);
}

countWordsExt("  I love coding challenges");
