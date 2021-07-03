import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount)
    const balance = amounts.reduce((val, acc) => val += acc, 0)
    
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${balance || "0.00"}</h1>     
        </div>
    )
}
