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
        
        >
       <HeroSection/>
       </section>

        <section 
        id="about"
        
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
