import { BsClockHistory } from "react-icons/bs";
import { MdClass } from "react-icons/md";
import { MdOutlineSubject } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { MdEventAvailable } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { PiExamLight } from "react-icons/pi";
import { TbTicTac } from "react-icons/tb"
import { LuFileSpreadsheet } from "react-icons/lu";

export const sidebarData = (currentLocation) => [
  { title: "dashboard", icon: <BiHomeAlt size={24} color={currentLocation.includes('dashboard') ? 'black' : 'white'} /> },
  { title: "academics", icon: <HiOutlineAcademicCap size={24} color={currentLocation.includes('pupils') ? 'black' : 'white'} /> },
  { title: "exam", icon: <LuFileSpreadsheet size={24} color={currentLocation.includes('teachers') ? 'black' : 'white'} /> },
  { title: "results", icon: <PiExamLight size={24} color={currentLocation.includes('events') ? 'black' : 'white'}/> },
  { title: "e-library", icon: <BsClockHistory size={24} color={currentLocation.includes('latest activity') ? 'black' : 'white'}/> },
  { title: "events", icon: <MdEventAvailable size={24} color={currentLocation.includes('classes') ? 'black' : 'white'}/> },
  { title: "test-result", icon: <TbTicTac size={24} color={currentLocation.includes('subjects') ? 'black' : 'white'}/> },
];