import React from 'react'

const Button = () => {
    const List = ["All" , 'Live' , "News" , 'Cricket' , 'Songs' , 'Movies' , 'IPL' , 'Gaming','Motivation','Bhakti']
  return (
    <div>
      {List.map( (list , index)=>{
        return <button key={index} className='m-3 px-5 py-2 bg-gray-200 rounded-lg'>{list}</button>
      })}
    </div>
  )
}

export default Button
