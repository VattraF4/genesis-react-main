import SectionTitle from "../components/section-title";
import { MapPinIcon, PackageIcon, TruckIcon, ShieldIcon, ClockIcon, GlobeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Features() {

    const refs = useRef([]);

    const featuresData = [
        {
            icon: TruckIcon,
            title: "Door-to-Door Delivery",
            description: "Seamless pickup and delivery service from any address in China to your doorstep.",
        },
        {
            icon: MapPinIcon,
            title: "Real-time GPS Tracking",
            description: "Follow your container's journey live with precise location updates 24/7.",
        },
        {
            icon: PackageIcon,
            title: "Consolidation Services",
            description: "Combine multiple small shipments into one container to save on shipping costs.",
        },
        {
            icon: ShieldIcon,
            title: "Cargo Insurance",
            description: "Full protection for your goods with comprehensive insurance options.",
        },
        {
            icon: ClockIcon,
            title: "Express Customs Clearance",
            description: "Fast documentation processing to minimize delays at ports.",
        },
        {
            icon: GlobeIcon,
            title: "China Warehouse Network",
            description: "Strategic warehouse locations across major Chinese cities for quick consolidation.",
        }
    ];

    return (
        <section className="mt-32">
            <SectionTitle
                title="Our Logistics Services"
                description="Complete shipping solutions from China to the world — reliable, transparent, and hassle-free."
            />

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 px-6">
                {featuresData.map((feature, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                        onAnimationComplete={() => {
                            const card = refs.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <feature.icon className="size-8.5 text-amber-400" />
                        <h3 className="text-lg font-medium text-white">
                            {feature.title}
                        </h3>
                        <p className="text-gray-200 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
            
            {/* Additional info for logistics company */}
            <div className="text-center mt-10">
                <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                    Serving importers worldwide with reliable shipping from 
                    <span className="text-amber-400 font-medium"> Shanghai • Shenzhen • Ningbo • Guangzhou</span>
                </p>
            </div>
        </section>
    );
}