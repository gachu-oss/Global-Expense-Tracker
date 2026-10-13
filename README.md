# Global Expense Tracker

A lightweight browser-based expense tracker for managing spending across multiple currencies. It lets you record expenses, convert them into a selected home currency, and view totals by category in real time.

## Features

- Add expenses with description, amount, currency, and category
- Switch the home currency used for totals and displayed values
- Filter expenses by category
- Automatically fetch current exchange rates from the Open ER API
- Calculate total spending in the selected home currency
- Delete individual expenses from the list
- Shows loading and error states while exchange rates are fetched

## Technology USED

- HTML5
- CSS3
- JavaScript 
- Node.js test runner for unit tests


## Project Structure

```text
.
├── index.html
├── style.css
├── package.json
├── src/
│   ├── api.js
│   ├── main.js
│   ├── state.js
│   ├── ui.js
│   └── utils.js
├── test/
│   └── utils.test.js
└── README.md
```

## Getting Started

### Prerequisites

- A modern web browser
- Node.js (recommended for running tests)

### Run the app locally

Because this is a frontend-only app, you can serve the project with a simple static server:

```bash
cd "Global Expense Tracker"


Then open:

```text
http://127.0.0.1:5500/
```

### Run tests

```bash
npm test
```

The test suite covers currency conversion, total calculation, and category filtering logic.


## License

This project is licensed under the ISC license, as defined in `package.json`.

