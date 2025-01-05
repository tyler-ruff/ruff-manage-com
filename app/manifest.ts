import { config } from '@/config/app';
import type { MetadataRoute } from 'next';
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: config.name,
    short_name: 'RMI',
    description: config.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: "/icons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: '/icons/ms-icon-310x310.png',
        sizes: '310x310',
        type: 'image/png',
        purpose: "maskable"
      }
    ],
  }
}