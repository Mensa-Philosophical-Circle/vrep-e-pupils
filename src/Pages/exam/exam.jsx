import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import SingleTeacherCard from "../../components/SingleTeacherCard";
import { examData } from "../../assets/data/ExamPageData";
import { useWindowResize } from "../../utils/windowResize";

function ExamPage() {
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
      
        <div className=" lg:hidden  text-[20px] leading-[25px] text-[#0A112C] pl-4 max-lg:mt-5 font-medium">

            <h1>Exam</h1>

        </div>

        <div className=" flex max-lg:block">
          <div className="   w-[365px]  h-screen max-lg:hidden">

          <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />

          </div>

           <div className=" py-5 pl-3 pr-5 w-full max-lg:pb-10 max-lg:pt-1 max-lg:px-4">

            {examData.map((Teacher) => (
            
             <SingleTeacherCard
              
              id={Teacher.id}
              color={Teacher.color}
              subject={Teacher.subject}
              Pic={Teacher.Pic}
              name={Teacher.name}
              date={Teacher.date}
              time={Teacher.time}
              status={Teacher.status}
              subjectPic={Teacher.subjectPic}
             />
            
            ))}


           </div>

        </div>
    </div>
  );
}

export default ExamPage;

