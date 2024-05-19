import React ,{useState} from 'react'
import { useSelector } from 'react-redux'

import { questionData } from '../assets/data/QuistionData'
import { useNavigate } from "react-router-dom";

const ExamSingleQuistion = ({id}) => {
    
    const ScreenSize=useSelector((state) => state.screenSize.value)

    const [whichQuest ,setWhichQuest] = useState(0)
    const [whichAnswer ,setWhichAnswer] = useState(0)
    const [allAnswers , setAllAnswers] =useState([])
    
    const navigate = useNavigate();

    const handlePre=()=>{

        setWhichQuest(whichQuest-1)
        allAnswers.pop()
        setAllAnswers(allAnswers)
        setWhichAnswer(0)
    }
    const handleNext=()=>{

        setWhichQuest(whichQuest+1)
        allAnswers.push(whichAnswer)
        setAllAnswers(allAnswers)
        setWhichAnswer(0)

    }
    const handleFinish=()=>{
        
        setAllAnswers(allAnswers.push(whichAnswer))
        setAllAnswers([])
        setWhichAnswer(0)
        navigate("/exam");

    }

  return (
    <div>
    
        <div className=' bg-white w-full  h-[672px] max-lg:h-[auto] mt-10 rounded-10 p-5 max-lg:px-4' >

            <div className=' h-[511px] max-lg:h-[222px] bg-[#E9ECF8] flex'>

                <div className=" bg-[#FFDAF0] min-w-[288px] max-lg:min-w-[60px] h-[511px] max-lg:h-[222px] flex justify-center items-center text-center border-r-2 border-[#8599DD]   ">

                    <p className=' font-semibold text-[18px] leading-[27px] text-[#212F5F]'>{ScreenSize>976?'Question':'Q.'} {questionData[id][whichQuest].id}</p>
                          
                </div>

                <div className=' flex justify-center items-center px-10 max-lg:px-3 w-full'>
                 
                 <div className='w-full'>
                   
                    <div>
                    
                        <p className=' text-[#435596] max-lg:text-[12px]  max-lg:leading-[15px]'>{questionData[id][whichQuest].question}</p>

                    </div>

                    <div>

                        <div className={`${!questionData[id][whichQuest].pic&&' hidden'} flex justify-center items-center mt-10 max-lg:mt-5`}>

                              <img className='w-[148px] max-lg:w-[83px] max-lg:h-[83px] h-[119px]' src={questionData[id][whichQuest].pic} alt='' />

                        </div>

                    </div>

                    <div className=' max-lg:hidden [&>div>button]:w-[32px] [&>div>button]:h-[32px] [&>div>button]:rounded-[100px] [&>div>button]:border-2   [&>div>button]:border-[#364786] text-[#364786] [&>div>button]:text-[14px] [&>div>button]:font-semibold [&>div>p]:my-auto [&>div>p]:ml-3 [&>div>p]:text-[14px]  flex justify-between w-[50%] mx-auto mt-16'>

                        <div className=' flex'>

                         <button className={` ${whichAnswer===1&&'bg-[#364786] text-white'} `} onClick={() => setWhichAnswer(1)} >A</button>

                         <p>{questionData[id][whichQuest].choiceA}</p>
                        
                        </div>

                        <div className=' flex'>

                         <button className={` ${whichAnswer===2&&'bg-[#364786] text-white'} `} onClick={() => setWhichAnswer(2)}>B</button>

                         <p>{questionData[id][whichQuest].choiceB}</p>
                        
                        </div>

                        <div className=' flex'>

                         <button className={` ${whichAnswer===3&&'bg-[#364786] text-white'} `} onClick={() => setWhichAnswer(3)}>C</button>

                         <p>{questionData[id][whichQuest].choiceC}</p>
                        
                        </div>

                        <div className=' flex'>

                         <button className={` ${whichAnswer===4&&'bg-[#364786] text-white'} `} onClick={() => setWhichAnswer(4)}>D</button>

                         <p>{questionData[id][whichQuest].choiceD}</p>
                        
                        </div>

                    </div>
                  
                  </div>

                </div>
                

            </div>

                <div className=' lg:hidden [&>div>button]:w-[32px] [&>div>button]:h-[32px] [&>div>button]:rounded-[100px] [&>div>button]:border-2   [&>div>button]:border-[#364786] text-[#364786] [&>div>button]:text-[14px] [&>div>button]:font-semibold [&>div>p]:my-auto [&>div>p]:ml-3 [&>div>p]:text-[14px]  flex justify-between w-[90%] mx-auto mt-5'>

                        <div className=' flex'>

                         <button  className={` ${whichAnswer===1&&'bg-[#364786] text-white'} `} onClick={() => setWhichAnswer(1)}>A</button>

                         <p>{questionData[id][whichQuest].choiceA}</p>
                        
                        </div>

                        <div className=' flex'>

                         <button className={` ${whichAnswer===2&&'bg-[#364786] text-white'} `} onClick={() => setWhichAnswer(2)}>B</button>

                         <p>{questionData[id][whichQuest].choiceB}</p>
                        
                        </div>

                        <div className=' flex'>

                         <button className={` ${whichAnswer===3&&'bg-[#364786] text-white'} `} onClick={() => setWhichAnswer(3)}>C</button>

                         <p>{questionData[id][whichQuest].choiceC}</p>
                        
                        </div>

                        <div className=' flex'>

                         <button className={` ${whichAnswer===4&&'bg-[#364786] text-white'} `} onClick={() => setWhichAnswer(4)}>D</button>

                         <p>{questionData[id][whichQuest].choiceD}</p>
                        
                        </div>

                    </div>

            <div className=' flex  justify-center items-center mt-12'>

                <button   className={`${whichQuest===0 &&' hidden'} w-[240px] max-lg:w-[183px]  h-[48px] max-lg:h-[32px]  rounded mr-5  border-2 border-primary   bg-white disabled:bg-[#E9ECF8] disabled:text-[#AEBBE7] text-primary text-[16px] font-semibold max-lg:font-normal max-lg:text-[12px]`} onClick={()=> handlePre()} ><span className=''>Previous</span></button>
                <button disabled={whichAnswer===0}  className={` ${questionData[id].length-1===whichQuest &&' hidden'} w-[240px] max-lg:w-[183px] h-[48px] max-lg:h-[32px]  rounded ${whichQuest!==0 &&' ml-5'}   bg-primary disabled:bg-[#E9ECF8] disabled:text-[#AEBBE7] text-white text-[16px] font-semibold max-lg:font-normal max-lg:text-[12px]`} onClick={()=> handleNext()}><span className=''>Next</span></button>
                <button disabled={whichAnswer===0}  className={` ${questionData[id].length-1!==whichQuest &&' hidden'} w-[240px] max-lg:w-[183px]  h-[48px] max-lg:h-[32px]  rounded ml-5   bg-primary disabled:bg-[#E9ECF8] disabled:text-[#AEBBE7] text-white text-[16px] font-semibold max-lg:font-normal max-lg:text-[12px]`} onClick={()=> handleFinish()}><span className=''>Finish Exam</span></button>

             </div>

        </div>
    
    </div>
  )
}

export default ExamSingleQuistion