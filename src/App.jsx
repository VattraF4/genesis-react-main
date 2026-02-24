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

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                {/* Left side - Purple/pink (your existing) */}
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#8b5cf6] blur-[100px] opacity-40" />

                {/* Right side - Softer blue (your existing) */}
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#3b82f6] blur-[100px] opacity-30" />

                {/* Top center - Warm accent (your existing) */}
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#ec4899] blur-[100px] opacity-20" />

                {/* NEW: Top Left Corner - Orange */}
                <div className="absolute rounded-full -top-20 -left-20 size-96 bg-[#f97316] blur-[120px] opacity-40" />

                {/* NEW: Top Right Corner - Orange */}
                <div className="absolute rounded-full -top-20 -right-20 size-96 bg-[#f97316] blur-[120px] opacity-40" />
            </div>
            <main className='px-4'>
                <HeroSection />
                <TrustedCompanies />
                <Features />
                <WorkflowSteps />
                {/* <Testimonials /> */}
                <FaqSection />
                <PricingPlans />
                <CallToAction />
            </main>
            <Footer />
        </>
    );
}