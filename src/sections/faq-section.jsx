import SectionTitle from '../components/section-title';
import { ChevronDownIcon, Package, Ship, Truck, Plane, Warehouse, FileText, Phone, Calculator } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);
    
    const data = [
        {
            category: "Customs & Compliance",
            question: 'What customs documentation do I need for importing/exporting in Cambodia?',
            answer: "Requirements include commercial invoice, packing list, bill of lading/airway bill, import/export license, and CO (Certificate of Origin). Our customs brokerage team handles all documentation and liaises directly with GDCE (General Department of Customs and Excise) for smooth clearance.",
            icon: FileText,
        },
        {
            category: "Customs & Compliance",
            question: 'How long does customs clearance take in Cambodia?',
            answer: "Standard customs clearance typically takes 2-3 working days. With our SME Logistics Consulting service and digital Control Tower approach, we help expedite the process and reduce common trade barriers. Urgent clearances can be arranged through our priority channels.",
            icon: FileText,
        },
        {
            category: "Shipping & Freight",
            question: 'What shipping options do you offer for international trade?',
            answer: "We provide comprehensive ocean freight (FCL/LCL) for cost-effective global shipping, air freight for time-sensitive cargo, and specialized freight forwarding services. As a Silver Member of AmCham Cambodia, we ensure transparent, compliant handling of all international shipments.",
            icon: Ship,
        },
        {
            category: "Shipping & Freight",
            question: 'Do you handle door-to-door deliveries within Cambodia?',
            answer: "Yes, our trucking services provide reliable door-to-door delivery across Cambodia and cross-border regions. We offer real-time GPS tracking, secure handling, and insurance options for complete peace of mind.",
            icon: Truck,
        },
        {
            category: "Specialized Services",
            question: 'Can you handle heavy or oversized cargo?',
            answer: "Absolutely. Our specialized crane services and heavy-lift equipment are available for industrial, oversized, or heavy cargo. We handle everything from planning and permits to execution with our experienced team.",
            icon: Package,
        },
        {
            category: "Specialized Services",
            question: 'Do you offer warehousing and inventory management?',
            answer: "Yes, we provide secure warehousing facilities with comprehensive inventory management. Our digital-first approach includes real-time stock monitoring, climate-controlled options for sensitive goods, and flexible short/long-term storage solutions.",
            icon: Warehouse,
        },
        {
            category: "SME Support",
            question: 'I run an SME new to Cambodian logistics. Can you help?',
            answer: "Yes! Our SME Logistics Consulting service is specifically designed to help small and medium enterprises navigate Cambodian customs procedures. We offer personalized guidance, simplified processes, and dedicated support to reduce trade barriers and help your business grow.",
            icon: Phone,
        },
        {
            category: "Pricing & Quotes",
            question: 'How do I get a shipping quote?',
            answer: "Contact our team for a personalized quote based on your specific needs. We provide transparent, competitive pricing with end-to-end insurance options. As a member of AmCham Cambodia, we maintain the highest standards of pricing transparency and compliance.",
            icon: Calculator,
        },
    ];

    // Group questions by category
    const groupedData = data.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    const categories = Object.keys(groupedData);

    return (
        <section className='mt-32' id='faq'>
            <SectionTitle 
                title="Frequently Asked Questions" 
                description="Find answers about our logistics services in Cambodia, including customs clearance, shipping options, and specialized support for SMEs." 
            />
            
            <div className='mx-auto mt-12 space-y-8 w-full max-w-3xl'>
                {categories.map((category, categoryIndex) => (
                    <div key={category} className="space-y-4">
                        <h2 className="text-xl font-semibold text-primary border-b border-white/10 pb-2">
                            {category}
                        </h2>
                        
                        {groupedData[category].map((item, index) => (
                            <motion.div 
                                key={item.question} 
                                className='flex flex-col glass rounded-md hover:bg-white/5 transition'
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: categoryIndex * 0.1 + index * 0.1 }}
                            >
                                <h3 
                                    className='flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium' 
                                    onClick={() => setIsOpen(isOpen === item.question ? null : item.question)}
                                >
                                    <span className="flex items-center gap-3">
                                        <item.icon className="size-5 text-primary shrink-0" />
                                        {item.question}
                                    </span>
                                    <ChevronDownIcon className={`size-5 transition-all shrink-0 duration-400 ${isOpen === item.question ? 'rotate-180' : ''}`} />
                                </h3>
                                
                                <motion.div 
                                    className={`px-4 text-sm/6 text-white/80 overflow-hidden border-t border-white/5`}
                                    initial={false}
                                    animate={{ 
                                        height: isOpen === item.question ? 'auto' : 0,
                                        paddingTop: isOpen === item.question ? '1rem' : 0,
                                        paddingBottom: isOpen === item.question ? '1rem' : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {item.answer}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                ))}

                {/* Contact CTA */}
                <motion.div 
                    className="glass p-6 text-center rounded-md mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
                    <p className="text-white/70 mb-4">
                        Our logistics experts are ready to help with your specific needs.
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition"
                    >
                        <Phone className="size-4" />
                        Contact Our Team
                    </a>
                </motion.div>
            </div>
        </section>
    );
}