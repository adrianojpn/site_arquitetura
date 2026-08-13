import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Pressable, useWindowDimensions, Platform } from 'react-native';
import { theme } from '../theme/colors';
import { ArrowRight, Compass } from 'lucide-react-native';

interface HeroProps {
  onExplore: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    image: require('../../assets/hero.png'),
    previewImage: require('../../assets/featured.png'),
    tag: 'Coleção 2026',
    title: 'Living Contemporâneo',
    description: 'Elaboramos espaços que harmonizam estética impecável, iluminação bioclimática e bem-estar humano. Design autoral feito sob medida para a sua história.',
  },
  {
    id: 2,
    image: require('../../assets/artex.png'),
    previewImage: require('../../assets/hero.png'),
    tag: 'Villa Baroneza',
    title: 'Arquitetura Atemporal',
    description: 'Pé-direito duplo e caixilhos invisíveis que conectam os ambientes internos à paisagem natural em uma simbiose perfeita.',
  },
  {
    id: 3,
    image: require('../../assets/mondrian.png'),
    previewImage: require('../../assets/brera.png'),
    tag: 'Alphaville',
    title: 'Residência Minimalista',
    description: 'Linhas puras, planos de pedra e volumes de concreto protendido que celebram a sofisticação da forma essencial.',
  },
  {
    id: 4,
    image: require('../../assets/brera.png'),
    previewImage: require('../../assets/nirnia.png'),
    tag: 'Lago Sul',
    title: 'Design de Interiores & Lounge',
    description: 'Texturas táteis, couro nobre e iluminação cênica cromaticamente ajustada para momentos memoráveis.',
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(0);
    const intervalTime = 50;
    const step = (intervalTime / SLIDE_DURATION) * 100;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(progressTimer);
  }, [currentIndex]);

  const activeSlide = HERO_SLIDES[currentIndex];

  const handleSelectSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  return (
    <View style={[styles.container, isMobile && { paddingTop: 16, paddingBottom: 8 }]}>
      <View style={styles.inner}>
        


        {/* Hero Banner Carousel Container */}
        <View style={styles.imageCardWrapper}>
          
          {/* Main Hero Image */}
          <Image 
            source={activeSlide.image} 
            style={[
              styles.heroImage, 
              isMobile ? { height: 380 } : { height: 580 },
              Platform.OS === 'web' ? { transition: 'opacity 0.8s ease-in-out' } : {}
            ]}
            resizeMode="cover"
          />

          {/* Left Text Card Overlay */}
          <View style={[styles.overlayCard, isMobile && styles.overlayCardMobile]}>
            {/* Timed Progress Bar Navigation */}
            <View style={styles.progressBarRow}>
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <Pressable 
                    key={slide.id} 
                    onPress={() => handleSelectSlide(idx)}
                    style={styles.progressTrack}
                  >
                    <View 
                      style={[
                        styles.progressFill,
                        isActive ? { width: `${progress}%` } : (idx < currentIndex ? { width: '100%' } : { width: '0%' })
                      ]} 
                    />
                  </Pressable>
                );
              })}
            </View>

            <View style={styles.slideTag}>
              <Text style={styles.slideTagText}>{activeSlide.tag}</Text>
            </View>

            <Text style={styles.slideTitle}>{activeSlide.title}</Text>

            <Text style={styles.overlayText}>
              {activeSlide.description}
            </Text>

            <Pressable 
              onPress={onExplore}
              style={({ hovered }: any) => [
                styles.heroCtaButton,
                hovered && styles.heroCtaButtonHovered
              ]}
            >
              <Text style={styles.heroCtaText}>Ver Projetos</Text>
              <ArrowRight size={14} color="#FFFFFF" style={{ marginLeft: 8 }} />
            </Pressable>
          </View>





        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.bgMain,
    paddingTop: 32,
    paddingBottom: 48,
  },
  inner: {
    maxWidth: 1320,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  headerTitleRow: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mainTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 96,
    fontWeight: '800',
    color: theme.colors.textDark,
    letterSpacing: -3,
    textAlign: 'center',
    lineHeight: 104,
  },
  mainTitleMobile: {
    fontSize: 48,
    lineHeight: 54,
    letterSpacing: -1,
  },
  imageCardWrapper: {
    position: 'relative',
    width: '100%',
    borderRadius: 36,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 8,
  },
  heroImage: {
    width: '100%',
    borderRadius: 36,
  },
  progressBarRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
    width: '100%',
  },
  progressTrack: {
    flex: 1,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  overlayCard: {
    position: 'absolute',
    left: 32,
    bottom: 32,
    maxWidth: 420,
    backgroundColor: 'rgba(28, 27, 25, 0.78)',
    padding: 28,
    borderRadius: 24,
    zIndex: 10,
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(16px)' } : {}),
  },
  overlayCardMobile: {
    position: 'relative',
    left: 0,
    bottom: 0,
    maxWidth: '100%',
    marginTop: -80,
    marginHorizontal: 12,
    marginBottom: 0,
    backgroundColor: 'rgba(28, 27, 25, 0.92)',
  },
  slideTag: {
    backgroundColor: 'rgba(247, 245, 240, 0.2)',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: theme.radii.full,
    marginBottom: 10,
  },
  slideTagText: {
    fontFamily: theme.fonts.sans,
    fontSize: 10,
    fontWeight: '700',
    color: '#E8E3DA',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  slideTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  overlayText: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    lineHeight: 20,
    color: '#ECE8E1',
    fontWeight: '400',
    marginBottom: 20,
  },
  heroCtaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.textDark,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: theme.radii.full,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  heroCtaButtonHovered: {
    backgroundColor: theme.colors.accentGold,
  },
  heroCtaText: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  floatingPreviewCard: {
    position: 'absolute',
    left: '46%',
    bottom: 32,
    width: 220,
    height: 130,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.4)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    zIndex: 10,
  },
  floatingPreviewCardHovered: {
    transform: [{ scale: 1.04 }],
  },
  floatingPreviewImage: {
    width: '100%',
    height: '100%',
  },
  nextSlideBadge: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(28, 27, 25, 0.85)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: theme.radii.full,
  },
  nextSlideBadgeText: {
    fontFamily: theme.fonts.sans,
    fontSize: 9,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  circularBadgeContainer: {
    position: 'absolute',
    right: 40,
    bottom: 40,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FAF8F5',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    zIndex: 10,
  },
  badgeInnerCircle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontFamily: theme.fonts.sans,
    fontSize: 9,
    fontWeight: '800',
    color: theme.colors.textDark,
    letterSpacing: 2,
    marginTop: 4,
  }
});
