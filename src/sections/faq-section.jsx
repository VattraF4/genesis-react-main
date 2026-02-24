import SectionTitle from '../components/section-title';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        {
            question: 'What shipping methods do you offer?',
            answer: "We offer ground, air, and sea shipping options with tracking capabilities. Choose the method that best fits your timeline and budget.",
        },
        {
            question: 'How does your logistics company ensure safe delivery?',
            answer: 'We use advanced tracking systems, trained professionals, insurance coverage, and quality packaging to ensure your cargo arrives safely.',
        },
        {
            question: 'Can I track my shipment in real-time?',
            answer: 'Yes, all shipments come with real-time GPS tracking. You can monitor your package status through our online portal or mobile app.',
        },
        {
            question: 'What are your delivery timeframes?',
            answer: 'Delivery times vary by shipping method and destination. Local deliveries: 1-2 days, domestic: 3-7 days, international: 7-21 days.',
        },
        {
            question: 'Do you handle hazardous or specialized cargo?',
            answer: 'Yes, we are certified to transport hazardous materials and specialized cargo with proper documentation and compliance.',
        },
        {
            question: 'How do I get a shipping quote?',
            answer: 'Visit our website, use our instant quote calculator, or contact our sales team for personalized pricing on your shipment needs.',
        },
    ];

    return (
        <section className='mt-32' id='use-cases'>
            <SectionTitle title="FAQ's" description="Find answers to common questions about our logistics services, shipping methods, tracking, and delivery options." />
            <div className='mx-auto mt-12 space-y-4 w-full max-w-xl'>
                {data.map((item, index) => (
                    <motion.div key={index} className='flex flex-col glass rounded-md'
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <h3 className='flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium' onClick={() => setIsOpen(isOpen === index ? null : index)}>
                            {item.question}
                            <ChevronDownIcon className={`size-5 transition-all shrink-0 duration-400 ${isOpen === index ? 'rotate-180' : ''}`} />
                        </h3>
                        <p className={`px-4 text-sm/6 transition-all duration-400 overflow-hidden ${isOpen === index ? 'pt-2 pb-4 max-h-80' : 'max-h-0'}`}>{item.answer}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}