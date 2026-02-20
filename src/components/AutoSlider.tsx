import { useEffect, useRef } from "react";
import pLavender from "../../image/candle-lavender.jpg";
import pVanilla from "../../image/candle-vanilla.jpg";
import pRose from "../../image/candle-rose.jpg";
import pSandal from "../../image/candle-sandalwood.jpg";
import pCinnamon from "../../image/candle-cinnamon.jpg";
import pJasmine from "../../image/candle-jasmine.jpg";

const products = [
  { name: "Lavanda", img: pLavender },
  { name: "Vainilla", img: pVanilla },
  { name: "Rosas", img: pRose },
  { name: "Madera & Ámbar", img: pSandal },
  { name: "Canela", img: pCinnamon },
  { name: "Jazmín", img: pJasmine },
];

export default function AutoSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scroll = 0;

    const interval = setInterval(() => {
      scroll += 1;
      slider.scrollLeft = scroll;

      if (scroll >= slider.scrollWidth / 2) {
        scroll = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-hidden px-6"
      >
        {[...products, ...products].map((item, index) => (
          <div
            key={index}
            className="min-w-[260px] bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-40 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold text-lg">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
