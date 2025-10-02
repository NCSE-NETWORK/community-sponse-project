import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NCSE Network - 賦能學生社群，共創技術未來',
    short_name: 'NCSE Network',
    description: 'NCSE Network 致力於為學生社團、技術社群以及非營利組織提供免費的雲端基礎設施服務',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/logo/logo_ncse_network.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
