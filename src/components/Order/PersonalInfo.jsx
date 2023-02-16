import React from 'react';

export default function PersonalInfo(props){
    


return(
    <div className="personal-info">
        <div className="info-data">
            <form className='order-form'>
                <h2>Personal Details</h2>
       <div class="item">
          <p>Name</p>
          <div class="name-item">
            <input type="text"className='form-item-name' name="firstName" placeholder="First"/>
            <input type="text" className='form-item-name' name="lastName" placeholder="Last"/>
          </div>
        </div>
        <div class="item">
          <p>Email</p>
          <input type="text" className='form-item' name="email"/>
        </div>
        <div class="item">
          <p>Phone</p>
          <input type="text" className='form-item' name="phone"/>
        </div>
        
        <div class="item">
          <p>Address</p>
          <input type="text" className='form-item' name="name" placeholder="Street Name" />
          <input type="text" className='form-item' name="name" placeholder="House No." />
          <div class="city-item">
            <input type="text" className='form-item' placeholder="City" />
            <input type="text" className='form-item' placeholder="Postal / Zip code" />
            <input type="text" className='form-item' placeholder="Country" />
          </div>
        </div>
        <div class="question">
          <p>Privacy Policy<span class="required">*</span></p>
          <div class="checkbox-item">
         
              <input type="checkbox"  value="none" id="check_1" name="check" required/>
              <p>I agree to the <a href="https://www.w3docs.com/privacy-policy">privacy policy.</a></p>
           
          </div>
        </div>
            </form>
       </div>

      

<div className='pay-to'>
      <button className='menu-back'onClick={()=>{props.setPage(0)}}>Previous</button>
      <button className='menu-back' onClick={()=>{props.setPage(2)}}>Next</button>
      </div>

        
    </div>
)






}