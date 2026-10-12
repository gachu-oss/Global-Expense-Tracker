import { convertCurrency, calculateTotal, filterExpensesByCategory } from '../src/utils.js';

describe('utils module', () => {
  const mockRates = {
    USD: 1,
    EUR: 0.9,
    KES: 130
  };

  test('convertCurrency calculates correct conversion', () => {
    // 100 USD to EUR at USD:1, EUR:0.9 -> 90 EUR
    const result = convertCurrency(100, mockRates.USD, mockRates.EUR);
    expect(result).toBeCloseTo(90);
  });

  test('convertCurrency handles missing or invalid rates gracefully', () => {
    expect(convertCurrency(100, null, 0.9)).toBe(0);
    expect(convertCurrency(100, 1, 0)).toBe(0);
  });

  test('calculateTotal sums expenses correctly in home currency', () => {
    const expenses = [
      { amount: 100, currency: 'USD' },
      { amount: 90, currency: 'EUR' } // equivalent to 100 USD
    ];
    // Total should be 200 USD
    const totalInUSD = calculateTotal(expenses, mockRates, 'USD');
    expect(totalInUSD).toBeCloseTo(200);
  });

  test('calculateTotal handles empty expenses list', () => {
    expect(calculateTotal([], mockRates, 'USD')).toBe(0);
  });

  test('filterExpensesByCategory filters correctly by category', () => {
    const expenses = [
      { id: '1', category: 'Food' },
      { id: '2', category: 'Transport' },
      { id: '3', category: 'Food' }
    ];

    const foodOnly = filterExpensesByCategory(expenses, 'Food');
    expect(foodOnly).toHaveLength(2);

    const allExpenses = filterExpensesByCategory(expenses, 'All');
    expect(allExpenses).toHaveLength(3);
  });
});