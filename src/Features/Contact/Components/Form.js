import React, { useState } from 'react'
import TextInput from '../../../Components/Input/TextInput'
import TextAreaInput from '../../../Components/Input/TextAreaInput'

function Form() {
    const [formData, setFormData]= useState({
        templateCookie: '',
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
            templateCookie: '',
            email: '',
            message: '',
        })
      }

  return (
    <div className={`flex flex-col justify-start items-start col-span-9  border-2 p-8 rounded-md shadow-lg gap-8`}>
        <div className={`flex flex-col gap-4 justify-start items-start min-w-full`}>
            <h1 className={`text-2xl text-Gray90 font-semibold leading-6 align-top tracking-normal  hover:translate-x-2 transition-all duration-700 ease-linear delay-100 cursor-pointer `}>Just Say Hello!</h1>
            <p className={`text-sm text-Gray50 font-normal leading-6 align-top tracking-normal  cursor-pointer max-w-[50%]`}>Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</p>
        </div>
        <form className={`flex gap-8 flex-col justify-start items-start min-w-full`} onSubmit={handleSubmit}>
            <div className={`grid grid-cols-2 min-w-full gap-8`}>
                <div className='flex justify-between items-center col-span-1 gap-8 '>
                    <TextInput 
                        value={formData.templateCookie}
                        name={'templateCookie'}
                        label={false}
                        placeholder={'Template Cookies'}
                        onChange={inputDataChange}
                        readOnly={false}
                        validationText={false}
                        key={1}
                    />

                    <TextInput 
                        value={formData.email}
                        name={'email'}
                        label={false}
                        placeholder={'example@gmail.com'}
                        onChange={inputDataChange}
                        readOnly={false}
                        validationText={false}
                        key={2}
                    />
                </div>

                <div className='flex justify-start items-start col-span-2 min-w-full'>
                   <TextAreaInput 
                        index={3}
                        placeholder={'subject'}
                        onChange={inputDataChange}
                        name={`message`}
                        value={formData.message}
                        key={1}
                   />
                </div>
            </div>
            <div 
                className={`flex justify-center items-center min-w-52 min-h-12 rounded-full bg-Primary text-white hover:bg-PrimaryHover transition-all duration-700 ease-linear delay-100 mt-8`}
            >
                <button
                    className={`min-w-full min-h-full capitalize`}
                    type='submit'
                >
                    Send Message
                </button>
            </div>
        </form>
    </div>
  )
}

export default Form