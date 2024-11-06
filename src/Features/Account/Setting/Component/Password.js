import React, { useState } from 'react'
import TextInput from '../../../../Components/Input/TextInput'
import SubmitButton from '../Btn/SubmitButton';
import { eyeOpen } from '../../../../assets/Dashboard';

function Password() {
    const [formData, setFormData]= useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    const [dataType, setDataType] = useState(false);
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
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        })
      }
      
    
      return (
        <div className={`flex col-span-9 min-h-[352px] p-8`}>
          <form onSubmit={handleSubmit} className={`min-w-full`}>
              <div className={`flex flex-col justify-start items-start min-w-full gap-4`}>
                <TextInput 
                  value={formData.currentPassword}
                  name={'currentPassword'}
                  placeholder={'Password'}
                  validationText={false}
                  label={'Current Password'}
                  type={dataType ? 'text' : 'Password'}
                  SourceAlr={'The open eye icon'}
                  SourceURL={eyeOpen}
                  onChange={inputDataChange}
                  key={1}
                />
                <div className='min-w-full grid grid-cols-2 gap-4'>
                  <TextInput 
                    value={formData.newPassword}
                    name={'newPassword'}
                    placeholder={'Password'}
                    validationText={false}
                    label={'New Password Password'}
                    type={dataType ? 'text' : 'Password'}
                    SourceAlr={'The open eye icon'}
                    SourceURL={eyeOpen}
                    onChange={inputDataChange}
                    key={2}
                  />
                  <TextInput 
                    value={formData.confirmPassword}
                    name={'confirmPassword'}
                    placeholder={'Password'}
                    validationText={false}
                    label={'Confirm Password'}
                    type={dataType ? 'text' : 'Password'}
                    SourceAlr={'The open eye icon'}
                    SourceURL={eyeOpen}
                    onChange={inputDataChange}
                    key={3}
                  />
                </div>
                <SubmitButton 
                  Title={`Change Password`}
                />
              </div>
          </form>
        </div>
      )
    }

export default Password