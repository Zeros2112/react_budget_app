import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value);
        if (isNaN(newBudgetValue) || newBudgetValue < 0 || newBudgetValue > 20000) {
            alert("Budget should be a numeric value between 0 and 20,000.");
            setNewBudget(budget);
        } else if (newBudgetValue < totalExpenses) {
            alert("Budget cannot be lower than the total spending.");
            setNewBudget(budget);
        } else {
            setNewBudget(newBudgetValue);}
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
        </div>
    );
};
export default Budget;
