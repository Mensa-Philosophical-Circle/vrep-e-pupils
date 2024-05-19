import engT from '../assets/teachers/eng.png'
import bioT from '../assets/teachers/bio.png'
import phyT from '../assets/teachers/phy.png'
import cheT from '../assets/teachers/che.png'
import matT from '../assets/teachers/mat.png'
import artT from '../assets/teachers/art.png'

import { TbWorld } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import { RiCompassesFill } from "react-icons/ri";
import { FaPalette } from "react-icons/fa";
import { GiAtom } from "react-icons/gi";
import { MdBiotech } from "react-icons/md";

const subjects = [
    {
      id: 1,
      teacherImg: engT,
      lesson: "English",
      teacher: "John Doe",
      backgColor: "#AEBBE7",
      bgTeacher: '#cbd3ef',
      icon: <TbWorld stroke="#364786" size={24}  />,
    },
    {
      id: 2,
      teacherImg: matT,
      lesson: "Mathematics",
      teacher: "John Doe",
      backgColor: "#D4DAEE",
      bgTeacher:'#dee3f3',
      icon:<RiCompassesFill fill="#364786" size={24} />,
    },
    {
      id: 3,
      teacherImg: cheT,
      lesson: "Chemistry",
      teacher: "John Doe",
      backgColor: "#FFF4C6",
      bgTeacher:'#fbefd7',
      icon:<SlChemistry fill="#364786" size={24}  />,
    },
    {
      id: 4,
      teacherImg: phyT,
      lesson: "Physics",
      teacher: "John Doe",
      backgColor: "#CCFDFA",
      bgTeacher:'#daf4f9',
      icon:<GiAtom fill="#364786" size={24}  />,
    },
    {
      id: 5,
      teacherImg: bioT,
      lesson: "Biology",
      teacher: "John Doe",
      backgColor: "#FFDAF0",
      bgTeacher:'#f3e3f4',
      icon: <MdBiotech  fill="#364786" size={24} />,
    },
    {
      id: 6,
      teacherImg: artT,
      lesson: "Art",
      teacher: "John Doe",
      backgColor: "#FFE98F",
      bgTeacher:'#f3eac3',
      icon:<FaPalette fill="#364786" size={24}  />,
    },
  ];
  
  export default subjects;