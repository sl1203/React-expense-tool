import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md';

const ExpenseItem = ({expense, handleEdit, handleDelete}) => {
    const {id, charge, amt} = expense;
    return (
        <li className='item'>
            <div className='info'>
                <span className="expense">{charge} </span>
                <span className="amount">{amt} </span>
            </div>
            <div>
                <button className='edit-btn' onClick={()=> handleEdit(id)}>
                    <MdEdit />
                </button>
                <button className='delete-btn' onClick={() =>handleDelete(id)}>
                    <MdDelete />
                </button>

            </div>
        </li>
    )
}

export default ExpenseItem
