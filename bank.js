// Напишите функцию банкомат которая принимает на вход число и возвращает объект в формате  {номинал_купюры : количество_купюр}.
// Если банкомат не может выдать данную сумму, то выводится ошибка 'Incorrect value'.
// Купюры должны выдаться оптимальным образом (вместо 5 купюр номиналом 1000 выдается одна 5000).
// За раз банкомат может выдавать не более 20 купюр, если купюр для выдачи не хватает то выводится ошибка 'Limit exceeded'

function atm(sum) {
  let limit = 0;
  let i = 0;
  let exchange = { 5000: 0, 2000: 0, 1000: 0, 500: 0, 200: 0, 100: 0, 50: 0 };
  const banknots = [5000, 2000, 1000, 500, 200, 100, 50];

  if (sum % 50) return "Incorrect value";
  else {
    while (i < banknots.length) {
      while (sum >= banknots[i]) {
        sum -= banknots[i];
        exchange[banknots[i]]++;
        limit++;
      }
      i++;
    }
    if (limit > 20) {
      return "Limit exceeded";
    }
    for (const elem in exchange) {
      if (exchange[elem] === 0) delete exchange[elem];
    }
    return exchange;
  }
}

console.log(atm(22450)); // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
console.log(atm(2570)); // Incorrect value
console.log(atm(100050)); // limit exceeded
