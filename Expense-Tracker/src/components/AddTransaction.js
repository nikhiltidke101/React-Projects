import React, {useState, useContext} from 'react';
import {GlobalContext }from '../context/GlobalContext';

function Transaction() {
    const { addTransaction } = useContext(GlobalContext);

    const [text, setValue] = useState();
    const [amount, setAmount] = useState(0);

    const onSubmit = e =>{
        e.preventDefault();
        
        const newTransaction ={
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount,
        }

        addTransaction(newTransaction);
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>setValue(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn" type="submit">Add transaction</button>
            </form>
        </>
    )
}

export default Transaction
