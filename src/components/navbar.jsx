import { MenuIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const links = [
        { name: 'Home', href: '#' },
        { name: 'Service', href: '#features' },
        { name: 'Our Work', href: '#workflow' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'About Us', href: '#about-us' },
        { name: 'FAQ', href: '#faq' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <motion.nav className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 transition-colors ${isScrolled ? 'bg-white/15 backdrop-blur-lg' : ''}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <a href='#' className='flex items-center gap-2' onClick={() => setIsOpen(false)}>
                    <img src='/assets/lokka_width-removebg.png' alt='lokka logistics logo' className='h-12 w-auto' width={308 * 2} height={72 * 2} />
                </a>

                <div className='hidden items-center space-x-10 md:flex'>
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className='transition hover:text-gray-400 text-white font-medium'>
                            {link.name}
                        </a>
                    ))}
                    <a href='/' className='btn glass text-white hover:text-gray-500' onClick={() => setIsOpen(false)}>
                        Get a Quote
                    </a>
                </div>

                <button onClick={() => setIsOpen(true)} className='transition active:scale-90 md:hidden'>
                    <MenuIcon className='size-6.5' />
                </button>
            </motion.nav>

            <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {links.map((link) => (
                    <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </a>
                ))}


                <a href='/' className='btn glass' onClick={() => setIsOpen(false)}>
                    Sign Up
                </a>

                <button onClick={() => setIsOpen(false)} className='rounded-md p-2 glass'>
                    <XIcon />
                </button>
            </div >
        </>
    );
}
