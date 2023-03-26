import React from 'react'

const Shimmer = () => {
  return (
    <div>
    {Array(10).map((_, index) => {
        return <div className='flex h-96 w-64 bg-black-300'></div>
    })}
    </div>
  )
}

export default Shimmer
