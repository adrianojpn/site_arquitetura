import React, { useState, useRef } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';
import { Header } from '../src/components/Header';
import { Hero } from '../src/components/Hero';
import { FeaturedSection } from '../src/components/FeaturedSection';
import { StatsSection } from '../src/components/StatsSection';
import { TimelessSection } from '../src/components/TimelessSection';
import { InteractiveServicesSlider } from '../src/components/InteractiveServicesSlider';
import { PortfolioGrid } from '../src/components/PortfolioGrid';
import { AboutSection } from '../src/components/AboutSection';
import { ServicesSection } from '../src/components/ServicesSection';
import { ContactCTA } from '../src/components/ContactCTA';
import { Footer } from '../src/components/Footer';
import { ProjectModal } from '../src/components/ProjectModal';
import { Project, PROJECTS } from '../src/data/projects';
import { theme } from '../src/theme/colors';

export default function HomeScreen() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  // Section position references for smooth navigation
  const sectionRefs = {
    hero: useRef<View>(null),
    projetos: useRef<View>(null),
    sobre: useRef<View>(null),
    servicos: useRef<View>(null),
    contato: useRef<View>(null),
  };

  const handleNavigate = (sectionId: string) => {
    if (Platform.OS === 'web') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectProjectById = (projectId: string) => {
    const proj = PROJECTS.find(p => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header onNavigate={handleNavigate} />

      <ScrollView 
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View id="hero">
          <Hero onExplore={() => handleNavigate('projetos')} />
        </View>

        <FeaturedSection onSelectProject={handleSelectProjectById} />

        <StatsSection />

        <TimelessSection onLearnMore={() => handleNavigate('sobre')} />

        <InteractiveServicesSlider />

        <PortfolioGrid onSelectProject={(project) => setSelectedProject(project)} />

        <AboutSection />

        <ServicesSection />

        <ContactCTA />

        <Footer onNavigate={handleNavigate} />
      </ScrollView>

      {/* Interactive Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.bgMain,
  },
  scrollContainer: {
    flexGrow: 1,
  }
});
