import React, {useContext, useState, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const {addFeedback,feedbackEdit,upadteFeedback} = useContext(FeedbackContext)
    useEffect(() => {
        if(feedbackEdit.edit === true){
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])
    const [text,setText]= useState('')
    const [rating,setRating]= useState(10)
    const [btnDisabled,setbtnDisabled]= useState(true)
    const [message,setMessage]= useState('')
    const handleTextChange = (e) => {
        setText(e.target.value)
        if(text ===''){
            setbtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 characters')
            setbtnDisabled(true)
        } else{
            setMessage(null)
            setbtnDisabled(false)
        }        
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text:text,
                rating:rating
            }
            if(feedbackEdit.edit === true){
                upadteFeedback(feedbackEdit.item.id,newFeedback)
            }else{
                addFeedback(newFeedback)
            }            
            setText('')
            setbtnDisabled(true)
        }
        
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating)=>{setRating(rating)}}/>
            <div className='input-group'>
                <input type="text" value={text} placeholder="Write a review" onChange={handleTextChange}/>
                <Button type='submit' isDisabled={btnDisabled}>Sent</Button>                
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm