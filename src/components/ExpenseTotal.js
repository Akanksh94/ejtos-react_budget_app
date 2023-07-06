import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            {/* update this line */}
            <span>Spent so far: {currency}{totalExpenses}</span>
            {/* end of update */}
        </div>
    );
};

export default ExpenseTotal;