import { motion } from "framer-motion";
import { 
    ShipIcon, 
    HomeIcon, 
    ArrowLeftIcon, 
    SearchIcon,
    CompassIcon,
    PhoneIcon,
    MailIcon
} from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <>
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-100 bg-[#1E4A8C]/40 blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-100 bg-[#2A6BBF]/40 blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-100 bg-[#0A2472]/40 blur-[100px]" />
             </div>

            {/* Main 404 Content */}
            <section className="min-h-screen flex items-center justify-center px-4 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Animated Container */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* 404 Illustration */}
                        <div className="relative mb-8">
                            <motion.div
                                animate={{ 
                                    y: [0, -20, 0],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ 
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="inline-block"
                            >
                                <ShipIcon className="size-32 text-amber-400/50" strokeWidth={1} />
                            </motion.div>
                            
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-9xl font-bold bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent opacity-20">
                                    404
                                </span>
                            </div>
                        </div>

                        {/* Error Message */}
                        <motion.h1 
                            className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent mb-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            404
                        </motion.h1>

                        <motion.h2 
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Shipment Not Found
                        </motion.h2>

                        <motion.p 
                            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Looks like this container got lost at sea. The page you're looking for 
                            might have been moved, deleted, or never existed.
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div 
                            className="max-w-md mx-auto mb-10"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="relative">
                                <input 
                                    type="text"
                                    placeholder="Search for tracking number or page..."
                                    className="w-full glass border border-white/10 rounded-full px-6 py-4 pl-12 bg-transparent focus:outline-none focus:border-amber-500/50 transition"
                                />
                                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                            </div>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div 
                            className="flex flex-wrap gap-4 justify-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link 
                                to="/"
                                className="btn bg-gradient-to-r from-amber-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all flex items-center gap-2"
                            >
                                <HomeIcon className="size-5" />
                                Back to Home
                            </Link>
                            
                            <Link 
                                to="/services"
                                className="btn glass px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all flex items-center gap-2"
                            >
                                <CompassIcon className="size-5" />
                                Explore Services
                            </Link>
                            
                            <button 
                                onClick={() => window.history.back()}
                                className="btn glass px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all flex items-center gap-2"
                            >
                                <ArrowLeftIcon className="size-5" />
                                Go Back
                            </button>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div 
                            className="mt-16 pt-8 border-t border-white/10"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <p className="text-gray-400 mb-4">Popular Destinations</p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <Link to="/track" className="text-sm text-gray-400 hover:text-amber-400 transition">Track Shipment</Link>
                                <span className="text-gray-600">•</span>
                                <Link to="/quote" className="text-sm text-gray-400 hover:text-amber-400 transition">Get Quote</Link>
                                <span className="text-gray-600">•</span>
                                <Link to="/services/ocean" className="text-sm text-gray-400 hover:text-amber-400 transition">Ocean Freight</Link>
                                <span className="text-gray-600">•</span>
                                <Link to="/contact" className="text-sm text-gray-400 hover:text-amber-400 transition">Contact Us</Link>
                            </div>
                        </motion.div>

                        {/* Contact Support */}
                        <motion.div 
                            className="mt-8 glass inline-block rounded-full px-6 py-3"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <p className="text-sm text-gray-300 flex items-center gap-3">
                                <span>Need help finding something?</span>
                                <a href="tel:+8612345678900" className="text-amber-400 hover:underline flex items-center gap-1">
                                    <PhoneIcon className="size-4" />
                                    +86 123 4567 8900
                                </a>
                                <span className="text-gray-600">|</span>
                                <a href="mailto:support@genesiscorp.com" className="text-amber-400 hover:underline flex items-center gap-1">
                                    <MailIcon className="size-4" />
                                    Email Support
                                </a>
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}