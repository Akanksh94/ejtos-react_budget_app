// Currency.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        /* update this line */
        <div className='row mt-3 currency-box'>
            <div className='col-sm'>
                <label htmlFor='currency' className='form-label'>
                    Currency:
                </label>
                <select
                    className='form-select currency-select'
                    id='currency'
                    value={currency}
                    onChange={handleCurrencyChange}
                >
                    <option value='$'>$ Dollar</option>
                    <option value='£'>£ Pound</option>
                    <option value='€'>€ Euro</option>
                    <option value='₹'>₹ Rupee</option>
                </select>
            </div>
        </div>
    );
};

export default Currency;
