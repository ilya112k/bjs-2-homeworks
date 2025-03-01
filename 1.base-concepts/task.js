"use strict"
function solveEquation(a, b, c) {
  const discr = b ** 2 - 4*a*c;
  let arr = [];

  if (discr < 0) {
    return arr;
  }

  if (discr === 0) {
    const result = -b/(2*a);
    arr.push(result);
    return arr;
  }

  if (discr > 0) {
    const result1 = (-b + Math.sqrt(discr) )/(2*a);
    const result2 = (-b - Math.sqrt(discr) )/(2*a);
    arr.push(result1, result2);
    return  arr;
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const monthPercent = (percent / 100) / 12;
    const body= amount - contribution;
    const payment = body * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1)));
    const result = +(payment * countMonths).toFixed(2);
    return result;
}