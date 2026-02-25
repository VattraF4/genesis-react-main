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
    FileTextIcon,
    UserIcon,
    MailIcon,
    PhoneIcon,
    BuildingIcon,
    MapPinIcon,
    WeightIcon,
    CheckCircleIcon
} from "lucide-react";
import SectionTitle from "../components/section-title";

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
            const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
            const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
            
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
            
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            
            setSubmitStatus({
                type: 'success',
                message: 'Thank you! We will contact you within 24 hours with a personalized quote.'
            });
            
            // Reset form
            setFormData({
                name: '', email: '', phone: '', company: '', serviceType: '',
                origin: '', destination: '', cargoType: '', weight: '', dimensions: '',
                specialRequirements: '', urgent: false, insurance: false
            });
            setCurrentStep(1);
            
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

    const serviceOptions = [
        { value: 'customs-clearance', label: 'Customs Clearance', icon: FileTextIcon },
        { value: 'ocean-freight', label: 'Ocean Freight', icon: ShipIcon },
        { value: 'air-freight', label: 'Air Freight', icon: PlaneIcon },
        { value: 'trucking', label: 'Trucking Services', icon: TruckIcon },
        { value: 'warehousing', label: 'Warehousing', icon: WarehouseIcon },
        { value: 'freight-forwarding', label: 'Freight Forwarding', icon: PackageIcon },
    ];

    const cargoTypes = [
        'General Cargo', 'Perishable Goods', 'Hazardous Materials', 
        'Oversized/Heavy', 'Electronics', 'Textiles/Garments',
        'Automotive Parts', 'Pharmaceuticals', 'Documents/Parcels'
    ];

    return (
        <section className="mt-32 mb-20 min-h-screen px-4" id="get-quote">
            <SectionTitle 
                title="Get a Quote" 
                description="Tell us about your shipping needs and we'll provide a personalized quote within 24 hours."
            />

            <div className="max-w-4xl mx-auto mt-12">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                        {[1, 2, 3].map((step) => (
                            <div key={step} className={`flex items-center ${step < totalSteps ? 'flex-1' : ''}`}>
                                <div className={`
                                    w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm
                                    ${currentStep >= step ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-400'}
                                `}>
                                    {step}
                                </div>
                                {step < totalSteps && (
                                    <div className={`flex-1 h-1 mx-2 rounded ${currentStep > step ? 'bg-blue-600' : 'bg-white/10'}`} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 px-1">
                        <span>Contact Info</span>
                        <span>Shipment Details</span>
                        <span>Additional Info</span>
                    </div>
                </div>

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
                    {/* Step 1: Contact Information */}
                    {currentStep === 1 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:border-blue-500"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:border-blue-500"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Phone Number *
                                    </label>
                                    <div className="relative">
                                        <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:border-blue-500"
                                            placeholder="+855 12 345 678"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Company Name
                                    </label>
                                    <div className="relative">
                                        <BuildingIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:border-blue-500"
                                            placeholder="Your Company Ltd."
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Shipment Details */}
                    {currentStep === 2 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-semibold text-white mb-6">Shipment Details</h3>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-3">
                                    Service Type *
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {serviceOptions.map((service) => (
                                        <label 
                                            key={service.value}
                                            className={`flex flex-col items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                                                formData.serviceType === service.value 
                                                    ? 'border-blue-500 bg-blue-500/10' 
                                                    : 'border-white/10 hover:border-blue-500/30'
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="serviceType"
                                                value={service.value}
                                                checked={formData.serviceType === service.value}
                                                onChange={handleChange}
                                                className="sr-only"
                                                required
                                            />
                                            <service.icon className={`size-5 ${formData.serviceType === service.value ? 'text-blue-400' : 'text-gray-400'}`} />
                                            <span className="text-xs text-center text-gray-300">{service.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Origin *
                                    </label>
                                    <div className="relative">
                                        <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                                        <input
                                            type="text"
                                            name="origin"
                                            value={formData.origin}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:border-blue-500"
                                            placeholder="Phnom Penh, Cambodia"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Destination *
                                    </label>
                                    <div className="relative">
                                        <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                                        <input
                                            type="text"
                                            name="destination"
                                            value={formData.destination}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:border-blue-500"
                                            placeholder="Singapore"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Cargo Type *
                                    </label>
                                    <select
                                        name="cargoType"
                                        value={formData.cargoType}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-blue-500"
                                    >
                                        <option value="">Select cargo type</option>
                                        {cargoTypes.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Weight (kg) *
                                    </label>
                                    <div className="relative">
                                        <WeightIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                                        <input
                                            type="number"
                                            name="weight"
                                            value={formData.weight}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:border-blue-500"
                                            placeholder="1000"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Dimensions (L x W x H in cm)
                                </label>
                                <input
                                    type="text"
                                    name="dimensions"
                                    value={formData.dimensions}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-blue-500"
                                    placeholder="120 x 80 x 100"
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: Additional Information */}
                    {currentStep === 3 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-semibold text-white mb-6">Additional Information</h3>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Special Requirements
                                </label>
                                <textarea
                                    name="specialRequirements"
                                    value={formData.specialRequirements}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-blue-500"
                                    placeholder="Tell us about any special handling requirements..."
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="urgent"
                                        checked={formData.urgent}
                                        onChange={handleChange}
                                        className="w-4 h-4 rounded border-white/10 bg-white/5 text-blue-600"
                                    />
                                    <span className="text-sm text-gray-300">Urgent shipment (requires expedited handling)</span>
                                </label>
                                
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="insurance"
                                        checked={formData.insurance}
                                        onChange={handleChange}
                                        className="w-4 h-4 rounded border-white/10 bg-white/5 text-blue-600"
                                    />
                                    <span className="text-sm text-gray-300">I would like insurance for this shipment</span>
                                </label>
                            </div>

                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-4">
                                <h4 className="font-medium text-blue-400 mb-2 flex items-center gap-2">
                                    <CheckCircleIcon className="size-4" />
                                    GDCE Compliance Notice
                                </h4>
                                <p className="text-xs text-gray-300">
                                    As a licensed customs broker, we'll handle all documentation and compliance with GDCE.
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* Form Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                disabled={isSubmitting}
                                className="px-6 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
                            >
                                Previous
                            </button>
                        )}
                        
                        {currentStep < totalSteps ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="ml-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                            >
                                Next Step
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="ml-auto px-8 py-2.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg transition-all flex items-center gap-2 font-medium disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : (
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