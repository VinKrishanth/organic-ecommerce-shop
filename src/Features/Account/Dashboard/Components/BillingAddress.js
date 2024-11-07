import React, { useState } from 'react'
import TextInput from '../../../../Components/Input/TextInput'
import EditButton from './Btn/EditButton'
import demoBilling from '../../OrderDetails/Components/Table/demoBilling.js'

function BillingAddress() {
  const [formData, setFormData]= useState({
    userName: demoBilling[1].userName,
    address: demoBilling[1].address,
    email: demoBilling[1].emailAddress,
    phone: demoBilling[1].phoneNumber,
  });

const [userAction, setUserAction] = useState({
  buttonType: 'button',
  customerStyle : true,
  readOnly: true
});

const inputDataChange = (event) => {
      const {name, value} = event.target;
      setFormData({
        ...formData, 
        [name] : value
      });
  }

  const handleClick = () => {
    if(userAction.buttonType === 'submit'){
      setUserAction({
        buttonType: 'button',
        customerStyle : true,
        readOnly: true
      })
      // console.log(`form data`, formData);
    }else{
      setUserAction({
        buttonType: 'submit',
        customerStyle : false,
        readOnly: false
      })
    }
  }

  return (
    <div className={`col-span-4 max-h-[278px]  border-2 rounded-xl p-8`}>
      <div className={`flex flex-col justify-start items-start gap-2 cursor-pointer`}>
        <h1 className={`text-sm font-medium tracking-tight align-top text-left text-Gray40 hover:translate-x-2 transition-all duration-700 ease-linear delay-100 uppercase`}>Billing Address</h1>
        <form 
          className={`flex flex-col justify-start items-start  gap-1 min-w-full my-2`}
        >
          <TextInput 
            value={formData.userName}
            name={'userName'}
            validationText={false}
            type={'text'}
            onChange={inputDataChange}
            key={1}
            inputStyle={`border-0 text-lg leading-6 tracking-normal font-medium align-top `}
            readOnly={true}
          />
          <TextInput 
            value={formData.address}
            name={'address'}
            validationText={false}
            type={'text'}
            onChange={inputDataChange}
            key={2}
            inputStyle={`border-0 text-sm text-Gray60 leading-6 tracking-normal font-normal align-top `}
            readOnly={true}
          />
          <TextInput 
            value={formData.email}
            name={'email'}
            validationText={false}
            type={'text'}
            onChange={inputDataChange}
            key={3}
            inputStyle={userAction.customerStyle  && `border-0 text-base leading-6 tracking-normal font-normal align-top `}
            readOnly={userAction.readOnly}
          />
          <TextInput 
            value={formData.phone}
            name={'phone'}
            validationText={false}
            type={'text'}
            onChange={inputDataChange}
            key={4}
            inputStyle={userAction.customerStyle  && `border-0 text-base leading-6 tracking-normal font-normal align-top `}
            readOnly={userAction.readOnly}
          />
        </form>
        <EditButton 
          label={`Edit Address`}
          textSize={''}
          type={userAction.buttonType}
          onClick={()=>{handleClick()}}
        />
      </div>
    </div>
  )
}

export default BillingAddress