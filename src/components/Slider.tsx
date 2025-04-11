// Slider.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: '/public/banner-17.jpg',
    title: 'Premium Headphones',
    price: '$99.99',
    description: 'Experience crystal-clear sound quality.',
  },
  {
    id: 2,
    image: '/2.jpg',
    title: 'Smart Watch',
    price: '$149.99',
    description: 'Stay connected on the go.',
  },
  {
    id: 3,
    image: '/banner-15.jpg',
    title: 'Gaming Console',
    price: '$299.99',
    description: 'Next-gen gaming awaits.',
  },
  {
    id: 4,
    image: '/banner-16.jpg',
    title: '4K Smart TV',
    price: '$499.99',
    description: 'Immerse yourself in stunning visuals.',
  },
];

export default function Slider() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-800">{slide.title}</h2>
                  <p className="text-sm text-gray-600 mt-1">{slide.description}</p>
                  <p className="text-blue-600 font-semibold text-lg mt-2">{slide.price}</p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
