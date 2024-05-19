import React ,{useEffect , useState} from 'react'
import Sidebar from '../../components/sidebar'
import Teacher1 from '../../assets/Teacher1.png'
import Ellipse from '../../assets/Ellipse 8.png'
import { termsData } from '../../assets/data/TermData'
import { useSelector } from "react-redux";
import { useWindowResize } from '../../utils/windowResize';

const Terms = () => {
    
    const WhichTerm =useSelector((state) => state.whichTerm.value)

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
    <div>
    
    <div className=" flex max-lg:block mt-10">
         <div className="   w-[365px]  h-screen max-lg:hidden">

         <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />

         </div>

          <div className=" p-10 w-full max-lg:pb-10 max-lg:pt-1 max-lg:px-4">

               <div className=' flex max-lg:block justify-between items-center'>

                   <div className=' w-[75%] max-lg:w-full h-[400px] max-lg:h-[380px] rounded-10 bg-white px-8 py-5 max-lg:px-4 max-lg:py-2  '>

                       <div className=' w-full  h-[352px] max-lg:h-[346px] overflow-scroll pr-2  relative termTable '>
                       
                       <table className=' w-full  h-[352px]  max-lg:h-[346px]  border-collapse border border-[#D4DAEE] max-lg:border-none max-lg:[&>thead]:border-none [&>thead]:border [&>tbody]:border max-lg:[&>tbody]:border-none overflow-hidden  '>

                        <thead className=' [&>tr]:border [&>tr]:border-[#D4DAEE] max-lg:[&>tr]:border-none  '>
                         
                         <tr className=' [&>th]:border h-[50px] [&>th]:border-[#AEBBE7] [&>th]:w-[100px] max-lg:[&>th]:min-w-[60px] [&>th]:h-[50px] [&>th]:bg-[#D4DAEE] max-lg:[&>th]:bg-white max-lg:[&>th]:border-none [&>th]:text-[#364786] [&>th]:text-[14px] [&>th]:font-medium max-lg:[&>th]:text-[11px]  '>
                         
                           {termsData[WhichTerm].tableHeader.map((term)=>(
                           
                               <th>{term}</th>
                       
                           ))}
                        </tr>
                       
                       </thead>

                       <tbody>


                       {termsData[WhichTerm].tableBody.map((term)=>(
                        
                           <tr className=' [&>th]:border max-lg:[&>th]:border-none max-lg:border-none h-[50px] [&>th]:border-[#AEBBE7] [&>th]:w-[100px] [&>th]:h-[50px] [&>th]:bg-[#fff] [&>th]:text-[#8599DD] [&>th]:text-[14px] [&>th]:font-medium max-lg:[&>th]:text-[11px]  '>
                         
                         {term.map((ter)=>(

                         
                           <th>{ter}</th>


                         ))}
                           
                         </tr>
                      
                      ))}
                      
                       </tbody>                        

                       </table>

                       </div>

                   </div>

                   <div className=' w-[20%] max-lg:w-full h-[400px] max-lg:h-[270px] max-lg:mt-10 rounded-20 bg-white '>
                     
                     <div className='max-lg:flex max-lg:justify-around'>
                       
                       <div className=' relative w-[70%] max-lg:w-[35%] lg:mx-auto mt-4'>

                           <img src={Ellipse} alt='' />

                           <div className=' absolute top-0 grid place-content-center w-full h-full origin-center text-center'>

                               <div className=' text-[12px] leading-[18px] text-center'>
                                
                                <p>Average </p>
                                <p>Score</p>
                               
                               </div>


                               <p className=' text-[25px] font-bold text-[#5E72B9] mt-1 '>{termsData[WhichTerm].averageScore}</p>

                           </div>

                       </div>

                       <div className=' flex flex-col justify-around text-center mt-10'>

                           <div>

                               <p className=' text-[12px] font-medium leading-[18px] text-[#212F5F]'>Overall Total Score</p>
                               <p className=' text-[20px] font-semibold leading-[30px] text-[#5E72B9]'>{termsData[WhichTerm].overallTotalScore}</p>

                           </div>

                           <div className=' mt-5'>

                               <p className=' text-[12px] font-medium leading-[18px] text-[#212F5F]'>Total Number of Pupils</p>
                               <p className=' text-[20px] font-semibold leading-[30px] text-[#5E72B9]'>{termsData[WhichTerm].totalNumberOfPupils}</p>

                           </div>

                           <button className=' max-lg:hidden mt-4 bg-[#364786] w-[160px] h-[32px] rounded text-white text-[14px] font-semibold leading-[21px] mx-auto'>Download Result</button>

                       </div>

                   </div>
                    <div className=' lg:hidden w-full flex justify-center items-center mt-4'>
                     <button className=' mt-4 bg-[#364786] w-[160px] h-[32px] rounded text-white text-[11px] font-semibold leading-[21px] mx-auto'>Download Result</button>
                    </div>
                   </div>

               </div>

               <div className='w-full h-auto bg-white rounded-20 mt-16 max-lg:mt-10 flex max-lg:block justify-between px-5 py-4'>

                   <h1 className=' lg:hidden text-[16px] font-semibold my-5 '>Assessment</h1>

                   <div className='min-w-[65%]'>

                       <div className=' flex w-full'>

                           <img className='w-[96px] h-[96px] rounded-360 opacity-90' src={Teacher1} alt='' />

                           <div className=' my-auto ml-4'>

                               <p className=' text-[24px] text-[#0A112C] font-semibold leading-[36px]'>Jane Doe</p>
                               <p className=' text-[14px] text-[#435596] leading-[21px]'>Student Class Teacher</p>

                           </div>

                       </div>

                       {/* desktop version  */}

                       <div className='h-[272px] flex max-lg:hidden justify-between mt-8 '>

                           
                           
                           <div className='  flex flex-col justify-between'>

                           {termsData[WhichTerm].teacherMarksFirstCol.map((term)=>(
                               
                               <>
                               
                                   {term[1]==='h1'?<h className=' text-[14px] font-semibold leading-[21px] text-[#0A112C]'>{term[0]}</h>:<p className=' flex justify-between items-center text-[12px] font-medium text-[#212F5F]'><span className=' w-[80%]'>{term[0]}</span> <span>{term[1]}</span></p>}
                               
                               </>
                      
                            ))}
                               

                           </div>

                           <div className='  h-[272px] bg-[#AEBBE7] w-[1.5px] ' />

                           <div className='  flex flex-col justify-between'>



                           {termsData[WhichTerm].teacherMarksSecondCol.map((term)=>(
                               
                               <>
                               
                                   {term[1]==='h1'?<h className=' text-[14px] font-semibold leading-[21px] text-[#0A112C]'>{term[0]}</h>:<p className=' flex justify-between items-center text-[12px] font-medium text-[#212F5F]'><span className=' w-[80%]'>{term[0]}</span> <span>{term[1]}</span></p>}
                               
                               </>
                      
                            ))}

                           </div>

                           <div className='  h-[272px] bg-[#AEBBE7] w-[1.5px] ' />


                           <div className='  flex flex-col justify-between'>



                           {termsData[WhichTerm].teacherMarksThirdCol.map((term)=>(
                               
                               <>
                               
                                   {term[1]==='h1'?<h className=' text-[14px] font-semibold leading-[21px] text-[#0A112C]'>{term[0]}</h>:<p className=' flex justify-between items-center text-[12px] font-medium text-[#212F5F]'><span className=' w-[80%]'>{term[0]}</span> <span>{term[1]}</span></p>}
                               
                               </>
                      
                            ))}

                           </div>

                           <div className='  h-[272px] bg-[#AEBBE7] w-[1.5px] ' />

                           <div className='  flex flex-col justify-between'>


                           {termsData[WhichTerm].teacherMarksForthCol.map((term)=>(
                               
                               <>
                               
                                   {term[1]==='h1'?<h className=' text-[14px] font-semibold leading-[21px] text-[#0A112C]'>{term[0]}</h>:<p className=' flex justify-between items-center text-[12px] font-medium text-[#212F5F]'><span className=' w-[80%]'>{term[0]}</span> <span>{term[1]}</span></p>}
                               
                               </>
                      
                            ))}

                           </div>


                       </div>

                       {/* mobile version  */}
                       
                       <div className='h-auto block lg:hidden  mt-8 '>

                           
                           <div className=' flex w-full justify-between mb-14'>
                           <div className='  w-[45%]  flex flex-col justify-between'>

                           {termsData[WhichTerm].teacherMarksFirstCol.map((term)=>(
                               
                               <>
                               
                                   {term[1]==='h1'?<h className=' text-[14px] font-semibold leading-[21px] text-[#0A112C]'>{term[0]}</h>:<p className=' flex justify-between items-center text-[12px] font-medium text-[#212F5F]'><span className=' w-[80%]'>{term[0]}</span> <span>{term[1]}</span></p>}
                               
                               </>
                      
                            ))}
                               

                           </div>

                           <div className='  h-[272px] bg-[#AEBBE7] w-[1.5px] ' />

                           <div className='  w-[45%] flex flex-col justify-between'>



                           {termsData[WhichTerm].teacherMarksSecondCol.map((term)=>(
                               
                               <>
                               
                                   {term[1]==='h1'?<h className=' text-[14px] font-semibold leading-[21px] text-[#0A112C]'>{term[0]}</h>:<p className=' flex justify-between items-center text-[12px] font-medium text-[#212F5F]'><span className=' w-[80%]'>{term[0]}</span> <span>{term[1]}</span></p>}
                               
                               </>
                      
                            ))}

                           </div>


                           </div>
                           <div className=' flex w-full justify-between'>

                           <div className='  w-[45%] flex flex-col justify-between'>



                           {termsData[WhichTerm].teacherMarksThirdCol.map((term)=>(
                               
                               <>
                               
                                   {term[1]==='h1'?<h className=' text-[14px] font-semibold leading-[21px] text-[#0A112C]'>{term[0]}</h>:<p className=' flex justify-between items-center text-[12px] font-medium text-[#212F5F]'><span className=' w-[80%]'>{term[0]}</span> <span>{term[1]}</span></p>}
                               
                               </>
                      
                            ))}

                           </div>

                           <div className='  h-[272px] bg-[#AEBBE7] w-[1.5px] ' />
                           <div className=' w-[45%] flex flex-col justify-between'>


                           {termsData[WhichTerm].teacherMarksForthCol.map((term)=>(
                               
                               <>
                               
                                   {term[1]==='h1'?<h className=' text-[14px] font-semibold leading-[21px] text-[#0A112C]'>{term[0]}</h>:<p className=' flex justify-between items-center text-[12px] font-medium text-[#212F5F]'><span className=' w-[80%]'>{term[0]}</span> <span>{term[1]}</span></p>}
                               
                               </>
                      
                            ))}

                           </div>
                           
                           </div>


                       </div>


                   </div>

                   <div className=' min-w-[35%] max-lg:min-w-full h-[329px] mt-20 max-lg:mt-16 max-lg:mb-3 flex lg:mx-4'>
                   
                   <div className=' max-lg:hidden  h-[329px] bg-[#AEBBE7] w-[4px]  ' />

                   <div className=' flex flex-col justify-around'>

                       <div className=' [&>p]:text-[#212F5F] [&>p]:text-[12px] [&>p]:leading-[18px] [&>p]:mt-4 [&>p]:font-medium ml-3'>

                           <h1 className=' text-[16px] font-semibold leading-[24px] text-[#0A112C]'>Teachers Comments</h1>

                           <p>{termsData[WhichTerm].teachersComments1}</p>

                           <p>{termsData[WhichTerm].teachersComments2}</p>

                       </div>


                       <div className=' [&>p]:text-[#212F5F] [&>p]:text-[12px] [&>p]:leading-[18px] [&>p]:mt-4 [&>p]:font-medium ml-3 mt-5'>

                           <h1 className=' text-[16px] font-semibold leading-[24px] text-[#0A112C]'>Head Teachers Comments</h1>

                           <p>{termsData[WhichTerm].headTeachersComments}</p>


                       </div>                        

                   </div>
                   
                   </div>
                   
                   
                   
                   <div>



                   </div>

               </div>

          </div>  
   
    </div>  
   
   </div>
  )
}

export default Terms