import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Subjects.css';
import Sidebar from '../components/sidebar';
import Logo from '../assets/images/logo.png'
import subjectImg from '../assets/images/rectangle-subject.png';
import { FaBars, FaList } from 'react-icons/fa6';
import { FiGrid } from 'react-icons/fi';

function SubjectListMobile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lessons, setLessons] = useState([
    {
      id: 1,
      foto: subjectImg,
      lesson: 'English',
      teacher: 'John Doe',
    },
    {
      id: 2,
      foto: subjectImg,
      lesson: 'English',
      teacher: 'John Doe',
    },
    {
      id: 3,
      foto: subjectImg,
      lesson: 'English',
      teacher: 'John Doe',
    },
    {
      id: 4,
      foto: subjectImg,
      lesson: 'English',
      teacher: 'John Doe',
    },
  ]);

  function handleToggle() {
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <>
      {sidebarOpen && <Sidebar />}
      <nav className='mobile-navbar'>
        <section className='logo-section'>
          <div>
            <img src={Logo} alt='' style={{ objectFit: 'cover', width: '50px' }} />
          </div>
          <p>RPMS</p>
        </section>
        <section className='actions-navbar'>
          <div>
            <FaBars onClick={handleToggle} size={24} color='white' />
          </div>
        </section>
      </nav>

      <div className='subjects'>
        <div className='subjects-panel'>
          <h3>Subjects</h3>
          <div>
            <Link to='/academics/subjectlist' className='academic-mobile-list'>
              <FaList size={18} />
            </Link>
            <Link to='/academics' className='academic-mobile-list'>
              <FiGrid size={18} />
            </Link>
          </div>
        </div>

        <div className='subjects-list'>
          <ul>
            {lessons.map((item) => (
              <div>
                <li>
                  <img src={item.foto} alt='' />
                  <div>
                    <h3>{item.lesson}</h3>
                    <p>Instructor: {item.teacher}</p>
                  </div>
                </li>
                {/* </Link> */}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SubjectListMobile;

