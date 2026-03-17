// App.jsx - REMOVE BrowserRouter from here
import { Routes, Route } from "react-router-dom"; // Just import Routes, not BrowserRouter
import { Helmet } from '@dr.pogodin/react-helmet';
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";
import FaqSection from "./sections/faq-section";
import TrustedCompanies from "./sections/trusted-companies";
import Features from "./sections/features";
import WorkflowSteps from "./sections/workflow-steps";
import Testimonials from "./sections/testimonials";
import PricingPlans from "./sections/pricing-plans";
import CallToAction from "./sections/call-to-action";
import AboutUs from "./sections/about-us";
import GetQuotePage from "./components/GetQuotePage";
import NotFoundPage from './pages/NotFoundPage';

// Homepage component (all your sections)
function HomePage() {
    return (
        <>
            <Helmet>
                <title>LOKKA LOGISTICS | Comprehensive Supply Chain Solutions</title>
                <meta name="description" content="Lokka Logistics provides comprehensive logistics, freight forwarding, and supply chain solutions tailored to your business needs." />
                <meta name="keywords" content="logistics, freight, transportation, supply chain, shipping, Lokka Logistics" />

                {/* Open Graph / Facebook / Telegram */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://lokkalogistics.com/" />
                <meta property="og:site_name" content="LOKKA LOGISTICS" />
                <meta property="og:title" content="LOKKA LOGISTICS | Comprehensive Supply Chain Solutions" />
                <meta property="og:description" content="Lokka Logistics provides comprehensive logistics, freight forwarding, and supply chain solutions tailored to your business needs." />
                <meta property="og:image" content="https://lokkalogistics.com/assets/og-preview.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:domain" content="lokkalogistics.com" />
                <meta name="twitter:url" content="https://lokkalogistics.com/" />
                <meta name="twitter:title" content="LOKKA LOGISTICS | Comprehensive Supply Chain Solutions" />
                <meta name="twitter:description" content="Lokka Logistics provides comprehensive logistics, freight forwarding, and supply chain solutions tailored to your business needs." />
                <meta name="twitter:image" content="https://lokkalogistics.com/assets/og-preview.png" />
            </Helmet>
            <HeroSection />
            {/* <TrustedCompanies /> */}
            <Features />
            <WorkflowSteps />
            <Testimonials />
            <PricingPlans />
            <CallToAction />
            <AboutUs />
            <GetQuotePage />
            <FaqSection />
        </>
    );
}

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />

            {/* Background elements */}
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px] opacity-40" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px] opacity-30" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px] opacity-20" />
                <div className="absolute rounded-full -top-20 -left-20 size-100 bg-[#6b7280] blur-[120px] opacity-50" />
                <div className="absolute rounded-full -top-20 -right-20 size-96 bg-[#6b7280] blur-[120px] opacity-50" />
            </div>

            <main className='px-4'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}