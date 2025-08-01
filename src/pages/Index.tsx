import { useEffect } from 'react';
import useHashScroll from '@/hooks/use-hash-scroll';
import Header, { MobileFixedButton } from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import InstallationSection from '@/components/InstallationSection';
import CleaningSection from '@/components/CleaningSection';
import ThermographySection from '@/components/ThermographySection';
import MonitoringSection from '@/components/MonitoringSection';
import InspectionSection from '@/components/InspectionSection';
import TechnicalReportSection from '@/components/TechnicalReportSection';
import AgribusinessSection from '@/components/AgribusinessSection';
import FutureTechSection from '@/components/FutureTechSection';
import CredibilitySection from '@/components/CredibilitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';


const Index = () => {
  // Handle smooth scrolling when URL has a hash
  useHashScroll();
  useEffect(() => {
    // Scroll animation observer for sections
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    // Separate observer for elements inside sections
    const elementObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => sectionObserver.observe(section));
    
    // Observe all elements with reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => elementObserver.observe(el));
    
    // Observe all elements with specific animation classes
    const animatedElements = document.querySelectorAll(
      '.reveal-fade-up, .reveal-fade-down, .reveal-fade-left, .reveal-fade-right, .reveal-scale'
    );
    animatedElements.forEach((el) => elementObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      elementObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <InstallationSection />
        <MonitoringSection />
        <CleaningSection />
        <ThermographySection />
        <InspectionSection />
        <TechnicalReportSection />
        <FutureTechSection />
        <AgribusinessSection />
        <CredibilitySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileFixedButton />
    </div>
  );
};

export default Index;
