import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const positiveTransactions = transactions.filter(transaction => transaction.amount > 0)
    const income = positiveTransactions.reduce((acc, item) => acc += item.amount, 0)

    const negativeTransactions = transactions.filter(transaction => transaction.amount <=0)
    const expense = negativeTransactions.reduce((acc, item) => acc += item.amount, 0)
    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">+${income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">-${Math.abs(expense)}</p>
                </div>
            </div>
        </div>
    )
}
