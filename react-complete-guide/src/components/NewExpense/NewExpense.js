import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const startIsEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        stopEditingHandler();
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startIsEditingHandler}>Add new Expense</button>}
            {isEditing &&
            <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler} 
                onCancel={stopEditingHandler}
            />
            }
        </div>
    )
}

export default NewExpense;