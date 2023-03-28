import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex shadow-sm p-2 pt-5'>
        <img className='h-6 w-6' alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
        <span className='text-bold px-2'>{name}</span>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage
