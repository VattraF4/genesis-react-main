import SectionTitle from "../components/section-title";
import { CheckIcon, PackageIcon, TruckIcon, ShipIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function PricingPlans() {
    const ref = useRef([]);
    const data = [
        {
            icon: PackageIcon,
            title: 'Small Container',
            description: 'Perfect for personal shipments and small parcels',
            price: '$29',
            unit: 'per container',
            buttonText: 'Book Now',
            features: [
                'Up to 50 lbs capacity',
                'Container size: 2x2x2 ft',
                'Local delivery within 3-5 days',
                'Basic tracking included',
                'Standard packaging materials',
                'Basic insurance coverage'
            ],
        },
        {
            icon: TruckIcon,
            title: 'Medium Container',
            description: 'Ideal for business shipments and frequent shipping',
            price: '$79',
            unit: 'per container',
            mostPopular: true,
            buttonText: 'Book Now',
            features: [
                'Up to 500 lbs capacity',
                'Container size: 4x4x4 ft',
                'Express delivery 1-2 days',
                'Real-time GPS tracking',
                'Premium packaging included',
                'Full insurance coverage'
            ],
        },
        {
            icon: ShipIcon,
            title: 'Large Container',
            description: 'For bulk shipping and enterprise logistics',
            price: '$199',
            unit: 'per container',
            buttonText: 'Book Now',
            features: [
                'Up to 2000 lbs capacity',
                'Container size: 8x8x20 ft',
                'International shipping available',
                'Dedicated logistics coordinator',
                'Custom crating service',
                'Premium insurance + liability'
            ],
        },
    ];

    return (
        <section className="mt-32" id="pricing">
            <SectionTitle
                title="Container Pricing"
                description="Choose the right container size for your shipping needs. One-time payment per container."
            />

            <div className='mt-12 flex flex-wrap items-center justify-center gap-6'>
                {data.map((item, index) => (
                    <motion.div key={index} 
                        className={`group w-full max-w-80 glass p-6 rounded-xl hover:-translate-y-0.5 transition-all duration-300 ${item.mostPopular ? 'border-2 border-amber-500/50' : ''}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70 }}
                        ref={(el) => (ref.current[index] = el)}
                    >
                        {item.mostPopular && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-xs font-semibold px-3 py-1 rounded-full">
                                MOST POPULAR
                            </div>
                        )}
                        <div className="flex items-center w-max ml-auto text-xs gap-2 glass rounded-full px-3 py-1">
                            <item.icon className='size-3.5' />
                            <span>{item.title}</span>
                        </div>
                        <div className='mt-4'>
                            <span className='text-3xl font-bold'>{item.price}</span>
                            <span className='text-sm text-gray-300 ml-1'>{item.unit}</span>
                        </div>
                        <p className='text-gray-200 text-sm mt-2'>{item.description}</p>
                        
                        <button className={`mt-6 rounded-md w-full py-2.5 btn ${item.mostPopular ? 'bg-amber-500 text-gray-900 hover:bg-amber-400' : 'glass hover:bg-white/20'}`}>
                            {item.buttonText}
                        </button>
                        
                        <div className='mt-6 space-y-2'>
                            <p className="text-xs font-semibold text-gray-300 mb-3">WHAT'S INCLUDED:</p>
                            {item.features.map((feature, idx) => (
                                <div key={idx} className='flex items-start gap-2 py-1'>
                                    <div className='rounded-full glass border-0 p-1 mt-0.5 shrink-0'>
                                        <CheckIcon className='size-3 text-white' strokeWidth={3} />
                                    </div>
                                    <p className="text-sm">{feature}</p>
                                </div>
                            ))}
                        </div>
                        
                        <p className="text-xs text-center text-gray-400 mt-4">
                            One-time payment • No hidden fees
                        </p>
                    </motion.div>
                ))}
            </div>
            
            {/* Additional info */}
            <div className="text-center mt-10">
                <p className="text-sm text-gray-400">
                    Need a custom container size? {" "}
                    <button className="text-amber-400 hover:underline">
                        Contact our logistics team
                    </button>
                </p>
            </div>
        </section>
    );
}