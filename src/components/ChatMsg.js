import React from 'react'

function ChatMsg({name,msg}) {
  return (
    <div className='flex items-center m-3'>
    
    <img alt="user Icon" className="w-10 mt-2 " src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" />
    <span className='font-semibold pr-2'>{name}</span>
    <span className='font-extralight'>{msg}</span>

   </div>
   
  )
}

export default ChatMsg