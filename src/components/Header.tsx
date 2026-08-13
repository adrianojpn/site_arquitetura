import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Platform, useWindowDimensions } from 'react-native';
import { theme } from '../theme/colors';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react-native';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Projetos', id: 'projetos' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Contato', id: 'contato' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('Olá Arquiteta Elena Rostova, gostaria de agendar uma reunião ou solicitar um orçamento para o meu projeto.');
    const url = `https://wa.me/5511999998888?text=${text}`;
    if (Platform.OS === 'web') {
      window.open(url, '_blank');
    }
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerInner}>
        {/* Brand Logo */}
        <Pressable onPress={() => handleNavClick('hero')} style={styles.logoContainer}>
          <Text style={styles.logoTitle}>Elena Rostova</Text>
          <Text style={styles.logoSubtitle}>ARQUITETURA & INTERIORES</Text>
        </Pressable>

        {/* Desktop Navigation */}
        {!isMobile && (
          <View style={styles.desktopNav}>
            {navItems.map((item) => (
              <Pressable 
                key={item.id} 
                onPress={() => handleNavClick(item.id)}
                style={({ hovered }: any) => [
                  styles.navItem,
                  hovered && styles.navItemHovered
                ]}
              >
                <Text style={styles.navItemText}>{item.label}</Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* WhatsApp CTA */}
        {!isMobile && (
          <Pressable 
            onPress={openWhatsApp}
            style={({ hovered }: any) => [
              styles.ctaButton,
              hovered && styles.ctaButtonHovered
            ]}
          >
            <MessageCircle size={16} color="#FFFFFF" style={{ marginRight: 6 }} />
            <Text style={styles.ctaText}>Falar no WhatsApp</Text>
            <ArrowUpRight size={14} color="#FFFFFF" style={{ marginLeft: 4 }} />
          </Pressable>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Pressable onPress={() => setMobileMenuOpen(!mobileMenuOpen)} style={styles.mobileMenuToggle}>
            {mobileMenuOpen ? <X size={24} color={theme.colors.textDark} /> : <Menu size={24} color={theme.colors.textDark} />}
          </Pressable>
        )}
      </View>

      {/* Mobile Drawer */}
      {isMobile && mobileMenuOpen && (
        <View style={styles.mobileDrawer}>
          {navItems.map((item) => (
            <Pressable key={item.id} onPress={() => handleNavClick(item.id)} style={styles.mobileNavItem}>
              <Text style={styles.mobileNavText}>{item.label}</Text>
            </Pressable>
          ))}
          <Pressable onPress={openWhatsApp} style={styles.mobileCtaButton}>
            <MessageCircle size={18} color="#FFFFFF" style={{ marginRight: 8 }} />
            <Text style={styles.ctaText}>Solicitar Orçamento via WhatsApp</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: 'rgba(247, 245, 240, 0.95)',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderLight,
    position: Platform.OS === 'web' ? ('sticky' as any) : 'relative',
    top: 0,
    zIndex: 100,
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(12px)' } : {}),
  },
  headerInner: {
    maxWidth: 1320,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  logoContainer: {
    flexDirection: 'column',
  },
  logoTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 22,
    fontWeight: '800',
    color: theme.colors.textDark,
    letterSpacing: -0.5,
  },
  logoSubtitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 9,
    fontWeight: '600',
    color: theme.colors.textMuted,
    letterSpacing: 2,
    marginTop: 2,
  },
  desktopNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
  },
  navItem: {
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  navItemHovered: {
    opacity: 0.7,
  },
  navItemText: {
    fontFamily: theme.fonts.sans,
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.textDark,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.textDark,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: theme.radii.full,
    transitionDuration: '0.2s',
  },
  ctaButtonHovered: {
    backgroundColor: theme.colors.accentDark,
    transform: [{ translateY: -1 }],
  },
  ctaText: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  mobileMenuToggle: {
    padding: 8,
  },
  mobileDrawer: {
    backgroundColor: theme.colors.bgMain,
    paddingHorizontal: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderLight,
  },
  mobileNavItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  mobileNavText: {
    fontFamily: theme.fonts.sans,
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.textDark,
  },
  mobileCtaButton: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.textDark,
    paddingVertical: 14,
    borderRadius: theme.radii.full,
  }
});
