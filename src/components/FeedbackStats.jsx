import React,{useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
    let rating_avg = feedback.reduce((acc,cur)=>{
        return acc+cur.rating
    },0) / feedback.length
    rating_avg = rating_avg.toFixed(1)
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: { isNaN(rating_avg) ? 0 : rating_avg}</h4>
    </div>
  )
}

export default FeedbackStats