import React, {useState, useContext} from 'react';
import expenseContext from '../context/expenseContext';

const ExpenseForm = () => {
    const ExpenseContext = useContext(expenseContext);
    const {addExpense} = ExpenseContext;

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        console.log({text, amount});
        const newTransaction = {
            text,
            amount: +amount
        }
        addExpense(newTransaction);
        
        setAmount('');
        setText('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3 className='title-h3'>Add new transaction</h3>
                <label className='form-title'>Text</label><br />
                <input type='text' value={text} placeholder='Enter Text' onChange={(e) => setText(e.target.value)} required/>

                <label className='form-title'>Amount</label><br />
                <input type='number' value={amount} placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} required/>

                <input type='submit' value='Add transaction'/>
            </form>
        </div>
    )
}

export default ExpenseForm
