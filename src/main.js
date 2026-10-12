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