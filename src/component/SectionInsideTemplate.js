
import TitleSection from './TitleSection'
import Card from './cards/Card'
import CardTemplate from './cards/CardTemplate'

export default function SectionInsideTemplate() {
  return (
    <div>
      <div className='bg-blue-200 pb-20 content-center' >
            <TitleSection
                title='inside template'
                subtitle='and what inside?...'                         
            />
            <div className='flex  space-x-10' >
            <div>
              <CardTemplate
              titleCardTemplate='ad vix debet docendi'
              descriptionCardTemplate='lorem20 lorem marche pas alors j ecrit n impote quoi.. '
            />
          
            
              <Card
              titleCard='prer ei qu'
              descriptionCard='ex usu illum hgfdhgfdhdfghfdg'
              />
              <Card
              titleCard='pcu imperdiet posidonium sed'
              descriptionCard='ex usu illum hgfdhgfdhdfghfdg'
              />
              <Card
              titleCard='Nulla omittan sadipscing mel ne'
              descriptionCard='ex usu illum hgfdhgfdhdfghfdg'
              />
            </div>
            <div className='sm bg-blue-200'>
              <img   src="./img/2.jpg"></img>
            </div>
          </div>  
          </div>
          <div className='flex p-5 pt-24 content-between bg-blue-200 pb-20' >
            <div>
            <img   src="./img/3.jpg"></img>

            </div>
            <div>
            <Card
              titleCard='Per ei quaeque sensibus'/>
              <Card
              titleCard='cu imperdiet sed'/>
              <Card
              titleCard='Nulla omittan sadipscing mel ne'/>
              <Card
              titleCard='Per ei quaeque sensibus'/>
              <Card
              titleCard='cu imperdiet sed'/>
              <Card
              titleCard='Nulla omittan sadipscing mel ne'/>
            </div>
          </div>
          <div className='flex pt-20' >
          
            <div><CardTemplate
                titleCardTemplate='Get your dream website up and running in no time with AstroWind.'/>
                <Card
              titleCard='step 1:downlod'
              descriptionCard='ex usu illum hgfdhgfdhdfghfdg'
              />
              <Card
              titleCard='step2: add content'
              descriptionCard='ex usu illum hgfdhgfdhdfghfdg'
              />
              <Card
              titleCard='step 3: customize styles'
              descriptionCard='ex usu illum hgfdhgfdhdfghfdg'
              />
              <Card
              titleCard='ready!'
              />

            </div>
            <div><img className='max-h-[550px]'  src="./img/4.jpg"></img>
            </div>

          </div>

        
        
    </div>
  )
}
