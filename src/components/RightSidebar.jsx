import React from 'react';
import { CiClock2 } from "react-icons/ci";
import { TbBellExclamation } from "react-icons/tb";
import teacher from '../../src/assets/images/teacher.png'
function RightSidebar() {
  return (
    <div className="h-640 w-78 bg-white flex flex-col overflow-auto  top-70 right-8 rounded-20">
      <section className="px-4 py-4 w-66 h-auto flex flex-col justify-between items-center">
        <div className=" text-center w-full h-70">
          <h1 className="text-20 py-4 text-black font-semibold">Events</h1>
          <div className="rounded-10 mb-4 w-full">
            <div className=" flex flex-col justify-between items-start bg-pink py-4 px-4 rounded-t-10">
              <h2 className="text-16 text-heading font-semibold ">
                Science Fair
              </h2>
              <span className="text-xs text-spans text-days-400 ">
                Activity Project Presentation
              </span>
            </div>
            <div className="flex flex-col justify-start items-start bg-pinklight py-2 px-4 rounded-b-10">
              <div className="flex items-center py-2">
                <CiClock2 size={24} />{" "}
                <span className="text-xs text-heading-400 px-2">3-5 PM</span>
              </div>
              <div className="flex items-center py-2">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border-1">
                  <img
                    src={teacher}
                    alt="Julie Watson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-heading-400 px-2">
                  Julie Watson
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-10 mb-4 w-full">
            <div className=" flex flex-col justify-between items-start bg-blue py-4 px-4 rounded-t-10">
              <h2 className="text-16 text-heading font-semibold ">
                Literary Carnival
              </h2>
              <span className="text-xs text-spans text-days-400 ">
                Activity: Storybook character parade
              </span>
            </div>
            <div className="flex flex-col justify-start items-start bg-bluelight py-2 px-4 rounded-b-10">
              <div className="flex items-center py-2">
                <CiClock2 size={24} />{" "}
                <span className="text-xs text-heading-400 px-2">3-5 PM</span>
              </div>
              <div className="flex items-center py-2">
              <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border-1">
                  <img
                    src={teacher}
                    alt="Julie Watson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-heading-400 px-2">
                  Julie Watson
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto text-center px-4 py-4">
          <h1 className="text-20 py-4 text-black font-semibold">Reminders</h1>
          <div>
            <div className="flex flex-col py-4">
              <div className="flex  items-start">
                <div className="w-10 h-10 rounded-full border-black-600 bg-yellow flex justify-center items-center px-2">
                  <TbBellExclamation style={{ stroke: '#364786' }} size={32} />
                </div>
                <div className="flex flex-col items-start px-2">
                  <p className="text-16 font-semibold">
                    ENG |{" "}
                    <span className="text-14 font-normal">Vocabulary Quiz</span>
                  </p>
                  <span className="text-10 text-days">30 Apr 2024, TUE</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full border-slate-600 bg-yellow flex justify-center items-center px-2">
                  <TbBellExclamation style={{ stroke: '#364786' }} size={32} />
                </div>
                <div className="flex flex-col items-start px-2">
                  <p className="text-16 font-semibold">
                    CHEM |{" "}
                    <span className="text-14 font-normal">
                      Atomic Structure Test
                    </span>
                  </p>
                  <span className="text-10 text-days">2 May 2024, THU</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col  py-4">
              <div className=" flex  items-start">
                <div className="w-10 h-10 rounded-full border-slate-600 bg-yellow flex justify-center items-center px-2">
                  <TbBellExclamation style={{ stroke: '#364786' }} size={32} />
                </div>
                <div className="flex flex-col items-start px-2">
                  <p className="text-16 font-semibold">
                    MATH |{" "}
                    <span className="text-14 font-normal">Functions Test</span>
                  </p>
                  <span className="text-10 text-days">6 May 2024, MON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default RightSidebar;



