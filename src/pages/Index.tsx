import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import InstallationSection from '@/components/InstallationSection';
import CleaningSection from '@/components/CleaningSection';
import ThermographySection from '@/components/ThermographySection';
import MonitoringSection from '@/components/MonitoringSection';
import TechnicalReportSection from '@/components/TechnicalReportSection';
import AgribusinessSection from '@/components/AgribusinessSection';
import FutureTechSection from '@/components/FutureTechSection';
import CredibilitySection from '@/components/CredibilitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <InstallationSection />
        <CleaningSection />
        <ThermographySection />
        <MonitoringSection />
        <TechnicalReportSection />
        <AgribusinessSection />
        <FutureTechSection />
        <CredibilitySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
