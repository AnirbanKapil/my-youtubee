import React from 'react'
import Comments from './Comments'

function CommentsList({comments}) {
    
      return  (
        <div>
        {comments.map((comment,index)=> 
        <div key={index}><Comments  data={comment}/>
        <div className='pl-5 ml-5 border border-l-black'>
        <CommentsList comments={comment.replies}/>
        </div>
        </div>)}
           
        </div> 
     )

    
}
            
    
  


export default CommentsList