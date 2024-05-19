import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import "../../styles/result.css";
import results1  from '../../assets/result1.png'
import results2  from '../../assets/result2.png'
import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectWhichTerm } from "../../redux/slices/WhichTermSlice";
import { resultData } from "../../assets/data/ResultPageData";
import { useWindowResize } from '../../utils/windowResize';

const Result = () => {

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

  const dispatch = useDispatch()
  
  const navigate = useNavigate();

  const handleExam=(id) => {

    dispatch(selectWhichTerm(id-1))
    navigate("/results/terms");

  }

  return (
    <div>

        <div className=" lg:hidden  text-[20px] leading-[25px] text-[#0A112C] pl-8 max-lg:mt-5 font-medium">

            <h1>Results</h1>

        </div>


        <div className=" flex max-lg:block">
          <div className="  max-lg:hidden  w-[365px]  h-screen ">

          <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />

          </div>

           <div className=" py-5 pl-3 pr-5 w-full  max-lg:px-8 max-lg:pt-0 ">

              <div className=" max-lg:hidden flex justify-between bg-[#E9FFFF] w-full h-[192px] rounded-10  " style={{boxShadow: '0px 8px 64px 8px rgba(188, 210, 210, 0.5)'}}>

                  <div className=" h-full flex justify-center items-center ml-20">
                   
                   <div>
                    <h1 className=" text-[32px] leading-[40px] font-medium">Your Grades </h1>
                    <p className=" text-[rgba(54,71,134,1)]">Keep going!</p>
                   </div>
                  
                  </div>
                  
                  <div className=" flex">

                    <img className=" w-[216px] h-[162px]  my-auto -mr-16" src={results2} alt=""/>

                    <img className=" w-[376px] h-[282px] -mt-10 -mr-4" src={results1} alt=""/>
                    
                  </div>

              </div>

              <div className=" grid grid-cols-3 max-lg:grid-cols-1 mt-20 max-lg:mt-5 w-full    mx-auto gap-y-16 max-lg:gap-y-10">

               {resultData.map((Card) => (

                <div className={` w-full ${Card.id%3===2&&' lg:justify-center'} ${Card.id%3===1&&' lg:justify-start'} ${Card.id%3===0&&' lg:justify-end'} items-center flex max-lg: justify-center`}>
                
                <div id={Card.id} className={` text-center p-10 max-lg:p-5 w-[328px] h-[280px] max-lg:w-[90vw] max-lg:h-[240px] rounded-10 border-4 border-[rgba(133,153,221,1)] bg-[${Card.bgColor}]`} style={{backgroundColor:Card.bgColor}}>

                  <h1 className=" text-[24px] leading-[36px] font-semibold text-[rgba(33,47,95,1)]">{Card.grade}</h1>

                  <div className=" mt-4 text-[17px] leading-[27px] text-[rgba(94,114,185,1)] font-semibold ">
                  
                   <p >Term: <span className=" pl-4">{Card.term}</span></p>
                   <p>Session: <span className=" pl-4">{Card.session}</span></p>
                  
                  </div>
                  <div className=" w-full flex justify-center items-center">
                  <button className=' w-[240px] h-[48px] mx-auto  max-lg:w-[200px] max-lg:h-[32px] rounded mt-10    bg-primary disabled:bg-[#E9ECF8] disabled:text-[#AEBBE7] text-white text-[16px] max-md:text-[14px] font-semibold  ' onClick={() => handleExam(Card.id)} ><span className=''>View Results</span></button>
                  </div>
                 </div>
                 
                 </div>

                ))}

              </div>

           </div>

        </div>
    </div>
  );
};

export default Result;
