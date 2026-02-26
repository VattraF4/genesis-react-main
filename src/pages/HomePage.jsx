import HeroSection from "../sections/hero-section";
import Features from "../sections/features";
import WorkflowSteps from "../sections/workflow-steps";
import PricingPlans from "../sections/pricing-plans";
import CallToAction from "../sections/call-to-action";
import AboutUs from "../sections/about-us";
import FaqSection from "../sections/faq-section";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <Features />
            <WorkflowSteps />
            <PricingPlans />
            <CallToAction />
            <AboutUs />
            <FaqSection />
        </>
    );
}