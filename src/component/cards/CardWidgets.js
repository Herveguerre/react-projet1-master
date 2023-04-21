import React from 'react'

export default function CardWidgets({titleWidgets,descriptionWidgets,icons}) {
  return (
    <div className='p-10 bg-white  w-[350px] h-[180px] m-3 shadow-md  ' >
        
        <p className='font-bold pb-4' >{icons}{titleWidgets}</p>
        <p>{descriptionWidgets}</p>
    </div>
  )
}
