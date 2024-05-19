import { useState,useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import WeeklyTable from '../../components/WeeklyTable';
import RightSidebar from '../../components/RightSidebar';
import circlePhoto from '../../assets/images/circle-photo.jpeg'
import { FaBars } from 'react-icons/fa6';
import studentD from '../../assets/images/student.png'
import studentM from '../../assets/images/mobile-student.png'
import backpackD from '../../assets/images/Backpack.png'
import backpackM from '../../assets/images/mobile-backpack.png'
import diplomaD from '../../assets/images/Scholarcap.png'
import diplomaM from '../../assets/images/mobile-scholarcap.png'
import { useWindowResize } from '../../utils/windowResize';
function Dashboard() {
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
  const studentSrc = isMobile ? studentM : studentD;
  const backpackSrc = isMobile ? backpackM : backpackD;
  const diplomaSrc = isMobile ? diplomaM : diplomaD;
  return (
    <>
      <div className="w-full lg:h-auto bg-background">
        <article
          className={`${isMobile ? "ml-0" : "ml-64"} ${
            !isMobile && "lg:flex flex-col ml-64 bottom-4"
          }`}
        >
            <div className="fixed top-0 left-0 w-full z-50">
            <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />
            </div>
          <div className='flex flex-col justify-between lg:h-96'>
          <section
            className={`w-full flex ${isMobile ? "justify-start" : "justify-center"} ${
              isMobile ? "" : " px-4"
            }lg:py-8 lg:px-8 h-32 flex w-80% flex-col  `}
          >
            <div className="bg-white w-full flex justify-between lg:flex items-center h-23 lg:rounded-20">
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
                    Dashboard
                  </h3>
                )}
                <div
                  className={`w-16 flex justify-end ${
                    isMobile ? "px-0" : "px-16"
                  } lg:w-72 flex justify-between items-center`}
                >
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
            <div className={`h-40 px-4 ${isMobile ? 'w-78' : 'w-full'} flex justify-around lg:h-56   bg-welcome rounded-20`}>
              <div className={`flex flex-col justify-between items-start ${isMobile ? '' : 'py-4'}`}>
                <div className='py-4'>
                  <span className="text-14 text-white font-normal lg:text-16">
                    APRIL 24, 2024 {isMobile ? "" : "| WEDNESDAY"}
                  </span>
                </div>
                <div>
                  <h1 className={`text-16 text-white font-semibold ${isMobile ? 'font-poppins' : 'font-capriola'} lg:text-32 ${isMobile ? 'py-8' : 'py-2'}`}>
                    Welcome back, John!
                  </h1>
                  {!isMobile && (
                    <span className="text-foreground py-2">
                      Always stay updated in your Pupil portal
                    </span>
                  )}
                </div>
              </div>
              <div className={`flex justify-center ${isMobile ? 'items-end' : 'items-center'}`}>
  <div className = {`flex ${isMobile ? 'justify-center' : 'justify-end'} items-center lg:w-88`}  >
      <img src={diplomaSrc} className={`w-24 h-24 relative ${isMobile ? 'left-8' : 'left-26'} lg:w-78  lg:h-78 `} alt=""  />
      <img src={studentSrc} className="w-24 h-24 relative z-10 lg:w-58 lg:h-58 mt-6 " alt=""  />
      <img src={backpackSrc} className="w-10 h-11 relative right-4 lg:w-34 lg:h-34" alt=""  />
  </div>
</div>
            </div>
            </section>
            </div>
            <section className={`bg-background ${isMobile ? 'mt-0' : 'mt-12'}`} >
            <div className={`${isMobile ? 'h-auto flex flex-col justify-between items-center bg-background py-4' : 'px-8 flex justify-between'}`}>
  {isMobile ? (
    <>
      <WeeklyTable />
      <div className='py-8'>
        <RightSidebar isDashboard />
      </div>
    </>
  ) : (
    <>
      <div className="pr-4">
          <WeeklyTable />
        </div>
      <RightSidebar isDashboard />
    </>
  )}
</div>
            </section>
        </article>
      </div>
    </>
  );
}
export default Dashboard;





