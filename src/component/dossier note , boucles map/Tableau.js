// notes perso
// src/data/datacardsFeatures.js
// cree une boucle pour appeler les datas  
// ne pas oublier de faire export de la data : 
// chercher les icons sur iconreact              <img src="../img/   .jpg" alt="ne pas oublier pour google" /> 
// dans les descriptions toujours mettes de "" et pas ' sinon, si il y a des ' dans le texte cela fait une erreur et on ne peut 
// pas mettre des "" ...

// faire du css et voir si on importe que dans App.js l'importe aussi dans tout les autres , sinon eventuelement cree un fichier  
// css par fichier js . ou l'importer sur chaque fichier js , avoir au plus simple ...
// voir si on peut directement cree une base de donnee sql pour evite de faire deux fois les choses 

// les if sont ecrit avant le return 
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
key='{index}'//pour definir la clé qui doit etre unique 
icon='{item.icon}'
title='{item.title}'
description='{item.description}'
/>
)
}