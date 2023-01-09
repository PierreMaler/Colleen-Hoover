import React, {useState} from 'react'
import {SliderData2} from './SliderData2'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import styles from '../styles/Home.module.css';




const ImageSlider2 = ({slides}) => {

    React.useEffect(() =>
        {
            import("lottie-interactive/dist/lottie-interactive.js");
        });

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    function showArrows() { document.getElementById('fleches').style.opacity = '1'; }
    function showQuarterArrows() { document.getElementById('fleches').style.opacity = '25%'; }
    function showHalfArrows() { document.getElementById('fleches').style.opacity = '50%'; }


    const hideArrows = () => {
        document.getElementById('fleches').style.opacity = '0';
        // ReactDOM.render(element, document.getElementById('fleches'));
        setTimeout(showQuarterArrows, 400); 
        setTimeout(showHalfArrows, 450);
        setTimeout(showArrows, 500); 
    }

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
        hideArrows();
        

    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1)
        hideArrows();
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        
        <section className="slider2">
            <div id='fleches' className={styles.fleches}> 
            <div className={styles.flecheleft}>
                <lottie-interactive
                    path="/animations/flechepreviousbleu.json"
                    autoplay
                    loop
                    onClick={prevSlide}
                />
            </div>
            <div className={styles.flecheright}>
                <lottie-interactive
                    path="/animations/flechenextbleu.json"
                    autoplay
                    loop
                    onClick={nextSlide}
                />
            </div>
            </div>
            
            
            

            {/* <img className="leftarrow" src="/images/flecheprevious.png" onClick={prevSlide}/>
            <img className="rightarrow" src="/images/flechenext.png" onClick={nextSlide}/> */}
            {/* <FaArrowAltCircleLeft className="leftarrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="rightarrow" onClick={nextSlide} /> */}
            {SliderData2.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<div className='slider-image-container'>
                        
                        <img className='slider-image' src={slide.image} alt="travel image" />
                        <button className={styles.boutoncommandercarrouseldesktop } ><a  href={slide.link} target="_blank">
                Commander
              </a> </button>
                        <div className='slider-text'>
                        <h3>{slide.name}</h3>
                        <p className='slider-description' >{slide.description}</p>
                        </div>
                        
                    </div>)}
                    </div>
                )
                
            })}
        </section>
    )
}

export default ImageSlider2
