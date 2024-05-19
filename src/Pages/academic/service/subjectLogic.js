import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchSubjects} from './getSubjectSlice'

const subjectLogic = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const getcourses = useSelector((state) => state.getcourses);

    const handleGetCourses = () => dispatch(fetchSubjects());

  return {
    getcourses: getcourses,
    handleGetCourses: handleGetCourses,
  }
}

export default subjectLogic

