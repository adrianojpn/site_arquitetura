import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === 'web') {
      const style = document.createElement('style');
      style.innerHTML = `
        html, body, #root {
          background-color: #F7F5F0;
          margin: 0;
          padding: 0;
          width: 100%;
          min-height: 100%;
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        * {
          box-sizing: border-box;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <>
      <StatusBar style="dark" backgroundColor="#F7F5F0" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
