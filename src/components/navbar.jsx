import { MenuIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useLocation, Link } from 'react-router-dom'; // Add these imports

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const links = [
        { name: 'Home', href: '/', sectionId: '' },
        { name: 'Service', href: '#features', sectionId: 'features' },
        { name: 'Our Work', href: '#workflow', sectionId: 'workflow' },
        { name: 'Pricing', href: '#pricing', sectionId: 'pricing' },
        { name: 'About Us', href: '#about-us', sectionId: 'about-us' },
        { name: 'FAQ', href: '#faq', sectionId: 'faq' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSectionClick = (e, sectionId) => {
        if (sectionId === '') return; // Home link - let Link handle it
        
        e.preventDefault();
        
        if (!isHomePage) {
            // If not on homepage, go to homepage with hash
            window.location.href = `/#${sectionId}`;
        } else {
            // If on homepage, scroll smoothly
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false); // Close mobile menu
            }
        }
    };

    const handleHomeClick = () => {
        setIsOpen(false);
        // If already on homepage, scroll to top
        if (isHomePage) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav 
                className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 transition-colors ${
                    isScrolled ? 'bg-white/15 backdrop-blur-lg' : ''
                }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                {/* Logo - always goes to home */}
                <Link to='/' className='flex items-center gap-2' onClick={handleHomeClick}>
                    <img 
                        src='/assets/lokka_width-removebg.png' 
                        alt='lokka logistics logo' 
                        className='h-12 w-auto' 
                        width={308 * 2} 
                        height={72 * 2} 
                    />
                </Link>

                {/* Desktop Menu */}
                <div className='hidden items-center space-x-10 md:flex'>
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.name === 'Home' ? '/' : `/#${link.sectionId}`}
                            onClick={(e) => handleSectionClick(e, link.sectionId)}
                            className='transition hover:text-gray-400 text-white font-medium'
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link 
                        to='/#get-quote' 
                        className='btn glass text-white hover:text-gray-500'
                        onClick={(e) => handleSectionClick(e, 'get-quote')}
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(true)} className='transition active:scale-90 md:hidden'>
                    <MenuIcon className='size-6.5' />
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        to={link.name === 'Home' ? '/' : `/#${link.sectionId}`}
                        onClick={(e) => handleSectionClick(e, link.sectionId)}
                        className='text-white hover:text-gray-300'
                    >
                        {link.name}
                    </Link>
                ))}

                <Link
                    to='/#get-quote'
                    className='btn glass'
                    onClick={(e) => handleSectionClick(e, 'get-quote')}
                >
                    Get a Quote
                </Link>

                <button onClick={() => setIsOpen(false)} className='rounded-md p-2 glass'>
                    <XIcon />
                </button>
            </div>
        </>
    );
}