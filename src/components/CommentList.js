import React from 'react';

const Comment = ({data})=>{
  const {name,desc} = data;
  return(
    <div className='flex shadow-sm p-2 bg-gray-100 rounded-sm m-1'>
    <img className='h-6 w-6' alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
    <div className='px-3'>
      <p className='font-bold'>{name}</p>
      <p>{desc}</p>
    </div>
  </div>
  )
}

const CommentList = ({comments}) => {
   return(
    comments.map( (comment)=>{
      return <div>
        <Comment key={comment?.id} data={comment}/>
        <div className='pl-5 border border-l-4 ml-5'>
          <CommentList comments={comment?.reply}/>
        </div>
      </div>
    })
   )
}

export default CommentList;
