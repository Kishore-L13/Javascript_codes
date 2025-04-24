// Greedy Algorithm
// Best Time to Buy and Sell Stock II (LeetCode) - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// Example
// Given the array [7, 1, 5, 3, 6, 4]:

// Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5 - 1 = 4.
// Buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6 - 3 = 3.
// Total profit = 4 + 3 = 7.

// Given the array [1, 2, 3, 4, 5]:

// Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5 - 1 = 4.
// Total profit = 4.

// Given the array [7, 6, 4, 3, 1]:

// No transactions are done, so the total profit is 0.

const maxProfit = prices => {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
      let currentProfit = prices[i] - minPrice;
  
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      }
    }
    return maxProfit;
  };
  
  const maxProfit2 = function (prices) {
    let sum = 0;
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
        sum = sum + prices[i] - prices[i - 1];
      }
    }
    return sum;
  };
  
  console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
  console.log(maxProfit2([7, 1, 5, 3, 6, 4])); // 7
  console.log(maxProfit2([7, 6, 4, 3, 1])); // 0
  console.log(maxProfit([7, 6, 4, 3, 1])); // 0