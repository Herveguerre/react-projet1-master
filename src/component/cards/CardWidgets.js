import React from 'react'

export default function CardWidgets({titleWidgets,descriptionWidgets}) {
  return (
    <div className='p-10 bg-white  w-[350px] h-[180px] m-3 border-gray-200 ' >
        <p className='font-bold pb-4' >{titleWidgets}</p>
        <p>{descriptionWidgets}</p>
    </div>
  )
}