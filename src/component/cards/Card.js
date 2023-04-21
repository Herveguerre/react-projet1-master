import React from 'react'

export default function Card({titleCard, descriptionCard}) {
  return (
    <div className='flex ' >
        <p className='font-bold' >{titleCard}</p>
        <p>{descriptionCard}</p>
    </div>
  )
}
