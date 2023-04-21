import React from 'react'

export default function CardFaqs({icon,title,description}) {
  return (
    <div>
        <p className='font-bold' >{icon},{title}</p>
        <p>{description}</p>
    </div>
  )
}
