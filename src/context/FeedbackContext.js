import React,{createContext,useState,useEffect} from 'react'
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [feedback,setFeedback] =useState([])
    const [feedbackEdit,setFeedbackEdit] =useState({
      item:{},
      edit:false
    })
    useEffect(()=>{
      fetch(`/feedback?_sort=id&_order=desc`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFeedback(result);
        },
        (error) => {
          setIsLoaded(true);
        }
      )
    }, []);
    
     
    const deleteFeedback = async (id)  => {
      if(window.confirm('Are you sure want to delete?')){
        await fetch(`/feedback/${id}`,{
          method:'DELETE',
        })
        setFeedback(feedback.filter((item)=>item.id !== id))
      }
    }

    const addFeedback = async (newFeedback) => {
      await fetch('/feedback',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body : JSON.stringify(newFeedback)
      }).then(res => res.json()).then(
        (result) => {
          setFeedback([newFeedback, ...feedback])
        }
      )
    }

    const editFeedback = (item) => {
     setFeedbackEdit({
       item:item,
       edit:true
     })
    }

    const upadteFeedback = async (id,updatedItem) => {
      await fetch(`/feedback/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body : JSON.stringify(updatedItem)
      }).then(res => res.json()).then(
        (result) => {
          setFeedback(feedback.map((item)=>item.id===id ? { ...item, ...result} : item))
        }
      )
     }

    return  <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            upadteFeedback,
            isLoaded
        }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext
