import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { theme } from '../theme/colors';

export const StatsSection: React.FC = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const stats = [
    { number: '150+', label: 'Conceitos Autorais' },
    { number: '25+', label: 'Projetos de Luxo' },
    { number: '98%', label: 'Clientes Plenamente Satisfeitos' },
    { number: '1º', label: 'Lugar Prêmio de Arquitetura 2025' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={[styles.statsRow, isMobile && styles.statsRowMobile]}>
          {stats.map((item, index) => (
            <View key={index} style={[styles.statBox, isMobile && styles.statBoxMobile]}>
              <Text style={styles.numberText}>{item.number}</Text>
              <Text style={styles.labelText}>{item.label}</Text>
            </View>
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
    paddingVertical: 40,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(216, 210, 198, 0.5)',
  },
  inner: {
    maxWidth: 1320,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statsRowMobile: {
    flexDirection: 'column',
    gap: 32,
  },
  statBox: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  statBoxMobile: {
    width: '100%',
  },
  numberText: {
    fontFamily: theme.fonts.sans,
    fontSize: 56,
    fontWeight: '800',
    color: theme.colors.textDark,
    letterSpacing: -2,
    lineHeight: 60,
  },
  labelText: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.textMuted,
    marginTop: 8,
    textAlign: 'center',
  }
});
