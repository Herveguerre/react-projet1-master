import React from 'react'

export default function CardTemplate({titleCardTemplate, descriptionCardTemplate}) {
  return (
    <div className='flex ' >
    <p className='font-bold' >{titleCardTemplate}</p>
    <p>{descriptionCardTemplate}</p>
</div>

  )
}
