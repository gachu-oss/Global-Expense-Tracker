import { fetchExchangeRates } from './api.js';
import {
  getState,
  addExpense,
  removeExpense,
  updateRates,
  setHomeCurrency,
  setSelectedCategory,
  setLoading,
  setError
} from './state.js';
import { render } from './ui.js';

async function loadRates() {
  const state = getState();
  setLoading(true);
  setError(null);
  render(state, handleRemove);

  try {
    const rates = await fetchExchangeRates('USD');
    updateRates(rates);
  } catch (err) {
    setError('Failed to load exchange rates. Please check your connection.');
  } finally {
    setLoading(false);
    render(state, handleRemove);
  }
}
function handleAdd(e) {
  e.preventDefault();
  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const currency = document.getElementById('currency').value;
  const category = document.getElementById('category').value;

  const newExpense = {
    id: Date.now().toString(),
    description,
    amount,
    currency,
    category
  };

  addExpense(newExpense);
  document.getElementById('expense-form').reset();
  render(getState(), handleRemove);
}

function handleRemove(id) {
  removeExpense(id);
  render(getState(), handleRemove);
}

function handleHomeCurrencyChange(e) {
  setHomeCurrency(e.target.value);
  render(getState(), handleRemove);
}

function handleFilterChange(e) {
  setSelectedCategory(e.target.value);
  render(getState(), handleRemove);
}

function init() {
  document.getElementById('expense-form').addEventListener('submit', handleAdd);
  document.getElementById('home-currency').addEventListener('change', handleHomeCurrencyChange);
  document.getElementById('filter-category').addEventListener('change', handleFilterChange);

  loadRates();
}

document.addEventListener('DOMContentLoaded', init);