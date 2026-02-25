import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import {
    GlobeIcon,
    ShieldIcon,
    ClockIcon,
    TruckIcon,
    MinusSquareIcon,
    AwardIcon,
    MapIcon,
    BuildingIcon,
    TrendingUpIcon
} from "lucide-react";

export default function AboutUs() {
    const highlights = [
        {
            icon: MinusSquareIcon,
            title: "Our Mission",
            description: "To provide transparent, compliant, and efficient logistics that bridge the gap between Cambodian markets and the world.",
        },
        {
            icon: AwardIcon,
            title: "Industry Recognition",
            description: "Silver Member of AmCham Cambodia, demonstrating our commitment to international standards and best practices.",
        },
        {
            icon: MapIcon,
            title: "Local Expertise",
            description: "Deep understanding of Cambodian customs regulations with direct experience at the General Department of Customs and Excise (GDCE).",
        },
        {
            icon: TrendingUpIcon,
            title: "The Lokka Advantage",
            description: "Local GDCE expertise combined with a digital-first 'Control Tower' approach for end-to-end visibility and compliance.",
        },
    ];

    const stats = [
        { value: "1000+", label: "Shipments Monthly" },
        { value: "24/7", label: "Control Tower Support" },
        { value: "100%", label: "Compliance Focused" },
    ];

    return (
        <section className="mt-32" id="about-us">
            <SectionTitle
                title="About Lokka Logistics"
                description="Your trusted partner for transparent, compliant logistics bridging Cambodian markets with the world."
            />

            {/* Company Overview */}
            <motion.div
                className="mt-8 mb-12 max-w-3xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <p className="text-gray-200 leading-relaxed">
                    As a Silver Member of AmCham Cambodia, we combine local expertise at the General Department
                    of Customs and Excise (GDCE) with a digital-first "Control Tower" approach. Our mission is to
                    provide transparent, compliant, and efficient logistics that connect Cambodian businesses to
                    global markets and international partners to Cambodia.
                </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 70, mass: 1 }}
            >
                {highlights.map((item, index) => (
                    <motion.div
                        key={index}
                        className="glass rounded-xl p-6 space-y-3 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 border border-white/5"
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 70 }}
                    >
                        <div className="p-2 bg-primary/10 rounded-lg w-fit">
                            <item.icon className="size-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-medium text-white">{item.title}</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Statistics */}
            <motion.div
                className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                ))}
            </motion.div>

            {/* The Lokka Difference */}
            <motion.div
                className="mt-16 p-8 glass rounded-2xl max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <h3 className="text-2xl font-semibold text-center mb-8 text-white">
                    The <span className="text-primary">Lokka</span> Advantage
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <BuildingIcon className="size-5 text-primary shrink-0 mt-1" />
                            <div>
                                <h4 className="font-medium text-white mb-1">GDCE Local Expertise</h4>
                                <p className="text-sm text-gray-300">
                                    Direct experience at the General Department of Customs and Excise ensures
                                    smooth clearance and compliance for all shipments.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <ShieldIcon className="size-5 text-primary shrink-0 mt-1" />
                            <div>
                                <h4 className="font-medium text-white mb-1">AmCham Silver Member</h4>
                                <p className="text-sm text-gray-300">
                                    Recognized commitment to international standards, transparency,
                                    and ethical business practices.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <GlobeIcon className="size-5 text-primary shrink-0 mt-1" />
                            <div>
                                <h4 className="font-medium text-white mb-1">Digital Control Tower</h4>
                                <p className="text-sm text-gray-300">
                                    End-to-end visibility with real-time tracking, automated documentation,
                                    and proactive exception management.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <TruckIcon className="size-5 text-primary shrink-0 mt-1" />
                            <div>
                                <h4 className="font-medium text-white mb-1">Integrated Solutions</h4>
                                <p className="text-sm text-gray-300">
                                    Seamless coordination across customs clearance, trucking, warehousing,
                                    and international freight.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Closing Statement */}
            <div className="mt-16 text-center">
                <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    From first-mile pickup to last-mile delivery, we combine local regulatory expertise with
                    digital innovation to keep your supply chain moving efficiently. Whether you're an SME
                    navigating Cambodian customs for the first time or an established trader optimizing
                    your logistics, Lokka Logistics is your trusted partner.
                </p>
            </div>
        </section>
    );
}