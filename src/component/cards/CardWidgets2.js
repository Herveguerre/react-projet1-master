import React from 'react'

export default function CardWidgets2({img,title,description}) {
  return (
    <div className='bg-white  grid-cols-4 p-3' >
        <p></p>
        <p className='font-bold pb-2 text-xl' >{title}</p>
        <p>{description}</p>

    </div>
  )
}
