import React from 'react'
import CardFaqs from './cards/CardFaqs'
import TitleSection from './TitleSection'

export default function SectionFaqs() {
  return (
    <div>
        <TitleSection
         title="FAQS"
         subtitle="Frequently Asked Questions"
         description="duis turpis, fringuila mattis sem nec, morbi tincidunt lacus"
        />
        <div>
            <CardFaqs
            icon=""
            title="what do i need to start?"
            description="But you're good, Marty, you're really good. And this audition tape of your is great, you gotta send it in to the record company. It's like Doc's always saying. Oh, what I meant to day was- I got enough practical jokes for one evening. Good night, fut"
            />
            <CardFaqs
            icon=""
            title="how to install the Astro + tailwind"
            description="But you're good, Marty, you're really good. And this audition tape of your is great, you gotta send it in to the record company. It's like Doc's always saying. Oh, what I meant to day was- I got enough practical jokes for one evening. Good night, fut"
            />
            <CardFaqs
            icon=""
            title="what's something that you don't "
            description="But you're good, Marty, you're really good. And this audition tape of your is great, you gotta send it in to the record company. It's like Doc's always saying. Oh, what I meant to day was- I got enough practical jokes for one evening. Good night, fut"
            />
        </div>
        <div>
            <CardFaqs
            icon=""
            title="what 's example"
            description="But you're good, Marty, you're really good. And this audition tape of your is great, you gotta send it in to the record company. It's like Doc's always saying. Oh, what I meant to day was- I got enough practical jokes for one evening. Good night, fut"
            />
            <CardFaqs
            icon=""
            title="what's is something"
            description="But you're good, Marty, you're really good. And this audition tape of your is great, you gotta send it in to the record company. It's like Doc's always saying. Oh, what I meant to day was- I got enough practical jokes for one evening. Good night, fut"
            />
            <CardFaqs
            icon=""
            title="if you could only ask"
            description="But you're good, Marty, you're really good. And this audition tape of your is great, you gotta send it in to the record company. It's like Doc's always saying. Oh, what I meant to day was- I got enough practical jokes for one evening. Good night, fut"
            />
        </div>
        

    </div>
  )
}
