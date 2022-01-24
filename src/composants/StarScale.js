import Starp from '../assets/Star_pink.png'
import Starg from '../assets/Star_grey.png'

function StarScale({scaleValue}) {
    const range = [1, 2, 3, 4, 5]

    return (<div className="starDiv">
        {range.map((rangeElem) => scaleValue >= rangeElem ? (
            <span key={rangeElem.toString()}><img src={Starp} alt="Etoile classement" className="star"/></span>) :
            <span key={rangeElem.toString()}><img src={Starg} alt="Etoile classement" className="star"/></span>
        )}
    </div>)
}

export default StarScale

/*
Fonctionnement de StarScale() :
Il retourne une div (ligne 7 à 12) qui contient le résultat de map() qui fonctionne ainsi :
Il prend le 1er élément de "range" (1) et se demande si "scaleValue" est supérieur ou égal (ligne 8).
(scaleValue est défini dans "logement.js", c'est la valeur de "rating".)
Si c'est le cas, map() affiche un span avec la balise img de l'étoile rose.
Si ce n'est pas le cas, map() affiche un span avec la balise img de l'étoile grise.
map() prend ensuite 2 dans "range" et recommence le processus.
Et ainsi de suite pour chaque élément de "range"...

Donc pour un scaleValue de 3, ça affichera 3 étoiles roses et 2 étoiles grises
et pour un scaleValue de 5, ça affichera 5 étoiles roses.
*/
