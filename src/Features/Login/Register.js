import React, {useEffect, useState } from 'react'
import TextInput from '../../Components/Input/TextInput'   ;
import { eyeOpen } from '../../assets/Dashboard';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
  const [acceptTerms, setAcceptTerms] = useState(false);
  useEffect(() => {
      const handleResize = () => setDeviceSize(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [deviceSize]); 

  const customerStyle = {
      container: 'pb-32  pt-16',
      dxl: '2xl:px-16 ',
      xl: '',
      lg: 'lg:min-w-screen ',
      md: '',
      sm:' sm:px-16  ',
      base: 'min-w-full '
  }
  const [formData, setFormData]= useState({
    email: '',
    password: '',
    confirmPassword: '',
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
      email: '',
      password: '',
      confirmPassword: '',
    })
  }
  const handleLogin = () => {
    navigate(`/organic-ecommerce-shop/my-account/sign-in`);
  }
  const handleAcceptTerms = () => {
    acceptTerms ? setAcceptTerms(false) : setAcceptTerms(true);
  }

  return (
    <div  className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base}`}>
      <div className={`flex justify-center items-start min-w-full min-h-[50vh]`}>
        <div className={`flex flex-col justify-start items-center min-w-[520px] border-2 min-h-[450px] p-16 gap-8`}>
            <h1 className={`text-[32px] text-left align-top tracking-wide leading-6 font-semibold cursor-pointer capitalize pb-4`}>
              Create Account
            </h1>
            <form 
              onSubmit={handleSubmit}
              className={`flex flex-col justify-start items-start min-w-full min-h-44 gap-4`}
            >
              <div className={`flex justify-start items-center min-w-full`}>
                <TextInput 
                    value={formData.email}
                    name={'email'}
                    placeholder={'Email'}
                    validationText={false}
                    label={false}
                    type={`text`}
                    SourceAlr={'The open eye icon'}
                    SourceURL={''}
                    onChange={inputDataChange}
                    key={1}
                />
              </div>
              <div className={`flex justify-start items-center min-w-full`}>
                <TextInput 
                    value={formData.password}
                    name={'password'}
                    placeholder={'Password'}
                    validationText={false}
                    label={false}
                    type={`password`}
                    SourceAlr={'The open eye icon'}
                    SourceURL={eyeOpen}
                    onChange={inputDataChange}
                    key={2}
                    eyeIcon={true}
                />
              </div>
              <div className={`flex justify-start items-center min-w-full`}>
                <TextInput 
                    value={formData.confirmPassword}
                    name={'confirmPassword'}
                    placeholder={'Confirm Password'}
                    validationText={false}
                    label={false}
                    type={`password`}
                    SourceAlr={'The open eye icon'}
                    SourceURL={eyeOpen}
                    onChange={inputDataChange}
                    key={3}
                    eyeIcon={true}
                />
              </div>
              <div className={`flex justify-between items-center min-w-full gap-4`}>
                  <div className={`flex justify-start items-start gap-2`}>
                    <input  
                      name='accept'
                      type='checkbox' 
                      className='min-w-5 min-h-5 border-Gray20'
                      onChange={()=>{handleAcceptTerms()}}
                      checked={acceptTerms}
                    />
                    <label className={`text-sm font-normal align-top tracking-normal leading-6 cursor-pointer text-Gray60`}>
                      Accept all terms & Conditions
                    </label>
                  </div>
              </div>
              <button 
                type='submit'
                className={`flex justify-center items-center text-white bg-Primary min-w-full min-h-11 rounded-l-full rounded-r-full m-0 mt-4`}
              >
                Create Account
              </button>

              <div className={`flex justify-center items-center min-w-full`}>
                <p className={`text-sm font-normal align-top tracking-normal leading-6 cursor-pointer text-Gray60`}>
                  Already have account
                </p>
                <p 
                  onClick={handleLogin}
                  className={`text-sm  align-top tracking-normal leading-6 cursor-pointer text-Gray90 font-medium pl-2`}
                > 
                  Login
                </p>
              </div>
            </form>
            
        </div>
      </div>
    </div>
  )
}

export default Register