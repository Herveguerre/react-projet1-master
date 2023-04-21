//src/data/datacardsFeatures.js
//cree une boucle pour appeler les datas  
//ne pas oublier de faire export de la data : 

export const dataCards=[
{
    title:"blabla",
description:"blabla"
},
{
    title:"blabla",
description:"blabla"
},
]

//faire une boule et prend chaque element "item" 
{
dataCards.map((item)=>
<cardFeatures
icon='{item.icon}'
title='{item.title}'
description='{item.description}'
/>
)
}