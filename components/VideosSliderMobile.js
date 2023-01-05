import React, {useState} from 'react'
import {SliderData} from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import styles from '../styles/Home.module.css';
import ReactPlayer from 'react-player';




const VideosSlider = ({slides}) => {

    React.useEffect(() =>
        {
            import("lottie-interactive/dist/lottie-interactive.js");
        });

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1)
    }

    console.log(current);

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className={styles.videoboxcontainer}>

<div className={styles.videobox}>
            {/* <div className={styles.arrowleft2}>
                <lottie-interactive
                    path="/animations/flechegauche.json"
                    autoplay
                    loop
                    onClick={prevSlide}
                />
            </div>
            <div className={styles.arrowright2}>
                <lottie-interactive
                    path="/animations/flechedroite.json"
                    autoplay
                    loop
                    onClick={nextSlide}
                />
            </div> */}
            <ReactPlayer youtube className={styles.video} url='https://www.youtube.com/watch?v=qTivGfOlJ5E' width= '100%' height= '100%'
 maxcontrols/>

            
        </div>

        </div>
        
        
        
    )
}

export default VideosSlider
