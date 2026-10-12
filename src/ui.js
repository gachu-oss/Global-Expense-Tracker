import { convertCurrency,calculateTotal,filterExpensesByCategory } from './utils';

export function render(state, onRemove) {
  renderStatus(state);
  renderExpenses(state, onRemove);
  renderTotal(state);
}

function renderStatus(state) {
  const statusEl = document.getElementById('status-message');
  if (state.loading) {
    statusEl.textContent = 'Fetching latest exchange rates...';
    statusEl.className = 'status-message loading';
  } else if (state.error) {
    statusEl.textContent = state.error;
    statusEl.className = 'status-message error';
  } else {
    statusEl.className = 'status-message hidden';
  }
}