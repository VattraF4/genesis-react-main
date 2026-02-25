import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";
import { ExternalLinkIcon, FileCheck, MapPin, TrendingUp } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Plan & Document",
        description: "Submit shipment details, origin, destination, and requirements. Our digital Control Tower automatically processes documentation for GDCE compliance, optimizes routes, and generates customs-ready paperwork. SME clients receive dedicated consulting support to navigate Cambodian trade regulations.",
        link: "/services#customs-clearance",
        image: "/assets/workflow1.png",
        icon: FileCheck,
    },
    {
        id: 2,
        title: "Execute & Track",
        description: "Monitor shipments in real-time across our trucking, ocean freight, and air freight networks. Our Control Tower provides end-to-end visibility, coordinates with carriers, and ensures compliance at every checkpoint. Specialized crane services and secure warehousing available for complex cargo.",
        link: "/services#tracking",
        image: "/assets/workflow2.png",
        icon: MapPin,
    },
    {
        id: 3,
        title: "Deliver & Optimize",
        description: "Complete deliveries with digital proof and customs clearance confirmation. Generate automated reports for your records, track performance metrics, and leverage our AmCham Cambodia network for future trade opportunities. Continuous optimization through our digital-first approach.",
        link: "/services#reporting",
        image: "/assets/workflow3.png",
        icon: TrendingUp,
    },
];

export default function WorkflowSteps() {
    return (
        <section className="mt-32 relative" id="workflow">
            <SectionTitle
                title="Streamlined Logistics Through Digital Excellence"
                description="Experience the Lokka Advantage: Local GDCE expertise combined with a digital-first Control Tower approach for transparent, compliant, and efficient logistics across Cambodia."
            />

            <motion.div className="relative space-y-20 md:space-y-30 mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Vertical timeline line with step numbers */}
                <div className="flex-col items-center hidden md:flex absolute left-1/2 -translate-x-1/2">
                    <p className="flex items-center justify-center font-medium my-10 aspect-square bg-primary/20 text-primary border border-primary/30 p-2 rounded-full">
                        01
                    </p>
                    <div className="h-72 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />
                    <p className="flex items-center justify-center font-medium my-10 aspect-square bg-primary/20 text-primary border border-primary/30 p-2 rounded-full">
                        02
                    </p>
                    <div className="h-72 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />
                    <p className="flex items-center justify-center font-medium my-10 aspect-square bg-primary/20 text-primary border border-primary/30 p-2 rounded-full">
                        03
                    </p>
                </div>

                {steps.map((step, index) => (
                    <motion.div 
                        key={step.id} 
                        className={`flex items-center justify-center gap-6 md:gap-20 ${
                            index % 2 !== 0 ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
                        }`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                            delay: index * 0.15, 
                            type: "spring", 
                            stiffness: 320, 
                            damping: 70, 
                            mass: 1 
                        }}
                    >
                        <img 
                            src={step.image} 
                            alt={`${step.title} workflow`} 
                            className="flex-1 h-auto w-full max-w-sm rounded-2xl shadow-2xl border border-white/10" 
                        />
                        
                        <div className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
                            <div className="flex items-center gap-3">
                                <step.icon className="size-8 text-primary" />
                                <h3 className="text-2xl font-medium text-white">
                                    {step.title}
                                </h3>
                            </div>
                            
                            <p className="text-gray-100 text-sm/6 leading-relaxed">
                                {step.description}
                            </p>
                            
                            <div className="flex items-center gap-4">
                                <a 
                                    href={step.link} 
                                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                                >
                                    Learn More
                                    <ExternalLinkIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                
                                {/* Trust badges for relevant steps */}
                                {step.id === 1 && (
                                    <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                        GDCE Compliant
                                    </span>
                                )}
                                {step.id === 2 && (
                                    <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                        Real-time GPS
                                    </span>
                                )}
                                {step.id === 3 && (
                                    <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                        AmCham Member
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Lokka Advantage Summary */}
                <motion.div 
                    className="mt-16 p-8 glass rounded-2xl max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <h4 className="text-xl font-semibold text-primary mb-4">
                        The Lokka Advantage
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                        Local expertise at the General Department of Customs and Excise (GDCE) 
                        combined with a digital-first "Control Tower" approach. As a Silver Member 
                        of AmCham Cambodia, we provide transparent, compliant, and efficient logistics 
                        that bridge the gap between Cambodian markets and the world.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-6 mt-6">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            Silver Member - AmCham Cambodia
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            GDCE Licensed Broker
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            Digital Control Tower
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}