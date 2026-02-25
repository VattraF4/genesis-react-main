import { motion } from "framer-motion";
import SectionTitle from "./section-title";
import { 
    PhoneIcon, 
    MailIcon, 
    MapPinIcon, 
    SendIcon, 
    ClockIcon,
    MessageSquareIcon,
    UserIcon,
    FileTextIcon
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactMethods = [
        {
            icon: PhoneIcon,
            title: "Phone",
            details: [
                { label: "Main Line", value: "+855 15 255 191", href: "tel:+85515255191" },
                { label: "Secondary", value: "+855 15 225 733", href: "tel:+85515225733" },
                { label: "Telegram", value: "+855 96 667 8895", href: "tel:+855966678895" },
            ]
        },
        {
            icon: MailIcon,
            title: "Email",
            details: [
                { label: "General Inquiries", value: "info@lokkalogistics.com", href: "mailto:info@lokkalogistics.com" },
                { label: "Sales", value: "sales@lokkalogistics.com", href: "mailto:sales@lokkalogistics.com" },
                { label: "Support", value: "support@lokkalogistics.com", href: "mailto:support@lokkalogistics.com" },
            ]
        },
        {
            icon: MapPinIcon,
            title: "Office",
            details: [
                { label: "Address", value: "#76, St. 299, Sangkat Boeng Kak 2, Khan Tuol Kouk, Phnom Penh, Cambodia", href: null },
                { label: "Hours", value: "Mon-Fri: 8:00 AM - 6:00 PM", href: null },
            ]
        },
        {
            icon: SendIcon,
            title: "Telegram",
            details: [
                { label: "Channel", value: "@lokkaexpress", href: "https://t.me/lokkaexpress" },
                { label: "Support", value: "@lokka_support", href: "https://t.me/lokka_support" },
            ]
        },
    ];

    return (
        <section className="mt-32 mb-20" id="contact">
            <SectionTitle 
                title="Contact Us" 
                description="Get in touch with our team for personalized logistics solutions in Cambodia."
            />

            <div className="mt-12 max-w-7xl mx-auto px-4">
                {/* Contact Methods Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            className="glass rounded-xl p-6 space-y-4 hover:-translate-y-1 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="p-3 bg-primary/10 rounded-lg w-fit">
                                <method.icon className="size-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">{method.title}</h3>
                            <div className="space-y-2">
                                {method.details.map((detail, idx) => (
                                    <div key={idx} className="text-sm">
                                        <span className="text-gray-400">{detail.label}:</span>{' '}
                                        {detail.href ? (
                                            <a 
                                                href={detail.href}
                                                target={detail.href.startsWith('http') ? '_blank' : undefined}
                                                rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className="text-gray-200 hover:text-primary transition-colors"
                                            >
                                                {detail.value}
                                            </a>
                                        ) : (
                                            <span className="text-gray-200">{detail.value}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Map & Form Section */}
                <div className="mt-16 grid lg:grid-cols-2 gap-8">
                    {/* Google Maps Embed */}
                    <motion.div 
                        className="glass rounded-xl overflow-hidden h-[500px]"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <iframe
                            title="Lokka Logistics Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7730176244963!2d104.91654331480045!3d11.573747791785022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513bd699a9e9%3A0xedcd0dafc4c3b3c!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1647852345678!5m2!1sen!2skh"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        className="glass rounded-xl p-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="+855 12 345 678"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <div className="relative">
                                        <FileTextIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="Shipping Inquiry"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <div className="relative">
                                    <MessageSquareIcon className="absolute left-3 top-3 size-4 text-gray-400" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Tell us about your shipping needs..."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <SendIcon className="size-4" />
                            </button>
                        </form>

                        <p className="text-xs text-gray-400 text-center mt-4">
                            We'll get back to you within 24 hours
                        </p>
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div 
                    className="mt-16 grid md:grid-cols-3 gap-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="glass rounded-lg p-4">
                        <ClockIcon className="size-6 text-primary mx-auto mb-2" />
                        <h4 className="font-medium text-white">24/7 Support</h4>
                        <p className="text-sm text-gray-400">Our Control Tower operates around the clock</p>
                    </div>
                    <div className="glass rounded-lg p-4">
                        <MessageSquareIcon className="size-6 text-primary mx-auto mb-2" />
                        <h4 className="font-medium text-white">Multilingual Team</h4>
                        <p className="text-sm text-gray-400">English, Khmer, and Chinese speaking staff</p>
                    </div>
                    <div className="glass rounded-lg p-4">
                        <FileTextIcon className="size-6 text-primary mx-auto mb-2" />
                        <h4 className="font-medium text-white">Quick Quote</h4>
                        <p className="text-sm text-gray-400">Get a personalized quote within hours</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}