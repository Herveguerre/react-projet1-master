
import TitleSection from './TitleSection'
import Card from './cards/Card'
import CardTemplate from './cards/CardTemplate'

export default function SectionInsideTemplate() {
  return (
    <div>
      <div>
            <TitleSection
                title='inside template'
                subtitle='and what inside?...'                         
            />
            <CardTemplate
              titleCardTemplate='ad vix debet docendi'
              descriptionCardTemplate='lorem20 lorem marche pas alors j ecrit n impote quoi.. '
            />
            <div>
              <Card
              titleCard='prer ei qu'
              descriptionCard='ex usu illum hgfdhgfdhdfghfdg'
              />
            </div>
        </div>
        
    </div>
  )
}
