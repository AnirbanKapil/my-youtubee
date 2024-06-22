import React from 'react'

import CommentsList from './CommentsList'

function CommentComponent() {

  const commentsData = [
    {
      name : "Limbo",
      text : "The weather is quite pleasant today",
      replies : [
        {
          name : "Limbo",
          text : "The weather is quite pleasant today",
          replies : [
            
          ]
        },
        {
          name : "Limbo",
          text : "The weather is quite pleasant today",
          replies : [
            
          ]
        } 
      ]
    },{
      name : "Bimbo",
      text : "Yup, weather is quite pleasant today",
      replies : [
        
      ]
    }
  ]


  return (
    <div className='m-5 p-2'>
    <h1 className='text-2xl font-bold'>Comments :</h1>
    <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentComponent