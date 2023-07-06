import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [inputValue, setInputValue] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        if (value > 20000) {
            alert("The value cannot exceed 20,000");
            return;
        }
        if (value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        setInputValue(value);
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    };

    return (
        <div className='alert alert-secondary'>
            {/* update this line */}
            <span>Budget: {currency}</span>
            {/* end of update */}
            <input
                type="number"
                step="10"
                value={inputValue}
                onChange={handleInputChange}
                style={{ width: "30%", marginLeft: "5px" }}
            />
        </div>
    );
};

export default Budget;

