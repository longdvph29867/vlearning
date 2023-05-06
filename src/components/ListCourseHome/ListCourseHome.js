import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setListCourse } from '../../redux/action/userAction';
import BackEndCourse from '../BackEndCourse/BackEndCourse';
import FrontEndCourse from '../FrontEndCourse/FrontEndCourse';
import PopularCourse from '../PopularCourse/PopularCourse';

export default function ListCourseHome() {
    let dispath = useDispatch();
    useEffect(() => {
        dispath(setListCourse());
    }, [])
    
  return (
    <div>
        <div className="container">
            <PopularCourse/>
            <FrontEndCourse/>
            <BackEndCourse/>
        </div>
    </div>
  )
}
