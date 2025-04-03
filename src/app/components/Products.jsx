// // src/app/components/Products.jsx
import dynamic from 'next/dynamic';

const ProductCard = dynamic(() => import('./ProductCard'), {
  loading: () => <div className="animate-pulse bg-highlight rounded-lg h-64 w-full"></div>,
});

const productsData = [
  {
    name: "J.U.L.I.E",
    image: "/assets/brain.png",
    description: "A new standard in AI, combining multi-foundational design and limitless training to deliver unmatched intelligence and versatility.",
    link: "/products/julie"
  },
  {
    name: "H.A.K",
    image: "/assets/cloud.png",
    description: "Redefines storage with Teron for businesses and Infryn for homes, offering scalability at just 5 rupees per GB—no strings, one-time purchase freedom!",
    link: "/products/hak"
  },
  {
    name: "P.U.L.S.A.R",
    image: "/assets/glass.png",
    description: "A pioneering augmented reality, delivers unparalleled visualization and real-time interactivity, allowing users to engage with immersive elements that transform their environment.",
    link: "/products/pulsar"
  },
  {
    name: "Y.A.K.O",
    image: "/assets/food.png",
    description: "An autonomous food delivery robot revolutionizing efficiency with dynamic levitation, energy harvesting, self-healing materials, and adaptive AI.",
    link: "/products/yako"
  },
  {
    name: "Yet to Name",
    image: "/assets/lastj-Photoroom.jpg",
    description: "Arriving Soon...",
    link: "/products/new"
  },
];

export default function Products() {
  return (
    <section className="py-16 px-6 md:px-20 bg-background text-text">
      <h2 className="text-4xl font-bold text-center text-custom-red">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="col-span-1 md:col-span-1">
          <ProductCard key={0} product={productsData[0]} />
        </div>
        <div className="col-span-1 md:col-span-1">
          <ProductCard key={1} product={productsData[1]} />
        </div>
        <div className="col-span-1 md:col-span-1">
          <ProductCard key={2} product={productsData[2]} />
        </div>
        <div className="col-span-1 md:col-span-3 flex justify-center mt-6 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
            <div className="col-span-1 md:col-span-1">
              <ProductCard key={3} product={productsData[3]} />
            </div>
            <div className="col-span-1 md:col-span-1">
              <ProductCard key={4} product={productsData[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}