///*

SELECTEUR HTML DOCUMENT

            document.getElementById('id - {#}') // selectionner une Id
            document.getElementsByTagName('class - {.}') // selctionner TOUS les class qui retourne une tableaux
            document.getElementsByClassName('p') // tous les tag comme p,h1, qui retourn une tableaux
            document.querySelector('.class') // selectionner tous les class
            doc =document.querySelector('.class') // comme tag name
            doc.className // reperer un class d'un element Html
            doc.classList // retour une tableaux qui comporte le class d'un element html
            doc.style // ajouter une style d'in element Html
            doc.inherhtml // aficher un elemnt html ne prend pas en compte les balise Html
            doc.inherText // aficher un elemnt html prend compte les balise Html  
            doc.textContaintent //ajouter un element


//SELECTEUR-LISTE-------------------------------------------------------------------------------------------------------------------------------
 
      <ul>(noeud)
            <li>1</li>(noeud)
            <li>2</li>(noeud)
            <li>3</li>(noeud)
            <li>4</li>(noeud)
            <li>5</li>(noeud)
      </ul>
      
      
      var ul = document.querySelector('ul') // selectionner un Ul
      
      ul.children // recuperer tous les element enfants de la ul qui sont les li
      ul.childNodes // recuper tous les noeuds
      ul.childElementCount // compte tous les element de ul
      ul.firstChild // recuperer le premier enfant de ul noeud
      ul.firstElementChild // recuperer le premier element de Ul ici 1
      ul.lastChild
      ul.lastElementChild
      li =ul.querySelector('li:nth-child(3)') // recuperer le 3em element 
      li.previousElementSibling // l'element precendent de meme niveaux  
      li.nextElementSibling // l'element next de meme niveaux
      li.parentElement // sibler l'element parent
      li.parentNode // le noeud parent
      li.parentElement.children //  recuper tous les element du meme niveaux
      li.parentElement.removeChild('element a supprimer') //supprimer in enfant
      li.appendChild('element a ajouter') // ajouter un elment a la fin du 
      li2 = li.cloneNode(true) // cloner un enlement
      document.createElement('li') // crrer un element du dom 
      li.parentElement.replaceChild(li2 , li) // remplacer l'element de li par li2
      li.insertBefore('parent', 'element a ajouter en avant')      
*/