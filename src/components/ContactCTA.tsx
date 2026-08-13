import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Platform, useWindowDimensions } from 'react-native';
import { theme } from '../theme/colors';
import { MessageCircle, Mail, Phone, MapPin, ArrowRight } from 'lucide-react-native';

export const ContactCTA: React.FC = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 900;

  const openWhatsApp = () => {
    const text = encodeURIComponent('Olá Arquiteta Elena, gostaria de agendar uma reunião inicial para conversar sobre meu projeto.');
    const url = `https://wa.me/5511999998888?text=${text}`;
    if (Platform.OS === 'web') {
      window.open(url, '_blank');
    }
  };

  return (
    <View style={[styles.container, isMobile && { paddingVertical: 16 }]} id="contato">
      <View style={styles.inner}>
        
        <View style={[styles.darkCard, isMobile && styles.darkCardMobile]}>

          {/* Left Column Text & Contact Options */}
          <View style={[styles.leftCol, isMobile && styles.colMobile]}>
            
            <View style={styles.miniBadge}>
              <Text style={styles.miniBadgeText}>Agendamento & Atendimento</Text>
            </View>

            <Text style={styles.headline}>
              Engage with Us in Conversation.
            </Text>

            <Text style={styles.subtext}>
              Transforme a sua visão em uma experiência espacial extraordinária. Agende um encontro presencial em nosso estúdio ou uma videoconferência com a equipe de arquitetura.
            </Text>

            {/* Direct Contact Buttons */}
            <View style={styles.contactButtonsRow}>
              <Pressable 
                onPress={openWhatsApp}
                style={({ hovered }: any) => [
                  styles.primaryCta,
                  hovered && styles.primaryCtaHovered
                ]}
              >
                <MessageCircle size={18} color="#111111" style={{ marginRight: 8 }} />
                <Text style={styles.primaryCtaText}>Iniciar Conversa no WhatsApp</Text>
                <ArrowRight size={16} color="#111111" style={{ marginLeft: 6 }} />
              </Pressable>
            </View>

            {/* Info details */}
            <View style={styles.infoList}>
              <View style={styles.infoRow}>
                <Mail size={16} color="#B8976C" />
                <Text style={styles.infoText}>contato@elenarostova.com.br</Text>
              </View>
              <View style={styles.infoRow}>
                <Phone size={16} color="#B8976C" />
                <Text style={styles.infoText}>+55 (11) 99999-8888 / (11) 3040-5000</Text>
              </View>
              <View style={styles.infoRow}>
                <MapPin size={16} color="#B8976C" />
                <Text style={styles.infoText}>Av. Brigadeiro Faria Lima, 3477 - 14º Andar, São Paulo - SP</Text>
              </View>
            </View>

          </View>

          {/* Right Column Image matching Poliform contact box */}
          {!isMobile && (
            <View style={styles.rightCol}>
              <Image 
                source={require('../../assets/brera.png')}
                style={styles.contactImage}
                resizeMode="cover"
              />
            </View>
          )}

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
  darkCard: {
    flexDirection: 'row',
    backgroundColor: '#141312',
    borderRadius: 40,
    padding: 56,
    overflow: 'hidden',
  },
  darkCardMobile: {
    flexDirection: 'column',
    padding: 24,
    borderRadius: 28,
  },
  leftCol: {
    flex: 1.2,
    justifyContent: 'center',
  },
  rightCol: {
    flex: 0.9,
    height: 380,
    borderRadius: 28,
    overflow: 'hidden',
    marginLeft: 40,
  },
  colMobile: {
    width: '100%',
  },
  contactImage: {
    width: '100%',
    height: '100%',
  },
  miniBadge: {
    backgroundColor: 'rgba(184, 151, 108, 0.15)',
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: theme.radii.full,
    marginBottom: 20,
  },
  miniBadgeText: {
    fontFamily: theme.fonts.sans,
    fontSize: 11,
    fontWeight: '700',
    color: '#B8976C',
  },
  headline: {
    fontFamily: theme.fonts.sans,
    fontSize: 44,
    fontWeight: '800',
    color: '#FAF8F5',
    letterSpacing: -1.5,
    marginBottom: 16,
    lineHeight: 50,
  },
  subtext: {
    fontFamily: theme.fonts.sans,
    fontSize: 14,
    lineHeight: 22,
    color: '#A09C94',
    marginBottom: 32,
    maxWidth: 540,
  },
  contactButtonsRow: {
    marginBottom: 36,
  },
  primaryCta: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#FAF8F5',
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: theme.radii.full,
  },
  primaryCtaHovered: {
    backgroundColor: '#B8976C',
  },
  primaryCtaText: {
    fontFamily: theme.fonts.sans,
    fontSize: 14,
    fontWeight: '700',
    color: '#111111',
  },
  infoList: {
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoText: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    color: '#D8D2C6',
  }
});
