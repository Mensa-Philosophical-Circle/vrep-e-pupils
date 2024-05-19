// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Sidebar from '../components/sidebar';
// import SubjectCard from '../components/SubjectCard';
// import Logo from '../assets/images/logo.png';
// import { FiGrid } from 'react-icons/fi';
// import { FaBars, FaList } from 'react-icons/fa6';

// function AcademicsMobile() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [subject, setSubject] = useState([
//     {
//       id: 1,
//       lesson: 'English',
//       teacher: 'John Doe',
//     },
//     {
//       id: 2,
//       lesson: 'English',
//       teacher: 'John Doe',
//     },
//     {
//       id: 3,
//       lesson: 'English',
//       teacher: 'John Doe',
//     },
//     {
//       id: 4,
//       lesson: 'English',
//       teacher: 'John Doe',
//     },
//     {
//       id: 5,
//       lesson: 'English',
//       teacher: 'John Doe',
//     },
//   ]);

//   function handleToggle() {
//     setSidebarOpen(!sidebarOpen);
//   }
//   return (
//     <>
//       {sidebarOpen && <Sidebar />}
//       <nav className='mobile-navbar'>
//         <section className='logo-section'>
//           <div>
//             <img src={Logo} alt='' style={{ objectFit: 'cover', width: '50px' }} />
//           </div>
//           <p>RPMS</p>
//         </section>
//         <section className='actions-navbar'>
//           <div onClick={handleToggle}>
//             <FaBars onClick={handleToggle} size={24} color='white' />
//           </div>
//         </section>
//       </nav>

//       <div className='subjects'>
//         <div className='subjects-panel'>
//           <h3>Subjects</h3>
//           <div>
//             <Link to='/academics/subjectlist' className='academic-mobile-list'>
//               <FaList size={18} />
//             </Link>
//             <Link to='/academics' className='academic-mobile-list'>
//               <FiGrid size={18} />
//             </Link>
//           </div>
//         </div>

//         <div className='subject-card-container'>
//           {subject.map((item) => (
//             <div>
//               <SubjectCard lesson={item.lesson} teacher={item.teacher} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default AcademicsMobile;

