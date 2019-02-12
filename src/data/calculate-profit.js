export const calculateMaxProfit = priceArr => {
  let highestProfit = 0;
  let iterationCount = 0;
  for (let a = 0; a < priceArr.length; a++) {
    if (priceArr[a] > priceArr[a - 1]) {
      continue;
    }
    iterationCount++;
    for (let b = a + 1; b < priceArr.length; b++) {
      if (priceArr[b] < priceArr[b - 1]) {
        continue;
      }
      iterationCount++;
      const earlierStockPrice = priceArr[Math.min(a, b)];
      const laterStockPrice = priceArr[Math.max(a, b)];
      const currentProfit = laterStockPrice - earlierStockPrice;
      highestProfit = Math.max(highestProfit, currentProfit);
    }
  }
  return {
    highestProfit,
    iterationCount
  };
};

export const formatNumber = int => {
  let number = int.toFixed(0);
  if (number.length > 3) {
    number =
      number.substr(0, number.length - 3) +
      "," +
      number.substr(number.length - 3, 3);
  }
  return number;
};
