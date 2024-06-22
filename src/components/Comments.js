import React from 'react'

function Comments({data}) {
  
  const {name,text} = data;
  console.log(data)
  return (
    <div className='flex bg-gray-200 p-2 rounded-md m-2'>
      <img alt='user-icon' className='w-8 h-6' src='https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png' />
      <div>
      <h2 className='font-semibold'>{name}</h2>
      <p>{text}</p>
      </div>
    </div>
  )
}

export default Comments