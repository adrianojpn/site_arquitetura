import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Pressable, Platform, useWindowDimensions, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { theme } from '../theme/colors';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';

const SERVICES_SLIDES = [
  {
    id: '01',
    title: 'Interior Design',
    subtitle: 'Nossa equipe está pronta para executar projetos surpreendentes',
    description: 'Desenvolvimento do conceito de design de interiores e projeto sob medida para as preferências individuais do cliente, incluindo seleção de mobiliário autoral, acabamentos nobres, iluminação cênica e curadoria de arte.',
    image: require('../../assets/service_interior.png'),
    tag: 'INTERIOR DESIGN',
  },
  {
    id: '02',
    title: 'Architectural Design',
    subtitle: 'Proporção áurea, luz bioclimática e volumetria essencialista',
    description: 'Concepção arquitetônica autoral para residências de alto padrão e edifícios. Estudos de viabilidade, maquetes virtuais 3D ultra-realistas e projeto executivo detalhado.',
    image: require('../../assets/service_architecture.png'),
    tag: 'ARCHITECTURAL DESIGN',
  },
  {
    id: '03',
    title: 'Construction Management',
    subtitle: 'Supervisão técnica contínua para fidelidade total ao projeto',
    description: 'Acompanhamento minucioso no canteiro de obras, fiscalização de especificações técnicas, controle de prazos e gestão de fornecedores de artesãos e acabamentos.',
    image: require('../../assets/artex.png'),
    tag: 'CONSTRUCTION MANAGEMENT',
  },
  {
    id: '04',
    title: 'Consulting & Masterplan',
    subtitle: 'Orientação estratégica para aquisição de terrenos e loteamentos',
    description: 'Análise detalhada de insolação, ventilação cruzada, topografia e legislação urbanística para apoiar a melhor tomada de decisão antes do início do projeto.',
    image: require('../../assets/nirnia.png'),
    tag: 'CONSULTING & MASTERPLAN',
  },
  {
    id: '05',
    title: 'Furniture Curatorship',
    subtitle: 'Peças exclusivas de designers nacionais e internacionais',
    description: 'Seleção personalizada de móveis assinados, marcenaria sob medida com ferragens ocultas e tecidos de alta costura que complementam a atmosfera arquitetônica.',
    image: require('../../assets/brera.png'),
    tag: 'FURNITURE CURATORSHIP',
  },
];

export const InteractiveServicesSlider: React.FC = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 960;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  
  const scrollRef = useRef<ScrollView>(null);
  const dragStartX = useRef<number>(0);
  const scrollStartX = useRef<number>(0);

  const activeService = SERVICES_SLIDES[activeIndex];

  const cardWidth = isMobile ? 190 : 250;
  const cardGap = isMobile ? 14 : 22;
  const cardStep = cardWidth + cardGap;

  const changeSlide = (newIndex: number) => {
    if (newIndex === activeIndex) return;

    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsFading(false);
    }, 120);

    scrollRef.current?.scrollTo({
      x: newIndex * cardStep,
      animated: true,
    });
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % SERVICES_SLIDES.length;
    changeSlide(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + SERVICES_SLIDES.length) % SERVICES_SLIDES.length;
    changeSlide(prevIdx);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const calculatedIndex = Math.max(0, Math.min(SERVICES_SLIDES.length - 1, Math.round(offsetX / cardStep)));
    
    if (calculatedIndex !== activeIndex && !isFading) {
      setActiveIndex(calculatedIndex);
    }
  };

  // Mouse Dragging Scroll Logic for Web
  const onMouseDown = (e: any) => {
    if (Platform.OS !== 'web') return;
    setIsDragging(true);
    dragStartX.current = e.clientX || e.pageX || 0;
    scrollStartX.current = (scrollRef.current as any)?._scrollNode?.scrollLeft || 0;
  };

  const onMouseMove = (e: any) => {
    if (!isDragging || Platform.OS !== 'web') return;
    const currentX = e.clientX || e.pageX || 0;
    const diffX = currentX - dragStartX.current;
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        x: Math.max(0, scrollStartX.current - diffX),
        animated: false,
      });
    }
  };

  const onMouseUp = () => {
    if (Platform.OS === 'web') {
      setIsDragging(false);
    }
  };

  return (
    <View style={[styles.container, isMobile && { paddingVertical: 32 }]}>
      <View style={styles.inner}>

        {/* Section Title */}
        <Text style={[styles.topSectionTitle, isMobile && styles.topSectionTitleMobile]}>SERVICES</Text>

        {/* Main Split Row */}
        <View style={[styles.mainRow, isMobile && styles.mainRowMobile]}>

          {/* Left Content Block (Compact on Mobile) */}
          <View style={[styles.leftContentBlock, isMobile && styles.leftContentBlockMobile]}>
            
            <View 
              style={[
                styles.textDetailsContainer,
                isMobile && styles.textDetailsContainerMobile,
                isFading && styles.textFading
              ]}
            >
              <Text style={[styles.headlineTitle, isMobile && styles.headlineTitleMobile]}>
                {activeService.title}
              </Text>
              <Text style={[styles.subtitleText, isMobile && styles.subtitleTextMobile]}>
                {activeService.subtitle}
              </Text>
              <Text style={[styles.descriptionText, isMobile && styles.descriptionTextMobile]}>
                {activeService.description}
              </Text>
            </View>

            <View style={[styles.actionControlsGroup, isMobile && { marginTop: 12 }]}>
              {/* Controls & Progress Row */}
              <View style={[styles.controlsRow, isMobile && { marginBottom: 10 }]}>
                {/* Arrow Circular Buttons */}
                <View style={[styles.arrowsGroup, isMobile && { gap: 8 }]}>
                  <Pressable 
                    onPress={handlePrev} 
                    style={({ hovered }: any) => [
                      styles.arrowCircle, 
                      isMobile && styles.arrowCircleMobile,
                      hovered && styles.arrowCircleHovered
                    ]}
                  >
                    <ArrowLeft size={isMobile ? 16 : 18} color="#FFFFFF" />
                  </Pressable>

                  <Pressable 
                    onPress={handleNext} 
                    style={({ hovered }: any) => [
                      styles.arrowCircle, 
                      isMobile && styles.arrowCircleMobile,
                      hovered && styles.arrowCircleHovered
                    ]}
                  >
                    <ArrowRight size={isMobile ? 16 : 18} color="#FFFFFF" />
                  </Pressable>
                </View>
              </View>

              {/* Bottom Progress Counter */}
              <View style={styles.counterProgressContainer}>
                <Text style={styles.counterText}>{activeIndex + 1}/{SERVICES_SLIDES.length}</Text>
                
                <View style={[styles.progressLinesRow, isMobile && { maxWidth: 160 }]}>
                  {SERVICES_SLIDES.map((_, idx) => (
                    <Pressable 
                      key={idx} 
                      onPress={() => changeSlide(idx)}
                      style={[
                        styles.lineSegment,
                        idx === activeIndex ? styles.lineSegmentActive : styles.lineSegmentInactive
                      ]} 
                    />
                  ))}
                </View>
              </View>
            </View>

          </View>

          {/* Right Cards Carousel Stack (Compact Cards on Mobile) */}
          <View 
            style={[styles.rightCardsBlock, isMobile && styles.rightCardsBlockMobile]}
            {...(Platform.OS === 'web' ? {
              onMouseDown,
              onMouseMove,
              onMouseUp,
              onMouseLeave: onMouseUp,
            } : {})}
          >
            <ScrollView 
              ref={scrollRef}
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={[styles.cardsScrollContent, isMobile && styles.cardsScrollContentMobile]}
              onScroll={handleScroll}
              scrollEventThrottle={16}
              pagingEnabled={false}
              decelerationRate="fast"
            >
              {SERVICES_SLIDES.map((slide, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <Pressable
                    key={slide.id}
                    onPress={() => changeSlide(idx)}
                    style={({ hovered }: any) => [
                      styles.cardItem,
                      isMobile ? styles.cardItemMobile : (isActive ? styles.cardItemActive : styles.cardItemInactive),
                      isActive && styles.cardItemActiveBorder,
                      hovered && !isActive && styles.cardItemHovered,
                      isDragging && styles.cardItemDragging
                    ]}
                  >
                    <Image 
                      source={slide.image} 
                      style={styles.cardImage} 
                      resizeMode="cover" 
                    />
                    
                    {/* Bottom Title Tag */}
                    <View style={styles.cardBottomTagContainer}>
                      <Text style={[styles.cardBottomTagText, isActive && styles.cardBottomTagActive, isMobile && { fontSize: 10 }]}>
                        {slide.tag}
                      </Text>
                      {isActive && <View style={[styles.underlineActive, isMobile && { width: 36 }]} />}
                    </View>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>

        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#9E9080',
    paddingVertical: 56,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    overflow: 'hidden',
  },
  inner: {
    maxWidth: 1380,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  topSectionTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 48,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.85)',
    letterSpacing: 4,
    marginBottom: 32,
    textTransform: 'uppercase',
  },
  topSectionTitleMobile: {
    fontSize: 28,
    marginBottom: 16,
    letterSpacing: 2,
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 460,
  },
  mainRowMobile: {
    flexDirection: 'column',
    gap: 16,
    minHeight: 'auto',
  },
  leftContentBlock: {
    width: 400,
    height: 460,
    justifyContent: 'space-between',
    paddingRight: 20,
    zIndex: 10,
  },
  leftContentBlockMobile: {
    width: '100%',
    height: 'auto',
    paddingRight: 0,
    justifyContent: 'flex-start',
  },
  rightCardsBlock: {
    flex: 1,
    height: 460,
    overflow: 'hidden',
    justifyContent: 'center',
    ...(Platform.OS === 'web' ? { cursor: 'grab' } : {}),
  },
  rightCardsBlockMobile: {
    width: '100%',
    height: 310,
  },
  textDetailsContainer: {
    minHeight: 220,
    justifyContent: 'flex-start',
    ...(Platform.OS === 'web' ? { transition: 'opacity 0.2s ease-in-out' } : {}),
  },
  textDetailsContainerMobile: {
    minHeight: 'auto',
  },
  textFading: {
    opacity: 0.25,
  },
  actionControlsGroup: {
    justifyContent: 'flex-end',
  },
  headlineTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 38,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: -0.8,
    marginBottom: 10,
    lineHeight: 42,
  },
  headlineTitleMobile: {
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 4,
  },
  subtitleText: {
    fontFamily: theme.fonts.sans,
    fontSize: 15,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.92)',
    marginBottom: 12,
    lineHeight: 20,
  },
  subtitleTextMobile: {
    fontSize: 13,
    lineHeight: 17,
    marginBottom: 6,
  },
  descriptionText: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.78)',
  },
  descriptionTextMobile: {
    fontSize: 11.5,
    lineHeight: 16,
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrowsGroup: {
    flexDirection: 'row',
    gap: 12,
  },
  arrowCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowCircleMobile: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  arrowCircleHovered: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  counterProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  counterText: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.85)',
  },
  progressLinesRow: {
    flexDirection: 'row',
    gap: 8,
    flex: 1,
    maxWidth: 220,
  },
  lineSegment: {
    height: 3,
    borderRadius: 2,
    flex: 1,
  },
  lineSegmentActive: {
    backgroundColor: '#FFFFFF',
  },
  lineSegmentInactive: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  cardsScrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
    height: 460,
    paddingLeft: 8,
    paddingRight: 32,
  },
  cardsScrollContentMobile: {
    height: 310,
    gap: 14,
    paddingLeft: 0,
    paddingRight: 16,
  },
  cardItem: {
    position: 'relative',
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    ...(Platform.OS === 'web' ? { transition: 'all 0.35s cubic-bezier(0.25, 1, 0.5, 1)' } : {}),
  },
  cardItemActive: {
    width: 250,
    height: 420,
    opacity: 1,
  },
  cardItemInactive: {
    width: 250,
    height: 420,
    opacity: 0.72,
  },
  cardItemMobile: {
    width: 190,
    height: 300,
    opacity: 0.75,
  },
  cardItemActiveBorder: {
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
    opacity: 1,
  },
  cardItemHovered: {
    opacity: 1,
  },
  cardItemDragging: {
    ...(Platform.OS === 'web' ? { cursor: 'grabbing' } : {}),
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardBottomTagContainer: {
    position: 'absolute',
    bottom: 20,
    left: 12,
    right: 12,
    alignItems: 'center',
  },
  cardBottomTagText: {
    fontFamily: theme.fonts.sans,
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.8,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  cardBottomTagActive: {
    fontSize: 14,
  },
  underlineActive: {
    width: 52,
    height: 2,
    backgroundColor: '#FFFFFF',
    marginTop: 4,
  }
});
