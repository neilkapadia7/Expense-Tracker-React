import React, {useReducer} from 'react';
import ExpenseContext from './expenseContext';
import ExpenseReducer from './expenseReducer';
import { ADD_EXPENSE, SET_LOADING } from './types';
import axios from 'axios';

const ExpenseState = props => {
    const initialState = {
        income: 30000,
        history: [],
        loading: false        
    }

    const [state, dispatch] = useReducer(ExpenseReducer,initialState);

    const addExpense = async (expense) => {

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const res = await axios.post('/api/transaction/', expense, config);
            dispatch({type: ADD_EXPENSE, payload: res.data})
            console.log('All Good In Action')
        } 
        catch (err) {
            console.log(err.message);    
        }
    }

    const getTransactions = async () => {
        dispatch({type: SET_LOADING});
        
        try {
            const res = await axios.get('/api/transaction/');

            dispatch({type: 'GET_TRANSACTIONS', payload: res.data});
        } 
        catch (err) {
            console.log(err.message)
        }
    }

   
    
    return (
        <ExpenseContext.Provider value={{
            income: state.income,
            history: state.history,
            loading: state.loading,
            addExpense,
            getTransactions
        }}>
            {props.children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseState;
