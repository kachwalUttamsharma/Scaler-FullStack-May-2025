// Given an array of customer transaction objects, compute:
// Total number of transactions
// Total and average transaction amount
// Grouped transactions per day
// Grouped transactions per customer

const transactions = [
  { customerId: 1, amount: 100, date: "2024-03-01" },
  { customerId: 2, amount: 150, date: "2024-03-01" },
  { customerId: 1, amount: 200, date: "2024-03-02" },
  { customerId: 3, amount: 50, date: "2024-03-02" },
  { customerId: 2, amount: 120, date: "2024-03-03" },
];

const totalTransactions = transactions.length;

const totalAmount = transactions.reduce((prev, item) => prev + item.amount, 0);

const averageTransactionAmount = totalAmount / totalTransactions;

const transactionsPerDay = transactions.reduce((prev, item) => {
  if (!prev[item.date]) {
    prev[item.date] = [];
  }
  prev[item.date].push(JSON.stringify(item));
  return prev;
}, {});

const transactionsPerCustomer = transactions.reduce((prev, item) => {
  if (!prev[item.customerId]) {
    prev[item.customerId] = [];
  }
  prev[item.customerId].push(JSON.stringify(item));
  return prev;
}, {});

const summary = {
  totalAmount,
  totalTransactions,
  averageTransactionAmount,
  transactionsPerDay,
  transactionsPerCustomer,
};

console.log(summary);
