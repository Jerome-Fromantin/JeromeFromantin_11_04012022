import React from 'react'
import Previous from '../assets/Previous.png'
import Next from '../assets/Next.png'

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {currentPicIndex: 0}
    }
    
    render() {
        const {currentPicIndex} = this.state
        const pictures = this.props.photos
        const length = pictures?.length

        /* Fonction pour cliquer sur la photo précédente. */
        /* Si l'index en cours est différent de 0, on enlève 1. Sinon, on le remet au max. */
        const clickPrev = () => {
            this.setState((prevState) => ({
                currentPicIndex: prevState.currentPicIndex !== 0 ? prevState.currentPicIndex - 1 : prevState.currentPicIndex = length - 1
            }))
        }

        /* Fonction pour cliquer sur la photo suivante. */
        /* Si l'index en cours est différent du max, on ajoute 1. Sinon, on le remet à 0. */
        const clickNext = () => {
            this.setState((prevState) => ({
                currentPicIndex: prevState.currentPicIndex !== length - 1 ? prevState.currentPicIndex + 1 : prevState.currentPicIndex = 0
            }))
        }

        return (<div>
            {/* S'il y a des images, on affiche celle avec l'index en cours. Sinon, on n'affiche rien (null). */}
            <div className="gallery_logement">
                <img src={pictures ? pictures[currentPicIndex] : null} alt="Logement" className="gallery_picture"/>
                
            </div>
            <div className="gallery_arrows_div">
                <img id="previous" src={Previous} alt="Précédent" className="gallery_arrows" onClick={clickPrev}/>
                <img id="next" src={Next} alt="Suivant" className="gallery_arrows" onClick={clickNext}/>
            </div>
            <div className="gallery_numero">{currentPicIndex + 1}/{length}</div>
            {/* Numéro de photo/Nombre de photos */}
        </div>)
    }
}

export default Gallery
