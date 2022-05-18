import React from 'react'
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import AboutIconLink from '../components/AboutIconLink';
function HomePage() {
  return (
    <>
    <FeedbackForm/>
    <FeedbackStats />
    <FeedbackList />
    <AboutIconLink />
    </>
  )
}

export default HomePage