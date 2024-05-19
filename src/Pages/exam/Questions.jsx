import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import ExamSingleQuistion from "../../components/ExamSingleQuistion";
import { useSelector } from "react-redux";
import { examData } from "../../assets/data/ExamPageData";
import { MdOutlineQuiz } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import Timer from "../../components/Timer";
import { useWindowResize } from '../../utils/windowResize';

const Questions = () => {

  const WhichExam=useSelector((state) => state.whichExam.value)

  const isMobile = useWindowResize();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  function handleToggle() {
    setSidebarOpen(prevState => !prevState);
    console.log('open')
  }
  useEffect(() => {
    if (!isMobile) {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  return (
    <>

        <div className=" flex max-lg:block mt-10">
          <div className="   w-[365px]  h-screen max-lg:hidden">

          <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />

          </div>

           <div className=" p-10 w-full max-lg:pb-10 max-lg:pt-1 max-lg:px-4">

                  <div className=" w-full h-[144px] rounded-10 flex bg-white max-lg:block max-lg:h-auto  ">

                        <div className={` bg-[${examData[WhichExam].color}] min-w-[288px] h-[144px] max-lg:min-w-full flex justify-center items-center text-center border-r-2 border-[#8599DD] max-lg:border-none  `} style={{backgroundColor:examData[WhichExam].color}}>

                        <p className=' flex'><span className=' mr-3 flex justify-center items-center '><img className=' w-[24px] h-[24px] ' src={examData[WhichExam].subjectPic} alt=''/></span><span className=' text-[24px] font-semibold leading-9 text-[#212F5F]'>{examData[WhichExam].subject.toUpperCase()}</span></p>
                          
                        </div>


                       <div className=" flex justify-between w-full">

                        <div className=" flex flex-col justify-between py-12 max-lg:py-8  ml-20 max-lg:ml-3">

                          <div className=" flex text-[#435596] font-medium max-lg:mt-1">

                              <p className=" my-auto mr-3 text-[18px] max-lg:text-[20px]"><FiClock/></p>
                              <p className=" text-[14px] max-lg:text-[16px]">TOTAL {examData[WhichExam].time}  </p>

                          </div>

                          <div className=" flex text-[#435596] font-medium">

                              <p className=" my-auto  mr-3 text-[18px] max-lg:text-[22px]"><MdOutlineQuiz/></p>
                              <p className=" text-[14px]  max-lg:text-[16px]">TOTAL {examData[WhichExam].questions} QUESTIONS </p>

                           </div>
                         </div>


                        <div className=" flex flex-col justify-between py-8  mr-20 max-lg:mr-3">


                          <p className=" text-[14px] text-[#435596] font-medium">You have</p>

                          <div className=" text-[#AD287A] font-semibold">

                              <p><Timer time={examData[WhichExam].time*60} /></p>

                          </div>

                          <p className=" text-[14px] text-[#435596] font-medium">to complete </p>

                         </div>

                        </div>
                 
               </div>

               <ExamSingleQuistion id={WhichExam}/>

           </div>

           
           </div>
        </>
  );
};

export default Questions;
