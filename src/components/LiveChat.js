import React, { useEffect, useState } from 'react'
import ChatMsg from './ChatMsg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames,generateRandomComments } from '../utils/helper';

function LiveChat() {

  const [liveCmnt,setLiveCmnt] = useState("");
 
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
    <>
    <form onSubmit={(e)=> {
      e.preventDefault();
      dispatch(addMessage({
        name : "User007",
        message : liveCmnt
      }))
      setLiveCmnt("")
      }}>
    <div className='h-[510px] border border-black m-1 p-1 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'> 
    {chatMessages.map((chat,index)=> <ChatMsg key={index} name={chat.name} msg={chat.message}/>)}
    </div>
    <div className='border border-black'>
      <input className="w-[260px] p-1"
      type='text'
      value={liveCmnt}
      onChange={(e)=> setLiveCmnt(e.target.value)}
      placeholder='comment'
      />
      <button className='p-2'>Send</button>
    </div>
    </form>
    </>
  )
}

export default LiveChat