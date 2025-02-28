import { FC, memo, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import stars from "public/images/why-choose-us-main-page/stars.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "public/images/why-choose-us-main-page/arrowLeft.svg";
import arrowRight from "public/images/why-choose-us-main-page/arrowRight.svg";
import Slider, { type CustomArrowProps, type Settings } from "react-slick";
import { dataTrustpilot } from "modules/MainPageModules/why-choose-us/ui/trustpilot/dateTrustpilot";
import cls from "./Trustpilot.module.scss";

interface ITrustpilot {}

export const Trustpilot: FC<ITrustpilot> = memo(({}) => {
  const sliderRef = useRef<Slider | null>(null);
  const handlePrevClick = () => sliderRef.current?.slickPrev();
  const handleNextClick = () => sliderRef.current?.slickNext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings: Settings | CustomArrowProps = useMemo(
    () => ({
      dots: false,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: cls.Slider,
    }),
    []
  );

  return (
    <div className={cls.test}>
      <div className={cls.Trustpilot}>
        <div className={cls.Trustpilot_header}>
          <h2>Reviews</h2>
        </div>
        <div className={cls.Trustpilot_stars}>
          <Image src={stars} alt="stars" width={305} height={59} />
        </div>
        <div className={cls.Trustpilot_ratings}>
          <p>4.5 out of 5 rating</p>
          <p>1,000,000+ users</p>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {dataTrustpilot.map(({ author, desc, title, id }) => {
            return (
              <>
                <div className={cls.Trustpilot_title}>
                  <h4>{title}</h4>
                </div>

                <div className={cls.Trustpilot_desc}>
                  <p>
                    {windowWidth > 903 && desc.length > 150
                      ? `${desc.slice(0, 150)}...`
                      : desc}
                  </p>
                </div>

                <div className={cls.Trustpilot_footer}>
                  <p>{author}</p>
                </div>
              </>
            );
          })}
        </Slider>
        <div className={cls.Trustpilot_btn}>
          <Image
            onClick={handlePrevClick}
            src={arrowLeft}
            alt="arrow left"
            width={9}
            height={18}
          />
          <Image
            onClick={handleNextClick}
            src={arrowRight}
            alt="arrow right"
            width={9}
            height={18}
          />
        </div>
      </div>
    </div>
  );
});
