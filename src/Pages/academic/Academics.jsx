import { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar';
import SubjectCard from '../../components/SubjectCard';
import academic from '../../assets/images/online-survey-academics.png'
import subjectLogic from './service/subjectLogic';
import circlePhoto from '../../assets/images/circle-photo.jpeg'
import { useWindowResize } from '../../utils/windowResize';
import subjects from '../../utils/academics-subject';
import { FaBars } from 'react-icons/fa6';

function Academics() {
  const isMobile = useWindowResize();
  const [isActive, setIsActive] = useState(true);
  const { getcourses, handleGetCourses } = subjectLogic();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    handleGetCourses();
  }, []);

  console.log(getcourses);
  const [subject, setSubject] = useState(subjects);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = subject.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = subject.slice(indexOfFirstItem, indexOfLastItem);

 
   function handleToggle() {
    setSidebarOpen(!sidebarOpen);
  }

  useEffect(() => {
    if (!isMobile) {
      
      setSidebarOpen(true);
    }
  }, [isMobile]);
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
        <div className="w-full lg:h-screen bg-background">
            
          <article className={` ${isMobile ? "ml-0" : "ml-64"} lg:flex flex-col bottom-4`}>
          <div className="fixed top-0 left-0 w-full z-50">
            <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />
            </div>


            <div className='flex flex-col justify-between lg:h-96'>
            <section className={`w-full flex ${isMobile ? "justify-start" : "justify-center"} ${
              isMobile ? "" : " px-4"
            }lg:py-8 lg:px-8 h-32 flex w-80% flex-col  `}>
              <div className="flex items-center h-23  bg-white lg:rounded-20">
                <nav className="h-24 bg-white w-full flex justify-between items-center px-4 py-4 lg:justify-between lg:h-18 lg:items-center lg:w-full rounded-20">

                {isMobile ? (
                  <div
                    className="h-8 w-8 flex items-center ml-8 "
                    onClick={handleToggle}
                  >
                    <FaBars size={24} color="grey" />
                  </div>
                ) : (
                  <h3 className="text-center text-24 font-semibold font-capriola text-heading px-16">
                   Academics
                  </h3>
                )}

                  <div className={`w-16 flex justify-end ${
                    isMobile ? "px-0" : "px-16"
                  } lg:w-72 flex justify-between items-center`} >
                    <div className="w-12 h-12 rounded-full  overflow-hidden">
                    <img
                      className ={`w-full h-full object-cover rounded-full border-solid border-4 ${
                        isMobile ? 'border-circleM' : 'border-circleD'
                      }`}
                      src={circlePhoto}
                      alt=""
                    />
                    </div>

                    {!isMobile && (
                    <div>
                      <p className="text-18 font-semibold text-par">John Doe</p>
                      <span className="text-14 font-normal">3rd year</span>
                    </div>
                  )}
                  </div>
                </nav>
              </div>
              </section>

              <section className={`w-80% h-48 flex justify-center items-center ${
  isMobile ? "px-4" : "lg:py-8 py-4 lg:px-8 px-4"
} h-32 flex w-80%  `}>

              <div className={`flex justify-around  items-center h-56 py-2 bg-academicback rounded-20 lg:w-full`} >
                <div className=" flex flex-col items-start py-2 px-2 ">
                  <div>
                    <h1 className={`text-black font-semibold  ${isMobile ? 'text-17 font-poppins' : 'text-32 font-capriola'}`}>
                      Academic Syllabus
                    </h1>
                    <span className={`text-academict font-normal py-2 ${isMobile ? 'text-14' : 'text-16' }`}>
                      Stay updated with your class and their syllabus
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`lg:w-90 h-80 flex justify-center items-center ${isMobile ? 'h-7 w-56' : ''}`}>
                    <img className='w-full' src={academic} alt="" />
                  </div>
                </div>
              </div>
              </section>
              </div>
              <div className={`h-auto w-full flex $${isMobile ? 'flex flex-col' : 'flex flex-wrap lg:justify-between'}  py-8 px-4 `}>
                {currentItems.map((item) => (
                  <div className={`${isMobile ? 'mb-4' : 'w-1/3 px-4 py-4'}`} key={item.id}>
                    <SubjectCard lesson={item.lesson} teacher={item.teacher} teacherImg={item.teacherImg} bgColor={item.backgColor} icon={item.icon} bgTeacher={item.bgTeacher} />
                  </div>
                ))}
              </div>
         
          </article>
        </div>

    </>
  );
}

export default Academics;

