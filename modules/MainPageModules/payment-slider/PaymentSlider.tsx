import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.css";
import Image from "next/image";
import item1 from "public/images/sliderMain/payeer.webp";
import item2 from "public/images/sliderMain/cryptoPayment.svg";
import item5 from "public/images/sliderMain/masterCard.webp";
import item6 from "public/images/sliderMain/visa.webp";
import item7 from "public/images/sliderMain/upi.svg";
import item8 from "public/images/sliderMain/sepa.svg";
import item9 from "public/images/sliderMain/swift.svg";
import item10 from "public/images/sliderMain/localBank.svg";
import item11 from "public/images/sliderMain/oris.svg";
import item12 from "public/images/sliderMain/stickpay.webp";
import cls from "./PaymentSlider.module.scss";

const animation = { duration: 500, easing: (t: number) => t };

interface IPaymentSlider {}

const PaymentSlider = ({}: IPaymentSlider) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "performance",
      drag: true,
      slides: {
        perView: 9,
      },
      defaultAnimation: animation,
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 6,
          },
        },
        "(max-width: 768px)": {
          slides: {
            perView: 4,
          },
        },
        "(max-width: 425px)": {
          slides: {
            perView: 3,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver || !sliderRef) return;

          timeout = setTimeout(() => {
            slider.next?.();
          }, 1500);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const paymentMethods = [
    { src: item1, alt: "visa icon", width: 74, height: 27 },
    { src: item2, alt: "mastercard icon", width: 165, height: 65 },
    // { src: item3, alt: "sticpay icon", width: 104, height: 21 },
    // { src: item4, alt: "payeer icon", width: 99, height: 22 },
    { src: item5, alt: "bitcoin icon", width: 132, height: 29 },
    { src: item6, alt: "astroPay icon", width: 114, height: 31 },
    { src: item7, alt: "visa icon", width: 74, height: 27 },
    { src: item8, alt: "mastercard icon", width: 79, height: 61 },
    { src: item9, alt: "sticpay icon", width: 104, height: 21 },
    { src: item10, alt: "payeer icon", width: 99, height: 22 },
    { src: item11, alt: "bitcoin icon", width: 132, height: 29 },
    { src: item12, alt: "astroPay icon", width: 114, height: 31 },
  ];

  const renderPaymentMethods = () =>
    paymentMethods.map((el: any, index) => {
      return (
        <div
          key={`number-slide${index + 1}`}
          className={`keen-slider__slide number-slide${index + 1}`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "10px",
          }}
        >
          <Image
            className={cls.PaymentSlider_image}
            src={el.src}
            alt={el.alt}
            width={165}
            height={65}
            loading="eager"
            priority={true}
          />
        </div>
      );
    });

  return (
    <div className={`${cls.PaymentSlider}`}>
      {sliderRef && (
        <div ref={sliderRef} className="keen-slider">
          {renderPaymentMethods()}
        </div>
      )}
    </div>
  );
};
export default PaymentSlider;
