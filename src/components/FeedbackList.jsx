import React, {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import {motion,AnimatePresence} from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'
import Card from './shared/Card'
function FeedbackList() {
  const {feedback, isLoaded} = useContext(FeedbackContext)
    if(isLoaded && (!feedback || feedback.length === 0)){
        return <center>No feedback Yet</center>
    }
  return (
    <Card isReverse={true}>
      <div className='feedback-list'>
      {
        !isLoaded ? (
          <Spinner />
        ) : (
          
          <AnimatePresence>
            { feedback.map((item)=>(
              <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity : 1 }} exit={{ opacity : 0 }}>
                <FeedbackItem key={item.id} item={item} />
              </motion.div>
            ))}        
          </AnimatePresence>
        
        )
      }
      </div>
    </Card>
  )
}

export default FeedbackList