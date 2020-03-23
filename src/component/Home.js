import React, {useContext, useEffect} from 'react'
import ExpenseForm from './ExpenseForm'
import History from './History'
import expenseContext from '../context/expenseContext';
import Golden from './golden.svg';

const Home = () => {
    const ExpenseContext = useContext(expenseContext);
    const {income, history, loading, getTransactions} = ExpenseContext;

    useEffect(() => {
        getTransactions();

    }, []);

    if(loading) {
        return <center><img src={Golden} style={{opacity: 1, visibility: 'visible', height: 200, width: 250}}/> </center>
    }

    function sum(key) {
        return history.reduce((a, b) => a += (b[key] || 0), 0);
    };
    
    let bal = 30000;



    return (
        <div>
            <h1>Expense Tracker</h1>
            <h2>YOUR BALANCE</h2>
            <h1 className='balance-amount'>₹{bal += sum('amount')}.00</h1>
            
            <div className='income-expense-div'>
                <div className='income-div'>
                    <div className='content'>
                        <h4 className='income-expense-h4'>INCOME</h4>
                        <p className='income-expense-p green'>₹{income}</p>
                    </div>
                </div>
                <div className='expense-div'>
                    <div className='content'>
                        <h4 className='income-expense-h4'>EXPENSE</h4>
                        <p className='income-expense-p red'>₹{sum('amount') < 0 ? sum('amount').toString().substr(1) : '0'}</p>
                    </div>
                </div>
            </div>
            <History />
            <ExpenseForm />
        </div>
    )
}

export default Home
