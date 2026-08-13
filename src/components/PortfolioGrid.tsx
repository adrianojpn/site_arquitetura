import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, useWindowDimensions } from 'react-native';
import { theme } from '../theme/colors';
import { PROJECTS, Project } from '../data/projects';
import { ArrowUpRight, Filter } from 'lucide-react-native';

interface PortfolioGridProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectProject }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1100;

  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Residencial', 'Comercial', 'Interiores'];

  const filteredProjects = activeCategory === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <View style={styles.container} id="projetos">
      <View style={styles.inner}>

        {/* Section Header Row */}
        <View style={[styles.headerRow, isMobile && styles.headerRowMobile]}>
          <View style={styles.headerLeft}>
            <Text style={styles.sectionTitle}>Explore Nossa Coleção Autoral</Text>
            <Text style={styles.sectionSubtitle}>
              Portfólio de residências, coberturas e espaços comerciais concebidos com máximo rigor plástico.
            </Text>
          </View>

          {/* Category Filter Pills */}
          <View style={styles.filterRow}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <Pressable
                  key={cat}
                  onPress={() => setActiveCategory(cat)}
                  style={({ hovered }: any) => [
                    styles.filterPill,
                    isActive && styles.filterPillActive,
                    hovered && !isActive && styles.filterPillHovered
                  ]}
                >
                  <Text style={[styles.filterPillText, isActive && styles.filterPillTextActive]}>
                    {cat}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Grid Layout matching reference layout */}
        <View style={styles.gridContainer}>
          {filteredProjects.map((project) => (
            <Pressable
              key={project.id}
              onPress={() => onSelectProject(project)}
              style={({ hovered }: any) => [
                styles.gridCard,
                isMobile ? styles.gridCardMobile : (isTablet ? styles.gridCardTablet : styles.gridCardDesktop),
                hovered && styles.gridCardHovered
              ]}
            >
              <Image 
                source={project.image}
                style={styles.cardImage}
                resizeMode="cover"
              />

              {/* Gradient Bottom Overlay */}
              <View style={styles.cardOverlay} />

              {/* Top Tag */}
              <View style={styles.cardTopTag}>
                <Text style={styles.cardTopTagText}>{project.category}</Text>
              </View>

              {/* Bottom Title Bar matching reference image */}
              <View style={styles.cardBottomBar}>
                <View style={styles.cardTitleBlock}>
                  <Text style={styles.cardTitle}>{project.title}</Text>
                  <Text style={styles.cardSubtitle}>{project.subtitle}</Text>
                </View>

                {/* Circle Arrow Action Button */}
                <View style={styles.cardArrowCircle}>
                  <ArrowUpRight size={18} color="#FFFFFF" />
                </View>
              </View>

            </Pressable>
          ))}
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.bgMain,
    paddingVertical: 64,
  },
  inner: {
    maxWidth: 1320,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  headerRowMobile: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 20,
  },
  headerLeft: {
    maxWidth: 600,
  },
  sectionTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 44,
    fontWeight: '800',
    color: theme.colors.textDark,
    letterSpacing: -1.5,
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 14,
    color: theme.colors.textMuted,
    lineHeight: 22,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  filterPill: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: theme.radii.full,
    backgroundColor: '#EFECE7',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  filterPillActive: {
    backgroundColor: theme.colors.textDark,
  },
  filterPillHovered: {
    borderColor: theme.colors.textDark,
  },
  filterPillText: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.textMuted,
  },
  filterPillTextActive: {
    color: '#FFFFFF',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -12,
  },
  gridCard: {
    paddingHorizontal: 12,
    marginBottom: 24,
    position: 'relative',
    height: 380,
    borderRadius: 28,
    overflow: 'hidden',
  },
  gridCardDesktop: {
    width: '33.333%',
  },
  gridCardTablet: {
    width: '50%',
  },
  gridCardMobile: {
    width: '100%',
    height: 340,
  },
  gridCardHovered: {
    transform: [{ translateY: -4 }],
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 28,
  },
  cardOverlay: {
    position: 'absolute',
    inset: 0,
    borderRadius: 28,
    backgroundColor: 'rgba(18, 18, 18, 0.25)',
  },
  cardTopTag: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: theme.radii.full,
  },
  cardTopTagText: {
    fontFamily: theme.fonts.sans,
    fontSize: 10,
    fontWeight: '700',
    color: theme.colors.textDark,
    textTransform: 'uppercase',
  },
  cardBottomBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitleBlock: {
    backgroundColor: 'rgba(28, 27, 25, 0.82)',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: theme.radii.full,
  },
  cardTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  cardSubtitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 10,
    fontWeight: '500',
    color: '#D8D2C6',
  },
  cardArrowCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.textDark,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  }
});
