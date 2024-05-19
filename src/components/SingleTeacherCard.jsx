import React from 'react'
import calendar  from '../assets/calendar2.png'
import { FiClock } from "react-icons/fi";
import { useDispatch , useSelector } from "react-redux";
import { selectWhichExam } from '../redux/slices/WhichExamSlice';
import { useNavigate } from "react-router-dom";

const SingleTeacherCard = ({ id ,color , subjectPic , subject , Pic , name , date , time ,status}) => {
  
  const dispatch = useDispatch()
  
  const navigate = useNavigate();

  const handleExam=(id) => {

    dispatch(selectWhichExam(id))
    navigate("/exam/questions");

  }
 
  return (
    <div>
    
        <div className=' bg-white flex max-lg:block h-[30vh] max-lg:h-[420px]  rounded-[30px] max-lg:rounded-[10px]  my-5 max-lg:p-7 '>


            <div className={`bg-[${color}] w-[30vw] max-lg:w-full max-lg:h-[168px] rounded-l-[10px] max-lg:rounded-[10px]  flex justify-center items-center font-poppins border-r-2 border-[#8599DD] max-lg:border-none max-lg: mx-auto `} style={{backgroundColor:color}}>

                <p className=' flex'><span className=' mr-3 flex justify-center items-center '><img className=' w-[24px] h-[24px] ' src={subjectPic} alt=''/></span><span className=' text-[24px] font-semibold leading-9 text-[#212F5F]'>{subject.toUpperCase()}</span></p>
                
            </div>

            <div className=' flex justify-between w-full max-lg:block  px-16 max-lg:px-0 py-7'>

            <div className=' flex flex-col justify-between '>

             <div className=' flex w-full justify-between max-lg:mb-5'>
               
               <div className=' flex'>
                
                <img className=' w-[96px] h-[96px] max-lg:w-[52px] max-lg:h-[52px]  opacity-90 rounded-[360px] border-[#212F5F]' src={Pic} alt=''/>

                <div className=' ml-[2vw] my-auto'>

                    <p className=' font-poppins text-[24px] max-lg:text-[20px] font-semibold leading-[33px]'>{subject}</p>
                    <p className=' font-poppins text-[14px] max-lg:text-[12px] text-[#435596] leading-[21px]'>instructor: {name}</p>

                </div>
               
                </div>

                <p className=' lg:hidden text-[#435596] ml-6'>Status: <span className={` ${status==='Closed'?'text-[#EB3939]':'text-[#60ee4a]'}`}>{status}</span></p>


             </div>

             <div className=' flex justify-between items-center w-full'>



                <div className=' lg:hidden flex mt-2 mb-1  '>
                 
                 <p className=' text-[#3C3C3C] text-xl text-[12px]  my-auto '><FiClock/></p>
                 <p className=' text-[#3C3C3C] ml-2 text-[12px] '>{time}MIN</p>
                
                </div>

                <div className=' flex '>

                 <p className=' text-[#435596] max-lg:hidden text-xl mr-3 my-auto  justify-center items-center w-[24px] h-[24px]'><img className='w-[24px] h-[24px]' src={calendar} alt='' /></p>
                 <p className=' text-[#435596] max-lg:text-[12px]'>{date}</p>
                
                </div>
             </div>

             </div>

            <div className=' flex flex-col justify-between'>

             <div className=' flex  justify-center items-center h-[96px]'>

                <button disabled={status==='Closed'}  className=' w-[240px] max-lg:w-full h-[48px] max-lg:h-[34px] rounded    bg-primary disabled:bg-[#E9ECF8] disabled:text-[#AEBBE7] text-white text-[16px] font-semibold max-lg:font-normal max-lg:text-[12px]' onClick={()=> handleExam(id)} ><span className=''>Start Exam</span></button>

             </div>

             <div className=' flex flex-row-reverse justify-between'>

                <p className=' max-lg:hidden text-[#435596] ml-6'>Status: <span className={` ${status==='Closed'?'text-[#EB3939]' : 'text-[#60ee4a]'}`}>{status}</span></p>
                <div className=' flex max-lg:hidden'>
                 <p className=' text-[#435596] text-xl  my-auto'><FiClock/></p>
                 <p className=' text-[#435596] ml-4'>{time} MIN</p>
                </div>
             </div>

            </div>
          </div>

        </div>
    
    </div>
  )
}

export default SingleTeacherCard