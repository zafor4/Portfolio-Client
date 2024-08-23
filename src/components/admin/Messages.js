import React from 'react'

const Messages = (props) => {
  return (
    <div className='mb-1 border p-2 rounded'>
        <h1 className='text-sm text-red-500'>{props.message.email}</h1>
        <p>{props.message.text}</p>
    </div>
  )
}

export default Messages