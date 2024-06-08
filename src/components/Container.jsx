import React from 'react'

export default function Container({children}) {
  return (
    <div className='md:pl-10 md:pr-10 pl-5 pr-5 '>
      {
        children
      }
    </div>
  )
}
