import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Image, Pressable, ScrollView, Platform, useWindowDimensions } from 'react-native';
import { theme } from '../theme/colors';
import { Project } from '../data/projects';
import { X, MapPin, Maximize2, Calendar, MessageCircle, CheckCircle } from 'lucide-react-native';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  if (!project) return null;

  const activeImage = project.gallery[selectedImageIndex] || project.image;

  const handleWhatsAppQuote = () => {
    const message = encodeURIComponent(
      `Olá Arquiteta Elena, gostaria de mais informações e um orçamento inspirado no projeto: *${project.title} (${project.subtitle})* localizado em ${project.location}.`
    );
    const url = `https://wa.me/5511999998888?text=${message}`;
    if (Platform.OS === 'web') {
      window.open(url, '_blank');
    }
  };

  return (
    <Modal
      visible={!!project}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.modalCard, isMobile && styles.modalCardMobile]}>
          
          {/* Close Button */}
          <Pressable onPress={onClose} style={styles.closeButton}>
            <X size={20} color={theme.colors.textDark} />
          </Pressable>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            
            {/* Header metadata */}
            <View style={styles.headerBlock}>
              <View style={styles.categoryPill}>
                <Text style={styles.categoryPillText}>{project.category}</Text>
              </View>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectSubtitle}>{project.subtitle}</Text>
            </View>

            {/* Main Featured Image Display */}
            <View style={styles.mainImageContainer}>
              <Image source={activeImage} style={styles.mainImage} resizeMode="cover" />
            </View>

            {/* Thumbnail Gallery Row */}
            {project.gallery.length > 1 && (
              <View style={styles.thumbnailRow}>
                {project.gallery.map((img, idx) => (
                  <Pressable
                    key={idx}
                    onPress={() => setSelectedImageIndex(idx)}
                    style={[
                      styles.thumbBox,
                      selectedImageIndex === idx && styles.thumbBoxSelected
                    ]}
                  >
                    <Image source={img} style={styles.thumbImage} resizeMode="cover" />
                  </Pressable>
                ))}
              </View>
            )}

            {/* Specs Bar */}
            <View style={styles.specsBar}>
              <View style={styles.specItem}>
                <Maximize2 size={16} color={theme.colors.accentGold} />
                <Text style={styles.specText}>{project.area}</Text>
              </View>
              <View style={styles.specDivider} />
              <View style={styles.specItem}>
                <MapPin size={16} color={theme.colors.accentGold} />
                <Text style={styles.specText}>{project.location}</Text>
              </View>
              <View style={styles.specDivider} />
              <View style={styles.specItem}>
                <Calendar size={16} color={theme.colors.accentGold} />
                <Text style={styles.specText}>{project.year}</Text>
              </View>
            </View>

            {/* Description & Concept */}
            <View style={styles.sectionBlock}>
              <Text style={styles.sectionHeading}>Conceito & Solução Arquitetônica</Text>
              <Text style={styles.descriptionParagraph}>{project.description}</Text>
            </View>

            {/* Highlights */}
            <View style={styles.sectionBlock}>
              <Text style={styles.sectionHeading}>Destaques do Projeto</Text>
              {project.highlights.map((h, i) => (
                <View key={i} style={styles.highlightRow}>
                  <CheckCircle size={16} color={theme.colors.accentGold} style={{ marginTop: 2 }} />
                  <Text style={styles.highlightText}>{h}</Text>
                </View>
              ))}
            </View>

            {/* WhatsApp Quote Action Button */}
            <Pressable 
              onPress={handleWhatsAppQuote}
              style={({ hovered }: any) => [
                styles.quoteButton,
                hovered && styles.quoteButtonHovered
              ]}
            >
              <MessageCircle size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
              <Text style={styles.quoteButtonText}>Solicitar Orçamento para Projeto Semelhante</Text>
            </Pressable>

          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(18, 18, 18, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(8px)' } : {}),
  },
  modalCard: {
    width: '100%',
    maxWidth: 900,
    maxHeight: '90%',
    backgroundColor: '#F7F5F0',
    borderRadius: 32,
    padding: 32,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.2,
    shadowRadius: 32,
  },
  modalCardMobile: {
    padding: 20,
    maxHeight: '95%',
  },
  closeButton: {
    position: 'absolute',
    top: 24,
    right: 24,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EFECE7',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  headerBlock: {
    marginBottom: 20,
  },
  categoryPill: {
    backgroundColor: '#EFECE7',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: theme.radii.full,
    marginBottom: 10,
  },
  categoryPillText: {
    fontFamily: theme.fonts.sans,
    fontSize: 10,
    fontWeight: '700',
    color: theme.colors.textDark,
    textTransform: 'uppercase',
  },
  projectTitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 36,
    fontWeight: '800',
    color: theme.colors.textDark,
    letterSpacing: -1,
  },
  projectSubtitle: {
    fontFamily: theme.fonts.sans,
    fontSize: 16,
    color: theme.colors.textMuted,
    marginTop: 4,
  },
  mainImageContainer: {
    width: '100%',
    height: 380,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 16,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  thumbnailRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  thumbBox: {
    width: 80,
    height: 60,
    borderRadius: 12,
    overflow: 'hidden',
    opacity: 0.6,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  thumbBoxSelected: {
    opacity: 1,
    borderColor: theme.colors.textDark,
  },
  thumbImage: {
    width: '100%',
    height: '100%',
  },
  specsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#EFECE7',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginBottom: 28,
  },
  specItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  specText: {
    fontFamily: theme.fonts.sans,
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.textDark,
  },
  specDivider: {
    width: 1,
    height: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  sectionBlock: {
    marginBottom: 24,
  },
  sectionHeading: {
    fontFamily: theme.fonts.sans,
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.textDark,
    marginBottom: 10,
  },
  descriptionParagraph: {
    fontFamily: theme.fonts.sans,
    fontSize: 14,
    lineHeight: 22,
    color: theme.colors.textMuted,
  },
  highlightRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 8,
  },
  highlightText: {
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    color: theme.colors.textDark,
    flex: 1,
  },
  quoteButton: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.textDark,
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: theme.radii.full,
  },
  quoteButtonHovered: {
    backgroundColor: theme.colors.accentGold,
  },
  quoteButtonText: {
    fontFamily: theme.fonts.sans,
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  }
});
