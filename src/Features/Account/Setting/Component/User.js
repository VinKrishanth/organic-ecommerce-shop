import React, { useState } from 'react'
import TextInput from '../../../../Components/Input/TextInput'
import SubmitButton from '../Btn/SubmitButton';

function User() {
  const [formData, setFormData]= useState({
    firstName: '',
    lastName: '',
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
    <div className={`flex col-span-5 min-h-[352px] p-8`}>
      <form onSubmit={handleSubmit} className={`min-w-full`}>
          <div className={`flex flex-col justify-start items-start min-w-full gap-4`}>
            <TextInput 
              value={formData.firstName}
              name={'firstName'}
              placeholder={'first name'}
              validationText={false}
              label={'First name'}
              type={'text'}
              SourceAlr={``}
              SourceURL={``}
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
              SourceAlr={``}
              SourceURL={``}
              onChange={inputDataChange}
              key={2}
            />
            <TextInput 
              value={formData.email}
              name={'email'}
              placeholder={`example@gmail.com`}
              validationText={false}
              label={'email'}
              type={'text'}
              SourceAlr={``}
              SourceURL={``}
              onChange={inputDataChange}
              key={3}
            />
            <TextInput 
              value={formData.phone}
              name={'phone'}
              placeholder={'+94 700000000'}
              validationText={false}
              label={'Phone number'}
              type={'text'}
              SourceAlr={``}
              SourceURL={``}
              onChange={inputDataChange}
              key={4}
            />
            <SubmitButton 
            Title={`Save Changes`}
            />
          </div>
      </form>
    </div>
  )
}

export default User