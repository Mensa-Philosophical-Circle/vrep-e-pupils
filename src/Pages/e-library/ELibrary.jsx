import React,{useState , useEffect} from "react";
import Sidebar from "../../components/sidebar";
import elibrary_1 from "../../assets/elibrary-main-1.png";
import elibrary_2 from "../../assets/elibrary-main-2.png";
import elibrary_3 from "../../assets/elibrary-main-3.png";
import { useWindowResize } from "../../utils/windowResize";

const ELibrary = () => {

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
      <div className=" lg:hidden  text-[20px] leading-[25px] text-[#0A112C] text-capriola pl-8 max-lg:mt-5 font-medium">
        <h1>E-Library</h1>
      </div>

      <div className=" flex max-lg:block">
        <div className="  max-lg:hidden  w-[365px]  h-screen ">
        <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />
        </div>

        <div className=" py-10 pl-3 pr-5 w-full  max-lg:px-8 max-lg:pt-0 ">
          <div
            className=" max-lg:hidden flex justify-between bg-[#D4DAEE] w-full h-[192px] rounded-10  "
            style={{ boxShadow: "0px 8px 64px 8px rgba(186, 191, 207, 0.50)" }}>
            <div className=" h-full flex flex-col justify-center ml-20 gap-y-3">
              <h1 className=" text-[32px] leading-[40px] font-medium">
                Library
              </h1>
              <p className=" text-[rgba(54,71,134,1)]">
                Our library has everything you need. Remember to always be
                curious!
              </p>
            </div>
          </div>

          <div className="max-md:grid-cols-1 w-full grid grid-cols-2 max-md:place-items-center max-lg:gap-5 gap-14 mt-[32px]">
            <div className="flex flex-col col-span-1 justify-between h-[248px] w-full max-sm:w-[316px] max-md:h-[175px] bg-[#FFDAF0] rounded-10">
              <div className="flex flex-row justify-between  max-md:justify-around ">
                <div className="flex flex-col max-md:gap-y-[16px]  gap-y-[24px] max-lg:mt-[18px] max-lg:ml-[18px] mt-[48px] ml-[48px]">
                  <span className="font-[600] text-[#212F5F] text-[16px] max-md:text-[14px]">
                    Educational Material
                  </span>
                  <li className="text-[#5E72B9] text-[12px]">
                    Based on your coursework
                  </li>
                </div>
                <img
                  src={elibrary_1}
                  className="max-lg:w-[95px] max-lg:h-[50px] w-[178px] h-[95px] max-lg:mt-[41px] max-sm:mt-[61px] max-lg:mr-[20px] mt-[64px] mr-[36px]"
                  alt=""
                />
              </div>
              <button className="flex justify-center self-center items-center w-[160px] max-md:h-[32px] bg-[#364786] px-[24px] py-[12px] mb-[16px] text-[#FFFBEC] text-[14px] rounded-[5px]">
                View
              </button>
            </div>

            <div className="flex flex-col col-span-1 justify-between h-[248px] w-full max-sm:w-[316px] max-md:h-[175px] bg-[#FFF4C6] rounded-10">
              <div className="flex flex-row justify-between  max-md:justify-around">
                <div className="flex flex-col max-md:gap-y-[16px]  gap-y-[24px] max-lg:mt-[18px] max-lg:ml-[18px] mt-[48px] ml-[48px]">
                  <span className="font-[600] text-[#212F5F] text-[16px] max-md:text-[14px]">
                    Books
                  </span>
                  <div className="flex flex-col max-md:gap-y-[5px] gap-y-[10px] text-[12px] text-[#5E72B9]">
                    <li>Novels</li>
                    <li>Stories</li>
                  </div>
                </div>
                <img
                  src={elibrary_2}
                  className="max-lg:w-[125px] max-lg:h-[94px] w-[218px] h-[164px] max-lg:mt-[4px] max-lg:mr-[7px] mt-[18px] mr-[32px]"
                  alt=""
                />
              </div>
              <button className="flex justify-center self-center items-center w-[160px] max-md:h-[32px] bg-[#364786] px-[24px] py-[12px] mb-[16px] text-[#FFFBEC] text-[14px] rounded-[5px]">
                View
              </button>
            </div>

            <div className="flex flex-col col-span-1 justify-between h-[248px] w-full max-sm:w-[316px] max-md:h-[175px] bg-[#CCFDFA] rounded-10">
              <div className="flex flex-row justify-between  max-md:justify-around">
                <div className="flex flex-col max-md:gap-y-[16px]  gap-y-[24px] max-lg:mt-[18px] max-lg:ml-[18px] mt-[48px] ml-[48px]">
                  <span className="font-[600] text-[#212F5F] text-[16px] max-md:text-[14px]">
                    Online Libraries
                  </span>
                  <div className="flex flex-col text-[12px] text-[#5E72B9]">
                    <li>Project Gutenberg</li>
                    <li>Google Books</li>
                    <li>Open Library</li>
                  </div>
                </div>
                <img
                  src={elibrary_3}
                  className="max-md:w-[117px] max-md:h-[34px] max-md:place-self-end max-md:mb-[10px] max-lg:w-[140px] max-lg:h-[70px]  w-[190px] h-[80px] max-lg:mt-[58px] max-lg:mr-[20px] mt-[78px] mr-[40px]"
                  alt=""
                />
              </div>
              <button className="flex justify-center self-center items-center w-[160px] max-md:h-[32px] bg-[#364786] px-[24px] py-[12px] mb-[16px] text-[#FFFBEC] text-[14px] rounded-[5px]">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ELibrary;
