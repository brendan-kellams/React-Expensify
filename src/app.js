import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import expenses, { addExpense } from './actions/expenses';
import filters, { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

//addExpense -> Water bill
store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
//addExpense -> Gas bill
store.dispatch(addExpense({ description: 'Gas Bill', createAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

//getVisibleExpenses -> print visibles ones to screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));

// class OldSyntax {
//   constructor() {
//     this.name = 'Mike';
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi my name is ${this.name}`;
//   }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// //----------------------

// class NewSyntax {
//   name = 'Jen';
//   getGreeting = () => {
//     return `Hi my name is ${this.name}`;
//   }
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());