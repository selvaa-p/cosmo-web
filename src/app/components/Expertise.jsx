// src/app/components/Expertise.jsx
import { FlaskConical, Brain, LayoutDashboard, Cloud } from "lucide-react";
const expertiseData = [
  { icon: <FlaskConical size={40} className="text-#FE0300" />, title: "Research and Development", desc: "Fostering innovation through deep research and exploration of emerging technologies." },
  { icon: <Brain size={40} className="text-#FE0300" />, title: "Artificial Intelligence", desc: "Driving progress with advanced AI research and groundbreaking solutions." },
  { icon: <LayoutDashboard size={40} className="text-#FE0300" />, title: "UI/UX Design", desc: "Crafting intuitive user interfaces and seamless user experiences." },
  { icon: <Cloud size={40} className="text-#FE0300" />, title: "Cloud Computing", desc: "Optimizing infrastructure with cutting-edge cloud solutions." },
];

export default function Expertise() {
  return (
    <section className="py-16 px-6 md:px-20 bg-#F4E6D6 text-#560121">
      <h2 className="text-4xl font-bold text-center text-custom-red">Leading in</h2>
      <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
        Innovating and mastering key domains to drive technology.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 border-2 border-transparent hover:border-#FE0300 hover:shadow-#FE0300 hover:scale-105"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-#FE0300">{item.title}</h3>
            <p className="text-#560121 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}