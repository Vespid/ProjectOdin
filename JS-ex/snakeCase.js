var snakeCase = function(str) {
	var cleanStr=str.toLowerCase();
	cleanStr=cleanStr.split("");

	while ("[.,\/#!$%\^&\*;:{}=\-_`~()]".indexOf(cleanStr[cleanStr.length-1])!==-1){
		cleanStr.pop();
	}
	cleanStr=cleanStr.join("");
	cleanStr=cleanStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"_");
	return cleanStr
}

module.exports = snakeCase
