import HeroSection from "@/components/sections/hero";
import ContactUs from "@/components/sections/contactUs";
import AboutUs from "@/components/sections/aboutUs";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <>
      {/* Hero Section - Full screen without ContentWrapper padding */}
      {/* <section id="home" className="relative">
        <H  eroSection />
      </section> */}
      
      {/* Future sections with proper container layout */}
        <section 
        id="home"
        backgroundColor="bg-gray-50" 
        
        >
       <HeroSection/>
       </section>

        <section 
        id="about"
        backgroundColor="bg-gray-50" 
        
        >
       <AboutUs/>
       </section>
 
 <section id="services">
  <Services/>
 </section>

      <section id="contact">
        <ContactUs />
      </section>
       

    </>
  );
}
