import React, { useState } from 'react'
import TextInput from '../../../../Components/Input/TextInput'
import SubmitButton from '../Btn/SubmitButton';

function Billing({isVisibleSaveButton, billingStyle}) {
    const [formData, setFormData]= useState({
        firstName: '',
        lastName: '',
        companyName: '',
        streetAddress: '',
        country: '',
        states: '',
        zipCode: '',
        email: '',
        phone: ''
      });
    
      const inputDataChange = (event) => {
          const {name, value} = event.target;
          setFormData({
            ...formData, 
            [name] : value
          });
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`form data`, formData);
      }
    
      return (
        <div className={`flex  min-h-[352px] ${billingStyle ? ' min-w-full p-0' : 'col-span-9 p-8 '}`}>
          <form onSubmit={handleSubmit} className={`min-w-full`}>
              <div className={`flex flex-col justify-start items-start min-w-full gap-4`}>
                  <div className='min-w-full grid grid-cols-3 gap-4'>
                  <TextInput 
                      value={formData.firstName}
                      name={'firstName'}
                      placeholder={'first name'}
                      validationText={false}
                      label={'First name'}
                      type={'text'}
                      onChange={inputDataChange}
                      key={1}
                    />
                    <TextInput 
                      value={formData.lastName}
                      name={'lastName'}
                      placeholder={'last name'}
                      validationText={false}
                      label={'last name'}
                      type={'text'}
                      onChange={inputDataChange}
                      key={2}
                    />
                    <TextInput 
                      value={formData.companyName}
                      name={'companyName'}
                      placeholder={'company name'}
                      validationText={false}
                      label={'Company (optional)'}
                      type={'text'}
                      onChange={inputDataChange}
                      key={3}
                    />
                  </div>
                  
                    <TextInput 
                      value={formData.streetAddress}
                      name={'streetAddress'}
                      placeholder={'street address'}
                      validationText={false}
                      label={'street address'}
                      type={'text'}
                      onChange={inputDataChange}
                      key={4}
                    />
                  <div className='min-w-full grid grid-cols-3 gap-4'>
                    <TextInput 
                      value={formData.country}
                      name={'country'}
                      placeholder={'country'}
                      validationText={false}
                      label={'Country / Region'}
                      type={'text'}
                      onChange={inputDataChange}
                      key={5}
                    />
                    <TextInput 
                      value={formData.states}
                      name={'states'}
                      placeholder={'states'}
                      validationText={false}
                      label={'states'}
                      type={'text'}
                      onChange={inputDataChange}
                      key={6}
                    />
                    <TextInput 
                      value={formData.zipCode}
                      name={'zipCode'}
                      placeholder={'zip Code'}
                      validationText={false}
                      label={'zip Code'}
                      type={'text'}
                      onChange={inputDataChange}
                      key={7}
                    />
                  </div>
                  <div className='min-w-full grid grid-cols-2 gap-4'>
                      <TextInput 
                        value={formData.email}
                        name={'email'}
                        placeholder={'email'}
                        validationText={false}
                        label={'email'}
                        type={'text'}
                        onChange={inputDataChange}
                        key={8}
                      />
                      <TextInput 
                        value={formData.phone}
                        name={'phone'}
                        placeholder={'(+94) 770000000'}
                        validationText={false}
                        label={'phone'}
                        type={'text'}
                        onChange={inputDataChange}
                        key={9}
                      />
                  </div>

                  {
                    !isVisibleSaveButton && (
<                     SubmitButton 
                        Title={`Save Changes`}
                      />
                    )
                  }
                
              </div>
          </form>
        </div>
      )
    }

export default Billing