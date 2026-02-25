// pages/GetQuotePage.jsx
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { 
    PackageIcon, 
    ShipIcon, 
    TruckIcon, 
    PlaneIcon, 
    WarehouseIcon,
    SendIcon,
    FileTextIcon
} from "lucide-react";
import SectionTitle from "./section-title";

export default function GetQuotePage() {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        origin: '',
        destination: '',
        cargoType: '',
        weight: '',
        dimensions: '',
        specialRequirements: '',
        urgent: false,
        insurance: false
    });

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Replace with your actual EmailJS credentials
            const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
            const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
            
            // Prepare template parameters
            const templateParams = {
                to_name: "Lokka Logistics Team",
                from_name: formData.name,
                from_email: formData.email,
                from_phone: formData.phone,
                company: formData.company || "Not provided",
                service_type: formData.serviceType,
                origin: formData.origin,
                destination: formData.destination,
                cargo_type: formData.cargoType,
                weight: formData.weight,
                dimensions: formData.dimensions || "Not provided",
                special_requirements: formData.specialRequirements || "None",
                urgent: formData.urgent ? "Yes" : "No",
                insurance: formData.insurance ? "Yes" : "No",
                reply_to: formData.email
            };
            
            // Send email
            await emailjs.send(
                serviceId, 
                templateId, 
                templateParams, 
                publicKey
            );
            
            setSubmitStatus({
                type: 'success',
                message: 'Thank you! We will contact you within 24 hours with a personalized quote.'
            });
            
            // Reset form or redirect
            // setFormData({...initialState});
            
        } catch (error) {
            console.error('Email send failed:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Something went wrong. Please try again or contact us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);

    // ... rest of your component (same as before, but add ref={formRef} to the form element)
    
    return (
        <section className="mt-32 mb-20 min-h-screen">
            <SectionTitle 
                title="Get a Quote" 
                description="Tell us about your shipping needs and we'll provide a personalized quote within 24 hours."
            />

            <div className="max-w-4xl mx-auto px-4 mt-12">
                {/* Progress Bar - same as before */}
                
                {/* Status Message */}
                {submitStatus && (
                    <div className={`mb-6 p-4 rounded-lg ${
                        submitStatus.type === 'success' 
                            ? 'bg-green-500/20 border border-green-500/50 text-green-200' 
                            : 'bg-red-500/20 border border-red-500/50 text-red-200'
                    }`}>
                        {submitStatus.message}
                    </div>
                )}

                {/* Quote Form */}
                <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
                    {/* Step 1, 2, 3 content - same as before */}
                    
                    {/* Form Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="px-6 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
                                disabled={isSubmitting}
                            >
                                Previous
                            </button>
                        )}
                        
                        {currentStep < totalSteps ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="ml-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2"
                                disabled={isSubmitting}
                            >
                                Next Step
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="ml-auto px-8 py-2.5 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-lg transition-all flex items-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        Submit Quote Request
                                        <SendIcon className="size-4" />
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                </form>

                {/* Trust Badge */}
                <div className="mt-8 text-center text-sm text-gray-400">
                    <p>✓ Silver Member of AmCham Cambodia | ✓ GDCE Licensed Customs Broker | ✓ 24/7 Control Tower Support</p>
                </div>
            </div>
        </section>
    );
}