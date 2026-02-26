import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {

    const ref = useRef([]);
    const data = [
        {
            review: 'Outstanding service and exceptional customer support. Lokka Logistics made our international shipping seamless and worry-free.',
            name: 'Nuon Rannin',
            about: 'CEO, Logistics Director',
            image: 'https://app.glueup.com/resources/public/images/square/300/72871d1c-6ff8-45f7-9811-0fc9f7e18eac.png',
        },
        {
            review: 'Lokka Logistics handled our container shipment from Shanghai to Los Angeles perfectly. Real-time tracking kept us informed every step of the way.',
            name: 'EA Seakheng',
            about: 'CEO, Founder',
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
        },
        {
            review: 'Best freight forwarder we\'ve worked with. Customs clearance was smooth and delivery was ahead of schedule. Highly recommended!',
            name: 'SAM Potthey',
            about: 'CEO, Operations Director',
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
        },
        {
            review: 'We ship from China weekly and Lokka has never let us down. Competitive rates, great communication, and reliable service.',
            name: 'ANN Rithy',
            about: 'CEO, Supply Chain Manager',
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
        }, 
    ];

    return (
        <section className="mt-32 flex flex-col items-center">
            <SectionTitle
                title="What Our Clients Say About Lokka Logistics"
                description="Trusted by importers and businesses worldwide for reliable shipping"
            />
            <div className='mt-12 flex flex-wrap justify-center gap-6'>
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        className='w-full max-w-88 space-y-4 rounded-lg glass p-6 hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 border-l-4 border-blue-500/50'
                        initial={{ y: 150, opacity: 0 }}
                        ref={(el) => (ref.current[index] = el)}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        onAnimationComplete={() => {
                            const card = ref.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <div className='flex items-start gap-3'>
                            <span className='text-3xl text-blue-400/40 leading-none'>❝</span>
                            <div className='flex-1'>
                                <p className='text-gray-200 leading-relaxed italic'>{item.review}</p>
                                <div className='mt-4 flex items-center justify-between'>
                                    <div>
                                        <p className='font-semibold text-white'>— {item.name}</p>
                                        <p className="text-xs font-medium text-blue-400/80">{item.about}</p>
                                    </div>
                                    <img className='size-10 rounded-full border-2 border-blue-400/30' src={item.image} alt={item.name} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}