import React from "react";
import { useWindowResize } from '../utils/windowResize';


function SubjectCard({ lesson, teacher, teacherImg, bgColor, bgTeacher, icon }) {
  const isMobile = useWindowResize();

  const getShortLessonName = (lesson) => {
    return lesson.substring(0, 3).toUpperCase();
  };

  return (
    <div className="w-70 h-64 rounded-b-20 ">
      <div className={`w-full ${isMobile ? 'h-34' : 'h-40'} border-none rounded-t-10 flex items-center justify-center `} style={{ backgroundColor: bgColor }} >
      <span className="w-8 h-8 flex items-center">{icon}</span>
      <h3 className="text-heading font-semibold text-center text-24 ">{getShortLessonName(lesson)}</h3>
      </div>
      <div className="flex flex-row items-center justify-normal rounded-b-10 px-4 py-2 bg-white" style={{ backgroundColor: bgTeacher }}>
        <div className=" w-9 h-9  rounded-full overflow-hidden">
        <img className="w-full" src={teacherImg} alt="Teacher Image" />

        </div>
        <h3 className=" text-18 text-black font-semibold py-4 px-4" >
          {lesson}
           <p className="text-14 font-normal text-welcome">Instructor:{teacher} </p>
        </h3>
      </div>
    </div>
  );
}

export default SubjectCard;
