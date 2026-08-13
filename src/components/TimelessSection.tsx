import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, useWindowDimensions } from 'react-native';
import { theme } from '../theme/colors';
import { ArrowRight } from 'lucide-react-native';

interface TimelessProps {
  onLearnMore: () => void;
}

export const TimelessSection: React.FC<TimelessProps> = ({ onLearnMore }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 900;

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={[styles.cardContainer, isMobile && styles.cardContainerMobile]}>

          {/* Left Column: Image */}
          <View style={[styles.imageWrapper, isMobile && styles.colMobile]}>
            <Image 
              source={require('../../assets/artex.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          {/* Right Column: Content */}
          <View style={[styles.contentWrapper, isMobile && styles.colMobile]}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Elegância • Atemporal</Text>
            </View>

            <Text style={styles.headline}>
              Estilo Moderno & Charme Atemporal
            </Text>

            <Text style={styles.paragraph}>
              Cada linha desenhada e cada elemento selecionado busca ultrapassar o efêmero. Desenvolvemos ambientes onde a sofisticação da arquitetura conversa naturalmente com o aconchego diário da vida familiar.
            </Text>

            <Pressable 
              onPress={onLearnMore}
              style={({ hovered }: any) => [
                styles.button,
                hovered && styles.buttonHovered
              ]}
            >
              <Text style={styles.buttonText}>Conhecer Filosofia</Text>
              <ArrowRight size={16} color="#FFFFFF" style={{ marginLeft: 8 }} />
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
    paddingVertical: 56,
  },
  inner: {
    maxWidth: 1320,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#EFECE7',
    borderRadius: 36,
    overflow: 'hidden',
  },
  cardContainerMobile: {
    flexDirection: 'column',
  },
  imageWrapper: {
    flex: 1.2,
    height: 480,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentWrapper: {
    flex: 1,
    padding: 48,
    justifyContent: 'center',
  },
  colMobile: {
    width: '100%',
    height: 'auto',
  },
  badge: {
    backgroundColor: theme.colors.bgMain,
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: theme.radii.full,
    marginBottom: 24,
  },
  badgeText: {
    fontFamily: theme.fonts.sans,
    fontSize: 11,
    fontWeight: '700',
    color: theme.colors.textDark,
  },
  headline: {
    fontFamily: theme.fonts.sans,
    fontSize: 42,
    fontWeight: '800',
    color: theme.colors.textDark,
    letterSpacing: -1.5,
    marginBottom: 20,
    lineHeight: 48,
  },
  paragraph: {
    fontFamily: theme.fonts.sans,
    fontSize: 14,
    lineHeight: 22,
    color: theme.colors.textMuted,
    marginBottom: 32,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.textDark,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: theme.radii.full,
  },
  buttonHovered: {
    backgroundColor: theme.colors.accentGold,
  },
  buttonText: {
    fontFamily: theme.fonts.sans,
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  }
});
