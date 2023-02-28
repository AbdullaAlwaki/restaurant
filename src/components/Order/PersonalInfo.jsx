import React from 'react';
import { useContext } from 'react';
import { dataContext } from '../Context/context';

export default function PersonalInfo(props){
    
  const {dispatch} = useContext(dataContext);
  function submitHandler(e){
     e.preventDefault();

     const formData = new FormData(e.target);

     const customer = Object.fromEntries(formData.entries());
     dispatch({type: 'PERSONALDETAILS', payload: customer})
  }


return(
    <div className="personal-info">
        <div className="info-data">
            <form className='order-form' onSubmit={submitHandler}>
                <h2>Personal Details</h2>
       <div className="item">
          <p>Name</p>
          <div className="name-item">
            <input  type="text"className='form-item-name' name="firstName" placeholder="First"/>
            <input  type="text" className='form-item-name' name="lastName" placeholder="Last"/>
          </div>
        </div>
        <div className="item">
          <p>Email</p>
          <input type="text" className='form-item' name="email"/>
        </div>
        <div className="item">
          <p>Phone</p>
          <input type="text" className='form-item' name="phone"/>
        </div>
        
        <div className="item">
          <p>Address</p>
          <input type="text" className='form-item' name="StreetName" placeholder="Street Name" />
          <input type="text" className='form-item' name="House" placeholder="House No." />
          <div className="city-item">
            <input type="text" className='form-item'name='city' placeholder="City" />
            <input type="text" className='form-item' name='zipCode' placeholder="Postal / Zip code" />
            <input type="text" className='form-item'name='country' placeholder="Country" />
          </div>
        </div>
        <div className="question">
          <p>Privacy Policy<span className="required">*</span></p>
          <div className="checkbox-item">
         
              <input type="checkbox"  value="none" id="check_1" name="check" required/>
              <p>I agree to the <a className='privacy' href="https://www.w3docs.com/privacy-policy">privacy policy.</a></p>
           
          </div>
        </div>
        <button className="submit-details" type='submit'>Submit</button>
            </form>
       </div>

      

<div className='pay-to'>
      <button className='menu-back'onClick={()=>{props.setPage(0)}}>Previous</button>
      <button className='menu-back' onClick={()=>{props.setPage(2)}}>Next</button>
      </div>

        
    </div>
)






}