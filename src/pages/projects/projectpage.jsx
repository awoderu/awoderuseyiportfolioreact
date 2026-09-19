import React from 'react'
import "./projectpage.css"
import SubHeading from "../../components/subHeading";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants';
import data from '../../constants/data';





const ProjectPage = () => {
  const scrollRef = React.useRef(null);

  // 1. Triplicate the gallery array data to create the infinite looping runway
  const infiniteGallery = [...data.gallery, ...data.gallery, ...data.gallery];

  // 2. Instantly jump to the center segment when the component loads
  React.useEffect(() => {
    const { current } = scrollRef;
    if (current) {
      current.scrollLeft = current.scrollWidth / 3;
    }
  }, []);

  // 3. Keep track of boundaries and instantly snap back to the center track segment
  const handleScrollReset = () => {
    const { current } = scrollRef;
    if (!current) return;

    const segmentWidth = current.scrollWidth / 3;

    // Buffer checks prevent visual stuttering at extreme boundaries
    if (current.scrollLeft < 10) {
      current.scrollLeft = segmentWidth;
    } else if (current.scrollLeft >= (segmentWidth * 2) - 10) {
      current.scrollLeft = segmentWidth - 10;
    }
  };

  // 4. Smooth movement function for your Arrow Icon click triggers
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    if (direction === 'left') {
      current.scrollTo({
        left: current.scrollLeft - 300,
        behavior: 'smooth'
      });
    } else {
      current.scrollTo({
        left: current.scrollLeft + 300,
        behavior: 'smooth'
      });
    }
  };



  return (
    <>
       <div className="app__gallery flex__center w-h-screen">
      <div className="app__gallery-content w-h-screen sm:w-h-screen">
    
        <h3 className="headtext__cormorant text-5xl pb-20 pt-20 sm:pt-10 sm:pb-20  lg:pt-20 font-mono">MY PROJECTS</h3>
      </div>
      <div className="app__gallery-images">
        <div 
        className="app__gallery-images_container" 
        ref={scrollRef}
        onScroll={handleScrollReset}
      >
        {infiniteGallery.map((gallery, index) => {
          // Dynamic inner card block content
          const cardContent = (
            <div className="app__gallery-images_card flex__center">
              <img src={gallery.image} alt="gallery_image" />
              <h1 className="gallery__image-title">{gallery.title}</h1>
            </div>
          );

          // Render link wrappers ONLY if the item has a valid link array property
          return gallery.link ? (
            <a 
              href={gallery.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={`${gallery.title}-${index}`}
            >
              {cardContent}
            </a>
          ) : (
            <div key={`${gallery.title}-${index}`}>
              {cardContent}
            </div>
          );
        })}
      </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
    
    </>
  )
}

export default ProjectPage
