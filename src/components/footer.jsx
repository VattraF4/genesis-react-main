import { DribbbleIcon, LinkedinIcon, TwitterIcon, GithubIcon, PhoneIcon, MailIcon, MapPinIcon, SendIcon, ClockIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '#about-us' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    const legalLinks = [
        { name: 'Terms of Service', href: '#terms-of-service' },
        { name: 'Privacy Policy', href: '#privacy-policy' },
        { name: 'Security', href: '#security' },
        { name: 'Sitemap', href: '#sitemap' },
    ];

    const socialLinks = [
        { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
        { icon: TwitterIcon, href: '#', label: 'Twitter' },
        { icon: DribbbleIcon, href: '#', label: 'Dribbble' },
        { icon: GithubIcon, href: '#', label: 'GitHub' },
    ];

    return (
        <motion.footer
            className="flex flex-col items-center px-4 md:px-16 lg:px-24 justify-center w-full pt-16 mt-40 glass border-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
                {/* Company Info */}
                <div className="space-y-4">
                    <a href="/">
                        <img src='/assets/lokka_width-removebg.png' alt='Lokka Logistics' className='h-8.5 w-auto' width={205} height={48} />
                    </a>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Your trusted partner for transparent, compliant logistics bridging Cambodian markets with the world.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <ClockIcon className="size-4 text-primary" />
                        <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-sm text-gray-300">
                            <MapPinIcon className="size-5 text-primary shrink-0 mt-0.5" />
                            <span>#76, St. 299, Sangkat Boeng Kak 2, Khan Tuol Kouk, Phnom Penh, Cambodia</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <PhoneIcon className="size-5 text-primary shrink-0" />
                            <div className="flex flex-col">
                                <a href="tel:+855966678895" className="hover:text-primary">+855 96 667 8895</a>
                            </div>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <MailIcon className="size-5 text-primary shrink-0" />
                            <a href="mailto:info@lokkalogistics.com" className="hover:text-primary">
                                info@lokkalogistics.com
                            </a>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <SendIcon className="size-5 text-primary shrink-0" />
                            <a href="https://t.me/lokkaexpress" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                @lokkaexpress
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Legal & Social */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Legal</h3>
                    <ul className="space-y-2">
                        {legalLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-4">
                        <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 hover:-translate-y-0.5 text-gray-200 transition-all duration-300"
                                >
                                    <social.icon className="size-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <hr className="w-full border-white/10 mt-12" />

            <div className="flex flex-col md:flex-row items-center w-full justify-between gap-6 py-8 text-sm text-gray-400 border-t border-white/5 mt-2">
                <p className="font-medium">© {new Date().getFullYear()} Lokka Logistics Co., Ltd. All rights reserved.</p>
                <p className="font-medium">
                    <a href="https://github.com/VattraF4" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Designed by Vattra</a>
                </p>
            </div>
        </motion.footer>
    );
};