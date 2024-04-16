import { useState, useEffect, useRef } from "react";
import imageGallery from "../Data/gallery.json";
import Left from "../assets/icons/arrow-left.svg";
import Right from "../assets/icons/arrow-right.svg";
import CloseButton from "react-bootstrap/CloseButton";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [activeThumbnail, setActiveThumbnail] = useState(
    imageGallery.itemData[0]
  );
  const thumbnailRef = useRef(null);
  const navigate = useNavigate();

  const images = imageGallery.itemData;

  const lastIndex = images.length - 1;
  const currentIndex = images.findIndex((image) => image === activeThumbnail);
  const previousIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
  const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;

  const previousImage = images[previousIndex];
  const nextImage = images[nextIndex];

  const handleThumbnailClick = (index) => {
    setActiveThumbnail(images[index]);
  };

  const goPrevious = () => {
    const isFirstSlide = index === 0;
    if (isFirstSlide) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
    setActiveThumbnail(previousImage);
  };

  const goNext = () => {
    const isLastSlide = index === images.length - 1;
    if (isLastSlide) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setActiveThumbnail(nextImage);
  };

  // automatically scroll the thumbnail
  useEffect(() => {
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollTo({
        left: thumbnailRef.current.children[index].offsetLeft,
        behavior: "smooth",
      });
    }
  }, [index]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section className="gallery">
        <div className="row p-0 m-0 slider d-flex align-items-center">
        <div className="px-5 m-0 d-flex justify-content-end align-items-center">
          <CloseButton variant="white" onClick={goBack} />
        </div>
          {/* previous image */}
          <div className="col-3 prev_image h-75 p-0 m-0 d-flex align-items-center">
            <img
              src={Left}
              alt="image"
              width={50}
              height={50}
              onClick={goPrevious}
              className="left-arrow"
            />
            <img
              src={previousImage.img}
              className="h-50 w-100"
              alt="previous image"
              onClick={goPrevious}
            />
          </div>
          {/* current image */}
          <div className="col-6 current_image h-75 p-0 m-0">
            <img
              src={activeThumbnail.img}
              className="h-100 w-100 rounded"
              alt="current image"
            />
          </div>
          {/* next image */}
          <div className="col-3 next_image h-75 p-0 m-0 d-flex align-items-center">
            <img
              src={Right}
              alt="image"
              width={50}
              height={50}
              onClick={goNext}
              className="right-arrow"
            />
            <img
              src={nextImage.img}
              className="h-50 w-100"
              alt="next image"
              onClick={goNext}
            />
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-12 d-flex px-3 thumbnail" ref={thumbnailRef}>
            {images.map((image, idx) => (
              <div className="thumbnail-container" key={idx}>
                <img
                  src={image.img}
                  alt="image"
                  width={100}
                  height={100}
                  onClick={() => {
                    handleThumbnailClick(idx);
                    setIndex(idx);
                  }}
                  className={
                    activeThumbnail === image ? "active-thumbnail" : ""
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
