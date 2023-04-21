import React from 'react'

export default function CardTemplate({titleCardTemplate, descriptionCardTemplate}) {
  return (
    <div className=' p-5 flex  ' >
      <div>
        <p className='font-bold ' >{titleCardTemplate}</p>
        <p>{descriptionCardTemplate}</p>
        </div>
       
    </div>
  

  

  )
}
