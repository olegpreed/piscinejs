function fibo(i) {
	if (i == -1) {
		return (0)
	}
	else if (i == 0) {
		return (1)
	}
	else {
		return (fibo(i - 2) + fibo(i - 1))
	}
}

for (let a = 0; a < 20; a++)
console.log(fibo(a));