// Функция на вход принимает две строки - сообщение (обычная строка с текстом) и символ который надо удалить из этого сообщения

function removeString(message, symbol) {
	console.log(message.split(symbol).join(''))
}


let str = "Большое и интересное сообщение"
removeString(str, "о"); // Бльше и интересне сбщение
removeString("Hello world!", "z")
removeString("А роза азора", "А")

