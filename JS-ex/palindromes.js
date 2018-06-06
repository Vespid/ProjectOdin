var palindromes = function(str) {
	var cleanStr=str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	cleanStr=cleanStr.toLowerCase();
	reverseStr = cleanStr.split("").reverse().join("");
	return reverseStr===cleanStr
}

module.exports = palindromes
