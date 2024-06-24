import React, { useEffect } from 'react'
import ChatMsg from './ChatMsg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames,generateRandomComments } from '../utils/helper';

function LiveChat() {
 
 const dispatch = useDispatch();

 const chatMessages = useSelector((store)=> store.chat.messages)
 
 

  useEffect(()=>{
    const interV = setInterval(()=>{
    dispatch(addMessage({
      name : generateRandomNames(),
      message : generateRandomComments(),
    }))
  },2000)
  
  return ()=> clearInterval(interV)    
 },[])
 
 
  return (
    
    <div className='h-[510px] border border-black m-1 p-1 bg-slate-100 rounded-lg overflow-y-scroll'> 
    {chatMessages.map((chat)=> <ChatMsg name={chat.name} msg={chat.message}/>)}
    
    </div>
  )
}

export default LiveChat