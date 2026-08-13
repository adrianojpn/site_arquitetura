import React from 'react';
import { View, Text, StyleSheet, Pressable, Platform, useWindowDimensions } from 'react-native';
import { theme } from '../theme/colors';
import { SERVICES, ServiceItem } from '../data/services';
import { Compass, Layout, ShieldCheck, Map, ArrowRight, Check } from 'lucide-react-native';

export const ServicesSection: React.FC = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const getIcon = (name: string) => {
    switch (name) {
      case 'compass': return Compass;
      case 'layout': return Layout;
      case 'shield-check': return ShieldCheck;
      case 'map': return Map;
      default: return Compass;
    }
  };

  const handleRequestService = (serviceTitle: string) => {
    const text = encodeURIComponent(`Olá Arquiteta Elena, gostaria de solicitar um orçamento e saber mais sobre o serviço: *${serviceTitle}*.`);
    const url = `https://wa.me/5511999998888?text=${text}`;
    if (Platform.OS === 'web') {
      window.open(url, '_blank');
    }
  };

  return (
    <View style={[styles.container, isMobile && { paddingVertical: 24 }]} id="servicos">
      <View style={styles.inner}>

        {/* Section Header */}
        <View style={[styles.headerBlock, isMobile && { marginBottom: 20 }]}>
          <View style={styles.tagPill}>
            <Text style={styles.tagPillText}>Serviços Exclusivos</Text>
          </View>
          <Text style={styles.sectionTitle}>Soluções Completas de Arquitetura</Text>
          <Text style={styles.sectionSubtitle}>
            Atuamos em todas as fases do projeto para garantir máxima qualidade estética e tranquilidade na execução.
          </Text>
        </View>

        {/* Services Cards Grid */}
        <View style={styles.cardsGrid}>
          {SERVICES.map((service) => {
            const IconComp = getIcon(service.iconName);
            return (
              <View 
                key={service.id} 
                style={[styles.serviceCard, isMobile ? styles.cardMobile : styles.cardDesktop]}
              >
                <View style={styles.cardHeaderRow}>
                  <View style={styles.iconCircle}>
                    <IconComp size={24} color={theme.colors.textDark} />
                  </View>
                  <Text style={styles.serviceIdText}>0{SERVICES.indexOf(service) + 1}</Text>
                </View>

                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceSubtitle}>{service.subtitle}</Text>
                <Text style={styles.serviceDesc}>{service.description}</Text>

                <View style={styles.deliverablesBox}>
                  <Text style={styles.deliverablesHeading}>O que está incluso:</Text>
                  {service.deliverables.map((item, idx) => (
                    <View key={idx} style={styles.deliverableRow}>
                      <Check size={14} color={theme.colors.accentGold} style={{ marginTop: 2 }} />
                      <Text style={styles.deliverableText}>{item}</Text>
                    </View>
                  ))}
                </View>

                <Pressable
                  onPress={() => handleRequestService(service.title)}
                  style={({ hovered }: any) => [
                    styles.cardCta,
                    hovered && styles.cardCtaHovered
                  ]}
                >
                  <Text style={styles.cardCtaText}>Solicitar Orçamento Deste Serviço</Text>
                  <ArrowRight size={16} color={theme.colors.textDark} style={{ marginLeft: 6 }} />
                </Pressable>
              </View>
            );
          })}
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.bgMain,
    paddingVertical: 72,
  },
  inner: {
    maxWidth: 1320,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  headerBlock: {
    alignItems: 'center',
    marginBottom: 48,
    textAlign: 'center',
  },
  tagPill: {
    backgroundColor: '#EFECE7',
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
  sectionTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 42,
    fontWeight: '800',
    color: theme.colors.textDark,
    letterSpacing: -1.5,
    marginBottom: 12,
  },
  sectionSubtitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 15,
    color: theme.colors.textMuted,
    maxWidth: 600,
    textAlign: 'center',
    lineHeight: 22,
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -12,
  },
  serviceCard: {
    paddingHorizontal: 12,
    marginBottom: 24,
    backgroundColor: '#EFECE7',
    borderRadius: 32,
    padding: 32,
    justifyContent: 'space-between',
  },
  cardDesktop: {
    width: '48%',
    marginHorizontal: '1%',
  },
  cardMobile: {
    width: '100%',
    padding: 20,
    marginBottom: 16,
    borderRadius: 24,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: theme.colors.bgMain,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceIdText: {
    fontFamily: theme.fonts.sans,
    fontSize: 24,
    fontWeight: '800',
    color: 'rgba(28, 27, 25, 0.2)',
  },
  serviceTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 24,
    fontWeight: '800',
    color: theme.colors.textDark,
    marginBottom: 4,
  },
  serviceSubtitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.accentGold,
    marginBottom: 14,
  },
  serviceDesc: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    lineHeight: 20,
    color: theme.colors.textMuted,
    marginBottom: 24,
  },
  deliverablesBox: {
    backgroundColor: theme.colors.bgMain,
    padding: 20,
    borderRadius: 20,
    marginBottom: 24,
  },
  deliverablesHeading: {
    fontFamily: theme.fonts.sans,
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.textDark,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  deliverableRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 6,
  },
  deliverableText: {
    fontFamily: theme.fonts.sans,
    fontSize: 12,
    color: theme.colors.textDark,
    flex: 1,
  },
  cardCta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: theme.radii.full,
    backgroundColor: theme.colors.bgMain,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
  },
  cardCtaHovered: {
    backgroundColor: theme.colors.textDark,
  },
  cardCtaText: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.textDark,
  }
});
