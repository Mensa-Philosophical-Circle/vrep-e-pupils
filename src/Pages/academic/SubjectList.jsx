import { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import SubjectListMobile from '../../mobile/SubjectListMobile';
import { BiSearch } from 'react-icons/bi';
import personIcon from '../../assets/images/person.png';

import RightSidebar from '../../components/RightSidebar';
import { Link } from 'react-router-dom';
import { FaList } from 'react-icons/fa6';
import { FiGrid } from 'react-icons/fi';

function SubjectList() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [isActive, setIsActive] = useState(false);
  const [lessons, setLessons] = useState([
    {
      id: 1,
      foto: personIcon,
      lesson: 'English',
      teacher: 'John Doe',
    },
    {
      id: 2,
      foto: personIcon,
      lesson: 'Mathematics',
      teacher: 'John Doe',
    },
    {
      id: 3,
      foto: personIcon,
      lesson: 'Chemistry',
      teacher: 'John Doe',
    },
    {
      id: 4,
      foto: personIcon,
      lesson: 'Physics',
      teacher: 'John Doe',
    },
    {
      id: 5,
      foto: personIcon,
      lesson: 'Biology',
      teacher: 'John Doe',
    },
    {
      id: 5,
      foto: personIcon,
      lesson: 'Art',
      teacher: 'John Doe',
    },
  ]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1000);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {' '}
      {isMobile ? (
        <SubjectListMobile />
      ) : (
        <div className='academics-page'>
          <Sidebar />
          <article className='academics-main'>
            <section className='subjects-panel-container'>
              <div className='subjects'>
                <div className='subjects-panel'>
                  <h3>Subjects</h3>
                </div>
                <div className='subjects-panel-main'>
                  <div className='subjects-panel-title'>
                    <p>
                      Number of Subjects - <span>{lessons.length}</span>
                    </p>
                    <div className='subject-panel-button'>
                      <Link
                        to='/academics'
                        style={{
                          border: 'none',
                          color: 'black',
                          borderTopLeftRadius: '10px',
                          borderBottomLeftRadius: '10px',
                          background: isActive ? '#C6CCDC' : '',
                        }}
                        className='subject-button-panel-link'
                        onClick={() => setIsActive(true)}
                      >
                        <FiGrid />
                      </Link>
                      <Link
                        to='/academics/subjectlist'
                        style={{
                          border: 'none',
                          color: 'black',
                          borderTopRightRadius: '10px',
                          borderBottomRightRadius: '10px',
                          background: isActive ? '' : '#C6CCDC',
                        }}
                        className='subject-button-panel-link'
                        onClick={() => setIsActive(!isActive)}
                      >
                        <FaList />
                      </Link>
                    </div>
                  </div>

                  <div className='subjects-list'>
                    <ul>
                      {lessons.map((item) => (
                        <li key={item.id}>
                          <div className='avatar-container'>
                            <img src={item.foto} alt='' />
                          </div>
                          <h3> {item.lesson}</h3>
                          <p>Instructor: {item.teacher}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <RightSidebar />
          </article>
        </div>
      )}
    </>
  );
}

export default SubjectList;

