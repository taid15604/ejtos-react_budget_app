import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, totalExpenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);
        setNewBudget(updatedBudget);
        dispatch({
            type: 'SET_BUDGET',
            payload: updatedBudget
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;