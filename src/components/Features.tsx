import i1 from "../../image/collection-1.jpg";
import i2 from "../../image/collection-2.jpg";
import i3 from "../../image/collection-3.jpg";
import i4 from "../../image/collection-4.jpg";

const features = [
  { title: "Hechas a mano", img: i1 },
  { title: "Aromas naturales", img: i2 },
  { title: "Cera vegetal", img: i3 },
  { title: "Larga duración", img: i4 },
];

export default function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
            />
            <p className="font-medium">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
