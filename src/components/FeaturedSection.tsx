import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, useWindowDimensions } from 'react-native';
import { theme } from '../theme/colors';
import { ArrowUpRight } from 'lucide-react-native';

interface FeaturedProps {
  onSelectProject: (projectId: string) => void;
}

export const FeaturedSection: React.FC<FeaturedProps> = ({ onSelectProject }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 900;

  return (
    <View style={[styles.container, isMobile && { paddingVertical: 16 }]}>
      <View style={styles.inner}>
        
        {/* Layout Grid */}
        <View style={[styles.gridRow, isMobile && styles.gridRowMobile]}>

          {/* Left Column: Big Showcase Card */}
          <View style={[styles.leftCol, isMobile && styles.colMobile]}>
            <View style={styles.mainCard}>
              <Image 
                source={require('../../assets/featured.png')}
                style={styles.mainImage}
                resizeMode="cover"
              />
              
              {/* Notch Cutout Container on Bottom Left */}
              <View style={styles.notchBlock}>
                <View style={styles.pillBadgeOutline}>
                  <Text style={styles.pillBadgeOutlineText}>Georgeus Interior</Text>
                </View>
                <Text style={styles.notchTitle}>Modern</Text>
                <Text style={styles.notchTitle}>Minimalist</Text>
              </View>

              {/* Bottom Right Arrow Button */}
              <Pressable 
                onPress={() => onSelectProject('brera')}
                style={({ hovered }: any) => [
                  styles.bottomRightArrowCircle,
                  hovered && styles.arrowHovered
                ]}
              >
                <ArrowUpRight size={22} color="#FFFFFF" />
              </Pressable>
            </View>
          </View>

          {/* Right Column: Split Cards Stack */}
          <View style={[styles.rightCol, isMobile && styles.colMobile]}>

            {/* Top Text Card */}
            <View style={styles.topTextCard}>
              <View style={styles.miniTag}>
                <Text style={styles.miniTagText}>Estética & Função</Text>
              </View>
              <Text style={styles.topCardHeadline}>
                Uma galeria de elegância e harmonia residencial.
              </Text>
              <Text style={styles.topCardSubtext}>
                Projetos desenvolvidos para transcender tendências passageiras, focados no equilíbrio entre arquitetura, luz natural e materiais puros.
              </Text>
            </View>

            {/* Bottom Image Card with Action */}
            <Pressable 
              onPress={() => onSelectProject('brera')}
              style={({ hovered }: any) => [
                styles.bottomImageCard,
                hovered && styles.bottomImageCardHovered
              ]}
            >
              <Image 
                source={require('../../assets/brera.png')}
                style={styles.bottomImage}
                resizeMode="cover"
              />
              <View style={styles.bottomOverlay}>
                <View style={styles.bottomTag}>
                  <Text style={styles.bottomTagText}>Design de Interiores</Text>
                </View>
                <Text style={styles.bottomTitle}>
                  Explore a arte do cotidiano extraordinário
                </Text>
              </View>

              {/* Action Icon Button */}
              <View style={styles.arrowCircle}>
                <ArrowUpRight size={20} color="#FFFFFF" />
              </View>
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
    paddingVertical: 48,
  },
  inner: {
    maxWidth: 1320,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 24,
  },
  gridRowMobile: {
    flexDirection: 'column',
    gap: 16,
  },
  leftCol: {
    flex: 1.3,
  },
  rightCol: {
    flex: 1,
    flexDirection: 'column',
    gap: 24,
  },
  colMobile: {
    width: '100%',
  },
  mainCard: {
    position: 'relative',
    height: 480,
    borderRadius: 32,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 20,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  notchBlock: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: theme.colors.bgMain,
    borderTopRightRadius: 36,
    paddingTop: 24,
    paddingRight: 28,
    paddingBottom: 4,
    paddingLeft: 0,
    borderBottomLeftRadius: 32,
  },
  pillBadgeOutline: {
    borderWidth: 1.5,
    borderColor: theme.colors.textDark,
    borderRadius: theme.radii.full,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  pillBadgeOutlineText: {
    fontFamily: theme.fonts.sans,
    fontSize: 11,
    fontWeight: '600',
    color: theme.colors.textDark,
  },
  notchTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 52,
    fontWeight: '800',
    color: theme.colors.textDark,
    letterSpacing: -2,
    lineHeight: 52,
  },
  bottomRightArrowCircle: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.textDark,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  arrowHovered: {
    backgroundColor: theme.colors.accentGold,
    transform: [{ scale: 1.05 }],
  },
  topTextCard: {
    backgroundColor: '#EFECE7',
    padding: 32,
    borderRadius: 32,
    justifyContent: 'center',
  },
  miniTag: {
    backgroundColor: theme.colors.bgMain,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: theme.radii.full,
    marginBottom: 16,
  },
  miniTagText: {
    fontFamily: theme.fonts.sans,
    fontSize: 10,
    fontWeight: '700',
    color: theme.colors.textMuted,
    textTransform: 'uppercase',
  },
  topCardHeadline: {
    fontFamily: theme.fonts.sans,
    fontSize: 28,
    fontWeight: '700',
    color: theme.colors.textDark,
    letterSpacing: -0.5,
    marginBottom: 12,
    lineHeight: 34,
  },
  topCardSubtext: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    lineHeight: 20,
    color: theme.colors.textMuted,
  },
  bottomImageCard: {
    position: 'relative',
    height: 220,
    borderRadius: 32,
    overflow: 'hidden',
  },
  bottomImageCardHovered: {
    transform: [{ scale: 1.01 }],
  },
  bottomImage: {
    width: '100%',
    height: '100%',
  },
  bottomOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: 24,
    justifyContent: 'space-between',
  },
  bottomTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: theme.radii.full,
  },
  bottomTagText: {
    fontFamily: theme.fonts.sans,
    fontSize: 10,
    fontWeight: '700',
    color: theme.colors.textDark,
  },
  bottomTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    maxWidth: 240,
  },
  arrowCircle: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.textDark,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
