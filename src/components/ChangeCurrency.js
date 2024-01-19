import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
    const {dispatch,currency } = useContext(AppContext);
    return (
                <select className="alert alert-warning" id="budgetCurrency" onChange={(event) => dispatch({ type: 'CHG_CURRENCY', payload: event.target.value })}> 
                    <option defaultValue value="£">Currency (£ Pound)</option>
                    <option value="$">Currency ($ Dollar)</option>
                    <option value="€">Currency (€ Euro)</option>
                    <option value="₹">Currency (₹ Ruppee)</option>
                </select>


    );
};
export default ChangeCurrency;