import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { theme } from '../theme/colors';
import { Award, Compass, Feather, Sparkles } from 'lucide-react-native';

export const AboutSection: React.FC = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 900;

  const pillars = [
    {
      icon: Compass,
      title: 'Arquitetura Sensorial',
      description: 'Projetos desenhados para despertar emoções através da luz natural, proporção harmônica e integração com a paisagem.'
    },
    {
      icon: Feather,
      title: 'Materialidade Pura',
      description: 'Seleção minuciosa de pedras naturais, madeiras certificadas e metais nobres com pátinas que envelhecem com beleza.'
    },
    {
      icon: Sparkles,
      title: 'Precisão Executiva',
      description: 'Detalhamento técnico milimétrico que elimina imprevistos na obra e garante fidelidade total à maquete conceitual.'
    }
  ];

  return (
    <View style={styles.container} id="sobre">
      <View style={styles.inner}>
        
        <View style={[styles.gridRow, isMobile && styles.gridRowMobile]}>
          
          {/* Left Column: Architect Photo */}
          <View style={[styles.photoCol, isMobile && styles.colMobile]}>
            <View style={styles.photoCard}>
              <Image 
                source={require('../../assets/portrait.png')}
                style={styles.portraitImage}
                resizeMode="cover"
              />
              <View style={styles.badgeOverlay}>
                <Award size={18} color="#FFFFFF" />
                <Text style={styles.badgeText}>Arquiteta Principal • CAU A-149.204</Text>
              </View>
            </View>
          </View>

          {/* Right Column: Biography & Pillars */}
          <View style={[styles.textCol, isMobile && styles.colMobile]}>
            <View style={styles.tagPill}>
              <Text style={styles.tagPillText}>Autoridade & Filosofia</Text>
            </View>

            <Text style={styles.headline}>
              "Criar arquitetura não é construir paredes; é desenhar a atmosfera onde a vida acontece."
            </Text>

            <Text style={styles.bioText}>
              Com mais de 15 anos de trajetória à frente do estúdio, Elena Rostova é reconhecida por seus projetos de residências de alto padrão e coberturas de luxo no Brasil e no exterior. Sua linguagem autoral combina minimalismo caloroso, rigor técnico e sensibilidade bioclimática.
            </Text>

            {/* Pillars */}
            <View style={styles.pillarsContainer}>
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <View key={idx} style={styles.pillarItem}>
                    <View style={styles.iconCircle}>
                      <IconComponent size={18} color={theme.colors.textDark} />
                    </View>
                    <View style={styles.pillarTextContent}>
                      <Text style={styles.pillarTitle}>{item.title}</Text>
                      <Text style={styles.pillarDesc}>{item.description}</Text>
                    </View>
                  </View>
                );
              })}
            </View>

          </View>

        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#EFECE7',
    paddingVertical: 72,
  },
  inner: {
    maxWidth: 1320,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  gridRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 48,
  },
  gridRowMobile: {
    flexDirection: 'column',
    gap: 32,
  },
  photoCol: {
    flex: 1,
  },
  textCol: {
    flex: 1.2,
  },
  colMobile: {
    width: '100%',
  },
  photoCard: {
    position: 'relative',
    height: 520,
    borderRadius: 36,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
  },
  portraitImage: {
    width: '100%',
    height: '100%',
  },
  badgeOverlay: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
    backgroundColor: 'rgba(28, 27, 25, 0.88)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: theme.radii.full,
  },
  badgeText: {
    fontFamily: theme.fonts.sans,
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  tagPill: {
    backgroundColor: theme.colors.bgMain,
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: theme.radii.full,
    marginBottom: 16,
  },
  tagPillText: {
    fontFamily: theme.fonts.sans,
    fontSize: 11,
    fontWeight: '700',
    color: theme.colors.textDark,
  },
  headline: {
    fontFamily: theme.fonts.sans,
    fontSize: 28,
    fontWeight: '700',
    color: theme.colors.textDark,
    letterSpacing: -0.5,
    marginBottom: 16,
    lineHeight: 36,
    fontStyle: 'italic',
  },
  bioText: {
    fontFamily: theme.fonts.sans,
    fontSize: 14,
    lineHeight: 22,
    color: theme.colors.textMuted,
    marginBottom: 32,
  },
  pillarsContainer: {
    gap: 20,
  },
  pillarItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.bgMain,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  pillarTextContent: {
    flex: 1,
  },
  pillarTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.textDark,
    marginBottom: 4,
  },
  pillarDesc: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    lineHeight: 18,
    color: theme.colors.textMuted,
  }
});
