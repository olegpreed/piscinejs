function fibo(index) {
	if (index == -1) {
		return (0)
	}
	else if (index == 0) {
		return (1)
	}
	else {
		return (fibo(index - 2) + fibo(index - 1))
	}
}
