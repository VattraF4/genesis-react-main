import { Outlet } from "react-router-dom";
import LenisScroll from "./lenis-scroll";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px] opacity-40" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px] opacity-30" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px] opacity-20" />
                <div className="absolute rounded-full -top-20 -left-20 size-100 bg-[#6b7280] blur-[120px] opacity-50" />
                <div className="absolute rounded-full -top-20 -right-20 size-96 bg-[#6b7280] blur-[120px] opacity-50" />
            </div>
            <main className='px-4'>
                <Outlet /> {/* This is where your page content will render */}
            </main>
            <Footer />
        </>
    );
}