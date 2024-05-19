import React, { useRef } from 'react';
import Logo from '../../../assets/images/logo.png';
import LogoPic from '../../../assets/images/Rectangle.png';
import LoginLogics from './loginLogics';

function Login() {
  const [handleLogin] = LoginLogics();
  const regNumberRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(regNumberRef.current.value);
  };

  return (
    <div>

      <div className=' flex h-screen overflow-hidden w-screen'>

        <div className='w-[50vw] flex h-[80vh] flex-col justify-around max-lg:w-screen ' >

          <div className=' w-full flex justify-center items-center max-lg:mx-auto' >

            <img className=' w-[286px] h-[163px]' src={Logo}  alt='' />

          </div>

          <div className=' mx-auto flex flex-col justify-around max-lg:mx-auto max-lg:w-full max-lg:px-5'>

            <h1 className='  text-[20px]  font-semibold text-[#1F2223]'>Login With Your School ID</h1>

            <div className=' block mt-6 mb-20 max-lg:mb-10'>

                <p className=' text-[14px] text-[#1F2223] mb-2'>School ID</p>
                <input type='text' className=' px-4 w-[475px] max-lg:w-full h-[44px] rounded-[6px] bg-[#F6F6F6] border border-[#99A1DA] ' />

            </div>

            <div className=' max-lg:mx-auto  max-lg:flex max-lg:justify-center  max-lg:w-full max-lg:px-0  '>

              <button className=' w-[475px] max-lg:w-full  h-[48px] rounded-[6px] bg-[#364786] text-white'>Login</button>

            </div>

          </div>

        </div>

        <div className=' h-full p-5 w-[50vw] flex justify-end items-center max-lg:hidden '>

          <div className=' h-[95vh]  w-[40vw]'>

            <img className=' w-full h-full object-cover rounded-r-10' src={LogoPic} alt='' />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;

