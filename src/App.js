import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionsList } from './components/TransactionsList';
import { AddTransactions } from './components/AddTransactions';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <AddTransactions />
      </div>

    </GlobalProvider>
  );
}

export default App;
