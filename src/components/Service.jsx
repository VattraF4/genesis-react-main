import { motion } from "framer-motion";
import { 
    ShipIcon, 
    PlaneIcon, 
    TruckIcon, 
    PackageIcon, 
    WarehouseIcon,
    ShieldCheckIcon,
    ClockIcon,
    GlobeIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    PhoneIcon,
    MailIcon,
    MapPinIcon
} from "lucide-react";
import SectionTitle from "./section-title";
import { useRef } from "react";

export default function ServicesPageComponent() {
    const refs = useRef([]);

    // Main Services
    const mainServices = [
        {
            icon: ShipIcon,
            title: "Ocean Freight",
            description: "Full Container Load (FCL) and Less than Container Load (LCL) shipping from all major China ports.",
            features: [
                "FCL 20ft / 40ft containers",
                "LCL consolidation services",
                "Port-to-port and door-to-port",
                "Reefer containers available"
            ],
            price: "From $29",
            unit: "per container"
        },
        {
            icon: PlaneIcon,
            title: "Air Freight",
            description: "Express air shipping for urgent cargo with fast transit times and real-time tracking.",
            features: [
                "Next-flight-out options",
                "Consolidated air freight",
                "Dangerous goods handling",
                "Temperature-controlled options"
            ],
            price: "From $4.50",
            unit: "per kg"
        },
        {
            icon: TruckIcon,
            title: "Trucking & Distribution",
            description: "Nationwide trucking network for seamless inland transportation and last-mile delivery.",
            features: [
                "Full truckload (FTL)",
                "Less than truckload (LTL)",
                "Cross-border trucking",
                "Express door delivery"
            ],
            price: "Contact for quote",
            unit: ""
        }
    ];

    // Additional Services
    const additionalServices = [
        {
            icon: WarehouseIcon,
            title: "Warehousing",
            description: "Strategic warehouse locations in Shanghai, Shenzhen, and Ningbo for storage and consolidation.",
            features: [
                "Short & long-term storage",
                "Inventory management",
                "Pick & pack services",
                "Cross-docking"
            ]
        },
        {
            icon: PackageIcon,
            title: "Consolidation",
            description: "Combine multiple small shipments into one container to save up to 40% on shipping costs.",
            features: [
                "LCL consolidation",
                "Supplier consolidation",
                "Quality inspection",
                "Repackaging services"
            ]
        },
        {
            icon: ShieldCheckIcon,
            title: "Customs Brokerage",
            description: "Expert customs clearance with fast documentation processing to avoid delays.",
            features: [
                "Import/export declarations",
                "Tariff classification",
                "Duty calculation",
                "Compliance consulting"
            ]
        }
    ];

    // China Ports
    const chinaPorts = [
        { name: "Shanghai", volume: "Busiest port in China", icon: "🚢" },
        { name: "Shenzhen", volume: "Major export hub", icon: "🏭" },
        { name: "Ningbo", volume: "Deep-water port", icon: "⚓" },
        { name: "Guangzhou", volume: "Southern gateway", icon: "🌊" },
        { name: "Qingdao", volume: "Northern hub", icon: "⛵" },
        { name: "Tianjin", volume: "Beijing's port", icon: "🚂" }
    ];

    return (
        <>
            {/* Background blur elements - matching your theme */}
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px] opacity-30" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px] opacity-30" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px] opacity-30" />
            </div>

            {/* Hero Section */}
            <section className="pt-32 pb-12">
                <motion.div 
                    className="text-center max-w-4xl mx-auto px-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block px-4 py-2 bg-amber-500/10 rounded-full text-amber-400 font-medium text-sm mb-6 border border-amber-500/20">
                        🚢 Logistics Services from China
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                        Complete{" "}
                        <span className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
                            Shipping Solutions
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
                        End-to-end logistics services from China to worldwide — ocean, air, trucking, warehousing, and customs clearance.
                    </p>
                </motion.div>
            </section>

            {/* Main Services Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle
                        title="Shipping Services"
                        description="Choose the right shipping method for your cargo"
                    />

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {mainServices.map((service, index) => (
                            <motion.div
                                key={index}
                                ref={(el) => (refs.current[index] = el)}
                                className="glass p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 border border-white/5"
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                                    <service.icon className="size-8 text-amber-400" />
                                </div>
                                
                                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                                
                                <div className="mb-6">
                                    <span className="text-3xl font-bold">{service.price}</span>
                                    <span className="text-gray-400 text-sm ml-1">{service.unit}</span>
                                </div>
                                
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                            <CheckCircleIcon className="size-4 text-amber-400 shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <button className="w-full btn glass py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                                    Get Quote <ArrowRightIcon className="size-4" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle
                        title="Value-Added Services"
                        description="Beyond shipping — complete logistics support"
                    />

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {additionalServices.map((service, index) => (
                            <motion.div
                                key={index}
                                className="glass p-8 rounded-2xl border border-white/5"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <service.icon className="size-10 text-amber-400 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                            <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* China Ports Network */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="glass rounded-3xl p-10 border border-white/5">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold mb-3">Our China Port Network</h2>
                            <p className="text-gray-400">Strategic presence in all major Chinese ports for efficient cargo handling</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {chinaPorts.map((port, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div className="text-4xl mb-2">{port.icon}</div>
                                    <h4 className="font-semibold text-lg">{port.name}</h4>
                                    <p className="text-xs text-gray-400">{port.volume}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold mb-6">
                                Why Importers Choose{" "}
                                <span className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
                                    Genesis Logistics
                                </span>
                            </h2>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                                        <ClockIcon className="size-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">10+ Years Experience</h4>
                                        <p className="text-gray-400">Deep expertise in China import/export logistics since 2014</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                                        <GlobeIcon className="size-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Global Network</h4>
                                        <p className="text-gray-400">Partners in 50+ countries for seamless door-to-door delivery</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                                        <ShieldCheckIcon className="size-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Fully Insured</h4>
                                        <p className="text-gray-400">Comprehensive cargo insurance for peace of mind</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="glass p-8 rounded-2xl"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
                            
                            <div className="space-y-4">
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    className="w-full glass border border-white/10 rounded-xl px-4 py-3 bg-transparent focus:outline-none focus:border-amber-500/50 transition"
                                />
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    className="w-full glass border border-white/10 rounded-xl px-4 py-3 bg-transparent focus:outline-none focus:border-amber-500/50 transition"
                                />
                                <select className="w-full glass border border-white/10 rounded-xl px-4 py-3 bg-transparent focus:outline-none focus:border-amber-500/50 transition">
                                    <option value="" className="bg-gray-800">Select Service</option>
                                    <option value="ocean" className="bg-gray-800">Ocean Freight</option>
                                    <option value="air" className="bg-gray-800">Air Freight</option>
                                    <option value="trucking" className="bg-gray-800">Trucking</option>
                                    <option value="warehousing" className="bg-gray-800">Warehousing</option>
                                </select>
                                <textarea 
                                    placeholder="Cargo Details (weight, dimensions, etc.)" 
                                    rows="3"
                                    className="w-full glass border border-white/10 rounded-xl px-4 py-3 bg-transparent focus:outline-none focus:border-amber-500/50 transition"
                                ></textarea>
                                <button className="w-full bg-gradient-to-r from-amber-500 to-pink-500 text-white py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all">
                                    Submit Request
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Info Bar */}
            <section className="pb-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="glass rounded-2xl p-6 flex flex-wrap justify-between items-center gap-6">
                        <div className="flex items-center gap-3">
                            <PhoneIcon className="size-5 text-amber-400" />
                            <span className="text-gray-300">+86 123 4567 8900</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MailIcon className="size-5 text-amber-400" />
                            <span className="text-gray-300">shipping@genesiscorp.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPinIcon className="size-5 text-amber-400" />
                            <span className="text-gray-300">Shanghai • Shenzhen • Ningbo</span>
                        </div>
                        <button className="btn glass px-6 py-2 rounded-full text-sm hover:bg-white/10 transition">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}