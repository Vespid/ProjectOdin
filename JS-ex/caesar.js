var caesar = function(str,shift) {
	function shiftChar(charIndex,shift){
		shiftIndex=charIndex+shift;
		if (shiftIndex>25) return shiftIndex-25;
		else if (shiftIndex<0) return shiftIndex+25;
		else return shiftIndex;
	}
	var caps=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var finalstr="";
	for (var k=0; k<str.length; k++){
		var readChar=str[k];
		if (caps.indexOf(readChar)!=-1){
			var loc = caps.indexOf(readChar);
			loc=shiftChar(loc,shift);
			finalstr+=caps[loc];
		} else if (lower.indexOf(readChar)!=-1){
			var loc = lower.indexOf(readChar);
			loc=shiftChar(loc,shift);
			finalstr+=lower[loc];
		} else finalstr+=str[k];
	}
	return finalstr;
}

module.exports = caesar
