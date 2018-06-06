function add (x,y) {
	return x+y;
}

function subtract (x,y) {
	return x-y;
}

function sum (arr) {
	var total=0;
	for (var k=0; k<arr.length; k++){
		total+=arr[k];
	}
	return total;
}

function multiply (arr) {
	var total=1;
	for (var k=0; k<arr.length; k++){
		total*=arr[k];
	}
	return total;
}

function power(x,y) {
	return x**y;
}

function factorial(x) {
	if (x===0) return 0;
	var total=1;
	for (var k=x; k>0; k--){
		total*=k;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}