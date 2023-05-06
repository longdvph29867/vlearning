import React from 'react'
import BannerHome from '../../components/BannerHome/BannerHome'
import InfoCourseHome from '../../components/InfoCourseHome/InfoCourseHome'
import Instrutor from '../../components/Instrutor/Instrutor'
import ListCourseHome from '../../components/ListCourseHome/ListCourseHome'
import NumberCountUp from '../../components/NumberCountUp/NumberCountUp'
import ReviewStudent from '../../components/ReviewStudent/ReviewStudent'

export default function HomePage() {
  return (
    <div>
      <BannerHome/>
      <InfoCourseHome/>
      <ListCourseHome/>
      <NumberCountUp/>
      <Instrutor/>
      <ReviewStudent/>
    </div>
  )
}
