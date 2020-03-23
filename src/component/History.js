import React, {useContext, useEffect, useState} from 'react';
import expenseContext from '../context/expenseContext';

const History = () => {
    const ExpenseContext = useContext(expenseContext);
    const {history} = ExpenseContext;

    const [hist, setHist] = useState([]);
    
    useEffect(() => {
        setHist(history);
        
        // eslint-disable-next-line
    }, [history]);

    
    if(hist.length === 0 ) {
        return ' ';
    }
     

    return (
        <div>
            <h3 className='title-h3'>History</h3>
            {hist.map((his => 
                <div key={his._id}>
                    <div className={his.amount > 0 ? 'history border-green' : 'history border-red'} >
                        <p className='history-title'>{his.text}</p> <p className='history-amount'>{his.amount}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default History
