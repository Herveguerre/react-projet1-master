import React from 'react'

export default function Card({titleCard, descriptionCard}) {
  return (
    <div className='p-5 justify-center  ' >
        <p className='font-bold' >{titleCard}</p>
        <p>{descriptionCard}</p>
    </div>
  )
}
