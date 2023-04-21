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
            icons='&#x2685;'
            titleWidgets=' Header'
            descriptionWidgets="loreBut you're godykjhyi ujod, "
            />
            <CardWidgets
            icons='&#x2685;'
            titleWidgets=' Hero'
            descriptionWidgets="lorem10 loreBut you're godykjhyi ujod,"
            />
            <CardWidgets
            icons='&#x2685;'
            titleWidgets=' Features'
            descriptionWidgets="lorem10loreBut you're godykjhyi ujod,"
            />
            <CardWidgets
            icons='&#x2685;'
            titleWidgets=' Content'
            descriptionWidgets="lorem1loreBut you're godykjhyi ujod,0"
            />
            <CardWidgets
            icons='&#x2685;'
            titleWidgets=' Call-to-Action'
            descriptionWidgets="loremloreBut you're godykjhyi ujod,10"
            />
            <CardWidgets
            icons='&#x2685;'
            titleWidgets=' Pricing'
            descriptionWidgets="loremloreBut you're godykjhyi ujod,10"
            />
            <CardWidgets
            icons='&#x2685;'
            titleWidgets=' Testimonial'
            descriptionWidgets="loremloreBut you're godykjhyi ujod,10"
            />
            <CardWidgets
            icons='&#x2685;'
            titleWidgets=' Contact'
            descriptionWidgets="loremloreBut you're godykjhyi ujod,10"
            />
            <CardWidgets
            icons='&#x2685;'
            titleWidgets=' Footer'
            descriptionWidgets="loremloreBut you're godykjhyi ujod,10"
            />

        </div>

    </div>
)
}
