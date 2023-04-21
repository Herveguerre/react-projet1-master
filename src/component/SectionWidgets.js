import React from 'react'
import CardWidgets from './cards/CardWidgets'
import TitleSection from './TitleSection'

export default function SectionWidgets() {
  return (
    <div className='bg-blue-100' >
        <TitleSection
                title='component'
                subtitle='most used widgets'   
                description="provice frequently used component for building wedsite using tailwind "                      
            />

        <div className='justify-center bg-blue-100  m-2 grid grid-cols-3'>
            <CardWidgets
            titleWidgets='&#x2601; Header'
            descriptionWidgets="loreBut you're godykjhyi ujod, "
            />
            <CardWidgets
            titleWidgets='&#x2601;Header'
            descriptionWidgets="lorem10 loreBut you're godykjhyi ujod,"
            />
            <CardWidgets
            titleWidgets='&#x2601;Header'
            descriptionWidgets="lorem10loreBut you're godykjhyi ujod,"
            />
            <CardWidgets
            titleWidgets='&#x2601;Header'
            descriptionWidgets="lorem1loreBut you're godykjhyi ujod,0"
            />
            <CardWidgets
            titleWidgets='&#x2601;Header'
            descriptionWidgets="loremloreBut you're godykjhyi ujod,10"
            />
            <CardWidgets
            titleWidgets='&#x2601;Header'
            descriptionWidgets="loremloreBut you're godykjhyi ujod,10"
            />
            <CardWidgets
            titleWidgets='&#x2601;Header'
            descriptionWidgets="loremloreBut you're godykjhyi ujod,10"
            />
            <CardWidgets
            titleWidgets='&#x2601;Header'
            descriptionWidgets="loremloreBut you're godykjhyi ujod,10"
            />
            <CardWidgets
            titleWidgets='&#x2601;Header'
            descriptionWidgets="loremloreBut you're godykjhyi ujod,10"
            />

        </div>

    </div>
)
}
