import React, { useRef, useState } from "react";
import styles from '../styles/Home.module.css';
import ImageSlider from "../components/ImageSlider";
import ImageSlider2 from "../components/ImageSlider2";
import ImageSliderMobile from "../components/ImageSliderMobile";
import ImageSliderMobile2 from "../components/ImageSliderMobile2";
import { SliderData } from "../components/SliderData";
import { SliderData2 } from "../components/SliderData2";
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import ResponsiveePlayer from "../components/ResponsivePlayer";
import {TiSocialFacebookCircular, TiSocialInstagram, } from 'react-icons/ti';


export default function Home() {
  React.useEffect(() => {
    import("lottie-interactive/dist/lottie-interactive.js");
  });

  const introduction = useRef(null);
  const synopsis = useRef(null);
  const personnages = useRef(null);
  const synopsis3 = useRef(null);
  const synopsis3mobile = useRef(null);
  const auteure = useRef(null);
  const phenomene = useRef(null);
  const precommande = useRef(null);
  const videos = useRef(null);
  const introductionmobile = useRef(null);
  const synopsismobile = useRef(null);
  const personnagesmobile = useRef(null);
  const auteuremobile = useRef(null);
  const phenomenemobile = useRef(null);
  const precommandemobile = useRef(null);
  const goodies = useRef(null);
  const goodiesmobile = useRef(null);
  const videosmobile = useRef(null);


  const [sidebar, setSidebar] = useState (false)

  const showSidebar = () => setSidebar(!sidebar)

  const gotointroduction = () => window.scrollTo({
    top: introduction.current.offsetTop,
    behavior: "smooth"
  });

  const gotosynopsis = () => window.scrollTo({
    top: synopsis.current.offsetTop,
    behavior: "smooth"
  });

  const gotopersonnages = () => window.scrollTo({
    top: personnages.current.offsetTop,
    behavior: "smooth"
  });
  const gotosynopsis3 = () => window.scrollTo({
    top: synopsis3.current.offsetTop,
    behavior: "smooth"
  });

  const gotoauteure = () => window.scrollTo({
    top: auteure.current.offsetTop,
    behavior: "smooth"
  });

  const gotophenomene = () => window.scrollTo({
    top: phenomene.current.offsetTop,
    behavior: "smooth"
  });

  const gotoprecommande = () => window.scrollTo({
    top: precommande.current.offsetTop,
    behavior: "smooth"
  });

  const gotovideos = () => window.scrollTo({
    top: videos.current.offsetTop,
    behavior: "smooth"
  });

  const gotogoodies = () => window.scrollTo({
    top: goodies.current.offsetTop,
    behavior: "smooth"
  });

  const gotointroductionmobile = () => window.scrollTo({
    top: introductionmobile.current.offsetTop,
    behavior: "smooth"
  });

  const gotosynopsismobile = () => window.scrollTo({
    top: synopsismobile.current.offsetTop,
    behavior: "smooth"
  });

  const gotosynopsis3mobile = () => window.scrollTo({
    top: synopsis3mobile.current.offsetTop,
    behavior: "smooth"
  });

  const gotopersonnagesmobile = () => window.scrollTo({
    top: personnagesmobile.current.offsetTop,
    behavior: "smooth"
  });

  const gotoauteuremobile = () => window.scrollTo({
    top: auteuremobile.current.offsetTop,
    behavior: "smooth"
  });

  const gotophenomenemobile = () => window.scrollTo({
    top: phenomenemobile.current.offsetTop,
    behavior: "smooth"
  });

  const gotoprecommandemobile = () => window.scrollTo({
    top: precommandemobile.current.offsetTop,
    behavior: "smooth"
  });

  const gotovideosmobile = () => window.scrollTo({
    top: videosmobile.current.offsetTop,
    behavior: "smooth"
  });

  const gotogoodiesmobile = () => window.scrollTo({
    top: goodiesmobile.current.offsetTop,
    behavior: "smooth"
  });


  return (

    <main className='page'>

      <BreakpointProvider >

        <Breakpoint medium up>
        

<article className='version desktop'>


              

              <div className='sidebarmenu'>

                <img className={styles.temple} src="/images/logo-menu2.png" onClick={showSidebar} />

{/* <button className={styles.menu__item2mobile_preco_desktop} onClick={gotoprecommande}>
                Commander
              </button> */}


                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                  <ul className='nav-menu-items'>

                      <button className={styles.menu__item2} onClick={gotointroduction} >INTRODUCTION</button>
                      <button className={styles.menu__item2} onClick={gotosynopsis} >AUTEURE</button>
                      <button className={styles.menu__item2} onClick={gotopersonnages} >?? TOUT JAMAIS</button>
                      <button className={styles.menu__item2} onClick={gotosynopsis3} >TRAILER</button>
                      <button className={styles.menu__item2} onClick={gotovideos} >NOUVEAUT??S</button>
                      <button className={styles.menu__item2} onClick={gotoauteure} >PH??NOM??NE</button>
                      <button className={styles.menu__item2} onClick={gotophenomene} >AUTRES<br/>OUVRAGES</button>
                      {/* <button className={styles.menu__item2} onClick={gotogoodies} >PH??NOM??NE</button>
                      <button className={styles.menu__item2} onClick={gotoprecommande} >COMMANDER</button> */}
                    

                  </ul>

                </nav>

              </div>

              {/* <div className={styles.overmenu} id="principal menu">

                <div className={styles.menu}>

                  <div className={styles.submenu}>

                    <button className={styles.menu__item} onClick={gotosynopsis} >SYNOPSIS</button>
                    <button className={styles.menu__item} onClick={gotopersonnages} >PERSONNAGES</button>
                    <button className={styles.menu__item} onClick={gotovideos} >VID??O</button>

                  </div>

                  <div className={styles.submenu}>

                    <button className={styles.menu__item} onClick={gotoauteure} >AUTEURE</button>
                    <button className={styles.menu__item} onClick={gotophenomene} >PH??NOM??NE</button>
                    <button className={styles.menu__item} onClick={gotoprecommande} >LE LIVRE</button>

                  </div>

              </div>
              
              </div> */}
            

            <div className={styles.content}>

              <div className={styles.screen} onClick={gotosynopsis} ref={introduction}>

              {/* <img className={styles.bgimage} src="/images/bg/intro2.jpg" alt="background image for introduction" /> */}

                <lottie-interactive
                  path="/animations/Intro_Colleen_Desktop_3.json"
                  interaction="play-once"
                  class="tailleintro"
                />

              </div>

              <section className={styles.screen} ref={synopsis}>
              <div className={styles.titlecontainer}><h2auteur>Colleen Hoover</h2auteur></div>

                <div className={styles.rachellapresentation}>



                  
                  
                  <img className={styles.rachella} src="/images/HOOVER-Colleen30@Julien-Poupard-V2.jpg" />
                  <p className={styles.rachelpresentation}
                  
>                  Autrice ??clectique, Colleen Hoover (42 ans) est devenue en quelques ann??es l???une
des plus grandes autrices de New Romance<sup>??</sup>. Elle aborde dans ses livres avec
sensibilit??, ironie et intelligence, de nombreux sujets de soci??t??, tels que les
violences faites aux femmes, la fertilit?? au sein du couple ou encore le handicap.
<span className="italique">Jamais plus</span> (150 000 exemplaires vendus en France) est en cours d???adaptation
par Justin Baldoni<span className="italique">(Jane the Virgin)</span>.
                  </p>
                </div>

                {/* <lottie-interactive
                  path="/animations/data.json"
                  autoplay
                  loop
                  class="tailleintro"
                /> */}
                          <img className={styles.bgimage} src="/images/bg/bloc22.jpg" alt="background image for introduction" />
              </section>

              <section className={styles.screen} ref={personnages}>

                <div className={styles.paragraph}>
                  <h2>?? tout jamais</h2>
                  <p2>Lily, depuis que sa fille Emerson est n??e, lui a promis que le cycle de la violence s'arr??terait avec elles. Que jamais plus, les femmes de leur famille n'endureraient des abus. Alors elle a pris la d??cision de quitter son mari et p??re de sa petite fille. Elle ne s'attendait pas ?? croiser Atlas, son amour d'adolescente par hasard, et elle ne sait pas quelle place il pourrait occuper dans sa vie. A-t-elle seulement envie de le revoir ? D'avoir ?? nouveau une vie sentimentale ? De recommencer sa vie et de croire ?? l'amour ??ternel, elle qui a appris de la plus dure des fa??ons qu'il ??tait bien difficile ?? trouver. Atlas n'est plus du tout le m??me que l'adolescent en perdition qu'elle a connu. Il a un restaurant, a pass?? de longues ann??es loin d'elle. Leur histoire peut-elle recommencer l?? o?? elle s'??tait arr??t??e ?</p2>
                </div>
                <img className={styles.tome3d} src="/images/2022_NR_A-TOUT-JAMAIS_3D_RVB.png" />
                <button className={styles.boutoncommander} ><a  href='https://livre.fnac.com/a17402043/Colleen-Hoover-A-tout-jamais#omnsearchpos=1' target="_blank">
                Commander
              </a></button>

                {/* <lottie-interactive
                  path="/animations/SYNOPSISDESKTOP4KLIGHT3.json"
                  autoplay
                  loop
                  class="tailleintro"
                /> */}
                          <img className={styles.bgimage} src="/images/bg/bloc33.jpg" alt="background image for introduction" />
              </section>

              {/* <section className={styles.screen}ref={personnages}>

<div className={styles.paragraph}>
  <h2>Tome 2</h2>
  <p2>Pers??phone et Had??s se plaisent, mais les obstacles s???accumulent :
un journal people r??v??le qu???ils se connaissent, Menth?? n???accepte pas
que son histoire avec Had??s puisse se terminer et essaie de nuire ??
Pers??phone et, surtout, Apollon r??de, pr??t ?? la tourmenter d??s que
l???occasion se pr??sente??? La solution viendra-t-elle d???H??ra et du contrat
de stage qu???elle imagine pour que Pers??phone travaille aux Enfers aupr??s
d???Had??s ?
Une chose est s??re, Pers??phone n???est pas au bout de ses peines???
Trouvera-t-elle les ressources n??cessaires pour contre-attaquer ?</p2>
</div>
<img className={styles.tome3d} src="/images/TOME2_LORE.png" />
<button className={styles.boutoncommander} ><a  href='https://cutt.ly/PKgl0qv' target="_blank">
                Commander
              </a></button>
<lottie-interactive
  // path="/animations/SYNOPSISDESKTOP4KLIGHT3.json"
  path="/animations/synopsis3.json"
  autoplay
  loop
  class="tailleintro"
/>
</section> */}

{/* <section className={styles.screen}ref={synopsis3}>

<div className={styles.paragraph}>
  <h2>Tome 3</h2>
  <p2>

Pers??phone a d??marr?? son stage aux Enfers mais Had??s se met en couple officiel avec Menth?? afin de mettre des distances avec Pers??phone et essayer de reprendre une vie " normale ".

Cela cr??e des quiproquos qui contre toute attente, d??montre l'attachement qu'ils ont l'un pour l'autre. Cela suffira-t-il ?? leur faire ouvrir les yeux ?

Pers??phone pour sa part arrive ?? se livrer ?? Eros sur son viol et d??marre une th??rapie, un cheminement essentiel pour sa sant?? mentale.

Ce troisi??me volume approfondi les th??mes sensibles et le lien sentimentale qui unit Had??s et Pers??phone. Vont-ils arriver ?? d??passer les obstacles ensemble ?

</p2>
</div>
<img className={styles.tome3d} src="/images/TOME3_LORE.png" />
<button className={styles.boutoncommander} ><a  href='https://cutt.ly/QNAZrG9' target="_blank">
                Commander
              </a></button>
<lottie-interactive
  // path="/animations/SYNOPSISDESKTOP4KLIGHT3.json"
  path="/animations/PERSONNAGESDESKTOP4KLIGHT2.json"
  autoplay
  loop
  class="tailleintro"
/>
</section> */}


              
              <section className={styles.screen} ref={synopsis3}>
                <div className={styles.paragraph5}>
                  <h2>Trailer</h2>
                </div>
                {/* <VideosSliderMobile slidees={SliderData}/> */}
                <div className='responsive-player-container'><ResponsiveePlayer/></div>
                {/* <lottie-interactive
                  path="/animations/data.json"
                  autoplay
                  loop
                  class="tailleintro"
                /> */}
                          <img className={styles.bgimage} src="/images/bg/bloc44.jpg" alt="background image for introduction" />
              </section>



              <section className={styles.screen2} ref={videos} >

<div className={styles.paragraph4}>
  <h2>Les nouveaut??s</h2>
</div>

<ImageSlider slides={SliderData}/>

{/* <lottie-interactive
  path="/animations/PERSONNAGESDESKTOP4KLIGHT2.json"
  autoplay
  loop
  class="tailleintro"
/> */}
          <img className={styles.bgimage} src="/images/bg/bloc55.jpg" alt="background image for introduction" />

</section>

<section className={styles.screen} ref={auteure}>

<div className={styles.paragraph3}>
    <h2>Le ph??nom??ne Colleen Hoover</h2>
    {/* <p4>
    Avec ses 300 millions de vues sur Webtoon et ses 9,72 ??toiles, il s???agit d???un des webcomics anglophones les plus populaires du moment ! Son succ??s vient d???un m??lange r??ussi entre la r????criture moderne de la mythologie, son humour et le d??veloppement de th??mes adultes, comme les violences sexuelles et la d??pression. Bien qu???elle se concentre sur le dieu des Enfers et la d??esse du Printemps, la s??rie raconte ??galement l???histoire de plusieurs membres du Panth??on, ?? savoir ??ros, Art??mis, H??ra, Aphrodite, Apollon et Zeus. Leurs histoires, m??l??es ?? celle des h??ros principaux, forment un r??cit profond et vari??. Entre fastes divins et sujets s??rieux, le style du dessin magnifie l???ensemble.
    </p4> */}
  </div>
  <div className={styles.chiffresdesktopcontainer} >
                  <img className={styles.chiffresdesktop} src="/images/bg/chiffres.png" alt="background image for introduction" />
                </div>

            <img className={styles.bgimage} src="/images/bg/bloc66.jpg" alt="background image for introduction" />
</section>

              <section className={styles.screen} ref={phenomene}>

              <div className={styles.paragraph4bis}>
  <h2>Les autres ouvrages</h2>
</div>

<ImageSlider2 slides={SliderData2}/>



                  
                {/* <lottie-interactive
                  path="/animations/data.json"
                  autoplay
                  loop
                  class="tailleintro"
                /> */}
                            <footer className={styles.screenfooter} ref={precommande}>

{/* <img className={styles.tome3dend} src="/images/TOME1_LORE.png" />
    <button className={styles.boutoncommanderend} ><a  href='https://cutt.ly/XTDsJvz' target="_blank">
    Tome 1
  </a></button>

<img className={styles.tome3dend2} src="/images/TOME2_LORE.png" />
<button className={styles.boutoncommanderend2} ><a  href='https://cutt.ly/PKgl0qv' target="_blank">
    Tome 2
  </a></button>

  <img className={styles.tome3dend3} src="/images/TOME3_LORE.png" />
<button className={styles.boutoncommanderend3} ><a  href='https://cutt.ly/QNAZrG9' target="_blank">
    Tome 3
  </a></button> */}

{/* <img className={styles.goodieslore} src="/images/goodies_lore_olympus.png" /> */}
{/* <p3>?? livre exceptionnel, lancement exceptionnel ! <br/><br/>

Nous avons le plaisir d'offrir des goodies collector et limit??s de Lore Olympus aux 500 premi??res personnes qui pr??commanderont le volume 2 ! <br/>
Ce lot offert comprend :<br/>

- un ??ventail<br/>
- un tatouage Had??s<br/>
- un tote bag officiel<br/>
- un pins in??dit de Pers??phone<br/><br/>

Pour recevoir votre pack collector, rien de plus simple :<br/><br/>

1) Pr??commandez l'ouvrage chez votre libraire pr??f??r?? ou en ligne et conservez votre justificatif de commande.<br/>

2) Envoyez votre preuve d'achat via le formulaire disponible ?? l???adresse https://www.hugopublishing.fr/lore-olympust2/<br/>

3) Le 7 juillet 2022, jour de la parution du volume 2, allez chercher votre exemplaire chez votre libraire ou surveillez votre bo??te aux lettres si vous l'avez command?? en ligne.<br/>

4) Un colis s??par?? vous sera envoy?? ?? la sortie avec les goodies collector.<br/><br/>

?? Lore Olympus ?? volume 2, de Rachel Smythe, sort en librairie le 7 juillet 2022 mais vous pouvez d??j?? le pr??commander en cliquant sur le lien dans le profil !
</p3> */}
{/* XXXXXXXXXXXXXXXXXXXXX */}
  {/* <a className={styles.lien} href='https://cutt.ly/XTDsJvz'>
  Commander le livre
  </a> */}
<div className={styles.footer}>
  <p>
    <a href='https://www.hugoetcie.fr/' >?? 2023 Hugo Publishing</a>
    &nbsp; - &nbsp;
    <a className={styles.reseaux} href='https://www.instagram.com/hugonewromance/?hl=fr' target="_blank"><TiSocialInstagram/></a>
    <a className={styles.reseaux} href='https://www.facebook.com/HugoNewRomance/' target="_blank"><TiSocialFacebookCircular/></a>     
 

        
        &nbsp; - &nbsp;
        <a className={styles.credits} href='https://www.linkedin.com/in/pierremaler/' target="_blank">Cr??dits</a>
  </p>
</div>
  {/* <lottie-interactive
    // path="/animations/GOODIESDESKTOP4KLIGHTV2export.json"
    path="/animations/data.json"
    autoplay
    loop
    class="tailleintro"
  /> */}
</footer>
          <img className={styles.bgimage} src="/images/bg/bloc77.jpg" alt="background image for introduction" />

              </section>
              {/* <section className={styles.screen} ref={goodies}>
                  
                <lottie-interactive
                  // path="/animations/COMMANDEDESKTOP4KLIGHT4.json"
                  path="/animations/GOODIESDESKTOP.json"
                  autoplay
                  loop
                  class="tailleintro"
                />

              </section> */}

            </div>

            

          </article>

        </Breakpoint>
          
        <Breakpoint small down >

          <article className='version mobile'>
            {/* <img className={styles.loadermobile} src="/images/loader3.png" /> */}
            <>
          <img
            className={styles.templemobile}
            src="/images/logo-menu2.png"
            onClick={showSidebar}
            alt="logo home"
          />

<div className={styles.temple}>
{/* <button className={styles.menu__item2mobile_preco} onClick={gotosynopsismobile}>Commander</button> */}
</div>

          <div className='menu-barsmobile'></div>
                <div className="navbarmobile"> 
                </div>
                <nav className={sidebar ? 'nav-menu activemobile' : 'nav-menumobile'}>
                    <ul className='nav-menu-itemsmobile'>

                        

              <button className={styles.menu__item2mobile} onClick={gotointroductionmobile} >INTRODUCTION</button>
              <button className={styles.menu__item2mobile} onClick={gotophenomenemobile} >AUTEURE</button>
              <button className={styles.menu__item2mobile} onClick={gotopersonnagesmobile} >?? TOUT JAMAIS</button>
              <button className={styles.menu__item2mobile} onClick={gotoauteuremobile} >TRAILER</button>
              <button className={styles.menu__item2mobile} onClick={gotovideosmobile} >NOUVEAUT??S</button>
              {/* <button className={styles.menu__item2mobile} onClick={gotoauteuremobile} >TRAILER</button> */}
              <button className={styles.menu__item2mobile} onClick={gotoprecommandemobile} >PH??NOM??NE</button>
              <button className={styles.menu__item2mobile} onClick={gotogoodiesmobile} >AUTRES<br/>OUVRAGES</button>
              {/* <button className={styles.menu__item2mobile} onClick={gotoprecommandemobile} >GOODIES</button> */}

                    </ul>
                </nav>
                
            </>
            
          <section className={styles.screenmobile} ref={introductionmobile}>
          <lottie-interactive
                  path="/animations/Intro_Colleen_Mobile_3.json"
                  interaction="play-once"
                  class="tailleintro"
                />
            
          {/* <img className={styles.bgimage} src="/images/bg/introm.jpg" alt="background image for introduction" /> */}
          </section>

          <section className={styles.screenmobile} ref={phenomenemobile}>
          <div className={styles.paragraphmobile2}>
              <img
              className={styles.rachelmobile}
              src="/images/HOOVER Colleen TOP@Julien Poupard.JPG"
              alt="picture of the author"
              />
                <h2mobile3>Colleen Hoover</h2mobile3>
                <p className={styles.rachelpresentationmobile}>                  Autrice ??clectique, Colleen Hoover (42 ans) est devenue en quelques ann??es l???une
des plus grandes autrices de New Romance<sup>??</sup>. Elle aborde dans ses livres avec
sensibilit??, ironie et intelligence, de nombreux sujets de soci??t??, tels que les
violences faites aux femmes, la fertilit?? au sein du couple ou encore le handicap.
<span className="italique">Jamais plus</span> (150 000 exemplaires vendus en France) est en cours d???adaptation
par Justin Baldoni <span className="italique">(Jane the Virgin)</span>.</p>

              </div>
          
                <img className={styles.bgimage} src="/images/bg/bloc11m.jpg" alt="background image for the phenomene"/>

          </section>
          <section className={styles.screenmobile} ref={personnagesmobile}>
          <div className={styles.paragraphmobile2}>
              <img
              className={styles.bookmobile}
              src="/images/2022_NR_A-TOUT-JAMAIS_3D_RVB.png"
              alt="picture of the author"
              />
            
              <button className={styles.boutoncommandercenter } ><a  href='https://livre.fnac.com/a17402043/Colleen-Hoover-A-tout-jamais#omnsearchpos=1' target="_blank">
                Commander
              </a> </button>
                <h2mobile3>?? tout jamais</h2mobile3>
                <p className={styles.rachelpresentationmobile}>Lily, depuis que sa fille Emerson est n??e, lui a promis que le cycle de la violence s'arr??terait avec elles. Que jamais plus, les femmes de leur famille n'endureraient des abus. Alors elle a pris la d??cision de quitter son mari et p??re de sa petite fille. Elle ne s'attendait pas ?? croiser Atlas, son amour d'adolescente par hasard, et elle ne sait pas quelle place il pourrait occuper dans sa vie. A-telle seulement envie de le revoir ? D'avoir ?? nouveau une vie sentimentale ? De recommencer sa vie et de croire ?? l'amour ??ternel, elle qui a appris de la plus dure des fa??ons qu'il ??tait bien difficile ?? trouver. Atlas n'est plus du tout le m??me que l'adolescent en perdition qu'elle a connu. Il a un restaurant, a pass?? de longues ann??es loin d'elle. Leur histoire peut-elle recommencer l?? o?? elle s'??tait arr??t??e ?</p>

              </div>
          
                <img className={styles.bgimage} src="/images/bg/bloc22m.jpg" alt="background image for the phenomene"/>

          </section>

          <section className={styles.screenmobile} ref={auteuremobile}>
          <div className={styles.paragraphmobile3}>
                <h2mobile2>Trailer</h2mobile2>
              </div>
              {/* <VideosSliderMobile slides={SliderijssData}/> */}
              {/* <VideosSliderMobile slides={SliderijssData}/> */}
              <div className='responsive-player-mobile'><ResponsiveePlayer/></div>

              
              <img className={styles.bgimage} src="/images/bg/bloc33m.jpg" alt="background image for the author"/>
          </section>

          <section className={styles.screenmobile} ref={videosmobile}>
          <div className={styles.paragraphmobile3}>
                <h2mobile>Les nouveaut??s</h2mobile>
              </div>

              <ImageSliderMobile slides={SliderData}/>
          
              <img className={styles.bgimage} src="/images/bg/bloc44m.jpg" alt="background image for videos"/>
          </section>

          <section className={styles.screenmobileend} ref={precommandemobile}>
          <div className={styles.paragraphmobile3modified}>
                  <h2mobile>Le ph??nom??ne <br/>Colleen Hoover</h2mobile>

                  
         
                  {/* <p className={styles.rachelpresentationmobile}>
                  Avec ses 300 millions de vues sur Webtoon et ses 9,72 ??toiles, il s???agit d???un des webcomics anglophones les plus populaires du moment ! Son succ??s vient d???un m??lange r??ussi entre la r????criture moderne de la mythologie, son humour et le d??veloppement de th??mes adultes, comme les violences sexuelles et la d??pression. Bien qu???elle se concentre sur le dieu des Enfers et la d??esse du Printemps, la s??rie raconte ??galement l???histoire de plusieurs membres du Panth??on, ?? savoir ??ros, Art??mis, H??ra, Aphrodite, Apollon et Zeus. Leurs histoires, m??l??es ?? celle des h??ros principaux, forment un r??cit profond et vari??. Entre fastes divins et sujets s??rieux, le style du dessin magnifie l???ensemble.
                  </p> */}
                </div>
                <div className={styles.chiffrescontainer} >
                  <img className={styles.chiffres} src="/images/bg/chiffres-vertical.png" alt="background image for introduction" />
                </div>

          {/* <div className={styles.paragraphmobile}>
              <p4>?? livre exceptionnel, lancement exceptionnel ! <br/><br/>

Nous avons le plaisir d'offrir des goodies collector et limit??s de Lore Olympus aux 500 premi??res personnes qui pr??commanderont le volume 2 ! <br/>
Ce lot offert comprend :<br/>

- un ??ventail<br/>
- un tatouage Had??s<br/>
- un tote bag officiel<br/>
- un pins in??dit de Pers??phone<br/><br/>

Pour recevoir votre pack collector, rien de plus simple :<br/><br/>

1) Pr??commandez l'ouvrage chez votre libraire pr??f??r?? ou en ligne et conservez votre justificatif de commande.<br/>

2) Envoyez votre preuve d'achat via le formulaire disponible ?? l???adresse https://www.hugopublishing.fr/lore-olympust2/<br/>

3) Le 7 juillet 2022, jour de la parution du volume 2, allez chercher votre exemplaire chez votre libraire ou surveillez votre bo??te aux lettres si vous l'avez command?? en ligne.<br/>

4) Un colis s??par?? vous sera envoy?? ?? la sortie avec les goodies collector.<br/><br/>

?? Lore Olympus ?? volume 2, de Rachel Smythe, sort en librairie le 7 juillet 2022 mais vous pouvez d??j?? le pr??commander en cliquant sur le lien dans le profil !</p4>
              </div>
              <img className={styles.goodiesmobile2} src="/images/goodies-lore-olympus-mobile.png" alt="background image for the author"/> */}
          {/* <a className={styles.lienmobile} href='https://cutt.ly/XTDsJvz'>
                Commander
              </a> */}


              
<img className={styles.bgimage2} src="/images/bg/bloc55m.jpg" alt="background image for commands" />
          </section>
          <section className={styles.screenmobile} ref={goodiesmobile}>
          <div className={styles.paragraphmobile3}>
                <h2mobile>Les autres ouvrages</h2mobile>
              </div>

              <ImageSliderMobile2 slides={SliderData2}/>
              <footer className={styles.footermobile}>
  <p>
    <a href='https://www.hugoetcie.fr/' >?? 2023 Hugo Publishing</a>
    &nbsp; - &nbsp;
    <a className={styles.reseauxmobile} href='https://www.instagram.com/hugonewromance/?hl=fr' target="_blank"><TiSocialInstagram/></a>
    <a className={styles.reseauxmobile} href='https://www.facebook.com/HugoNewRomance/' target="_blank"><TiSocialFacebookCircular/></a>
    {/* <a href=''><TiSocialTwitter/></a> */}
    
    &nbsp; - &nbsp;
                    <a className={styles.credits} href='https://www.linkedin.com/in/pierremaler/' target="_blank">Cr??dits</a>
    
  </p>
</footer>
          
              <img className={styles.bgimage} src="/images/bg/bloc66m.jpg" alt="background image for videos"/>
          </section>

          {/* <section className={styles.screenmobile} ref={synopsismobile}>
          <div className={styles.paragraphmobile}>
              <h2mobile>Tome 1</h2mobile>
              <p>Pers??phone, jeune d??esse du Printemps, est nouvelle au mont Olympe. Sa m??re, D??m??ter, a choisi de l?????lever dans le royaume des Mortels pour la prot??ger des tentations. Mais  Pers??phone lui ayant promis de s'entra??ner comme vierge sacr??e, elle l???autorise ?? aller ?? l'universit?? et ?? vivre dans le monde glamour et tr??pidant des dieux. Lorsque sa colocataire, Art??mis, l'emm??ne ?? une f??te, sa vie enti??re change : elle y rencontre Had??s, et l'??tincelle est imm??diate avec le souverain charmant mais incompris des Enfers. Tout s'acc??l??re alors, Pers??phone doit maintenant naviguer entre les jeux strat??giques et les relations d??routantes qui r??gissent l'Olympe, tout en trouvant sa place et en affirmant son pouvoir.</p>
              </div>
              <button className={styles.boutonmobile} ><a href="https://cutt.ly/XTDsJvz" target="_blank">Commander</a></button>
              <img className={styles.bgimage} src="/images/SYNOPSISMOBILE.jpg" alt="background image for synopsis" /> 
          </section> */}
          {/* <section className={styles.screenmobile} ref={personnagesmobile}>
          <div className={styles.paragraphmobile}>
              <h2mobile>Tome 2</h2mobile>
              <p>Pers??phone et Had??s se plaisent, mais les obstacles s???accumulent :
un journal people r??v??le qu???ils se connaissent, Menth?? n???accepte pas
que son histoire avec Had??s puisse se terminer et essaie de nuire ??
Pers??phone et, surtout, Apollon r??de, pr??t ?? la tourmenter d??s que
l???occasion se pr??sente??? La solution viendra-t-elle d???H??ra et du contrat
de stage qu???elle imagine pour que Pers??phone travaille aux Enfers aupr??s
d???Had??s ?
Une chose est s??re, Pers??phone n???est pas au bout de ses peines???
Trouvera-t-elle les ressources n??cessaires pour contre-attaquer ?</p>
              </div>
              <button className={styles.boutonmobile2} ><a href="https://cutt.ly/PKgl0qv" target="_blank">Commander</a></button>
              
              <img className={styles.bgimage} src="/images/synopsis3mobile.jpg" alt="background image for characters" />
          </section>

          <section className={styles.screenmobile} ref={synopsis3mobile}>
          <div className={styles.paragraphmobile}>
              <h2mobile>Tome 3</h2mobile>
              <p>Pers??phone a d??marr?? son stage aux Enfers mais Had??s se met en couple officiel avec Menth?? afin de mettre des distances avec Pers??phone et essayer de reprendre une vie " normale ". Cela cr??e des quiproquos qui contre toute attente, d??montre l'attachement qu'ils ont l'un pour l'autre. Cela suffira-t-il ?? leur faire ouvrir les yeux ? Pers??phone pour sa part arrive ?? se livrer ?? Eros sur son viol et d??marre une th??rapie, un cheminement essentiel pour sa sant?? mentale. Ce troisi??me volume approfondi les th??mes sensibles et le lien sentimentale qui unit Had??s et Pers??phone. Vont-ils arriver ?? d??passer les obstacles ensemble ?</p>
              </div>
              <button className={styles.boutonmobile2} ><a href="https://cutt.ly/QNAZrG9" target="_blank">Commander</a></button>
              
              <img className={styles.bgimage} src="/images/PERSONNAGESMOBILE.jpg" alt="background image for characters" />
          </section> */}


          {/* <section className={styles.screenmobile} ref={videosmobile}>
          <div className={styles.paragraphmobile3}>
                <h2mobile>Personnages</h2mobile>
              </div>

              <ImageSliderMobile slides={SliderData}/>
          
              <img className={styles.bgimage} src="/images/VIDEOSMOBILE.jpg" alt="background image for videos"/>
          </section> */}
          {/* <section className={styles.screenmobile} ref={auteuremobile}>
          <div className={styles.paragraphmobile3}>
                <h2mobile2>Trailer</h2mobile2>
              </div>

              <div className='responsive-player-mobile'><ResponsiveePlayer/></div>

              
              <img className={styles.bgimage} src="/images/AUTEUREMOBILE.jpg" alt="background image for the author"/>
          </section> */}

          {/* <section className={styles.screenmobile} ref={goodiesmobile}>


                <img className={styles.bgimage} src="/images/fondbleu2.jpg" alt="background image for the phenomene"/>

          </section> */}
          {/* <section className={styles.screenmobileend} ref={precommandemobile}>
          <div className={styles.paragraphmobile}>
                  <h2mobile4>Le ph??nom??ne <br/><span className="italique">Lore Olympus</span></h2mobile4>
         
                  <p>
                  Avec ses 300 millions de vues sur Webtoon et ses 9,72 ??toiles, il s???agit d???un des webcomics anglophones les plus populaires du moment ! Son succ??s vient d???un m??lange r??ussi entre la r????criture moderne de la mythologie, son humour et le d??veloppement de th??mes adultes, comme les violences sexuelles et la d??pression. Bien qu???elle se concentre sur le dieu des Enfers et la d??esse du Printemps, la s??rie raconte ??galement l???histoire de plusieurs membres du Panth??on, ?? savoir ??ros, Art??mis, H??ra, Aphrodite, Apollon et Zeus. Leurs histoires, m??l??es ?? celle des h??ros principaux, forment un r??cit profond et vari??. Entre fastes divins et sujets s??rieux, le style du dessin magnifie l???ensemble.
                  </p>
                </div> */}
          {/* <div className={styles.paragraphmobile}>
              <p4>?? livre exceptionnel, lancement exceptionnel ! <br/><br/>

Nous avons le plaisir d'offrir des goodies collector et limit??s de Lore Olympus aux 500 premi??res personnes qui pr??commanderont le volume 2 ! <br/>
Ce lot offert comprend :<br/>

- un ??ventail<br/>
- un tatouage Had??s<br/>
- un tote bag officiel<br/>
- un pins in??dit de Pers??phone<br/><br/>

Pour recevoir votre pack collector, rien de plus simple :<br/><br/>

1) Pr??commandez l'ouvrage chez votre libraire pr??f??r?? ou en ligne et conservez votre justificatif de commande.<br/>

2) Envoyez votre preuve d'achat via le formulaire disponible ?? l???adresse https://www.hugopublishing.fr/lore-olympust2/<br/>

3) Le 7 juillet 2022, jour de la parution du volume 2, allez chercher votre exemplaire chez votre libraire ou surveillez votre bo??te aux lettres si vous l'avez command?? en ligne.<br/>

4) Un colis s??par?? vous sera envoy?? ?? la sortie avec les goodies collector.<br/><br/>

?? Lore Olympus ?? volume 2, de Rachel Smythe, sort en librairie le 7 juillet 2022 mais vous pouvez d??j?? le pr??commander en cliquant sur le lien dans le profil !</p4>
              </div>
              <img className={styles.goodiesmobile2} src="/images/goodies-lore-olympus-mobile.png" alt="background image for the author"/> */}
          {/* <a className={styles.lienmobile} href='https://cutt.ly/XTDsJvz'>
                Commander
              </a> */}
              {/* <footer className={styles.footermobile}>
  <p> */}
    {/* <a href='https://www.hugoetcie.fr/' >?? 2023 Hugo Publishing</a>
    &nbsp; - &nbsp;
    <a className={styles.reseauxmobile} href='https://www.instagram.com/hugonewromance/?hl=fr'><TiSocialInstagram/></a>
    <a className={styles.reseauxmobile} href='https://www.facebook.com/HugoNewRomance/'><TiSocialFacebookCircular/></a>

    
    &nbsp; - &nbsp;
                    <a className={styles.credits} href='https://www.linkedin.com/in/pierremaler/' target="_blank">Cr??dits</a>
    
  </p>
</footer>

              
<img className={styles.bgimage2} src="/images/bg/fondbleu2.jpg" alt="background image for commands" />
          </section> */}

          </article>
        </Breakpoint>
      </BreakpointProvider>
      
      
    </main>
  );
}