import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionsList = () => {
    const context = useContext(GlobalContext);
    const { transactions } = context
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}></Transaction>
                ))}
            </ul>
        </div>
    )
}
