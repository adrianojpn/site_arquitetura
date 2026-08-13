import React from 'react';
import { View, Text, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import { theme } from '../theme/colors';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={[styles.container, isMobile && { paddingTop: 32, paddingBottom: 20 }]}>
      <View style={styles.inner}>

        {/* Links Grid */}
        <View style={[styles.linksGrid, isMobile && styles.linksGridMobile]}>

          {/* Col 1: Sobre */}
          <View style={styles.col}>
            <Text style={styles.colTitle}>Escritório</Text>
            <Pressable onPress={() => onNavigate('sobre')} style={styles.linkItem}>
              <Text style={styles.linkText}>Nossa História</Text>
            </Pressable>
            <Pressable onPress={() => onNavigate('sobre')} style={styles.linkTextItem}>
              <Text style={styles.linkText}>Filosofia de Projeto</Text>
            </Pressable>
            <Pressable onPress={() => onNavigate('sobre')} style={styles.linkTextItem}>
              <Text style={styles.linkText}>Arquitetura Bioclimática</Text>
            </Pressable>
            <Pressable onPress={() => onNavigate('contato')} style={styles.linkTextItem}>
              <Text style={styles.linkText}>Carreiras & Estágio</Text>
            </Pressable>
            <Pressable onPress={() => onNavigate('contato')} style={styles.linkTextItem}>
              <Text style={styles.linkText}>Contato & Estúdio</Text>
            </Pressable>
          </View>

          {/* Col 2: Serviços & Atendimento */}
          <View style={styles.col}>
            <Text style={styles.colTitle}>Serviços</Text>
            <Pressable onPress={() => onNavigate('servicos')} style={styles.linkTextItem}>
              <Text style={styles.linkText}>Projetos Arquitetônicos</Text>
            </Pressable>
            <Pressable onPress={() => onNavigate('servicos')} style={styles.linkTextItem}>
              <Text style={styles.linkText}>Design de Interiores</Text>
            </Pressable>
            <Pressable onPress={() => onNavigate('servicos')} style={styles.linkTextItem}>
              <Text style={styles.linkText}>Gestão Executiva de Obra</Text>
            </Pressable>
            <Pressable onPress={() => onNavigate('servicos')} style={styles.linkTextItem}>
              <Text style={styles.linkText}>Consultoria & Masterplan</Text>
            </Pressable>
            <Pressable onPress={() => onNavigate('projetos')} style={styles.linkTextItem}>
              <Text style={styles.linkText}>Termos de Privacidade</Text>
            </Pressable>
          </View>

          {/* Col 3: Redes Sociais */}
          <View style={styles.col}>
            <Text style={styles.colTitle}>Redes Sociais</Text>
            <View style={styles.linkTextItem}>
              <Text style={styles.linkText}>Instagram (@elenarostova.arq)</Text>
            </View>
            <View style={styles.linkTextItem}>
              <Text style={styles.linkText}>Pinterest Portfolio</Text>
            </View>
            <View style={styles.linkTextItem}>
              <Text style={styles.linkText}>LinkedIn Professional</Text>
            </View>
            <View style={styles.linkTextItem}>
              <Text style={styles.linkText}>ArchDaily Press</Text>
            </View>
          </View>

          {/* Col 4: Logo Brand matching Poliform bottom right */}
          <View style={[styles.col, styles.brandCol]}>
            <Text style={styles.brandLogoTitle}>Elena Rostova</Text>
            <Text style={styles.brandLogoSub}>ARQUITETURA DE LUXO</Text>
          </View>

        </View>

        {/* Bottom Rights Bar */}
        <View style={styles.bottomBar}>
          <Text style={styles.copyrightText}>
            © 2026 Elena Rostova Arquitetura & Interiores. Todos os direitos reservados.
          </Text>
          <Text style={styles.subCopyright}>
            Projeto desenvolvido com React Native Expo Web para adrianoajpns-team.
          </Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#0D0D0D',
    paddingTop: 64,
    paddingBottom: 32,
  },
  inner: {
    maxWidth: 1320,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  linksGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 48,
  },
  linksGridMobile: {
    flexDirection: 'column',
    gap: 20,
    marginBottom: 24,
  },
  col: {
    flex: 1,
  },
  brandCol: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  colTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 12,
    fontWeight: '700',
    color: '#8A867E',
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  linkItem: {
    marginBottom: 10,
  },
  linkTextItem: {
    marginBottom: 10,
  },
  linkText: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    color: '#D4CFC7',
  },
  brandLogoTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -1,
  },
  brandLogoSub: {
    fontFamily: theme.fonts.sans,
    fontSize: 9,
    fontWeight: '700',
    color: '#B8976C',
    letterSpacing: 3,
    marginTop: 4,
  },
  bottomBar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
    paddingTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  copyrightText: {
    fontFamily: theme.fonts.sans,
    fontSize: 12,
    color: '#706D67',
  },
  subCopyright: {
    fontFamily: theme.fonts.sans,
    fontSize: 11,
    color: '#524F4A',
  }
});
