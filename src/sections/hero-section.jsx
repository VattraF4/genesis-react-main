import { PlayCircleIcon, PackageIcon, ClockIcon, MapPinIcon, ShieldIcon, TruckIcon } from "lucide-react";
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
                {/* Updated gradient colors to match blue logo - using blues and cyan */}
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-100 bg-[#1E4A8C]/40 blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-100 bg-[#2A6BBF]/40 blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-100 bg-[#0A2472]/40 blur-[100px]" />
            </motion.div>
            
            <motion.section className="flex flex-col items-center min-h-screen justify-center px-4">
                {/* Badge */}
                <motion.div className="flex items-center gap-3"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm border border-blue-500/20">
                        <PackageIcon className="size-4 text-blue-400" />
                        <span>Silver Member of AmCham Cambodia</span>
                        <ShieldIcon className="size-4 text-blue-400 ml-2" />
                    </p>
                </motion.div>
                
                {/* Main Headline */}
                <motion.h1 className="text-center text-4xl/13 md:text-6xl/19 mt-6 font-semibold tracking-tight max-w-4xl"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    Bridge Cambodian Markets with 
                    <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent block mt-2">
                        Transparent, Compliant Logistics
                    </span>
                </motion.h1>
                
                {/* Description */}
                <motion.p className="text-center text-gray-100 text-lg max-w-2xl mt-6 leading-relaxed"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    Local expertise at GDCE combined with a digital-first Control Tower approach. 
                    From customs clearance to last-mile delivery — we keep your supply chain moving efficiently.
                </motion.p>

                {/* CTA Buttons - Updated with blue gradient */}
                <motion.div className="flex flex-wrap items-center justify-center gap-4 mt-10"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <button className="btn bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3.5 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                        Get a Quote
                    </button>
                    <button className="btn glass flex items-center justify-center gap-2 px-8 py-3.5 rounded-full hover:bg-blue-500/10 transition-all border border-blue-500/20">
                        <PackageIcon className="size-5 text-blue-400" />
                        Track Shipment
                    </button>
                    <button className="btn glass flex items-center justify-center gap-2 px-8 py-3.5 rounded-full hover:bg-blue-500/10 transition-all border border-blue-500/20">
                        <ShieldIcon className="size-5 text-blue-400" />
                        Client Login
                    </button>
                </motion.div>

                {/* Trust Indicators - Updated icon colors */}
                <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 text-sm"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="flex items-center gap-2 text-gray-300">
                        <ShieldIcon className="size-4 text-blue-400" />
                        <span>GDCE Licensed</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                        <ClockIcon className="size-4 text-blue-400" />
                        <span>24/7 Control Tower</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                        <MapPinIcon className="size-4 text-blue-400" />
                        <span>Real-time Tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                        <TruckIcon className="size-4 text-blue-400" />
                        <span>Nationwide Coverage</span>
                    </div>
                </motion.div>

                {/* Service Highlights - Updated border colors */}
                <motion.div className="flex flex-wrap items-center justify-center gap-6 mt-16 text-xs text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="px-3 py-1 glass rounded-full border border-blue-500/20 hover:border-blue-400/40 transition-colors">Customs Clearance</span>
                    <span className="px-3 py-1 glass rounded-full border border-blue-500/20 hover:border-blue-400/40 transition-colors">Ocean Freight</span>
                    <span className="px-3 py-1 glass rounded-full border border-blue-500/20 hover:border-blue-400/40 transition-colors">Air Freight</span>
                    <span className="px-3 py-1 glass rounded-full border border-blue-500/20 hover:border-blue-400/40 transition-colors">Trucking Services</span>
                    <span className="px-3 py-1 glass rounded-full border border-blue-500/20 hover:border-blue-400/40 transition-colors">Warehousing</span>
                    <span className="px-3 py-1 glass rounded-full border border-blue-500/20 hover:border-blue-400/40 transition-colors">SME Consulting</span>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                >
                    <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-blue-400 rounded-full mt-2" />
                    </div>
                </motion.div>
            </motion.section>
        </>
    );
}