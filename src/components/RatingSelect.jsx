import React, { useState,useContext,useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function RatingSelect({select}) { 
    const {feedbackEdit} = useContext(FeedbackContext)
    useEffect(()=>{
        if(feedbackEdit.edit === true){
            setSelected(feedbackEdit.item.rating)
        }
    },[feedbackEdit])
    const [selected, setSelected]= useState(10)
    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
    const rating_list = [];
    for (var i = 1; i <= 10; i++) {
        rating_list.push(
            <li key={i}>
                <input type="radio" name="rating" id={`number_${i}`} value={i} onChange={handleChange} checked={selected===i} />
                <label htmlFor={`number_${i}`}>{i}</label>
            </li>
        )
    } 
  return (
    <ul className='rating'>
        {rating_list}
    </ul>
  )
}

export default RatingSelect