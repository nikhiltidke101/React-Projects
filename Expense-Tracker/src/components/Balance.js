import React,{useContext} from 'react'
import {GlobalContext }from '../context/GlobalContext';

function Balance() {
    const {transactions} = useContext(GlobalContext);

    const amount = transactions.map(transaction=>(transaction.amount));
    const balance = amount.reduce((a,b)=>(a+b),0).toFixed(2);
    return (
            <>
                <h4>Your Balance</h4>
                <h1 id="balance">${balance}</h1>
            </>
    )
}

export default Balance
