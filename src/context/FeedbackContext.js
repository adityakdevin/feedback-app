import React,{createContext,useState} from 'react'
import {v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback,setFeedback] =useState([
        {
            id:1,
            text: 'This item is from provider',
            rating:10
        }
    ])
    const [feedbackEdit,setFeedbackEdit] =useState({
      item:{},
      edit:false
    })

    const deleteFeedback = (id)  => {
      if(window.confirm('Are you sure want to delete?')){
        setFeedback(feedback.filter((item)=>item.id !== id))
      }
      
    }

    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback])
    }

    const editFeedback = (item) => {
     setFeedbackEdit({
       item:item,
       edit:true
     })
    }

    const upadteFeedback = (id,updatedItem) => {
      setFeedback(feedback.map((item)=>item.id===id ? { ...item, ...updatedItem} : item))
     }

    return  <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            upadteFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
    
}

export default FeedbackContext