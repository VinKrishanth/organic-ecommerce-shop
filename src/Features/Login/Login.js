import React, {useEffect, useState } from 'react'
import TextInput from '../../Components/Input/TextInput'   ;
import { eyeOpen } from '../../assets/Dashboard';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Components/Navigation/logo/Logo';
import { useDispatch } from 'react-redux';
import { authActions } from '../../reducer/auth-slice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
  const [acceptTerms, setAcceptTerms] = useState(false);
  useEffect(() => {
      const handleResize = () => setDeviceSize(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [deviceSize]); 

  const customerStyle = {
      container: 'pb-32  sm:pt-16',
      dxl: '2xl:px-16 ',
      xl: '',
      lg: 'lg:min-w-screen ',
      md: '',
      sm:' sm:px-16  min-w-full',
      base: 'min-w-[80%] px-8 pt-4'
  }
  const [formData, setFormData]= useState({
    email: '',
    password: '',
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
    });
    
    dispatch(authActions.login());
    navigate(`/`);
  }
  const handleRegister = () => {
    navigate(`/organic-ecommerce-shop/my-account/sign-up`);
  }
  const handleForgetPassword = () => {
    console.log('forget password');
  }
  const handleAcceptTerms = () => {
    acceptTerms ? setAcceptTerms(false) : setAcceptTerms(true);
  }

  return (
    <div  className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base}`}>
      <div className={`flex justify-start items-start cursor-pointer sm:hover:scale-110 sm:hover:translate-x-16 hover:translate-x-0  transition-all duration-700 ease-linear delay-100 sm:scale-100 scale-75 sm:translate-x-10 -translate-x-10`}>
        <Logo  />
      </div> 
      <div className={`flex justify-center items-start min-w-full min-h-[50vh]`}>
        <div className={`flex flex-col justify-start items-center min-w-[520px] sm:border-2 border-t-2 min-h-[450px] p-16 gap-4`}>
            <h1 className={`text-[32px] text-left align-top tracking-wide leading-6 font-semibold cursor-pointer capitalize pb-4`}>
              Sign In
            </h1>
            <form 
              onSubmit={handleSubmit}
              className={`flex flex-col sm:justify-start justify-center items-start min-w-full  min-h-44 sm:gap-4 gap-8 sm:px-0 px-8`}
            >
              <div className={`flex justify-start  items-center min-w-full `}>
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
                      Remember me
                    </label>
                  </div>
                  <div className='flex justify-start items-start'>
                    <p 
                      onClick={handleForgetPassword}
                      className={`text-sm  align-top tracking-normal leading-6 cursor-pointer text-Gray60 font-medium pl-2`}
                    > Forget Password</p>
                  </div>
              </div>
              {
                deviceSize ? (
                  <div className='flex flex-col gap-2 justify-center items-center min-w-full'>
                      <div className={`flex justify-center items-center min-w-full `}>
                        <button 
                          type='submit'
                          className={`flex justify-center items-center text-white bg-Primary min-w-full   min-h-11 rounded-l-full rounded-r-full m-0 sm:mt-4 `}
                        >
                          Login
                        </button>
                      </div>

                      <div className={`flex justify-center items-center min-w-full`}>
                        <p className={`text-sm font-normal align-top tracking-normal leading-6 cursor-pointer text-Gray60`}>
                          Don’t have account?
                        </p>
                        <p 
                          onClick={handleRegister}
                          className={`text-sm  align-top tracking-normal leading-6 cursor-pointer text-Gray90 font-medium pl-2`}
                        > 
                          Register
                        </p>
                      </div>
                  </div>
                ):(
                  <>
                  <div className={`flex justify-center items-center min-w-full `}>
                    <button 
                      type='submit'
                      className={`flex justify-center items-center text-white bg-Primary min-w-full   min-h-11 rounded-l-full rounded-r-full m-0 sm:mt-4 `}
                    >
                      Login
                    </button>
                  </div>

                  <div className={`flex justify-center items-center min-w-full`}>
                    <p className={`text-sm font-normal align-top tracking-normal leading-6 cursor-pointer text-Gray60`}>
                      Don’t have account?
                    </p>
                    <p 
                      onClick={handleRegister}
                      className={`text-sm  align-top tracking-normal leading-6 cursor-pointer text-Gray90 font-medium pl-2`}
                    > 
                      Register
                    </p>
                  </div>
                  </>
                )
              }
            </form>
            
        </div>
      </div>
    </div>
  )
}

export default Login