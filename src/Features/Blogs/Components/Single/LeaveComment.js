import React, { useState } from 'react'
import BorderButton from '../../../../Components/Button/BorderButton'
import TextInput from '../../../../Components/Input/TextInput'

function LeaveComment() {
    const [formData, setFormData]= useState({
        fullName: '',
        email: '',
        message: '',
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
        setFormData({
          fullName: '',
          email: '',
          message: '',
        })
      }


  return (
    <div className={`flex justify-start items-start min-w-full min-h-64  col-span-1 relative overflow-x-hidden pt-16`}>
        <div className={`grid grid-cols-1 min-w-full cursor-pointer gap-4 border-2 rounded-md hover:px-8 hover:py-16 border-white hover:border-Gray05 transition-all duration-1000 delay-300 ease-linear`}>
            <div className={`flex justify-start items-center col-span-1 mb-4`}>
                <h1 className={`text-2xl font-medium text-Gray90 text-left align-top tracking-normal leading-6 cursor-pointer hover:text-Primary hover:scale-110 transition-all duration-500 ease-linear delay-75  hover:translate-x-2`}>Leave a Comment</h1>
            </div>
            <div className={`flex flex-col justify-start items-start col-span-1 `}>
                <form className={`grid grid-cols-2 min-w-full`} >
                    <div className={`flex  justify-between items-center col-span-1 pr-4 gap-8`}>
                        <TextInput 
                            value={formData.fullName}
                            name={'fullName'}
                            label={`Full Name`}
                            placeholder={'full name'}
                            onChange={inputDataChange}
                            readOnly={false}
                            validationText={false}
                            key={1}
                        />

                        <TextInput 
                            value={formData.email}
                            name={'email'}
                            label={`Email`}
                            placeholder={'example@gmail.com'}
                            onChange={inputDataChange}
                            readOnly={false}
                            validationText={false}
                            key={2}
                        />
                    </div>
                    <div className='flex justify-center items-start col-span-2 pt-4'>
                        <TextInput 
                            value={formData.message}
                            name={'message'}
                            label={`Message`}
                            placeholder={'Write your comment here…'}
                            onChange={inputDataChange}
                            readOnly={false}
                            validationText={false}
                            key={3}
                        />
                    </div>
                </form>
            </div>
            <div className={`flex justify-start items-center col-span-1 mt-4`}>
                <BorderButton 
                    onClick={handleSubmit}
                    label={'Post Comments'}
                    key={4}
                    textSize={'px-4 py-2 text-sm'}
                />
            </div>
        </div>
    </div> 
  )
}

export default LeaveComment