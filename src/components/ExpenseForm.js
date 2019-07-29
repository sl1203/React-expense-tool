import React from 'react'

import {MdSend} from 'react-icons/md';

const ExpenseForm = ({
    charge,
    amt,
    handleCharge,
    handleAmt,
    handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} >
           <div className='form-center'>
               <div className='form-group'>
                   <label htmlFor='charge'>charge</label>
                   <input type='text' className='formControl' id ='charge' name='charge' placeholder='eg: rent' value={charge} onChange={handleCharge} />
               </div>
           </div>

           <div className='form-center'>
               <div className='form-group'>
                   <label htmlFor='amt'>Amt</label>
                   <input type='number' className='formControl' id ='amt' name='amt' placeholder='eg: 1000' value={amt} onChange={handleAmt} />
               </div>
           </div>

        <button type='submit'  className='btn'>
            submit
            <MdSend className='btn-icon' />
        </button>

    </form>
    )
}

export default ExpenseForm
