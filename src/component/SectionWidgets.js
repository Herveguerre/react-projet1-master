import React from 'react'
import CardWidgets from './cards/CardWidgets'
import TitleSection from './TitleSection'
import CardWidgets2 from './cards/CardWidgets2'

export default function SectionWidgets() {
  return (
    <div className='bg-blue-200  ' >
        <div className="">
            <TitleSection 
            title='component'
            subtitle='most used widgets'   
            description="provice frequently used component for building wedsite using tailwind "                      
            />
        </div>
        <div className=' m-2 grid grid-cols-3  p-3 justify-between flex-wrap'>           
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
        <div className='text-left justify-between  bg-white pl-0.5 flex gap-20' > 
            <div>
                <TitleSection 
                subtitle='Find out more content'   
                description="view all posts >>"                      
                />
            </div>
            <div className='text-start w-[500px] pr-[20px]' >
                <TitleSection                 
                description="view all But you're good, Marty, you're really good. And this audition tape of your is great, you gotta send it in to the record company."                      
                />
            </div>          
        </div>
        <div className='p-5 gap-12 grid-cols-3 flex bg-white' >
            <div>

                <CardWidgets2
                title='Get started with Astrowind to create a website '
                description='But you re good  Marty youBut you re good  Marty  you re really good And this audition tape of your is great  you gotta send it in to the record '
                />
            </div>
            <div>
                <CardWidgets2
                title='Get started with Astrowind to create a website '
                description='But you re good  Marty youBut you re good  Marty  you re really good And this audition tape of your is great  you gotta send it in to the record '
                />
            </div>
            <div>
                <CardWidgets2
                title='Get started with Astrowind to create a website '
                description='But you re good  Marty youBut you re good  Marty  you re really good And this audition tape of your is great  you gotta send it in to the record '
                />
            </div>
            <div>
                <CardWidgets2
                title='Get started with Astrowind to create a website '
                description='But you re good  Marty youBut you re good  Marty  you re really good And this audition tape of your is great  you gotta send it in to the record '
                />
            </div>
            
        </div>


    </div>
)
}
