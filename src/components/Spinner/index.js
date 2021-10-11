import React, { useState } from "react";

import styles from "./Spiner.module.scss";

import { SlideItem } from "./SlideItem";

import slide1 from "../../assets/slides/slide__img__1.png";
import slide2 from "../../assets/slides/slide__img__2.png";
import slide3 from "../../assets/slides/slide__img__3.png";

export const Spinner = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const slides = [
    { img: slide1, text: "Stan Smith" },
    { img: slide2, text: "New Balance" },
    { img: slide3, text: "Puma Future Rider" },
  ];
  const changeSlide = (direction) => {
    if (direction === "next") {
      setActiveSlide((prev) => prev + 1);
      if (activeSlide === slides.length - 1) {
        setActiveSlide(0);
      }
    }
    if (direction === "back") {
      setActiveSlide((prev) => prev - 1);
      if (activeSlide === 0) {
        setActiveSlide(slides.length - 1);
      }
    }
  };
  const renderSlide = () => {
    return (
      <SlideItem
        key={activeSlide}
        title={slides[activeSlide].text}
        img={slides[activeSlide].img}
      />
    );
  };
  return (
    <div className={styles.containerSlider}>
      <div className={styles.slides}>{renderSlide()}</div>

      <button
        className={styles.changeSlidePrev}
        onClick={() => changeSlide("back")}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8302 19C13.6808 19.0005 13.5332 18.9676 13.3982 18.9035C13.2632 18.8395 13.1443 18.7461 13.0502 18.63L8.22016 12.63C8.07308 12.4511 7.99268 12.2267 7.99268 11.995C7.99268 11.7634 8.07308 11.539 8.22016 11.36L13.2202 5.36003C13.3899 5.15581 13.6338 5.02739 13.8982 5.00301C14.1627 4.97863 14.4259 5.06029 14.6302 5.23003C14.8344 5.39977 14.9628 5.64368 14.9872 5.90811C15.0116 6.17253 14.9299 6.43581 14.7602 6.64003L10.2902 12L14.6102 17.36C14.7324 17.5068 14.8101 17.6856 14.834 17.8751C14.8579 18.0647 14.827 18.2571 14.7449 18.4296C14.6629 18.6021 14.5331 18.7475 14.371 18.8486C14.2089 18.9497 14.0212 19.0023 13.8302 19Z"
            fill="#000"
          />
        </svg>
      </button>
      <button
        className={styles.changeSlideNext}
        onClick={() => changeSlide("next")}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1701 4.99997C10.3195 4.99946 10.4671 5.03243 10.6021 5.09646C10.737 5.16049 10.856 5.25395 10.9501 5.36997L15.7801 11.37C15.9272 11.5489 16.0076 11.7733 16.0076 12.005C16.0076 12.2366 15.9272 12.461 15.7801 12.64L10.7801 18.64C10.6103 18.8442 10.3664 18.9726 10.102 18.997C9.83758 19.0214 9.5743 18.9397 9.37008 18.77C9.16586 18.6002 9.03744 18.3563 9.01306 18.0919C8.98868 17.8275 9.07034 17.5642 9.24008 17.36L13.7101 12L9.39008 6.63997C9.2678 6.49318 9.19012 6.31444 9.16624 6.12489C9.14236 5.93535 9.17328 5.74292 9.25534 5.57039C9.33739 5.39787 9.46715 5.25245 9.62926 5.15136C9.79137 5.05027 9.97905 4.99774 10.1701 4.99997Z"
            fill="#000"
          />
        </svg>
      </button>
    </div>
  );
};
