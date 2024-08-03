import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import './../styles/contact.css'
export default function Contact() {
    const [selectingStatus, changeSelectingStatus] = useState(false);
    const [selectValue, changeSelectValue] = useState(false);
    const changeForm = ()=>{}
    const submitForm = ()=>{}
    const selectReason = (id)=>{
        changeSelectingStatus(false);

        changeForm();
    }

  return (
      <form className='w-3/4 flex flex-col justify-around items-center' onSubmit={submitForm}>
        <label htmlFor='whySelect'>Reason for contacting:</label>
        {/* <select id='whySelect'>
            <option defaultValue value={null}>Please Select</option>
            <option value={'job'}>Job Opportunity</option>
            <option value={'contracting'}>Development Inquiry</option>
        </select> */}
        <div id='selectDiv'>
            <div className='selectOption'></div>
        </div>
            <input type='checkbox' value='job'/>
            <input type='checkbox' value={'contracting'}/>
            <input type='checkbox'/>
        <label htmlFor='emailInput'>Your Email: </label>
        <input type='text' id='emailInput' placeholder='Your email here'/>
        <label htmlFor='messageArea'>Leave a message:</label>
        <textarea id='messageArea'/>
        {/* <ReCAPTCHA/> */}
    </form>
  )
}
