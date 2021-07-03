import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = (props) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const { transaction } = props;
    const isMinus = transaction.amount <= 0
    return (
        <li className={ isMinus ? "minus" : "plus"}>
            {transaction.text} <span> { isMinus ? "-" : ""} ${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
