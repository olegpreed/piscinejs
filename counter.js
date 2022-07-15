function count() {
	let num = -3;
	function add() {
	 num = num + 3;
	 return num;
	}
	return add;
}

let counter = count();

console.log(counter()); // Функция вернет 0
console.log(counter()); // Функция вернет 3
console.log(counter()); // Функция вернет 6
console.log(counter()); // Функция вернет 9
