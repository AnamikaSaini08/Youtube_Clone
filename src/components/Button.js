import React from 'react'

const Button = () => {
    const List = ["All" , 'Live' , "News" , 'Cricket' , 'Songs' , 'Movies' , 'IPL' , 'Gaming','Motivation','Bhakti']
  return (
    <div>
      {List.map( (list)=>{
        return <button className='m-3 px-5 py-2 bg-gray-100 rounded-lg'>{list}</button>
      })}
    </div>
  )
}

export default Button
