function one(callback) {
	if (callback && typeof callback === 'function') {
		return (callback(1));
	} else return 1;
}
function two(callback) {
	if (callback && typeof callback === 'function') {
		return (callback(2));
	} else return 2;
}
function three(callback) {
	if (callback && typeof callback === 'function') {
		return (callback(3));
	} else return 3;
}
function four(callback) {
	if (callback && typeof callback === 'function') {
		return (callback(4));
	} else return 4;
}
function five(callback) {
	if (callback && typeof callback === 'function') {
		return (callback(5));
	} else return 5;
}
function six(callback) {
	if (callback && typeof callback === 'function') {
		return (callback(6));
	} else return 6;
}
function seven(callback) {
	if (callback && typeof callback === 'function') {
		return (callback(7));
	} else return 7;
}
function eight(callback) {
	if (callback && typeof callback === 'function') {
		return (callback(8));
	} else return 8;
}
function nine(callback) {
	if (callback && typeof callback === 'function') {
		return (callback(9));
	} else return 9;
}

function plus(a) {
	return (b) => {
		return (a + b);
	}
}

function minus(a) {
	return (b) => {
		return (a - b);
	}
}

function divide(a) {
	return (b) => {
		return (a / b);
	}
}

function mult(a) {
	return (b) => {
		return (a * b);
	}
}
