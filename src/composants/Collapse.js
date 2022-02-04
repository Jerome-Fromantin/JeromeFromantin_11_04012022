import React, { useRef } from 'react'
import down_arrow from '../assets/DownArrow.png'
import up_arrow from '../assets/UpArrow.png'

function Collapse(props) {
    const arrow1 = useRef()
    const arrow2 = useRef()
    const text = useRef()

    function openClose() {
        arrow1.current.classList.toggle("downarrow_no")
        arrow2.current.classList.toggle("uparrow_yes")
        text.current.classList.toggle("texte_apropos_open")
    }

    return <div>
        <div className={props.titleClass} onClick={openClose}>
            <span className="titre_nom">{props.title}</span>
            <span className="titre_fleches">
                <span className="downarrow" ref={arrow1}><img src={down_arrow} className="arrowImg" alt="Flèche vers le bas"/></span>
                <span className="uparrow" ref={arrow2}><img src={up_arrow} className="arrowImg" alt="Flèche vers le haut"/></span>
            </span>
        </div>
        <div id={props.mobileDisplay} className={props.textClass} ref={text}>
            {props.description}
        </div>
    </div>
}

export default Collapse
