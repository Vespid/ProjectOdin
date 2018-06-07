function translate(str) {
	var vowels=["a","e","i","o","u"];
	strList=str.split(" ");
	finalList=[];
	for (var k=0; k<strList.length; k++){
		str=strList[k];
		if (vowels.indexOf(str[0])===-1){
			str+=str[0]+"ay";
			str=str.substr(1);
		} else str+="ay";
		finalList.push(str);	
	}
	finalList=finalList.join(" ");
	return finalList;
}


module.exports = {
	translate
}

