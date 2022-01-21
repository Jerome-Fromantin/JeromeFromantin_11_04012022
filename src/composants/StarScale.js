import Starp from '../assets/Star_pink.png'
import Starg from '../assets/Star_grey.png'

function StarScale({scaleValue}) {
    const range = [1, 2, 3, 4, 5]

    return (<span>
        {range.map((rangeElem) => scaleValue >= rangeElem ? (
            <span key={rangeElem.toString()}><img src={Starp} alt="Etoile classement" className="star"/></span>) :
            <span key={rangeElem.toString()}><img src={Starg} alt="Etoile classement" className="star"/></span>
        )}
    </span>)
}

export default StarScale

/*
Fonctionnement de StarScale() :
Il retourne un span (ligne 11 à 16) qui contient le résultat de map() qui fonctionne ainsi :
Il prend le 1er élément de "range" (1) et se demande si "scaleValue" est supérieur ou égal (ligne 13).
(scaleValue est défini dans ShoppingList, c'est la valeur de propri1 ou propri2.)
Si c'est le cas, map() affiche un span avec "scaleType", c'est-à-dire "*" si "proprisType" est propri1
et "$" si "proprisType" est propri2 (condition en ligne 3).
Si ce n'est pas le cas, map() n'affiche rien (null).
map() prend ensuite 2 dans "range" et recommence le processus.
Et ainsi de suite pour chaque élément de "range"...

Donc pour un scaleValue de 3 en propri1, ça affichera "***"
et pour un scaleValue de 2 en propri2, ça affichera "$$".

De plus, au clic sur la propriété apparait en boite d'alerte un message défini en ligne 11.
*/
