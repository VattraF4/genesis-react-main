import { PlayCircleIcon, PackageIcon, ClockIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {

    return (
        <>
            <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </motion.div>
            
            <motion.section className="flex flex-col items-center">
                <motion.div className="flex items-center gap-3 mt-32"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p className="flex items-center gap-2">
                        <PackageIcon className="size-4 text-amber-400" />
                        <span>Smart Logistics • Real-time Tracking • Global Network</span>
                    </p>
                </motion.div>
                
                <motion.h1 className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold tracking-tight max-w-4xl"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    Streamline Your Supply Chain with 
                    <span className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent block mt-2">
                        Intelligent Logistics
                    </span>
                </motion.h1>
                
                <motion.p className="text-center text-gray-100 text-lg max-w-2xl mt-6 leading-relaxed"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    From warehouse to last-mile delivery — track every movement, optimize every route, 
                    and delight every customer with our end-to-end logistics platform.
                </motion.p>

                <motion.div className="flex items-center gap-4 mt-8"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <button className="btn bg-gradient-to-r from-amber-500 to-pink-500 text-white px-8 py-3.5 rounded-full font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all">
                        Track Shipment
                    </button>
                    <button className="btn glass flex items-center justify-center gap-2 px-8 py-3.5 rounded-full hover:bg-white/10 transition-all">
                        <PlayCircleIcon className="size-5" />
                        Watch Demo
                    </button>
                </motion.div>

                {/* Quick Stats */}
                <motion.div className="flex items-center gap-8 mt-12 text-sm text-gray-300"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                </motion.div>
            </motion.section>
        </>
    );
}